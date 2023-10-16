import React, { useState } from 'react';
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


const InputRegField = ({ placeholder, type,onChange, icon }) => {

    const [newType,setNewType] = useState(type);
    const [newIcon,setNewIcon] = useState(icon);

    function changeType(){
        if(newType==="password"){
            setNewType("Text")
            setNewIcon() //icon open eyes
        }else{
            setNewType("password")
            setNewIcon() //icon close eyes
        }
        
    }

    return (
        <InputContainer>
            <Input type={newType} placeholder={placeholder} onChange={onChange} />
            {icon && <IconContainer onClick={changeType}>{newIcon}</IconContainer>}
        </InputContainer>
    );
};

export default Input;
