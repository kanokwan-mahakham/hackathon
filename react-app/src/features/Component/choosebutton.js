// components/Button.js
import React from 'react';

const Button = ({ text }) => {
    return (
        <button className="button">
            {text}
        </button>
    );
};

export default Button;
