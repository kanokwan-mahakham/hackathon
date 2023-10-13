import React from 'react';

const InputField = ({ placeholder, type, icon }) => {
    return (
        <div className="input-container">
            <input type={type} placeholder={placeholder} />
            {icon && <div className="icon-container">{icon}</div>}
        </div>
    );
};

export default InputField;
