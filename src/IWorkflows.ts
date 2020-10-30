import IFields, { IFieldsStorageType, IFieldsFieldMultiple, IField, FieldsCollectionType, IFieldsConfiguration, IFieldConfiguration } from "./IFields";

export type WorkflowNodeTypes = "trigger" | "input" | "action" | "service" | "utility" | "output";

// custom fields for workflows configuration
interface IFieldAny extends IField {
    storageType: "any";
    fieldType: "any";
}
interface IFieldAnyConfiguration extends IFieldConfiguration {
    fieldType: "any";
}

// Node definitions to describe a node inside a workflow
export type WorkflowNodeDefinitionInputOutput = IFields | IFieldAny;
export type WorkflowNodeDefinitionInputOutputCollection = {
    __type: "fieldsCollection",
    items: {
        [keys: string]: WorkflowNodeDefinitionInputOutput;
    }
};

export interface IWorkflowNodeDefinitionBase {
    type: "workflowNodeDefinition";
    nodeType: WorkflowNodeTypes;
    bundle: string;
    name: string;
    configurationStatic: {[key: string]: any};
}
export interface IWorkflowNodeDefinitionConfiguration extends IWorkflowNodeDefinitionBase {
    configurationInstance: {[key: string]: IFieldsConfiguration};
    output: {[key: string]: IFieldsConfiguration | IFieldAnyConfiguration};
    input: {[key: string]: IFieldsConfiguration | IFieldAnyConfiguration};
}
export interface IWorkflowNodeDefinition extends IWorkflowNodeDefinitionBase {
    configurationInstance: FieldsCollectionType;
    output: WorkflowNodeDefinitionInputOutputCollection;
    input: WorkflowNodeDefinitionInputOutputCollection;
}

// An instance of a node definition inside a workflow
export interface IWorkflowNodeInstanceConfiguration {
    nodeDefinition: string; // nodeType.name
    name: string;
    configuration?: {[key: string]: any};
    to: Array<{
        thisOutput: string; // key of the output
        toName: string;
        toInput: string;
    }>;
    from: Array<{
        thisInput: string; // key of the output
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

// A workflow configurationg with nodes defining the tasks 
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


// A workflow job structure to log status
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
    logs: Array< IWorkflowLog & {
        type: "success" | "info" | "warning" | "error";
    }>;
    createdBy: string;
    updatedBy: string;
}


export type WorkflowNodeInputOutputData = {
    data: any;
    fieldName: string;
    executable: boolean;
 };

 export type WorkflowNodeInputOutputType = {
    type: WorkflowNodeDefinitionInputOutput;
    fieldName: string;
 };


export  type CallPathType = Array<string>;

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
    configuration?: {[key: string]: any};
}