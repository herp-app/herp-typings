import ILayout from "./ILayout";
import IEntity, { IEntityReference } from "./IEntity";
/**
 * Interface for Forms
 */
export default interface IForm {
    type: "form";
    name: string;
    bundle: string;
    label: string;
    description: string;
    entityReference: IEntityReference;
    entityConfig?: IEntity;
    fieldMapping: Array<string>;
    layout?: ILayout;
}
