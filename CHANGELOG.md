# Changelog

## 0.2.0

- Fixed the package build layout: `src/index.ts` now compiles to `dist/index.js`, matching `main`, `types`, and `exports` in `package.json`.
- Split library and test TypeScript builds so tests/examples no longer force a `dist/src/...` layout.
- Added NodeNext interoperability settings required by Ajv and `ajv-formats` (`esModuleInterop` and `allowSyntheticDefaultImports`).
- Added a regression smoke test that imports the compiled public entry point.
- Kept Node.js 20 as the minimum supported runtime; Node.js 22 remains supported.
- Protocol behavior remains TWYLT 1.8 compatible.

## 0.1.0

- Initial TypeScript implementation using TypeBox + Ajv.
