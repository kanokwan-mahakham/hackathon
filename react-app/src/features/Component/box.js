import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


const BoxComponent = ({ backgroundImage, buttonText,path, className }) => {
    return (
        <div className={className}>
            <Box>
                <BoxContent backgroundImage={backgroundImage}>
                    <button className="button"><Link to={path}>{buttonText}</Link></button>
                
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
        border-radius: 25px;
        background-color: #F9F8EE;
        color: #000;
        font-size: 16px; /* Adjusted the font size */
        font-weight: bold;
        text-align: center;
        border: none;
        margin-bottom: 30px;
        cursor: pointer;
    }
`;
