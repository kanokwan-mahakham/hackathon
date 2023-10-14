import React from 'react';
import styled from 'styled-components';

const BoxComponent = ({ backgroundImage, buttonText, className }) => {
    return (
        <div className={className}>
            <Box>
                <BoxContent backgroundImage={backgroundImage}>
                    <button className="button">{buttonText}</button>
                </BoxContent>
            </Box>
        </div>
    );
};

const Box = styled.div`
    width: 420px;
    height: 478.841px;
    border-radius: 30px;
    background-color: #EDEDED;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const BoxContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    border-radius: 30px;
    background: ${props => `url(${props.backgroundImage}) center / cover no-repeat`};
`;

export default styled(BoxComponent)`
    .button {
        margin-top: 20px; /* Adjusted the margin */
        padding: 10px 20px;
        width: 200px; /* Adjusted the width */
        height: 50px; /* Adjusted the height */
        border-radius: 25px;
        background-color: #F9F8EE;
        color: #000;
        font-size: 16px; /* Adjusted the font size */
        font-weight: bold;
        text-align: center;
        border: none;
        margin-bottom:30px;
        cursor: pointer;
    }
`;

