import { IField, IFieldOptions, IFieldViewWidgetOptions, IFieldInputWidgetOptions, IFieldConfiguration, FieldsConfigurationCollectionType, FieldsCollectionType } from "../IFields";

export interface IFieldBlockOptions extends IFieldOptions {
    disableFrame?: boolean;
    disableLabel?: boolean;
}

export interface IFieldBlockViewWidgetOptions extends IFieldViewWidgetOptions {
    options?: IFieldBlockOptions;
}

export interface IFieldBlockInputWidgetOptions extends IFieldInputWidgetOptions {
    options?: IFieldBlockOptions;
}

export interface IFieldBlockConfiguration extends IFieldConfiguration {
    fieldType: "block";
    defaultValue?: string;
    options?: IFieldBlockOptions;
    viewWidget?: {
        name: string;
        options?: IFieldBlockViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldBlockInputWidgetOptions;
    };
    fields: FieldsConfigurationCollectionType;
}

export default interface IFieldBlock extends IField {
    fieldType: "block";
    storageType: "object";
    defaultValue?: string;
    options?: IFieldBlockOptions;
    viewWidget?: {
        name: string;
        options?: IFieldBlockViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldBlockInputWidgetOptions;
    };
    fields: FieldsCollectionType;
}