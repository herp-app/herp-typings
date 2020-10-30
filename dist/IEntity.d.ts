import { FieldsCollectionType, FieldsConfigurationCollectionType } from "./IFields";
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
export interface IEntity extends IEntityBase {
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
export {};
