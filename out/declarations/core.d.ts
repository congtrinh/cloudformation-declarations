import { ConditionId } from './template';
import * as Functions from './functions';
export declare type TODO = any;
export declare type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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
export declare function T<V>(value: V): V;
export declare type CFString = string;
/**
 * Convert a JS boolean to a string.
 * Cloudformation expects booleans to be either the string 'true' or 'false'.
 */
export declare function CFBoolean(b: boolean): CFBoolean;
export declare type CFBoolean = 'true' | 'false';
/**
 * Convert a JS number to a string.
 * Cloudformation expects numbers as strings, presumably to avoid differences in the implementations of numbers in various JSON parsers and serializers.
 */
export declare function CFInteger(n: number): string;
export declare type CFInteger = string;
/**
 * Convert a JS number to a string.
 * Cloudformation expects numbers as strings, presumably to avoid differences in the implementations of numbers in various JSON parsers and serializers.
 */
export declare function CFDouble(n: number): string;
export declare type CFDouble = string;
/**
 * Convert a JS number to a string.
 * Cloudformation expects numbers as strings, presumably to avoid differences in the implementations of numbers in various JSON parsers and serializers.
 */
export declare function CFLong(n: number): string;
export declare type CFLong = string;
export declare function CFTimestamp(d: string): string;
export declare type CFTimestamp = string;
export declare type CFJson = object;
export declare type CFList<T> = Array<T>;
export declare type CFMap<T> = {
    [key: string]: T;
};
export declare type BooleanCondition = Effectively<CFBoolean, (Functions.And | Functions.Equals | Functions.Not | Functions.Or | ConditionRef)>;
/** Reference to a conditional declared elsewhere in the stack template */
export interface ConditionRef {
    Condition: ConditionId;
}
export declare function ConditionRef(conditionId: ConditionId): Effectively<CFBoolean, ConditionRef>;
/**
 * When we "lie" to the typesystem, a branding property stores the real type.
 * For example, when we say that a {"Ref": ""} is actually a string,
 * we also brand the return value with an interface.  Something like:
 *
 *     string & {__cloudfrontIsActually: {Ref: string}}
 *
 */
export declare type Effectively<PretendingToBe, IsActually> = PretendingToBe & Actually<IsActually>;
export interface Actually<T> {
    __cloudfrontIsActually: T;
}
export interface CommonResourceProps {
    Condition?: ConditionId;
    DeletionPolicy?: 'Delete' | 'Retain' | 'Snapshot';
    DependsOn?: CFString | Array<CFString>;
    Metadata?: object;
}
