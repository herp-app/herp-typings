export interface IPermission {
    schema: string;
    chain: Array<string>;
    actions: Array<string>;
}
export interface IPermissionRegistration {
    id: string;
    label: string;
    actions: Array<string>;
}
