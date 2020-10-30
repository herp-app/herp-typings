/**
 * Interface for Bundles
 */
export interface IBundle {
    type: "bundle";
    name: string;
    label: string;
    description?: string;
    icon?: string;
}