import { IField, IFieldConfiguration } from "../IFields";
export interface IFieldEnumerateConfiguration extends IFieldConfiguration {
    fieldType: "enumerate";
    enumeration: {
        [key: string]: any;
    };
}
export interface IFieldEnumerate extends IField {
    fieldType: "enumerate";
    storageType: "string";
    enumeration: {
        [key: string]: any;
    };
}
