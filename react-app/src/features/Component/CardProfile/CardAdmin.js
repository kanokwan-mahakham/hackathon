import styled from "styled-components";

const CardAdmin = ({ className }) => {
  const image = require("../../../image Hackathon/image/background.jpeg");
  const call = require("../../../image Hackathon/icon/call (1).png");
  const telephone = require("../../../image Hackathon/icon/telephone (1).png");
  const facebook = require("../../../image Hackathon/icon/facebook (1).png");
  const mail = require("../../../image Hackathon/icon/email.png");

  return (
    <div className={className}>
      <div className="profile">
        <div id="name">
          <h1>StylePathPro</h1>
        </div>
        <div className="data-admin">
          <div className="detail" id="เบอร์สำนักงาน">
            <img src={call} />
            <p>02-056-4568 ต่อ 44</p>
          </div>
          <div className="detail" id="เบอร์ตัวเอง">
            <img src={telephone} />
            <p>099-386-5212</p>
          </div>
          <div className="detail" id="facebook">
            <img src={facebook} />
            <p>Kanda Faraga</p>
          </div>
          <div className="detail" id="mail">
            <img src={mail} />
            <p>Kanda.Faraga@gmail.com</p>
          </div>
        </div>
        <div className="photo">
          <img src={image} />
        </div>
      </div>
    </div>
  );
};

export default styled(CardAdmin)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  position: relative;

  .profile {
    position: relative;
    display: flex;
    flex-direction: row;
    margin-top:70px;
  }
  .data-admin {
    width: 550px;
    border: 1px solid;
    border-radius: 20px;
    padding: 30px;
    margin: 30px;
  }
  .profile #name {
    position: relative;
    top: -35px;
    left: 350px;
    background-color: white;
    height: 100px;
  }
  .profile #name h1 {
    font-size: 50px;
    font-weight: 600;
  }
  .detail {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .detail img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  .detail p {
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 500;
    color: black;
  }
  .photo img {
    top: 45px;
    right: 200px;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 50%;
  }
`;
