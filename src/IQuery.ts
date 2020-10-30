import { IFields } from "./IFields";
import { IEntityReference } from "./IEntity";

/**
 * Interface for QueryConfigurations that hold a query and declare posible changes by a user.
 */
export interface IQueryConfiguration {
    entityReference: IEntityReference;
    defaultQuery: IQuery;
    exposedFields: Array<IFields>;
}

/**
 * Interface for Queries
 */
export interface IQuery {
    query: {[key: string]: any};
    limit: number;
    skip: number;
    sort: {[key: string]: number};
}