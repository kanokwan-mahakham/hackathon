import React from 'react';
import styled from 'styled-components';
const InputContainer = styled.div`
display: flex;
height: 34.65px;
padding: 5.775px 3.663px;
align-items: center;
gap: 70px;
border-radius: 8.663px;
border: 0.722px solid #DBDBDB;
margin-top: 10px;
flex-direction: row;
flex-wrap: nowrap;
align-content: flex-end;
align-items: center;
`;

const Input = styled.input`
color: #807D7D;
font-family: 'Open Sans';
font-size: 11.55px;
font-weight: 400;
line-height: 17.325px;
border: none;
outline: none;
text-align: center  ;
`;

const IconContainer = styled.div`
width: 14.438px;
height: 14.438px;
margin-left: 100px ;
`;

const InputLoginFields = ({ icon, placeholder }) => {
    return (
        <InputContainer>
            <IconContainer>{icon}</IconContainer>
            <Input type="text" placeholder={placeholder} />
        </InputContainer>
    );
};

export default InputLoginFields;
