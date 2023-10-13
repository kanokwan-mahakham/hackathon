import React from 'react';

const Button = ({ text, onClick }) => {
    return (
        <div className="button" onClick={onClick}>
            <span className="button-text">{text}</span>
        </div>
    );
};

export default Button;