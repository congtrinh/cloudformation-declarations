"use strict";
exports.__esModule = true;
function Base64(v) {
    return { 'Fn::Base64': v };
}
exports.Base64 = Base64;
function FindInMap(v) {
    return { 'Fn::FindInMap': v };
}
exports.FindInMap = FindInMap;
function GetAtt(v) {
    return { 'Fn::GetAtt': v };
}
exports.GetAtt = GetAtt;
function GetAZs(v) {
    return { 'Fn::GetAZs': v };
}
exports.GetAZs = GetAZs;
function ImportValue(v) {
    return { 'Fn::ImportValue': v };
}
exports.ImportValue = ImportValue;
function Join(v) {
    return { 'Fn::Join': v };
}
exports.Join = Join;
function Select(v) {
    return { 'Fn::Select': v };
}
exports.Select = Select;
function Split(v) {
    return { 'Fn::Split': v };
}
exports.Split = Split;
function Sub(v) {
    return { 'Fn::Sub': v };
}
exports.Sub = Sub;
function And(v) {
    return { 'Fn::And': v };
}
exports.And = And;
function Equals(v) {
    return { 'Fn::Equals': v };
}
exports.Equals = Equals;
function If(v) {
    return { 'Fn::If': v };
}
exports.If = If;
function Not(v) {
    return { 'Fn::Not': v };
}
exports.Not = Not;
function Or(v) {
    return { 'Fn::Or': v };
}
exports.Or = Or;
function Ref(ref) {
    return { Ref: ref };
}
exports.Ref = Ref;
