import React from "react";
import { types } from "../../data/business.type";

const Selector = ({ title, className, required, input, meta }) => (
    <div className={className}>
        <p>
            {title}{
            required ? (<span
                    className="required">*</span>) :
                null
        }
        </p>
        <select
            {...input}
            size="1"
            className="input">
                <option disabled value="none">
                        Виберіть тип
                </option>
                {types.map(({ value, label }, index) => (
                    <option key={index}
                            value={value}>
                        {label}
                    </option>
                ))}
        </select>
        <p className='text-red-600 text-sm'>
            {((meta?.visited && meta?.modified) || meta?.touched) && meta?.error}
        </p>
    </div>
);

export default Selector;
