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
min-height: 420px; /* Adjust the desired height */
min-width: 400px;
  background-color: #EDEDED;
  text-align: center;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;

  @media (max-width: 768px) {
    height: 70%;
    width:70%; 
    border-radius: 30px;
    background-color: #EDEDED;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
  } 
`;


const BoxContent = styled.div`
    min-height: 420px; 
    min-width: 400px;
    display: flex;    
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  border-radius: 30px;
  background: ${props => `url(${props.backgroundImage}) center / cover no-repeat`};

  @media (max-width: 768px) {
    width: 30%;
    border-radius: 30px;
    height: auto;
    max-width:420px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    overflow: hidden;
    border-radius: 30px;
    background: ${props => `url(${props.backgroundImage}) center / cover no-repeat`};
  }
`;


export default styled(BoxComponent)`
  .button {
    margin-top: 20px;
    padding: 10px 20px;
    border-radius: 25px;
    background-color: #F9F8EE;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    text-align: center;
    border: none;
    margin-bottom: 20px;
    cursor: pointer;
    

    @media (max-width: 768px) {
      font-size: 14px; /* Adjust font size for smaller screens */
    }
  }
  a{
    text-decoration: none;
  }
`;
