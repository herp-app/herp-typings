/**
 * Checks if a object is of an typescript type via an unique key
 *  @param varToBeChecked a object to check
 *  @param propertyToCheckFor a property of the type the object must have 
 */
export const isOfType = <T>(
    varToBeChecked: any,
    propertyToCheckFor: keyof T,
    value?: any | undefined
  ): varToBeChecked is T => {
    if (value === undefined) {
        return (varToBeChecked as T)[propertyToCheckFor] !== undefined;
    }
    return (varToBeChecked as T)[propertyToCheckFor] === value;
};