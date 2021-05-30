import React from "react";
import "./loader.css";

const Loader = () => (
    <>
        <div className='opacity-container'>
        </div>
        <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </>
);

export default Loader;