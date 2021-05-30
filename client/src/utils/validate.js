import { types } from "../data/business.type";

export const isRequired = (value) => value ? undefined : "Required field!";
export const hasLength = (min = 0, max) => (
    function (value = "") {
        const { length } = value;
        if (length < min) {
            return `Minimum length must be greater than ${min}`;
        } else if (max && length > max) {
            return `The maximum length must be greater than ${max}`;
        }
        return undefined;
    }
);
export const validateType = (current) => {
    const hasType = types.findIndex(({value}) => (value === current));
    return ~hasType ? undefined : "Invalid type!";
};
