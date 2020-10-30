import { IField, IFieldConfiguration } from "../IFields";

export interface IFieldBooleanConfiguration extends IFieldConfiguration {
    fieldType: "boolean";
    defaultValue?: boolean;
}

export interface IFieldBoolean extends IField {
    fieldType: "boolean";
    storageType: "boolean";
    defaultValue?: boolean;
}