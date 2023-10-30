import React, { useState } from 'react';
import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom'; 

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
  background: #4caf50;
  cursor: pointer;
}
`;

const HelpmeFabicTwo = ({ filterProduct, setFilterProduct, className }) => {
    const [sliderValue, setSliderValue] = useState(1000);
    const navigate = useNavigate();

    function filter(){
        const finds = filterProduct.filter((find)=>find.price <= sliderValue)
        setFilterProduct(finds)
        navigate('/filter-fabric');
    }

    const handleSliderChange = (e) => {
        setSliderValue(parseInt(e.target.value));
    };

    return (
        <div className={className}>
            <div className='body'>
            <div className="content">
                <div className="container">
                    <h1>fabric    </h1>
                    <div className="group-underline">
                        <div className="underline"></div>
                        <div className="underline2"></div>
                    </div>
                    <Link to="/" className="previous"> &#8249;</Link>
                    <div className="group-container">
                        <div className="container-inside1">
                            <div className="groupButton">
                            
                            <button className="button2">หมวดหมู่</button>
                            
                                <button className="button1">เรทราคา</button>
                            </div>
                        </div>
                        <div className="container-inside2">
                            <div className="grouph2">
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
            </div>
            </div>
        </div>
    );
};



    export default styled(HelpmeFabicTwo)`

    @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
        
            background-color: rgba(198, 204, 215, 0.7);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            font-family: 'Lora';
    

       
        
        .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width:1100px;
            height:50%;
          }
        p{
            font-size: 20px;
            color:#fff;
            text-align: center;
            font-family: 'Lora';
        }

        h1 {
            font-size: 40px;
            font-weight: bold;
            text-align: center;
            font-family: 'Lora';
        }
        .group-underline{
            display: flex;
            justify-content: center

        }

        .underline {
            max-width:800px;
            width:100%;
            height: 1.444px;
            background: #000;
            margin-bottom:25px;
        }
        
        .container {
            width: 100%;
            height: 500px;
            max-width: 1200px;
            background-color: #ffffff;
            border-radius: 20px;
            display: flex;
            flex-direction: column;
            box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
        }
        .group-container{
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

        }

        .container-inside1{
            border-radius: 20px;
    margin-top:1%;
    background: #C6CCD7;
    width: 70%;
    min-height: 55px;
        } 
    

        .groupButton{
            display: flex;
            justify-content: space-around;
        }

        button.button1
        {
            flex: 1;
            max-width: 177px;
            height: 38px;
            border-radius: 20px;
            background: #333A56;
            margin-top: 12px;
            color: #FFF;
            text-align: center;
            font-family: 'Lora', serif;
            font-size: 20px;
            font-weight: 500;
            line-height: normal;
            border: none;
        }

        button.button2
        {
            flex: 1;
            max-width: 177px;
            height: 38px;
            border-radius: 20px;
            background: #C6CCD7;
            margin-top: 12px;
            color: #333A56;
            text-align: center;
            font-family: 'Lora', serif;
            font-size: 20px;
            font-weight: 500;
            line-height: normal;
            border: none;
        }

        /* button.button2:hover
        {
            width: 177px;
            height: 38px;
            flex-shrink: 0;
            border-radius: 20px;
            background: #333A56;border-radius: 20px;
            background: #333A56;
            margin-top:13px;
            color: #FFF;
            text-align: center;
            font-family: 'Lora', serif; 
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
            border: none;
        } */


        .container-inside2{
            width: 100%;
            min-height:270px;
            height: auto;
            border-radius: 20px;
            margin-top: 4%;
            box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
            background: #333A56;
        }

        .grouph2{
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-around;
        }

        h2{
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            align-content: center;
            align-items: center;
            font-family: 'Lora';
            font-weight: 500;
            color:#fff;
        }
       

        .groupButton1{
            display:flex;
            justify-content: space-around;
            margin-top:20px;
        }

        .groupButton2{
            display:flex;
            align-content: center;
            justify-content: center;
            margin-top:50px;
            margin-bottom:10px;
        }

        button.select{
            display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center text both horizontally and vertically */
  border-radius: 20px;
  max-width: 145px;
  width:100%;
  height: 48px;
  background: #FFFFFF;
  border: none;
        }

        button.select:hover{
            display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; /* Center text both horizontally and vertically */
  border-radius: 20px;
  max-width: 145px;
  height: 48px;
  background: #C6CCD7;
  border: 2px solid #fff;
        }
        
        
        button.select span {
            color: #000;
            text-align: center;
            font-family: 'Lora', serif; 
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;

        }

    
        
        button.select2{
            margin-left:15px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            border-radius: 20px;
            width: 145px;
            height: 48px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            background: #C6CCD7;
            padding:0px;
            border: none;
        }

        button.select2:hover{
            margin-left:15px;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-content: center;
            border-radius: 20px;
            width: 145px;
            height: 48px;
            flex-direction: column;
            justify-content: center;
            flex-shrink: 0;
            background: #000;
            padding:0px;
            
        }
        button.select2 span {
            color: #000;
            text-align: center;
            font-family: 'Lora', serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
        }

        button.select2:hover span {
            color: #fff ;
            text-align: center;
            font-family: 'Lora', serif;
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
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
            left: 40px;
        }

        .previous:hover {
            background-color: #ddd;
            color: black;
        }

        @media (max-width: 768px) {
    .container {
        margin: 10px;
        border-radius: 20px;
        width: 50%;
        height: auto;
        max-width: 90%;
        max-height: none;  
    }

    h1 {
      font-size: 30px;
    }

    .underline {
      width: 100%;
    }

    .previous {
      top: 10px;
      left: 10px;
    }

    .container-inside1 {
      width: 100%;
      max-width: 90%;
      margin-top: 5%;
    }

    .container-inside2 {
      width: 100%;
      min-height: 200px;
      border-radius: 20px;
      margin-top: 4%;
      box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
      background: #333A56;
    }
  }
    `;

