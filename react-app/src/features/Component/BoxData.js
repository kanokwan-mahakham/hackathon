import styled from "styled-components";
const BoxData = ({ className }) => {
  const save = require("../../image Hackathon/icon/save-instagram.png");
  const image = require("../../image Hackathon/image/background.jpeg");

  return (
    <div className={className}>
      <div className="box">
        <img src={image} id="box-image"></img>
        <div className="box-detail">
          <p id="name">Thumbinthai</p>
          <p id="detail">
            รับผลิตและจัดจำหน่ายสินค้าประเภทเสื้อผ้าและถุงผ้าจากประเทศไทย
          </p>
          <div className="button">
            <button className="conpare-button">เปรียบเทียบ +</button>
            <img src={save} id="save-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(BoxData)`
  .box {
    position: relative;
  }
  .box #box-image {
    width: 420px;
    height: 470px;
    border-radius: 30px;
    margin: 10px 30px 30px 0px;
  }
  .box-detail {
    display: flex;
    text-align: center;
    position: absolute;
    bottom: 60px;
    left: 40px;
    background-color: white;
    width: 340px;
    height: 170px;
    border-radius: 30px;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
  }
  .image {
    flex: 1;
    overflow: hidden;
  }
  .box-detail #name {
    font-family: "Anuphan";
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 8px;
  }
  .box-detail #detail {
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 40;
    margin: 0px 30px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .conpare-button {
    background-color: #c6ccd7;
    width: 120px;
    height: 30px;
    margin: 10px;
    border-radius: 30px;
    border: none;
    font-size: 15px;
  }
  .button #save-button {
    width: 25px;
    height: 25px;
  }
`;
