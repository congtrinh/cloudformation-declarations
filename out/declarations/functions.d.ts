import { CFString, CFList, CFMap, BooleanCondition, CFBoolean, CFInteger, Effectively } from "./core";
import { ConditionId } from "./template";
export interface Base64 {
    'Fn::Base64': CFString;
}
export declare function Base64(v: Base64['Fn::Base64']): Effectively<CFString, Base64>;
export interface FindInMap {
    'Fn::FindInMap': [CFString, CFString, CFString];
}
export declare function FindInMap<V>(v: FindInMap['Fn::FindInMap']): Effectively<V, FindInMap>;
export interface GetAtt {
    'Fn::GetAtt': [CFString, CFString];
}
export declare function GetAtt<V>(v: GetAtt['Fn::GetAtt']): Effectively<V, GetAtt>;
export interface GetAZs {
    'Fn::GetAZs': CFString;
}
export declare function GetAZs(v: GetAZs['Fn::GetAZs']): Effectively<CFList<CFString>, GetAZs>;
export interface ImportValue {
    'Fn::ImportValue': CFString;
}
export declare function ImportValue<V>(v: ImportValue['Fn::ImportValue']): Effectively<V, ImportValue>;
export interface Join {
    'Fn::Join': [CFString, Array<CFString>];
}
export declare function Join(v: Join['Fn::Join']): Effectively<CFString, Join>;
export interface Select<V> {
    'Fn::Select': [CFInteger, CFList<V>];
}
export declare function Select<V>(v: Select<V>['Fn::Select']): Effectively<V, Select<V>>;
export interface Split {
    'Fn::Split': [CFString, CFString];
}
export declare function Split(v: Split['Fn::Split']): Effectively<CFList<CFString>, Split>;
export interface Sub {
    'Fn::Sub': [CFString, CFMap<CFString>] | CFString;
}
export declare function Sub(v: Sub['Fn::Sub']): Effectively<CFString, Sub>;
export interface And {
    'Fn::And': CFList<BooleanCondition>;
}
export declare function And(v: And['Fn::And']): Effectively<CFBoolean, And>;
export interface Equals {
    'Fn::Equals': [any, any];
}
export declare function Equals(v: Equals['Fn::Equals']): Effectively<CFBoolean, Equals>;
export interface If<V> {
    'Fn::If': [ConditionId, V, V];
}
export declare function If<V>(v: If<V>['Fn::If']): Effectively<V, If<V>>;
export interface Not {
    'Fn::Not': [BooleanCondition];
}
export declare function Not(v: Not['Fn::Not']): Effectively<CFBoolean, Not>;
export interface Or {
    'Fn::Or': Array<BooleanCondition>;
}
export declare function Or(v: Or['Fn::Or']): Effectively<CFBoolean, Or>;
export interface Ref {
    Ref: CFString;
}
export declare function Ref<V>(ref: Ref['Ref']): Effectively<V, Ref>;
