import styled from "styled-components";
import { Link } from "react-router-dom";
import Item from "./BoxCompare/Item";

const PopupCompare = ({ url, compares, setCompares, className }) => {
  const cancle = require("../../image Hackathon/icon/cancel.png");

  function closePopup() { 
    setCompares([]);
  }

  

  return (
    <div className={className}>
      <div className="box-compare">
        <div className="box">
          <img src={cancle} alt="ปิด" id="close-button" onClick={closePopup} />

          {compares.map((compare) => (
            <Item  key={compare.id} url={url} item={compare} compares={compares} setCompares={setCompares}/>
          ))}

        </div>
        <div className="btn">
          
          <button className="btn-compare-seleced"><Link to="/compare">เปรียบเทียบ</Link></button>
          <button className="btn-clean-seleced" onClick={closePopup}>ล้างตัวเลือก</button>
        </div>
      </div>
    </div>
  );
};

export default styled(PopupCompare)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .box-compare {
    position: fixed;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 1px solid #ccc;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1;
    width: 800px;
    height: 120px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
  }

  .box-compare #close-button {
    position: absolute;
    top: -20px;
    right: -20px;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .box-name {
    position: relative;
    top: 10px;
    width: fit-content;
    padding: 5px 20px;
    height: 50px;
    color: black;
    background-color: #ff9d00;
    display: flex;
    border-radius: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  }
  .box-name p {
    font-family: "Lora";
    font-weight: 500;
    font-size: 25px;
  }
  .box-name #close-name {
    position: absolute;
    top: -10px;
    right: -6px;
    width: 27px;
    height: 27px;
    cursor: pointer;
  }
  .box {
    display: flex;
    justify-content: center;
  }
  .btn {
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 10px;
    justify-content: center;
  }
  .btn button {
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin-right: 20px;
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
  }
  .btn-compare-seleced {
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
    border: none;
    cursor: pointer;
  }
  .btn-compare-seleced a{
    text-decoration: none;
    color: white;
  }
`;
