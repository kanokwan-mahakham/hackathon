import styled from "styled-components";

const Footer = ({ className }) => {
  const location = require("../../image Hackathon/icon/pin.png");
  const call = require("../../image Hackathon/icon/call.png");
  const telephone = require("../../image Hackathon/icon/telephone.png");
  const facebook = require("../../image Hackathon/icon/facebook.png");
  const mail = require("../../image Hackathon/icon/arroba.png");

  return (
    <div className={className}>
      <div className="footer">
        <div className="contact" id="header">
          <h1>StylePathPro</h1>
          <p>
            
            ไม่ว่าคุณจะเริ่มต้นต้นธุรกิจเสื้อผ้าใหม่หรือต้องการเพิ่มความหลากหลายในการผลิตเสื้อผ้าที่คุณขายอยู่ในขณะนี้<br/>
            ที่นี่เป็นที่ที่คุณจะพบทุกสิ่งที่คุณต้องการเพื่อสร้างเสื้อผ้าที่ดีและที่เป็นคุณ!
            <br />
            เริ่มต้นด้วยการเยี่ยมชมเว็บไซต์ของเราและค้นหาทรัพยากรที่คุณต้องการเพื่อเปิดทางสู่ความสำเร็จในธุรกิจเสื้อผ้าของคุณได้ที่นี่!
          </p>
          <div id="detail">
            <div id="data">
              <img src={facebook} />
              <p>StylePathPro</p>
            </div>
            <div id="data">
              <img src={mail} />
              <p>Dev@StylePathPro.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Footer)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .footer {
    width: 100%;
    height: 350px;
    background-color: black;
    display: flex;
    justify-content: space-around;
  }
  .footer h1 {
    font-size: 30px;
    font-weight: 400;
  }
  .footer #header {
    width: 100%;
    display: flex;
    color: white;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
  .footer #header p{
    font-family: "Anuphan";
    font-weight: 400;
    font-size: 18px;
    line-height: 37px;
  }
  .footer #detail {
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    
  }
  .footer #data {
    display: flex;
    align-items: center;
    margin-right: 20px;
  }
  .footer img {
    width: 25px;
    height: 25px;
    margin: 10px 20px 10px 0px;
  }

  .about-us #detail {
    font-size: 17px;
  }
`;
