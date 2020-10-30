import { IField, IFieldConfiguration } from "../IFields";
export interface IFieldStringConfiguration extends IFieldConfiguration {
    fieldType: "string";
}
export default interface IFieldString extends IField {
    fieldType: "string";
    storageType: "string";
}
