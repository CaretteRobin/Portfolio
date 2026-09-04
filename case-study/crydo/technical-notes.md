# Crydo — Technical Notes

These notes intentionally go deeper than the main case study and map claims back to the current implementation in `~/dev/crydo`.

## Stack and runtime

- `package.json`
  - Next.js `16.3.1`
  - React `19.2.8`
  - React DOM `19.2.8`
  - Three.js `^0.185.1`
  - TypeScript `^5`
  - Vitest `^4.1.11`
- Scripts:
  - `npm run lint`
  - `npm run typecheck`
  - `npm test`
  - `npm run build`

## Data pipeline

Primary files:

- `src/data/assets.ts`
- `src/data/coingecko/client.ts`
- `src/data/coingecko/adapter.ts`
- `src/domain/market-metrics.ts`
- `src/domain/scoring/calculate-score.ts`

Observed flow:

1. `getAssets(currency)` resolves data mode in `src/data/assets.ts`.
2. In provider mode it requires `COINGECKO_API_KEY` server-side and calls `requestCoinGeckoMarkets`.
3. `requestCoinGeckoMarkets` issues a grouped `/api/v3/coins/markets` request for BTC, ETH, and SOL with:
   - one supported currency at a time (`eur`, `usd`, `gbp`)
   - `sparkline=true`
   - `precision=full`
   - request timeout via `AbortSignal.timeout(5000)`
   - Next cache revalidation of `600` seconds
4. `adaptCoinGeckoMarkets` validates payload structure, symbols, timestamps, sparkline history, and required configured assets.
5. Derived metrics are calculated from reconstructed history points.
6. The domain scoring layer produces the Crydo Signal.
7. Resulting typed asset data is rendered in the Observatory and asset detail UI.

## CoinGecko behavior

Verified in source/tests:

- server-only key handling via `import "server-only"` in `src/data/assets.ts`
- explicit provider errors for missing key, timeout, HTTP error, rate limiting, invalid JSON, invalid data, insufficient history, and missing configured asset
- production does not silently swap to mock mode unless mock mode is explicitly configured
- provider attribution in the UI: `Powered by CoinGecko`

## Crydo Signal

Primary files:

- `src/domain/scoring/calculate-score.ts`
- `src/domain/scoring/constants.ts`
- `src/domain/scoring/scoring.test.ts`
- `src/domain/scoring/explain-score.test.ts`

Verified properties:

- bounded 0–100 output
- deterministic result for identical input
- factor families:
  - Momentum
  - Trend
  - Volume
  - Volatility
- weights:
  - Momentum `35%`
  - Trend `25%`
  - Volume `20%`
  - Volatility `20%`
- visible factor contribution = `(factor score - 50) × weight`
- qualitative labels:
  - Lecture très faible
  - Lecture faible
  - Lecture équilibrée
  - Lecture soutenue
  - Lecture très soutenue

Currency invariance is covered in `src/domain/scoring/scoring.test.ts` by checking that equivalent market-cap/volume scaling across currencies does not change the score.

## Observatory / Three.js lifecycle

Primary files:

- `src/components/visual/market-observatory/observatory-lab.tsx`
- `src/components/visual/market-observatory/observatory-scene.ts`
- `src/components/visual/market-observatory/observatory-materials.ts`

Implementation notes:

- React owns route state and lazy-loading boundaries.
- Three.js is loaded only after a runtime WebGL capability probe.
- Scene lifecycle includes:
  - pointer interaction binding
  - resize observation
  - visibility handling
  - animation frame lifecycle
  - renderer/material/geometry cleanup on unmount
- The observatory scene is direct Three.js rather than react-three-fiber.

Rendering architecture visible in source:

- planet meshes
- atmosphere shells
- layered starfields
- galactic haze plane
- distant market bodies via `InstancedMesh`
- custom shaders/material logic per asset

Notable practical constraints:

- no heavy post-processing pipeline
- no shadow map dependency
- mobile and desktop quality tiers
- DPR capped at `1.25` mobile and `1.5` desktop in the Observatory

## Detail planet reuse

Primary files:

- `src/components/asset-detail/detail-planet.tsx`
- `src/components/asset-detail/detail-planet-scene.ts`
- `src/components/asset-detail/detail-planet-framing.ts`

Important current-source note:

The asset detail page does reuse Three.js for the hero planet through a dedicated client-side detail scene. The analytical content itself remains DOM/React.

The detail framing helper uses a fit-by-construction camera model based on:

- base radius
- asset-specific terrain displacement allowance
- atmosphere allowance
- viewport width/height/aspect
- camera field of view
- composition offsets and clearance

Coverage exists in `src/components/asset-detail/detail-planet-framing.test.ts`.

## Rendering / material system

Primary files:

- `src/components/visual/market-observatory/observatory-materials.ts`
- `src/components/visual/market-observatory/btc-planet-material.ts`
- `src/components/visual/market-observatory/eth-planet-material.ts`
- `src/components/visual/market-observatory/sol-planet-material.ts`
- `THIRD_PARTY_NOTICES.md`

Key architectural point:

The final rendering success came from making terrain, normals, material zoning, and lighting coherent with each other. The code shows:

- asset-specific displacement logic
- crater profiles
- geological exposure masks
- terrain-derived color/material behavior
- finite-difference or shader-side normal perturbation/reconstruction
- roughness and emissive behavior tied to surface logic rather than generic glow

This is the main technical story behind the final planet credibility.

## Responsive composition

Primary files:

- `src/components/visual/market-observatory/observatory-scene.ts`
- `src/components/asset-detail/detail-planet-framing.ts`
- `src/app/styles/responsive.css`

Observed strategy:

- observatory field composition resolves from width, height, and aspect ratio
- planet spread and camera profile vary by viewport class
- detail hero planet uses dedicated camera-fit math
- mobile is not treated as a pure CSS shrink of desktop

## Accessibility and resilience

Primary files:

- `src/components/currency/currency-switcher.tsx`
- `src/components/theme/asset-accent.ts`
- `src/components/visual/market-observatory/observatory-lab.tsx`
- `src/app/not-found.tsx`
- `src/app/asset/[id]/page.tsx`

Verified patterns:

- semantic links/buttons for primary UI controls
- visible focus styling
- reduced-motion handling in scene animation
- no-JS fallback links for analysis access
- explicit unavailable state when provider data cannot be loaded
- WebGL capability check with fallback

Not claimed:

- formal WCAG certification
- complete automated accessibility coverage across all states

## Testing

Current verified suite:

- 13 test files
- 86 passing tests

Representative coverage:

- scoring math and invariants
- market-metric derivation
- currency routing and switcher behavior
- asset accent state logic
- observatory view-model behavior
- CoinGecko request/configuration behavior
- CoinGecko data validation and adaptation
- detail-planet framing fit

## Deployment

Observed production target:

- public deployment at `https://www.crydo.fr`
- server-side CoinGecko integration
- public metadata/social assets
- production route gating for `/dev/*`
- Vercel deployment model

The case study deliberately avoids discussing DNS, branch strategy, or operational setup beyond what is directly visible in the current shipped product and repository.
