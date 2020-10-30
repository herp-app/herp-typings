/**
 * Interface for Layouts
 */
export default interface ILayout {
    rows: Array<ILayoutRow>;
    mapping: Array<ILayoutMapping>;
}
export interface ILayoutRow {
    columns: Array<ILayoutColumn>;
}
export interface ILayoutMapping {
    element: string;
    columnName: string;
}
/**
 * @todo add sizes for screenwidth sm md ml xl etc.
 */
export interface ILayoutColumn {
    name: string;
    size?: ILayoutColumnSizes;
    rows?: Array<ILayoutRow>;
}
export declare type ILayoutColumnSizes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
