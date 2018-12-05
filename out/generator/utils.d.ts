export declare function log(...args: Array<any>): void;
export declare function JQueryFactory(w: Window): JQueryStatic;
/**
 * Simple template renderer that uses ES6 template literals with interpolated values.
 * Arrays are concatenated.  false, null, and undefined are coerced to empty strings.
 * Functions are invoked and their result rendered per the rules above.
 */
export declare function template(tmpl: TemplateStringsArray, ...values: Array<any>): string;
export declare function normalizeUrl(url: string): string;
/** Use TypeScript to pretty-print TS code. */
export declare function prettyPrintTs(source: string): string;
export declare abstract class Cache<K, V> {
    private _cache;
    maxItems: number;
    private _lru;
    computeKey(key: K): string;
    abstract createItem(key: K, computedKey: string): V;
    dispose(value: V, computedKey: string): void;
    getOrCreate(key: K): V;
}
export declare function writeFile(path: string, contents: string): void;
export declare function readFile(path: string): string;
export declare function readJsonFile(path: string, defaultValue?: any): any;
export declare function writeJsonFile(path: string, val: any): void;
