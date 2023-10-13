// BoxComponent.js
import React from 'react';

const BoxComponent = ({ backgroundImage, buttonText }) => {
    const boxContentStyle = {
        background: backgroundImage, // Apply the background image here
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };

    return (
        <div className="box">
            <div className="box-content" style={boxContentStyle}>
                <button className="button">{buttonText}</button>
            </div>
        </div>
    );
};

export default BoxComponent;
