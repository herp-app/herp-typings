import { IField, IFieldOptions, IFieldViewWidgetOptions, IFieldInputWidgetOptions } from "../IFields";
export interface IFieldSerialOptions extends IFieldOptions {
    format: string;
}
export interface IFieldSerialViewWidgetOptions extends IFieldViewWidgetOptions {
    options?: IFieldSerialOptions;
}
export interface IFieldSerialInputWidgetOptions extends IFieldInputWidgetOptions {
    options?: IFieldSerialOptions;
}
export default interface IFieldSerial extends IField {
    fieldType: "serial";
    storageType: "string";
    options: IFieldSerialOptions;
    viewWidget?: {
        name: string;
        options?: IFieldSerialViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldSerialInputWidgetOptions;
    };
}
export interface IFieldSerialConfiguration extends IField {
    fieldType: "serial";
    options: IFieldSerialOptions;
    viewWidget?: {
        name: string;
        options?: IFieldSerialViewWidgetOptions;
    };
    inputWidget?: {
        name: string;
        options?: IFieldSerialInputWidgetOptions;
    };
}
