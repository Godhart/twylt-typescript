# ADR-003: NodeNext interoperability for Ajv

## Status
Accepted in 0.2.1.

## Context
With `module` and `moduleResolution` set to `NodeNext`, TypeScript 5.8 can resolve the default imports of `ajv` and `ajv-formats` as module namespace types. This makes `new Ajv(...)` non-constructable and `addFormats(...)` non-callable at compile time even though Node can load the CommonJS-compatible packages at runtime.

TypeScript also rejects writes through a generic intersection (`T & Record<string, unknown>`) with TS2862.

## Decision
Load Ajv and ajv-formats through `createRequire(import.meta.url)`, Node's explicit CommonJS bridge for ESM modules, and cast the loaded values to the packages' exported TypeScript types. Keep the rest of the package ESM/NodeNext.

For schema metadata, retain the generic result as `T` and create a separate `Record<string, unknown>` mutable view solely for decorating `$id` and `x-schema-version`.

## Consequences
The package remains native ESM externally, works on the Node 20+ baseline, and avoids depending on fragile synthetic-default-import behavior. The public API and TWYLT wire behavior are unchanged.
