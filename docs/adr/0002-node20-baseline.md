# ADR 0002: Node.js 20 runtime baseline

## Status
Accepted

## Context
The TypeScript TWYLT implementation was initially packaged with Node.js 22 as its minimum runtime. The implementation itself does not require Node.js 22-only APIs, and a Node.js 20 build is required.

## Decision
Provide a Node.js 20+ package variant with `engines.node` set to `>=20` and development typings from `@types/node` 20. Keep `target: ES2023`, ESM, `NodeNext`, TypeBox, Ajv, protocol behavior, transports, errors, and public API unchanged.

## Consequences
The same TWYLT implementation can run on Node.js 20 and newer runtimes without introducing a separate protocol dialect. Future code changes for this variant must remain inside the Node.js 20 API surface and be covered by the same tests/conformance suite.
