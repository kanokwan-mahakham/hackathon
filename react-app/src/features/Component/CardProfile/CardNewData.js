import styled from "styled-components";
import { Link } from "react-router-dom";

const CardNewData = ({ user,url, className }) => {
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
              <input placeholder="Description"></input>
            </p>
          </div>
          <div className="line"></div>
          <div className="profile-detail">
            <h1 id="name"><input placeholder="Name"></input></h1>
            <div className="detail" id="location">
              <img src={location} />
              <input placeholder="Address"></input>
            </div>
            <div className="contact">
              <h2>Contact</h2>
              <div className="total-detail">
                <div id="left">
                  <div className="detail" id="เบอร์สำนักงาน">
                    <img src={call} />
                    <input placeholder="Tel"></input>
                  </div>
                  <div className="detail" id="เบอร์ตัวเอง">
                    <img src={telephone} />
                    <input placeholder="Tel"></input>
                  </div>
                  <div className="detail" id="facebook">
                    <img src={facebook} />
                    <input placeholder="Facebook"></input>
                  </div>
                  <div className="detail" id="mail">
                    <img src={mail} />
                    <input placeholder="Email"></input>
                  </div>
                </div>
                <div className="rigth">
                  <div className="detail" id="linkIn">
                    <img src={linkIn} />
                    <input placeholder="Instagram"></input>
                  </div>
                  <div className="detail" id="website">
                    <img src={website} />
                    <input placeholder="Website"></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-chat">
              {user.status == "company" ? (
                <Link to="/profile-company"> <button>SEE PAGE</button></Link>
              ):(
                <Link to="/profile-user"> <button>SEE PAGE</button></Link>
              )}
              
             
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(CardNewData)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  /* Profile */
  .profile {
    display: flex;
    justify-content: center;
    margin: 70px 70px 20px 70px;
  }
  .box-profile {
    background-color: #293241;
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
    font-family: "Lora";
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
