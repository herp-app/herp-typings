"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOfType = void 0;
/**
 * Checks if a object is of an typescript type via an unique key
 *  @param varToBeChecked a object to check
 *  @param propertyToCheckFor a property of the type the object must have
 */
exports.isOfType = (varToBeChecked, propertyToCheckFor, value) => {
    if (value === undefined) {
        return varToBeChecked[propertyToCheckFor] !== undefined;
    }
    return varToBeChecked[propertyToCheckFor] === value;
};
//# sourceMappingURL=Utils.js.map