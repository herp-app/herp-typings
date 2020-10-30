import { IField, IFieldOptions, IFieldViewWidgetOptions, IFieldInputWidgetOptions, IFieldConfiguration } from "../IFields";
export interface IFieldDateTimeOptions extends IFieldOptions {
    format: string;
}
export interface IFieldDateTimeViewWidgetOptions extends IFieldViewWidgetOptions {
    options?: IFieldDateTimeOptions;
}
export interface IFieldDateTimeInputWidgetOptions extends IFieldInputWidgetOptions {
    options?: IFieldDateTimeOptions;
}
export interface IFieldDateTimeConfiguration extends IFieldConfiguration {
    fieldType: "dateTime";
    defaultValue?: string;
    options?: IFieldDateTimeOptions;
    viewWidget?: {
        name: string;
        options?: IFieldDateTimeViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldDateTimeInputWidgetOptions;
    };
}
export interface IFieldDateTime extends IField {
    fieldType: "dateTime";
    storageType: "date";
    defaultValue?: string;
    options?: IFieldDateTimeOptions;
    viewWidget?: {
        name: string;
        options?: IFieldDateTimeViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldDateTimeInputWidgetOptions;
    };
}
