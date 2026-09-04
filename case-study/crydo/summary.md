# Crydo — Summary

## One-sentence description

Crydo is a live crypto market observatory that combines deterministic scoring, real CoinGecko data, and a responsive Three.js/WebGL interface for Bitcoin, Ethereum, and Solana.

## ~50-word summary

Crydo is a portfolio-grade market-intelligence product built around a “market observatory” concept. It turns BTC, ETH, and SOL into explorable celestial bodies, then connects each asset to a deterministic Crydo Signal and a structured analytical report using real CoinGecko data, responsive UI, and a focused WebGL layer.

## ~100-word summary

Crydo is a personal product and portfolio piece that explores whether crypto market information can be presented with stronger spatial identity without losing analytical clarity. The application uses a route-scoped Three.js/WebGL observatory for exploration, server-side CoinGecko integration for live market data, and a deterministic 0–100 Crydo Signal built from momentum, trend, volume, and volatility. BTC, ETH, and SOL each use distinct geological material logic rather than a single recolored shader. The product is responsive from mobile to ultrawide, includes reduced-motion and WebGL fallback behavior, and keeps analytical content accessible in the DOM instead of hiding it inside the canvas.

## Role

Product design, visual direction, frontend engineering, WebGL rendering, data integration, and production deployment.

## Stack

- Next.js 16.3.1
- React 19.2.8
- TypeScript 5
- Three.js 0.185.1
- WebGL / GLSL
- CSS
- Vitest 4.1.11
- CoinGecko API
- Vercel

## Production URL

https://www.crydo.fr

## Highlights

- Live BTC, ETH, and SOL market data with EUR, USD, and GBP support
- Deterministic Crydo Signal with explainable factor breakdown
- Interactive Three.js/WebGL market observatory
- Asset-specific geological rendering for BTC, ETH, and SOL
- Explicit fallback paths for provider failure, reduced motion, and unavailable WebGL
