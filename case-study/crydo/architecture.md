# Crydo — Architecture

## Data architecture

```mermaid
flowchart TD
    CG[CoinGecko /coins/markets]
    CLIENT[src/data/coingecko/client.ts]
    ADAPTER[src/data/coingecko/adapter.ts]
    DOMAIN[src/domain/market-metrics.ts]
    SCORE[src/domain/scoring/calculate-score.ts]
    DATA[src/data/assets.ts]
    VM[Typed asset data]
    OBS[Observatory UI]
    DETAIL[Asset detail UI]

    CG --> CLIENT
    CLIENT --> ADAPTER
    ADAPTER --> DOMAIN
    DOMAIN --> SCORE
    SCORE --> DATA
    DATA --> VM
    VM --> OBS
    VM --> DETAIL
```

Notes:

- CoinGecko requests are grouped across BTC, ETH, and SOL.
- Validation happens before domain calculations.
- Scoring is deterministic and bounded.
- UI receives typed asset data rather than raw provider payloads.

## Visual architecture

```mermaid
flowchart TD
    NEXT[Next.js App Router]
    DOM[DOM / React analytical UI]
    OBSLAB[observatory-lab.tsx]
    OBSSCENE[observatory-scene.ts]
    MATERIALS[observatory-materials.ts + asset materials]
    DETAILCLIENT[detail-planet.tsx]
    DETAILSCENE[detail-planet-scene.ts]
    FRAMING[detail-planet-framing.ts]

    NEXT --> DOM
    NEXT --> OBSLAB
    OBSLAB --> OBSSCENE
    OBSSCENE --> MATERIALS
    NEXT --> DETAILCLIENT
    DETAILCLIENT --> DETAILSCENE
    DETAILSCENE --> MATERIALS
    DETAILSCENE --> FRAMING
```

Notes:

- WebGL is a focused visualization layer, not the whole application.
- DOM/React remains responsible for analytics, navigation, and content structure.
- Detail pages reuse the shared material system through a dedicated Three.js scene.

## Product systems overview

```mermaid
flowchart LR
    O[Observatory]
    S[Crydo Signal]
    R[Reports]
    F[Fallbacks]

    O --> S
    O --> R
    S --> R
    F --> O
    F --> R
```

Notes:

- The observatory handles exploration and selection.
- The Crydo Signal translates raw market metrics into a bounded reading.
- Reports expand the selected asset into an editorial analytical mode.
- Fallback systems protect usability when data or WebGL fail.
