"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const __JQueryImport = require("jquery");
const ts = require("typescript");
const lodash_1 = require("lodash");
const mkdirp_1 = require("mkdirp");
const fs = require("fs");
const Path = require("path");
function log(...args) {
    console.log(...args);
}
exports.log = log;
function JQueryFactory(w) {
    return __JQueryImport(w);
}
exports.JQueryFactory = JQueryFactory;
/**
 * Simple template renderer that uses ES6 template literals with interpolated values.
 * Arrays are concatenated.  false, null, and undefined are coerced to empty strings.
 * Functions are invoked and their result rendered per the rules above.
 */
function template(tmpl, ...values) {
    let acc = '';
    for (let i = 0; i < tmpl.length; i++) {
        acc += tmpl[i];
        if (values.length > i) {
            acc += valueToString(values[i]);
        }
    }
    return acc;
    function valueToString(val) {
        if (val === false || val == null)
            return '';
        if (typeof val === 'string')
            return val;
        if (typeof val === 'function')
            return valueToString(val());
        if (val instanceof Array) {
            return val.map(v => valueToString(v)).join('');
        }
        return '' + val;
    }
}
exports.template = template;
function normalizeUrl(url) {
    return url.replace(/#.*?$/, '');
}
exports.normalizeUrl = normalizeUrl;
/** Use TypeScript to pretty-print TS code. */
function prettyPrintTs(source) {
    // Use TypeScript's pretty-printer to format the code
    const sourceFile = ts.createSourceFile('source.ts', source, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
    return ts.createPrinter().printFile(sourceFile);
}
exports.prettyPrintTs = prettyPrintTs;
class Cache {
    constructor() {
        this._cache = new Map();
        this.maxItems = 20;
        this._lru = [];
    }
    computeKey(key) {
        return `${key}`;
    }
    dispose(value, computedKey) { }
    getOrCreate(key) {
        const computedKey = this.computeKey(key);
        this;
        let ret;
        if (this._cache.has(computedKey)) {
            ret = this._cache.get(computedKey);
        }
        else {
            ret = this.createItem(key, computedKey);
            this._cache.set(computedKey, ret);
        }
        this._lru = [...lodash_1.without(this._lru, computedKey), computedKey];
        if (this._lru.length > this.maxItems) {
            const removedComputedKey = this._lru.shift();
            const removedItem = this._cache.get(removedComputedKey);
            this.dispose(removedItem, removedComputedKey);
            this._cache.delete(removedComputedKey);
        }
        return ret;
    }
}
exports.Cache = Cache;
function writeFile(path, contents) {
    mkdirp_1.sync(Path.dirname(path));
    fs.writeFileSync(path, contents);
}
exports.writeFile = writeFile;
function readFile(path) {
    return fs.readFileSync(path, 'utf8');
}
exports.readFile = readFile;
function readJsonFile(path, defaultValue) {
    try {
        return JSON.parse(readFile(path));
    }
    catch (e) {
        if (defaultValue !== undefined) {
            return defaultValue;
        }
        throw e;
    }
}
exports.readJsonFile = readJsonFile;
function writeJsonFile(path, val) {
    writeFile(path, JSON.stringify(val, null, '    '));
}
exports.writeJsonFile = writeJsonFile;
//# sourceMappingURL=utils.js.map