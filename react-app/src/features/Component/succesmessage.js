import React from 'react';
import styled from 'styled-components';

const SuccessMessage = ({ title, buttonText }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <Button>{buttonText}</Button>
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
    width: 500px;
    height: 570px;
    flex-shrink: 0;
    background-color: #FFFFFF;
    border-radius: 54px;
    padding: 30px;
    padding-top: 50px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.40);

`;

const Title = styled.h1`
    font-size: 43px;
    font-weight: bold;
    margin: 10px;
    text-align: center;
`;

const Button = styled.button`
    padding: 15px 10px;
    display: flex;
    justify-content: center;
    width: 213px;
    height: 59px;
    border-radius: 25px;
    background-color: #000;
    color: #FFFFFF;
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    border: none;
    cursor: pointer;
`;

export default SuccessMessage;
    