import styled from "styled-components";

const PopupCompare = ({ className, onClose }) => {
  const cancle = require("../../image Hackathon/icon/cancel.png");
  return (
    <div className={className}>
      <div className="box-compare">
        <div className="box">
          <img src={cancle} alt="ปิด" id="close-button" />
          <div className="box-name">
            <img src={cancle} alt="ปิด" id="close-name" />
            <p>Pan Apace</p>
          </div>
          <div className="box-name">
            <img src={cancle} alt="ปิด" id="close-name" />
            <p>Thumbinthai</p>
          </div>
          <div className="box-name">
            <img src={cancle} alt="ปิด" id="close-name" />
            <p>Sahawath</p>
          </div>
        </div>
        <div className="btn">
          <button className="btn-compare-seleced">เปรียบเทียบ</button>
          <button className="btn-clean-seleced">ล้างตัวเลือก</button>
        </div>
      </div>
    </div>
  );
};

export default styled(PopupCompare)`
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
  }
  .box-name {
    position: relative;
    top: 10px;
    width: fit-content;
    padding: 5px 20px;
    height: 50px;
    color: #333A56;
    background-color: #c6ccd7;
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
    right: -10px;
    width: 27px;
    height: 27px;
  }
  .box {
    display: flex;
    justify-content: center;
  }
  .btn{
    position: absolute;
    display: flex;
    width: 100%;
    bottom: 10px;
    justify-content: center;
  }
  .btn button{
    width: 150px;
    height: 40px;
    border-radius: 5px;
    margin-right: 20px;
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 500;
    
  }
  .btn-compare-seleced{
    background-color: #333A56;
    color:white;
    border:none;
  }
`;
