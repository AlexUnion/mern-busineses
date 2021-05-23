import React from "react";
import { types } from "../../data/business.type";

const Selector = ({ title }) => (
    <div>
        <p>{title}</p>
        <select
            size="1"
            className="input"
            defaultValue="none">
            {types.map(({ value, label }) => (
                <option value={value}>{label}</option>
            ))}
        </select>
    </div>
);

export default Selector;
