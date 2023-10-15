
import React from 'react';
import SuccessMessage from '../../../../Component/succesmessage';
import styled from 'styled-components';

const StyleMessage = styled.div`
    background-color: rgba(0, 0, 0, 0.2); /* RGBA color with 0.7 alpha (70% opacity) */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`;

const PopupProductSucces = () => {
    return (
        <StyleMessage>
            <SuccessMessage
                title="Please wait for the wait for update the product"
                buttonText="ENTER"
            />
        </StyleMessage>
    );
};

export default PopupProductSucces;
