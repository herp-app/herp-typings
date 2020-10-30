import { IField, IFieldConfiguration } from "../IFields";

export interface IFieldStringConfiguration extends IFieldConfiguration {
    fieldType: "string";
}

export interface IFieldString extends IField {
    fieldType: "string";
    storageType: "string";
}