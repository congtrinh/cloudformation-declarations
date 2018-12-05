"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const glob_1 = require("glob");
const lodash_1 = require("lodash");
const assert = require("assert");
const request = require("request-promise");
const utils_1 = require("./utils");
const bluebird_1 = require("bluebird");
const jsdom_1 = require("jsdom");
const crypto_1 = require("crypto");
const fs_1 = require("fs");
const paths = {
    generatedDeclaration: 'src/declarations/generated/cloudformation-types.ts',
    docsCache: 'cache/html-docs.json',
    specificationsDirectory: 'specifications'
};
function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const rootNamespace = new Namespace();
        const specs = Object.create(null);
        /** Cache of parsed HTML documentation with JQuery instances, stored by URL. */
        const parsedDocs = new (class extends utils_1.Cache {
            constructor() {
                super(...arguments);
                this.maxItems = 30;
            }
            dispose(v) {
                v.window.close();
            }
            createItem(k, ck) {
                const window = new jsdom_1.JSDOM(docs[ck]).window;
                const $ = utils_1.JQueryFactory(window);
                return { $, window };
            }
        });
        /** Get a JQuery object for the given documentation URL */
        function get$(url) { return parsedDocs.getOrCreate(url).$; }
        const docs = Object.create(null);
        // Pull docs from filesystem cache to avoid re-downloading all of them again.
        Object.assign(docs, utils_1.readJsonFile(paths.docsCache, {}));
        // Load all AWS specs into memory
        glob_1.sync('**.json', { cwd: paths.specificationsDirectory }).map(path => {
            specs[path] = utils_1.readJsonFile(`specifications/${path}`);
        });
        try {
            yield bluebird_1.each(lodash_1.toPairs(specs), ([path, spec]) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield bluebird_1.each([
                    ...lodash_1.toPairs(spec.PropertyTypes),
                    ...lodash_1.toPairs(spec.ResourceTypes)
                ], cb);
                function cb([name, type]) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        createType(name);
                        yield fetchDocs(type.Documentation);
                        bluebird_1.each(lodash_1.toPairs(type.Properties), ([propName, prop]) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                            yield fetchDocs(prop.Documentation);
                        }));
                    });
                }
                function createType(name) {
                    rootNamespace.getOrCreateChildType(name);
                }
                function fetchDocs(url) {
                    return tslib_1.__awaiter(this, void 0, void 0, function* () {
                        const actualUrl = utils_1.normalizeUrl(url);
                        if (typeof docs[actualUrl] === 'string') {
                            return;
                        }
                        let hash = crypto_1.createHash('md5').update(url).digest('hex');
                        let fileHashPath = "cache/" + hash;
                        let fileString;
                        if (fs_1.existsSync(fileHashPath)) {
                            console.log(`found ${url} in cache`);
                            fileString = fs_1.readFileSync(fileHashPath, { encoding: "UTF-8" });
                        }
                        else {
                            fileString = yield request(actualUrl);
                            utils_1.writeFile(fileHashPath, fileString);
                            console.log(`Downloading ${url}`);
                        }
                        docs[actualUrl] = fileString;
                    });
                }
            }));
        }
        finally {
            // Save documentation cache back to disc
            utils_1.writeJsonFile(paths.docsCache, docs);
        }
        const allResourceTypes = [];
        const renderedIdentifierPaths = new Set();
        /** Generated type declaration .ts */
        const declaration = utils_1.template `
    import * as C from '../core';
    ${lodash_1.map(specs, (spec, path) => {
            const specJson = utils_1.readJsonFile(`specifications/${path}`);
            const allDeclarations = lodash_1.sortBy([
                ...lodash_1.toPairs(specJson.ResourceTypes).map(v => [...v, 'resource']),
                ...lodash_1.toPairs(specJson.PropertyTypes).map(v => [...v, 'property'])
            ], v => v[0]);
            return utils_1.template `
                ${lodash_1.map(allDeclarations, ([k, v, type]) => renderType(v, k, type))}
            `;
            function renderType(v, k, specType) {
                const isResource = specType === 'resource';
                const nameParts = k.split(/::|\./);
                const namespace = nameParts.slice(0, -1).join('.');
                const identifier = nameParts[nameParts.length - 1];
                const identifierPath = namespace ? `${namespace}.${identifier}` : `${identifier}`;
                if (renderedIdentifierPaths.has(identifierPath)) {
                    return `/* already emitted ${identifierPath} */\n`;
                }
                renderedIdentifierPaths.add(identifierPath);
                if (isResource)
                    allResourceTypes.push(identifierPath);
                const propertiesIdentifierPath = `${identifierPath}.Properties`;
                const $ = get$(v.Documentation);
                // Emit `declaration` and wrap it in a namespace declaration if necessary
                function declarationInNamespace(identifierPath, declaration) {
                    const namespace = identifierPath.split('.').slice(0, -1).join('.');
                    return utils_1.template `
                        ${namespace && `export namespace ${namespace} {`}
                            ${declaration}
                        ${namespace && `}`}
                    `;
                }
                utils_1.log(`Generating declaration for ${identifierPath}...`);
                const description = $('.topictitle+p').text();
                return utils_1.template `
                    ${isResource && declarationInNamespace(identifierPath, utils_1.template `
                        /**
                         * ${description}
                         * 
                         * Documentation: ${v.Documentation}
                         */
                        export interface ${identifier} extends C.CommonResourceProps {
                            Type: '${k}' = '${k}';
                            Properties: ${propertiesIdentifierPath}
                        }
                        /**
                         * ${description}
                         * 
                         * Documentation: ${v.Documentation}
                         */
                        export function ${identifier}(props: C.Omit<${identifier}, 'Type'>): ${identifier} {
                            return {Type: '${k}', ...props};
                        }
                    `)}
                    ${declarationInNamespace(isResource ? `${identifierPath}.Properties` : identifierPath, utils_1.template `
                        export interface ${isResource ? 'Properties' : identifier} {
                            ${lodash_1.map(v.Properties, (prop, propName) => {
                    const $dt = $('.variablelist>dl>dt').filter((i, e) => $(e).text() === propName);
                    const $dd = $dt.find('+*');
                    const description = $dd.find('>p').eq(0).text();
                    const type = $dd.find('>p>em').filter((i, e) => $(e).text() === 'Type').parent().text().slice(6);
                    return utils_1.template `
                                        /**
                                         * ${type}
                                         * 
                                         * ${description}
                                         * 
                                         * UpdateType: ${prop.UpdateType}
                                         * Documentation: ${prop.Documentation}
                                         */
                                        ${propName}${!prop.Required && '?'}: ${renderTypeString(prop, rootNamespace.getOrCreateChildNamespace(identifierPath))};

                                    `;
                })}
                        }
                    `)}
                `;
            }
        })}
    export type Resource =\n${allResourceTypes.join('\n| ')};
    `;
        function parseTypeName(fullName) {
            const nameParts = fullName.split(/::|\./);
            let namespace = nameParts.slice(0, -1).join('.');
            if (namespace === '')
                namespace = undefined;
            const name = nameParts[nameParts.length - 1];
            return { namespace, name };
        }
        function renderTypeString(prop, relativeTo) {
            if (prop.PrimitiveType) {
                return renderPrimitiveType(prop.PrimitiveType);
            }
            if (prop.Type) {
                if (prop.PrimitiveItemType) {
                    return `${renderPropertyType(prop.Type, relativeTo, [renderPrimitiveType(prop.PrimitiveItemType)])}`;
                }
                else if (prop.ItemType) {
                    return `${renderPropertyType(prop.Type, relativeTo, [renderPropertyType(prop.ItemType, relativeTo)])}`;
                }
                else {
                    return `${renderPropertyType(prop.Type, relativeTo)}`;
                }
            }
            throw new Error('Unexpected property');
        }
        function renderPrimitiveType(prim) {
            return `C.CF${prim}`;
        }
        function renderPropertyType(findName, relativeTo, generics) {
            const genericsStr = generics && generics.length ? `<${generics.join(', ')}>` : '';
            if (lodash_1.includes(['Map', 'List'], findName))
                return `C.CF${findName}${genericsStr}`;
            const ret = relativeTo.resolveType(findName).fullName();
            assert(typeof ret === 'string');
            return `${ret}${genericsStr}`;
        }
        utils_1.writeFile(paths.generatedDeclaration, utils_1.prettyPrintTs(declaration));
    });
}
class Shared {
    constructor(name, parent) {
        this._parent = null;
        this.name = null;
        name != null && (this.name = name);
        parent != null && (this._parent = parent);
    }
    fullName() {
        const parentName = this._parent ? this._parent.fullName() : null;
        return parentName ? `${parentName}.${this.name}` : this.name;
    }
    _splitPath(s) {
        return s.split(/::|\./);
    }
    toJSON() {
        return Object.assign({}, this, { _parent: undefined });
    }
}
/** Represents an AWS "Type" in the CloudFormation schema (e.g. AWS::ApiGateway::Account) */
class Type extends Shared {
}
/** Represents an AWS "Namespace" in the Cloudformation schema (e.g. AWS::ApiGateway) */
class Namespace extends Shared {
    constructor() {
        super(...arguments);
        this._namespaces = new Map();
        this._types = new Map();
    }
    getOrCreateChildType(awsFullName) {
        if (typeof awsFullName === 'string')
            awsFullName = this._splitPath(awsFullName);
        if (awsFullName.length === 1) {
            let type = this._types.get(awsFullName[0]);
            if (!type) {
                type = new Type(awsFullName[0], this);
                this._types.set(awsFullName[0], type);
            }
            return type;
        }
        else {
            return this.getOrCreateChildNamespace(awsFullName.slice(0, -1)).getOrCreateChildType(awsFullName.slice(-1));
        }
    }
    getType(awsFullName) {
        if (typeof awsFullName === 'string')
            awsFullName = this._splitPath(awsFullName);
        if (awsFullName.length === 1)
            return this._types.get(awsFullName[0]) || null;
        const ns = this._namespaces.get(awsFullName[0]);
        return ns ? ns.getType(awsFullName.slice(1)) : null;
    }
    getOrCreateChildNamespace(awsFullName) {
        if (typeof awsFullName === 'string')
            awsFullName = this._splitPath(awsFullName);
        let ns = this._namespaces.get(awsFullName[0]);
        if (!ns)
            this._namespaces.set(awsFullName[0], ns = new Namespace(awsFullName[0], this));
        if (awsFullName.length === 1)
            return ns;
        return ns.getOrCreateChildNamespace(awsFullName.slice(1));
    }
    resolveType(awsFullName) {
        if (typeof awsFullName === 'string')
            awsFullName = this._splitPath(awsFullName);
        const type = this.getType(awsFullName);
        if (type)
            return type;
        if (this._parent)
            return this._parent.resolveType(awsFullName);
        return null;
    }
    toJSON() {
        return Object.assign({}, super.toJSON(), {
            _namespaces: lodash_1.fromPairs(Array.from(this._namespaces)),
            _types: lodash_1.fromPairs(Array.from(this._types))
        });
    }
}
main().catch(e => {
    console.error(e);
    process.exit(1);
});
//# sourceMappingURL=index.js.map