import { IField, IFieldConfiguration } from "../IFields";

export interface IFieldPasswordConfiguration extends IFieldConfiguration {
    fieldType: "password";
}

export interface IFieldPassword extends IField {
    fieldType: "password";
    storageType: "string";
}