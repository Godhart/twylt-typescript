# ADR-002: Package build layout and Ajv ESM interoperability

## Status
Accepted

## Context
While integrating `twylt-typescript` into `toolhub-images`, two defects in 0.1.0 became visible:

1. `package.json` exported `./dist/index.js`, but the compiler used `rootDir: "."` while compiling `src`, tests and examples together. The library entry point was therefore emitted as `dist/src/index.js`.
2. Ajv and `ajv-formats` are CommonJS-oriented packages consumed from a NodeNext/ESM package. TypeScript needs explicit CJS default-import interoperability for this combination.

Container-image build scripts temporarily worked around these defects. They belong in the library instead.

## Decision
The production build compiles only `src/**/*.ts` with `rootDir: "src"` and `outDir: "dist"`. Tests use a separate `tsconfig.test.json` and output directory. `package.json` continues to expose only `dist/index.js` and `dist/index.d.ts`.

The NodeNext compiler configuration explicitly enables `esModuleInterop` and `allowSyntheticDefaultImports` for Ajv/`ajv-formats` interoperability.

A package-entry smoke test imports the compiled public entry point after every test build.

## Consequences
- Consumers and container images no longer need to know the repository source layout.
- Published `exports`, `main`, and `types` agree with actual build artifacts.
- Ajv imports have an explicit, documented compiler contract.
- Test compilation cannot accidentally change the npm package layout.
