import IQueryConfiguration from './IQuery';
import { IEntityReference } from './IEntity';
/**
 * Interface for Views
 */
export default interface IView {
    type: 'view';
    name: string;
    bundle: string;
    label: string;
    description?: string;
    queryConfiguration: IQueryConfiguration;
    viewMode: 'table' | 'list' | 'canban';
    table?: ITable;
    entityReference: IEntityReference;
}
/**
 * Table viewMode
 */
export interface ITable {
    actions?: {
        edit?: string;
        delete?: boolean;
        actions?: boolean;
    };
    columnFields: [
        {
            fieldName: string;
            sortable: boolean;
        }
    ];
}
