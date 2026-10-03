# ADR-004: Ajv imports under ESM/NodeNext

## Status

Accepted in 0.2.2.

## Context

0.2.1 attempted to solve Ajv interoperability by loading `ajv` and
`ajv-formats` with `createRequire()`. At runtime that can work, but it did not
solve TypeScript's compile-time interpretation of the packages. With
`module`/`moduleResolution` set to `NodeNext`, the inferred values remained
module namespace types, producing TS2351 and TS2349.

Ajv 8 and ajv-formats expose default exports in their TypeScript declarations.

## Decision

Use ordinary ESM default imports:

```ts
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
```

Do not use `createRequire()` for these dependencies.

A release is not considered validated merely because its archive/layout is
correct: a clean `npm run build` is a required regression check.

## Consequences

The runtime stays native ESM, the code is simpler, and TypeScript sees Ajv as
constructable and addFormats as callable under the supported NodeNext setup.
