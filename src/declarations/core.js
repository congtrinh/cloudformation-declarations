"use strict";
exports.__esModule = true;
/**
 * Identity function for declaring types within deeply nested object literals.
 * Normal Intellisense covers most situations.  However, when a property's type is `any` or is too loose,
 * but you want Intellisense for a more specific interface, wrap the value in this function.
 *
 *     const someBigObject: SomeBigInterface = {
 *       aPropertyOfTypeAny: T<AWS.APIGateway.Account>({
 *         Properties: {
 *           // <-- get useful Intellisense for AWS.APIGateway.Account
 *         }
 *       })
 *     }
 *
 * For example, a stack's `Resources` object can contain any kind of Cloudfront
 * resource so Intellisense isn't particularly helpful.  We already offer factory functions
 * for all resources; for other situations, use `T`.
 */
function T(value) {
    return value;
}
exports.T = T;
/**
 * Convert a JS boolean to a string.
 * Cloudformation expects booleans to be either the string 'true' or 'false'.
 */
function CFBoolean(b) { return "" + b; }
exports.CFBoolean = CFBoolean;
/**
 * Convert a JS number to a string.
 * Cloudformation expects numbers as strings, presumably to avoid differences in the implementations of numbers in various JSON parsers and serializers.
 */
function CFInteger(n) { return "" + n; }
exports.CFInteger = CFInteger;
/**
 * Convert a JS number to a string.
 * Cloudformation expects numbers as strings, presumably to avoid differences in the implementations of numbers in various JSON parsers and serializers.
 */
function CFDouble(n) { return "" + n; }
exports.CFDouble = CFDouble;
/**
 * Convert a JS number to a string.
 * Cloudformation expects numbers as strings, presumably to avoid differences in the implementations of numbers in various JSON parsers and serializers.
 */
function CFLong(n) { return "" + n; }
exports.CFLong = CFLong;
function CFTimestamp(d) { return d; }
exports.CFTimestamp = CFTimestamp;
function ConditionRef(conditionId) {
    return { Condition: conditionId };
}
exports.ConditionRef = ConditionRef;
