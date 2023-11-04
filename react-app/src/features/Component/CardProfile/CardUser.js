import styled from "styled-components";

const CardUser = ({ className }) => {
  const image = require("../../../image Hackathon/image/background.jpeg");
  const location = require("../../../image Hackathon/icon/pin.png");
  const call = require("../../../image Hackathon/icon/call.png");
  const telephone = require("../../../image Hackathon/icon/telephone.png");
  const facebook = require("../../../image Hackathon/icon/facebook.png");
  const mail = require("../../../image Hackathon/icon/arroba.png");
  const website = require("../../../image Hackathon/icon/world-wide-web.png");
  const linkIn = require("../../../image Hackathon/icon/linkedin-big-logo.png");

  return (
    <div className={className}>
      <div className="profile">
        <div className="box-profile">
          <div className="profile-image">
            <img src={image} />
            <p id="detail">
              รับผลิตและจัดจำหน่ายสินค้าประเภท เสื้อผ้าและถุงผ้าจากประเทศไทย
            </p>
          </div>
          <div className="line"></div>
          <div className="profile-detail">
            <h1 id="name">Kanda Faraga</h1>
            <div className="detail" id="location">
              <img src={location} />
              <p>192 ถ.หทัยราษฏร์ บางชัน คลองสามวา กทม.10510</p>
            </div>
            <div className="contact">
              <h2>ช่องทางการติดต่อ</h2>
              <div className="total-detail">
                <div id="left">
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
                <div className="rigth">
                  <div className="detail" id="linkIn">
                    <img src={linkIn} />
                    <p>Kanda Faraga</p>
                  </div>
                  <div className="detail" id="website">
                    <img src={website} />
                    <p>Kanda Faraga</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-chat">
              {/* <button>Chat</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(CardUser)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  /* Profile */
  .profile {
    display: flex;
    justify-content: center;
    margin: 150px 70px 20px 70px;
  }
  .box-profile {
    background-image: linear-gradient(to bottom, #12136e, #6b78ff);
    width: 1200px;
    height: 650px;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
  .profile-image {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 20px;
    
  }
  .profile-image img {
    width: 280px;
    height: 310px;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  .profile-image #detail {
    width: 280px;
    color: white;
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    line-height: 33px;
  }
  .line {
    border-right: 3px solid white;
    height: 500px;
  }
  .profile-detail {
    display: flex;
    flex-direction: column;
    width: 55%;
    justify-content: center;
    align-items: center;
  }
  .profile-detail #name {
    font-family: "Anuphan";
    font-size: 50px;
    font-weight: 600;
    color: white;
    margin: 10px;
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
    font-size: 18px;
    font-weight: 400;
    color: white;
  }
  .profile-detail #location {
    isplay: flex;
    width: 100%;
    justify-content: center;
  }
  .contact {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .contact h2 {
    font-family: "Anuphan";
    color: white;
    font-size: 30px;
    font-weight: 600;
  }
  .total-detail {
    display: flex;
    width: 100%;
  }
  .total-detail #left {
    width: 50%;
  }
  .total-detail .detail img {
    width: 25px;
    height: 25px;
  }
  .total-detail .detail {
    display: flex;
    padding-left: 50px;
  }
  .button-chat {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 130px;
  }
  .button-chat button {
    width: 130px;
    height: 45px;
    margin: 30px 20px 0px 0px;
    border-radius: 20px;
    font-family: "Lora";
    font-size: 25px;
    font-weight: 600;
    background-color: white;
  }
`;
