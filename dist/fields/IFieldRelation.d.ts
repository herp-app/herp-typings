import { IField, IFieldOptions, IFieldViewWidgetOptions, IFieldInputWidgetOptions, IFieldConfiguration } from "../IFields";
export interface IFieldRelationOptions extends IFieldOptions {
    labelField: string;
}
export interface IFieldRelationViewWidgetOptions extends IFieldViewWidgetOptions {
    options?: IFieldRelationOptions;
}
export interface IFieldRelationInputWidgetOptions extends IFieldInputWidgetOptions {
    options?: IFieldRelationOptions;
}
export interface IFieldRelationConfiguration extends IFieldConfiguration {
    fieldType: "relation";
    defaultValue?: string;
    options?: IFieldRelationOptions;
    viewWidget?: {
        name: string;
        options?: IFieldRelationViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldRelationInputWidgetOptions;
    };
    reference: string;
}
export default interface IFieldRelation extends IField {
    fieldType: "relation";
    storageType: "reference";
    defaultValue?: string;
    options?: IFieldRelationOptions;
    viewWidget?: {
        name: string;
        options?: IFieldRelationViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldRelationInputWidgetOptions;
    };
    reference: string;
}
