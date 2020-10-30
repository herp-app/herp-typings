import { IField, IFieldOptions, IFieldViewWidgetOptions, IFieldInputWidgetOptions, IFieldConfiguration, FieldsCollectionType, FieldsConfigurationCollectionType } from "../IFields";
export interface IFieldDocumentOptions extends IFieldOptions {
    disableFrame?: boolean;
    disableLabel?: boolean;
}
export interface IFieldDocumentViewWidgetOptions extends IFieldViewWidgetOptions {
    options?: IFieldDocumentOptions;
}
export interface IFieldDocumentInputWidgetOptions extends IFieldInputWidgetOptions {
    options?: IFieldDocumentOptions;
}
export interface IFieldDocumentConfiguration extends IFieldConfiguration {
    fieldType: "document";
    defaultValue?: string;
    options?: IFieldDocumentOptions;
    viewWidget?: {
        name: string;
        options?: IFieldDocumentViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldDocumentInputWidgetOptions;
    };
    fields: FieldsConfigurationCollectionType;
}
export default interface IFieldDocument extends IField {
    fieldType: "document";
    storageType: "object";
    defaultValue?: string;
    options?: IFieldDocumentOptions;
    viewWidget?: {
        name: string;
        options?: IFieldDocumentViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldDocumentInputWidgetOptions;
    };
    fields: FieldsCollectionType;
}
