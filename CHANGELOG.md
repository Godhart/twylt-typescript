# Changelog

## 0.2.3

- Fixed Ajv/ajv-formats compile-time interoperability under TypeScript `NodeNext`, including Node.js 20 environments.
- Added an explicit typed module-shape normalization adapter (`default ?? module`) instead of relying on TypeScript's CJS/ESM inference.
- Kept the public API and TWYLT protocol behavior unchanged.
- Added ADR-005.

## 0.2.2

- Fixed Ajv 8 / `ajv-formats` TypeScript compilation under ESM + `NodeNext`.
- Removed the `createRequire()` workaround introduced in 0.2.1.
- Use the packages' declared default exports directly.
- Added ADR-004 documenting the correction and the requirement that release validation include a clean TypeScript build.

## 0.2.1

- Fix Ajv and ajv-formats loading/type checking under TypeScript `NodeNext` by using Node's `createRequire()` CJS bridge with retained package types.
- Fix TS2862 in schema identity decoration by separating the generic schema value from its mutable record view.
- Keep Node.js 20+ as the runtime baseline and TWYLT 1.8 behavior unchanged.


## 0.2.0

- Fixed the package build layout: `src/index.ts` now compiles to `dist/index.js`, matching `main`, `types`, and `exports` in `package.json`.
- Split library and test TypeScript builds so tests/examples no longer force a `dist/src/...` layout.
- Added NodeNext interoperability settings required by Ajv and `ajv-formats` (`esModuleInterop` and `allowSyntheticDefaultImports`).
- Added a regression smoke test that imports the compiled public entry point.
- Kept Node.js 20 as the minimum supported runtime; Node.js 22 remains supported.
- Protocol behavior remains TWYLT 1.8 compatible.

## 0.1.0

- Initial TypeScript implementation using TypeBox + Ajv.
