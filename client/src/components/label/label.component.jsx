import React from "react";
import "./label.css";

const Label = (props) => {
    const {
        className,
        title,
        required,
        placeholder,
        input,
        meta
    } = props;
    return (
        <div className={className}>
            <label>
                <p>
                    {title}{
                    required ? (<span
                            className="required">*</span>) :
                        null
                }
                </p>
                <input
                    {...input}
                    placeholder={placeholder}
                    required={required}
                    className="input"
                    autoComplete="off"
                />
                <p className='text-red-600 text-sm'>
                    {((meta?.visited && meta?.modified) || meta?.touched) && meta?.error}
                </p>
            </label>
        </div>
    );
};

export default Label;
