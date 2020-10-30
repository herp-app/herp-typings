/**
 *  Interface for Menu items
 */
export interface IMenuItemConfiguration {
    type: "menuItem";
    name: string;
    bundle: string;
    label: string;
    menuName: string;
    weight?: number;
    parentItem?: string;
    tooltip?: string;
    icon?: string;
    link: string;
    secondary?: {
        name: string;
        link: string;
        label: string;
        tooltip?: string;
        icon?: string;
    };
}
/**
 *  Interface for Menu Configuration
 */
export interface IMenuConfiguration {
    type: "menu";
    bundle: string;
    name: string;
    label: string;
    tooltip?: string;
    icon?: string;
}
/**
 * Interface for MenuItems
 */
export interface IMenuItem extends IMenuItemConfiguration {
    items?: Array<IMenuItem>;
}
/**
 * Interface for Menus - menus are system configuration only
 */
export interface IMenu extends IMenuConfiguration {
    items: Array<IMenuItem>;
}
