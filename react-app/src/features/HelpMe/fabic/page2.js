
import React, { useState } from 'react';
import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom'; 
import backgroundImage from '../../../image Hackathon/image/bg.png';

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const RangeSlider = styled.input`
-webkit-appearance: none;
margin-top: 20px;
width: 90%;
height: 10px;
border-radius: 5px;
background: #d3d3d3;
outline: none;
opacity: 0.7;
-webkit-transition: 0.2s;
transition: opacity 0.2s;

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #000;
  cursor: pointer;
}
`;

const HelpmeFabicTwo = ({ filterProduct, setFilterProduct, className }) => {
    const [sliderValue, setSliderValue] = useState(1000);
    const navigate = useNavigate();

    function filter(){
        const finds = filterProduct.filter((find)=>find.price < sliderValue)
        setFilterProduct(finds)
        navigate('/filter-fabric');
    }

    const handleSliderChange = (e) => {
        setSliderValue(parseInt(e.target.value));
    };

    return (
<div className={className}>
    <div className="container">
     <div className="formHolder">
       <div className="formHeader">
         <p>ร้านขายผ้า (fabric)</p>
         <h3>เรทราคา</h3>
         <h2>เรทราคา/เมตร</h2>
       </div>
       <SliderContainer>
        <RangeSlider
            type="range"
            min="50"
            max="1000"
            step="10"
            value={sliderValue}
            onChange={handleSliderChange}
        />
        </SliderContainer>
        <p>เรทราคา : {sliderValue}</p>
            <div className="groupButton2">
                <button className="select2" onClick={filter}> <span>สำรวจ</span></button>
            </div>
     </div>
   </div>
</div>
    );
};



    export default styled(HelpmeFabicTwo)`

    @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  
   
    @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');

    font: 1em/1.618 Inter, sans-serif;
    
    display: flex;
    align-items: center;
    justify-content: center;
    
    min-height: 100vh;
    padding: 30px;
    
    margin: 0;
    color: #224;
    background-color:#000;
    
    .formHeader p {
      font-size: 25px;
      text-align: center;
      font-weight: bold;
    }
    
    .formHeader h3 {
      font-size: 20px;
      text-align: center;
    }

    .formHeader h2 {
        font-size: 17px;
        text-align: center;
      }
      p{
        font-size: 17px;
        text-align: center;
      }
    
    .groupButton2 {
      display: flex;
      justify-content: space-around;
      min-height: 55%;
      gap: 20px;
    }
    
    .previous {
      text-decoration: none;
      display: inline-block;
      padding: 8px 16px;
      background-color: #f1f1f1;
      color: black;
      border-radius: 50%;
      position: absolute;
      top: 20px;
      left: 20px;
    }
    
    .previous:hover {
      background-color: #ddd;
      color: black;
    }
    
    button.select {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border-radius: 20px;
      max-width: 545px;
      height: 48px;
      background: #000;
      border: none;
    }
    
    button.select:hover {
      border: 2px solid #fff;
    }
    
    button.select span {
      color: #fff;
      text-align: center;
      font-family: 'Lora', serif;
      font-size: 16px;
      font-weight: 300;
    }
    
    .container {
      max-width: 600px;
      width: 100%;
      height: 300px;
      padding: 35px;
      border: 1px solid rgba(255, 255, 255, .25);
      border-radius: 20px;
      background-color: rgba(255, 255, 255, 0.45);
      box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
      backdrop-filter: blur(15px);
    }
    
    input,
    select {
      border: none;
      border-bottom: 2px solid #D3D5F1;
      width: 300px;
      height: 40px;
    }
    
    button {
      background-color: #fff;
      color: #000;
      font-weight: bold;
      font-size:16px;
      border: none;
      border-radius: 50px;
      width: 200px;
      height: 60px;
      margin-top: 40px;
      item-align: center;
      transition: background-color 0.3s ease;
    }
    button:hover {
        background-color: #fff;
      color: #000;
      font-weight: bold;
      font-size:16px;
      border: none;
      border-radius: 50px;
      width: 200px;
      height: 60px;
      margin-top: 40px;
      item-align: center;
      transition: background-color 0.3s ease;
      border: 2px solid #6b78ff;
      }
    `;

