
import React from 'react';
import styled from 'styled-components';
import { Link,useNavigate } from 'react-router-dom'; 
import backgroundImage from '../../../image Hackathon/image/bg.png';

const HelpmeFabicOne = ({  filterProduct, setFilterProduct, className }) => {

    const navigate = useNavigate();

    function filter1(){
        const finds = filterProduct.filter((find)=>find.typeProduct == "ผ้าไหม")
        setFilterProduct(finds)
        navigate('/HelpmeFabicTwo');
    }
    function filter2(){
        const finds = filterProduct.filter((find)=>find.typeProduct == "ผ้าฝ้าย")
        setFilterProduct(finds)
        navigate('/HelpmeFabicTwo');
    }
    function filter3(){
        const finds = filterProduct.filter((find)=>find.typeProduct == "ผ้าลินิน")
        setFilterProduct(finds)
        navigate('/HelpmeFabicTwo');
    }

    return (
        <div className={className}>
         <Link to="/" className="previous"> &#8249;</Link>
      <div className="container">
     
        <div className="formHolder">
          <div className="formHeader">
            <p>ร้านขายผ้า (fabric)</p>
            <h3>หมวดหมู่</h3>
            <h3>สินค้าของคุณมีลักษณะเป็นแบบใด</h3>
          </div>
            <div className="groupButton1">
              <button className="select" onClick={filter1}><span>ผ้าไหม</span> </button>
              <button className="select" onClick={filter2}><span>ผ้าฝ้าย </span> </button>
              <button className="select" onClick={filter3}><span>ผ้าลินิน</span> </button>
            </div>
        </div>
      </div>
    </div>

    );
};




export default styled(HelpmeFabicOne)`
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

.groupButton1 {
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
  background-color: #24245C;
  color: white;
  border: none;
  border-radius: 50px;
  width: 200px;
  height: 60px;
  margin-top: 40px;
}
  }
`;