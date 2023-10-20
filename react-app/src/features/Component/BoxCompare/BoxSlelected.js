import styled from "styled-components";

const BoxSelected = ({ className }) => {
  const cancel = require("../../../image Hackathon/icon/cancel.png");
  return (
    <div className={className}>
      <div className="box">
        <img src={cancel} />
        <div className="box-detail">
          <div id="name">
            <h1>Thumbinthai</h1>
          </div>
          <div className="detail">
            <p>รับผลิตและจัดจำหน่ายสินค้าประเภทเสื้อผ้าและถุงผ้าจาก ประเทศไทย</p>
          </div>
          <button className="button-detail">รายละเอียด</button>
        </div>
      </div>
    </div>
  );
};

export default styled(BoxSelected)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  display: flex;

  .box {
    position: relative;
  }
  .box img {
    position: absolute;
    top: -20px;
    right: 25px;
    width: 45px;
    height: 45px;
  }
  .box-detail {
    width: 310px;
    height: 350px;
    margin-right: 35px;
    border-radius: 10px;
    border: 3px solid #807d7d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .box-detail h1{
    font-family: "Lora";
    font-size: 35px;
    font-weight: 600;
  }
  .detail p{
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 18px;
    line-height: 30px;
  }
  .button-detail{
    width: 200px;
    height: 50px;
    border-radius: 30px;
    font-family: "Anuphan";
    font-size: 19px;
    font-weight: 500;
    background-color: #333A56;
    color: white;
  }
`;
