import React from 'react';
import SuccessMessage from '../../../../Component/succesmessage';
import styled from 'styled-components';

const LoginSuccess = styled.div`
    background-color: rgba(0, 0, 0, 0.2); /* RGBA color with 0.7 alpha (70% opacity) */
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
`;

const LoginSuccessComponent = () => {
    return (
        <LoginSuccess>
            <SuccessMessage
                title="User completes a successful login."
                buttonText="ENTER"
            />
        </LoginSuccess>
    );
};

export default LoginSuccessComponent;
