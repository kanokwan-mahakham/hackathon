
import React from 'react';
import SuccessMessage from '../../../../Component/succesmessage';
import styled from 'styled-components';

const RegSucces = styled.div`
    background-color: rgba(0, 0, 0, 0.2); /* RGBA color with 0.7 alpha (70% opacity) */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`;

const RegSuccesComponent = () => {
    return (
        <RegSucces>
            <SuccessMessage
                title="Please wait for the admin to check the information."
                buttonText="ENTER"
            />
        </RegSucces>
    );
};

export default RegSuccesComponent;
