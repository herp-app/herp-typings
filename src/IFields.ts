import { IFieldBlock, IFieldBlockConfiguration } from "./fields/IFieldBlock";
import { IFieldBoolean, IFieldBooleanConfiguration } from "./fields/IFieldBoolean";
import { IFieldDateOptions, IFieldDateConfiguration } from "./fields/IFieldDate";
import { IFieldDateTime, IFieldDateTimeConfiguration } from "./fields/IFieldDateTime";
import { IFieldDocument, IFieldDocumentConfiguration } from "./fields/IFieldDocument";
import { IFieldEnumerate, IFieldEnumerateConfiguration } from "./fields/IFieldEnumerate";
import { IFieldNumber, IFieldNumberConfiguration } from "./fields/IFieldNumber";
import { IFieldPassword, IFieldPasswordConfiguration } from "./fields/IFieldPassword";
import { IFieldRelation, IFieldRelationConfiguration } from "./fields/IFieldRelation";
import { IFieldSerial, IFieldSerialConfiguration } from "./fields/IFieldSerial";
import { IFieldString, IFieldStringConfiguration } from "./fields/IFieldString";

export type IFieldsStorageType = "string" | "number" | "boolean" | "date" | "reference" | "object" | "any";
export type IFieldsFieldType = "string" | "number" | "boolean" | "date" | "dateTime" | "password" | "enumerate" | "document" | "block" | "relation" | "serial" | "any";

export type IFieldsFieldMultiple = {
    allow: boolean;
    min?: number;
    max?: number;
};

export interface IFieldOptions {
    [key: string]: any;
}

export interface IFieldViewWidgetOptions extends IFieldOptions {
    prefix: string;
    sufix: string;
}

export interface IFieldInputWidgetOptions extends IFieldOptions {
}

/**
 * Interface for Fields configuration structure
 */
export interface IFieldConfiguration {
    fieldType: IFieldsFieldType;
    label: string;
    required?: boolean;
    unique?: boolean;
    description?: string;
    multiple?: IFieldsFieldMultiple;
    defaultValue?: string | boolean | number;
    inputWidget?: {
        name: string,
        options?: IFieldInputWidgetOptions,
    };
    viewWidget?: {
        name: string,
        options?:  IFieldViewWidgetOptions,
    };
    options?: IFieldOptions;
}

/**
 * Interface for Fields used inside a Entity
 */
export interface IField extends IFieldConfiguration {
    __type: "field";
    name: string;
    storageType: IFieldsStorageType;
}


/**
 * Interface for Fields used inside a Entity
 */
export type IFields = IFieldBlock 
                                    | IFieldBoolean 
                                    | IFieldDateOptions 
                                    | IFieldDateTime 
                                    | IFieldDocument 
                                    | IFieldEnumerate 
                                    | IFieldNumber 
                                    | IFieldPassword 
                                    | IFieldRelation 
                                    | IFieldSerial 
                                    | IFieldString;

export type IFieldsConfiguration = IFieldBlockConfiguration
                                    | IFieldBooleanConfiguration 
                                    | IFieldDateConfiguration
                                    | IFieldDateTimeConfiguration
                                    | IFieldDocumentConfiguration
                                    | IFieldEnumerateConfiguration
                                    | IFieldNumberConfiguration
                                    | IFieldPasswordConfiguration
                                    | IFieldRelationConfiguration
                                    | IFieldSerialConfiguration
                                    | IFieldStringConfiguration;

// @todo is there a better typing for this to make for sure all unkown keys are IFields?!?
export type FieldsCollectionType = {
    __type: "fieldsCollection";
    items: {
        [key: string]: IFields;
    }
};

export type FieldsConfigurationCollectionType = {
    [key: string]: IFieldsConfiguration;
};