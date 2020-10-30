/**
 * Interface for Bundles
 */
export default interface IBundle {
    type: "bundle";
    name: string;
    label: string;
    description?: string;
    icon?: string;
}
