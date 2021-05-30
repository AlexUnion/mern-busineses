export const required = (value) => value ? null : "Required field!";
export const length = (min = 0, max) => (
    function (value = "") {
        const { length } = value;
        if (length < min) {
            return `Minimum length must be greater than ${min}`;
        } else if (max && length > max) {
            return `The maximum length must be greater than ${max}`;
        }
        return null;
    }
);