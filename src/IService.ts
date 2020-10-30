
export interface IServiceRegistration {
    name: string;
    title: string;
    host: string;
    version: string;
    description?: string;
}

export interface IService extends IServiceRegistration {
    installed: boolean;
}