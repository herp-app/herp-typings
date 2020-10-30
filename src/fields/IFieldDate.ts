import { IField, IFieldOptions, IFieldViewWidgetOptions, IFieldInputWidgetOptions, IFieldConfiguration } from "../IFields";

export interface IFieldDateOptions extends IFieldOptions {
    format: string;
}

export interface IFieldDateViewWidgetOptions extends IFieldViewWidgetOptions {
    options?: IFieldDateOptions;
}

export interface IFieldDateInputWidgetOptions extends IFieldInputWidgetOptions {
    options?: IFieldDateOptions;
}

export interface IFieldDateConfiguration extends IFieldConfiguration {
    fieldType: "date";
    defaultValue: string;
    options: IFieldDateOptions;
    viewWidget?: {
        name: string;
        options?: IFieldDateViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldDateInputWidgetOptions;
    };
}

export interface IFieldDate extends IField {
    fieldType: "date";
    storageType: "date";
    defaultValue: string;
    options: IFieldDateOptions;
    viewWidget?: {
        name: string;
        options?: IFieldDateViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldDateInputWidgetOptions;
    };
}