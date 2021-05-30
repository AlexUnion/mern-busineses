import React from "react";

const TextArea = ({ placeholder, input, meta }) => (
    <div>
        <textarea placeholder={placeholder}
                  {...input}
                  className='w-full mt-3'/>
        <p className='text-red-600 text-sm'>
            {((meta?.visited && meta?.modified) || meta?.touched) && meta?.error}
        </p>
    </div>
);

export default TextArea;
