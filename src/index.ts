

// /// <reference path="./IBundle.ts" />
// /// <reference path="./IConfiguration.ts" />
// /// <reference path="./IEntity.ts" />
// /// <reference path="./IFields.ts" />
// /// <reference path="./IForm.ts" />
// /// <reference path="./ILayout.ts" />
// /// <reference path="./IMenu.ts" />
// /// <reference path="./IPermissions.ts" />
// /// <reference path="./IQuery.ts" />
// /// <reference path="./IService.ts" />
// /// <reference path="./ITranslation.ts" />
// /// <reference path="./IView.ts" />
// /// <reference path="./IWorkflows.ts" />
// /// <reference path="./Utils.ts" />


// declare module 'herp-typings';

import IFields, { FieldsCollectionType, IFieldsConfiguration, FieldsConfigurationCollectionType } from "./IFields";

interface IEntityBase {
    type: "entity";
    bundle: string;
    name: string;
    label: string;
    description: string;
    options?: any;
}

/**
 * Interface for a Entity
 */
export interface IEntityConfiguration extends IEntityBase {
    fields: FieldsConfigurationCollectionType;
}


/**
 * Interface for a Entity
 */
export default interface IEntity extends IEntityBase {
    fields: FieldsCollectionType;
}

/**
 * System entity IEntityUser - need by permission and logging
 */
export interface IEntityUser {
    email: string;
    password: string;
    roles: Array<string>;
    _id: string;
}

export interface IEntityReference {
    bundle: string;
    entity: string;
}