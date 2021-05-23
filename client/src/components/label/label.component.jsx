import React from "react";
import "./label.css";

const Label = (props) => {
    const { className, title, required, ...rest } = props;
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
                    {...rest}
                    required={required}
                    className="input"
                />
            </label>
        </div>
    );
};

export default Label;
