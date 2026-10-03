# ADR-005: Explicit Ajv module normalization for NodeNext

## Status
Accepted in 0.2.3.

## Context
Versions 0.2.0–0.2.2 relied on TypeScript's CJS/ESM inference for Ajv and
ajv-formats. In a real Node.js 20 + `NodeNext` build, TypeScript resolved the
imports as module namespace objects, so Ajv was not constructable and
addFormats was not callable.

Changing between `import`, synthetic defaults, and `createRequire()` did not
make the compile-time contract reliable across the supported environment.

## Decision
Normalize the imported module shape explicitly (`module.default` when present,
otherwise `module`) and cast only that narrow boundary to the public contracts
used by TWYLT. All code after the adapter remains strongly typed.

## Consequences
Interop uncertainty is isolated to two constants in `runtime.ts`. TWYLT's
public API is unchanged. Node.js 20 remains the minimum supported runtime.
