// components/SuccessMessage.js
import React from 'react';

const SuccessMessage = ({ title, buttonText }) => {
    return (
        <div className="container">
            <h1>{title}</h1>
            <button className="button">{buttonText}</button>
        </div>
    );
};

export default SuccessMessage;
