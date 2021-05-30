import React from "react";
import { types } from "../../data/business.type";

const Selector = ({ title, className, input }) => (
    <div className={className}>
        <p>{title}</p>
        <select
            {...input}
            size="1"
            className="input"
            defaultValue="none">
            {types.map(({ value, label }, index) => (
                <option key={index}
                        value={value}>
                    {label}
                </option>
            ))}
        </select>
    </div>
);

export default Selector;
