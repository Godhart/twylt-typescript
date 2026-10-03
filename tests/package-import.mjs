import assert from 'node:assert/strict';
import { pathToFileURL } from 'node:url';
import { resolve } from 'node:path';

const entry = resolve('dist/index.js');
const pkg = await import(pathToFileURL(entry).href);
assert.equal(typeof pkg.defineTool, 'function');
assert.equal(typeof pkg.Type.Object, 'function');
assert.equal(pkg.TWYLT_FORMAT_VERSION, '1.8');
console.log('public package entry point: ok');
