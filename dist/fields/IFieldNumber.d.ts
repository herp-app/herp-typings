import { IField, IFieldOptions, IFieldViewWidgetOptions, IFieldInputWidgetOptions, IFieldConfiguration } from "../IFields";
export interface IFieldNumberOptions extends IFieldOptions {
    min?: number;
    max?: number;
}
export interface IFieldNumberViewWidgetOptions extends IFieldViewWidgetOptions {
    options?: IFieldNumberOptions;
}
export interface IFieldNumberInputWidgetOptions extends IFieldInputWidgetOptions {
    options?: IFieldNumberOptions;
}
export interface IFieldNumberConfiguration extends IFieldConfiguration {
    fieldType: "number";
    defaultValue?: number;
    options?: IFieldNumberOptions;
    viewWidget?: {
        name: string;
        options?: IFieldNumberViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldNumberInputWidgetOptions;
    };
}
export default interface IFieldNumber extends IField {
    fieldType: "number";
    storageType: "number";
    defaultValue?: number;
    options?: IFieldNumberOptions;
    viewWidget?: {
        name: string;
        options?: IFieldNumberViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldNumberInputWidgetOptions;
    };
}
