import { IFields, IField, FieldsCollectionType, IFieldsConfiguration, IFieldConfiguration } from "./IFields";
export declare type WorkflowNodeTypes = "trigger" | "input" | "action" | "service" | "utility" | "output";
interface IFieldAny extends IField {
    storageType: "any";
    fieldType: "any";
}
interface IFieldAnyConfiguration extends IFieldConfiguration {
    fieldType: "any";
}
export declare type WorkflowNodeDefinitionInputOutput = IFields | IFieldAny;
export declare type WorkflowNodeDefinitionInputOutputCollection = {
    __type: "fieldsCollection";
    items: {
        [keys: string]: WorkflowNodeDefinitionInputOutput;
    };
};
export interface IWorkflowNodeDefinitionBase {
    type: "workflowNodeDefinition";
    nodeType: WorkflowNodeTypes;
    bundle: string;
    name: string;
    configurationStatic: {
        [key: string]: any;
    };
}
export interface IWorkflowNodeDefinitionConfiguration extends IWorkflowNodeDefinitionBase {
    configurationInstance: {
        [key: string]: IFieldsConfiguration;
    };
    output: {
        [key: string]: IFieldsConfiguration | IFieldAnyConfiguration;
    };
    input: {
        [key: string]: IFieldsConfiguration | IFieldAnyConfiguration;
    };
}
export interface IWorkflowNodeDefinition extends IWorkflowNodeDefinitionBase {
    configurationInstance: FieldsCollectionType;
    output: WorkflowNodeDefinitionInputOutputCollection;
    input: WorkflowNodeDefinitionInputOutputCollection;
}
export interface IWorkflowNodeInstanceConfiguration {
    nodeDefinition: string;
    name: string;
    configuration?: {
        [key: string]: any;
    };
    to: Array<{
        thisOutput: string;
        toName: string;
        toInput: string;
    }>;
    from: Array<{
        thisInput: string;
        fromName: string;
        fromOutput: string;
    }>;
    scope?: IWorkflowScope;
}
export interface IWorkflowNodeInstance extends IWorkflowNodeInstanceConfiguration {
    definition: IWorkflowNodeDefinition;
}
export interface IWorkflowScope {
    nodes: Array<IWorkflowNodeInstance>;
}
export interface IWorkflowScopeConfiguration {
    nodes: Array<IWorkflowNodeInstanceConfiguration>;
}
export interface IWorkflowConfiguration {
    type: "workflow";
    name: string;
    bundle: string;
    label: string;
    description?: string;
    timeout: number;
    scope: IWorkflowScopeConfiguration;
    execution: "instant" | "scheduled";
    runAsUser: "defaultUser" | "currentUser" | string;
}
export interface IWorkflow extends IWorkflowConfiguration {
    scope: IWorkflowScope;
}
export interface IWorkflowJob {
    _id: string;
    jobId: string;
    workflowId: string;
    priority: number;
    progress: number;
    status: "done" | "pending" | "failed";
    jobData: string;
    triggerName: string;
    triggerNodeName?: string;
    start?: Date;
    end?: Date;
    logs: Array<IWorkflowLog & {
        type: "success" | "info" | "warning" | "error";
    }>;
    createdBy: string;
    updatedBy: string;
}
export declare type WorkflowNodeInputOutputData = {
    data: any;
    fieldName: string;
    executable: boolean;
};
export declare type WorkflowNodeInputOutputType = {
    type: WorkflowNodeDefinitionInputOutput;
    fieldName: string;
};
export declare type CallPathType = Array<string>;
export interface IWorkflowLog {
    message: string;
    callPath: string;
    nodeId: string;
    data?: any;
}
export interface IWorkflowOutput {
    jobsStarted: number;
    result: Array<IWorkflowJob>;
}
export interface IWorkflowTriggerPublic {
    workflowName: string;
    type: string;
    name: string;
    configuration?: {
        [key: string]: any;
    };
}
export {};
