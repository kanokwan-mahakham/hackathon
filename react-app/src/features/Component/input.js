import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
display: flex;
height: 34.65px;
padding: 5.775px 8.663px;
align-items: center;
gap: 100px;
border-radius: 8.663px;
border: 0.722px solid #DBDBDB;
margin-top: 10px;
flex-direction: row;
flex-wrap: nowrap;
align-content: flex-end;
justify-content: space-between;
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
`;

const IconContainer = styled.div`
    width: 14.438px;
    height: 14.438px;
    margin-left: 130px;
`;

const InputField = ({ placeholder, type, icon }) => {
    return (
        <InputContainer>
            <Input type={type} placeholder={placeholder} />
            {icon && <IconContainer>{icon}</IconContainer>}
        </InputContainer>
    );
};

export default InputField;
