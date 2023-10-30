import React from 'react';
import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom'; 

const HelpmeFactoryTwo = ({  filterProduct, setFilterProduct, className }) => {

    const navigate = useNavigate();

    function filter1(){
        const finds = filterProduct.filter((find)=>find.quantity == "1 - 50")
        setFilterProduct(finds)
        navigate('/filter-company');
    }
    function filter2(){
        const finds = filterProduct.filter((find)=>find.quantity == "51 - 100")
        setFilterProduct(finds)
        navigate('/filter-company');
    }
    function filter3(){
        const finds = filterProduct.filter((find)=>find.quantity == "100 ตัวขึ้นไป")
        setFilterProduct(finds)
        navigate('/filter-company');
    }

    return (
        <div className={className}>
            <body>
            <div className="content">
                <div className="container">
                    <h1>Factory</h1>
                    <div className="group-underline">
                        <div className="underline"></div>
                        <div className="underline2"></div>
                    </div>
                    <Link to="/" className="previous"> &#8249;</Link>
                    <div className="group-container">
                        <div className="container-inside1">
                            <div className="groupButton">
                                <button className="button2">หมวดหมู่</button>
                                <button className="button1">จำนวนสินค้า</button>
                               
                            </div>
                        </div>
                        <div className="container-inside2">
                            <div className="grouph2">
                                <h2>เลือกจำนวนสินค้าที่คุณต้องการ</h2>
                            </div>
                           
                            <div className="groupButton1">
                                <button className="select" onClick={filter1}><span>1 - 50 ตัว</span> </button>
                                <button className="select" onClick={filter2}><span>51 - 100 ตัว</span> </button>
                                <button className="select" onClick={filter3}><span>100 ตัวขึ้นไป</span> </button>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
            </body>
        </div>
    );
};



    export default styled(HelpmeFactoryTwo)`
   

    @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');

    background-color: rgba(198, 204, 215, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin: 0;
  
    .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      width:1100px;
      height:50%;
    }
  
    h1 {
      font-size: 40px;
      font-weight: bold;
      text-align: center;
      font-family: 'Lora';
    }
  
    .group-underline {
      display: flex;
      justify-content: center;
    }
  
    .underline {
      width: 70%;
      height: 1px;
      background: #000;
      margin-bottom: 25px;
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
  
    .group-container {
      display: flex;
      
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  
    .container-inside1 {
      border-radius: 20px;
      margin-top:3%;
      background: #C6CCD7;
      width: 70%;
      min-height: 55px;
    }
  
  
    .groupButton {
      display: flex;
      justify-content: space-around;
      min-height: 55%;
    }
  
    button.button1 {
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
  
    button.button2 {
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
  
    .container-inside2 {
      width: 100%;
      min-height:250px;
      height: auto;
      border-radius: 20px;
      margin-top: 4%;
      box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
      background: #333A56;
    }
  
    
  
  
    .grouph2 {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
    }
  
    h2 {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-content: center;
      align-items: center;
      color: #fff;
      font-family: 'Lora', serif;
      font-weight: 500;
    }
  
    .groupButton1 {
      display: flex;
      justify-content: space-around;
      margin-top: 50px;
    }
  
  button.select {
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
  
  button.select:hover {
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
  
    @media (max-width: 768px) {
      .container {
        margin: 10px;
        padding: 10px;
        border-radius: 20px;
        width: 50%;
        height: auto;
        max-width: 100%;
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
          border-radius: 20px;
          margin-top:5%;
          background: #C6CCD7;
          width: 70%;
          min-height: 55px;
        }
  
        .container-inside2 {
          width: 100%;
          height: auto;   
          border-radius: 20px;
          margin-top: 4%;
          box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
          background: #333A56;
        }
      
    }
    `;
