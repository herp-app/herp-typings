import { IEntityConfiguration } from "./IEntity";
import {IView} from "./IView";
import {IForm} from "./IForm";
import { IMenuConfiguration } from "./IMenu";
import { IWorkflowConfiguration, IWorkflowNodeDefinitionConfiguration } from "./IWorkflows";
import {IBundle} from "./IBundle";


// Some configuration types have extra configuration interfaces, some not.
export type ConfigurationTypes =  IEntityConfiguration | IView | IForm | IMenuConfiguration | IWorkflowConfiguration | IBundle | IWorkflowNodeDefinitionConfiguration;