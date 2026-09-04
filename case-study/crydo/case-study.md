# Crydo

Market Observatory

Live URL: https://www.crydo.fr

Role: Product design, visual direction, frontend engineering, WebGL rendering, data integration, and production deployment.

## 01 — Overview

Crydo is a portfolio-grade crypto market-intelligence product built around a simple idea: market analysis does not have to look like a generic dashboard. I designed Crydo as a market observatory where Bitcoin, Ethereum, and Solana are treated as explorable celestial bodies, then connected each body to a deterministic analytical report.

It is not a trading platform, a wallet, an exchange, or a prediction engine. It is an interface experiment grounded in real market data, explainable scoring, and a strong visual system.

## 02 — The idea

Most crypto products flatten everything into tables, cards, and charts. That works, but it also makes very different assets feel visually interchangeable. Crydo tests another direction: keep the analytical layer legible, but give each asset a spatial identity and a more memorable interaction model.

The “observatory” metaphor is a product decision, not decorative branding. It creates a clear relationship between exploration, target selection, focused analysis, and return-to-field navigation.

## 03 — The problem

Crypto interfaces often overload users with dense financial UI while offering little editorial hierarchy. The challenge here was to create something visually distinctive without hiding the actual market information or drifting into spectacle for its own sake.

The product had to satisfy both sides:

- a strong visual identity
- real data and explainable calculations
- responsive interaction from mobile to large desktop
- explicit failure states when data or WebGL are unavailable

## 04 — Product principles

I used a few rules throughout the build:

- Planet first, crypto identity second. The bodies should read as celestial objects before they read as logos.
- Data stays readable. The visual system supports the market layer; it does not replace it.
- The Crydo Signal must be deterministic and explainable.
- WebGL is additive, not mandatory. Analytical content remains available in the DOM.
- Mobile is a first-class experience, not a reduced desktop port.
- Failure states should be explicit. No silent production mock data, no hidden provider errors.

## 05 — Observatory

The main experience is a route-scoped Three.js observatory. The user can drag the scene, select BTC, ETH, or SOL, read live market context, and open a full analysis for the selected body. The observatory is lazy-loaded after a client-side WebGL capability check, which keeps the application shell and analytical content in React/Next.js while reserving WebGL for the visual layer.

That split was important. It kept the scene immersive, but avoided turning the whole app into a canvas-driven interface.

## 06 — Planet system

Each supported asset has its own geological identity.

BTC is the most volcanic and basaltic of the three, with restrained copper mineral accents and a heavier impact-crust feel.

ETH is colder and more fractured, with a more crystalline, steel-blue mineral character.

SOL is the most unusual body, with warped structure and restrained spectral violet cues.

These are not three colors applied to the same shader. Each material family uses different shape and surface logic, which made the product feel materially richer than a single shared planet treatment.

## 07 — Crydo Signal

Crydo includes a deterministic 0–100 market reading called the Crydo Signal. It is built from four factor families:

- Momentum
- Trend
- Volume
- Volatility

Each factor is normalized into the same range, weighted, then combined into a final bounded score. The visible factor contribution is expressed as the weighted distance from a neutral midpoint rather than as an opaque model output.

That was a deliberate product choice. I did not want a pseudo-intelligent score with unverifiable claims. Crydo’s signal is explainable, repeatable, and testable. It describes the current dataset; it does not pretend to predict future market behavior.

## 08 — Data architecture

The production data flow is intentionally narrow:

CoinGecko → server provider → validation adapter → domain model → derived metrics → Crydo Signal → typed view models → Observatory and analysis UI.

The CoinGecko API key stays server-side. The provider request is grouped for BTC, ETH, and SOL, cached for ten minutes, guarded by a timeout, and validated before any domain calculations run. If the provider fails or returns invalid data, the UI shows an explicit unavailable state rather than plausible fake values.

That architecture kept the product honest and easier to reason about.

## 09 — Responsive design and performance

Crydo does not simply scale a desktop layout down. Both the DOM composition and the WebGL composition respond to viewport width, height, and aspect ratio. The observatory camera, planet spread, and quality tiering all adapt across mobile, laptop, desktop, and ultrawide cases.

On the rendering side, I kept the performance strategy pragmatic:

- lazy-loaded Three.js
- desktop and mobile quality tiers
- DPR caps
- limited scene complexity
- no heavy post-processing
- visibility-aware animation pause
- explicit disposal of renderer, materials, geometry, listeners, and observers

I avoided performance claims I could not prove, and focused instead on concrete architectural decisions visible in the source.

## 10 — Accessibility and resilience

Crydo is visually ambitious, but it is not canvas-only. Core analytical content remains semantic HTML. The interface includes visible focus states, keyboard-accessible controls, reduced-motion handling, and a WebGL fallback path.

The data layer follows the same principle. Provider failure is surfaced explicitly. Unsupported or invalid routes resolve cleanly. The product does not silently swap live data for demo data in production.

I would describe the accessibility work as intentional and practical, not as a completed WCAG certification effort.

## 11 — Technical challenges

The hardest part of the project was planet rendering.

Early iterations looked synthetic: too low-poly, too glossy, too emissive, or too “noise for the sake of noise.” The bodies had detail, but not believable geological coherence. Adding more decorative noise did not fix that.

The breakthrough came from changing the architecture of the planet pipeline rather than chasing cosmetic tweaks. I moved toward a coherent terrain approach built around:

- displacement-driven form
- reconstructed normals
- terrain-derived material regions
- roughness and specular variation tied to surface logic
- directional lighting calibrated for a more geological read

I also studied proven open-source procedural planet techniques and adapted license-compatible ideas where appropriate. The final result feels more like a single material system with internal logic, and less like a sphere covered in unrelated visual tricks.

That shift mattered more than any one shader flourish.

## 12 — Final product

The shipped product is live at https://www.crydo.fr.

It supports:

- BTC, ETH, and SOL
- EUR, USD, and GBP
- real CoinGecko market data
- a deterministic Crydo Signal
- an interactive Three.js/WebGL observatory
- responsive analysis pages
- explicit provider and WebGL fallback states

The result is not a generic crypto dashboard and not a speculative concept render. It is a functioning product with a clear point of view, real data, and production deployment.

## 13 — What I learned

The biggest lesson was that distinctive visual products still need strong systems underneath them. The visual metaphor only worked because the data pipeline, scoring logic, rendering lifecycle, and responsive behavior were made explicit and testable.

If I continued the project, I would look at two areas next:

- deeper historical calibration for the scoring thresholds
- broader asset coverage without diluting the observatory model

I would not start by adding more features. I would start by protecting the clarity of the system that already works.

## Key design decisions

1. Build an observatory instead of another dashboard.
2. Use a deterministic signal instead of an opaque “AI” layer.
3. Give each asset its own geological/material identity.
4. Keep analytical content in the DOM and WebGL in a focused visualization role.
5. Make responsive composition a camera/layout problem, not just a CSS scaling problem.
6. Treat fallback and failure states as part of the product, not as edge cases.
