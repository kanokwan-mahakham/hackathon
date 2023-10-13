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
        <div className="location" id="header">
          <h1>Location</h1>
          <div id="detail">
            <div id="data">
              <img src={location} />
              <p>192 ถ.หทัยราษฏร์ บางชัน คลองสามวา กทม.10510</p>
            </div>
          </div>
        </div>
        <div className="about-us" id="header">
          <h1>About Us</h1>
          <div id="detail">
            <p>About us</p>
            <p>Help</p>
            <p>Chat</p>
          </div>
        </div>
        <div className="contact" id="header">
          <h1>Contact Us</h1>
          <div id="detail">
            <div id="data">
              <img src={call} />
              <p>02-056-4568 ต่อ 44</p>
            </div>
            <div id="data">
              <img src={telephone} />
              <p>099-386-5212</p>
            </div>
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
  .footer {
    width: 100%;
    height: 350px;
    background-color: #333a56;
    display: flex;
    justify-content: space-around;
  }
  .footer h1 {
    font-size: 30px;
    font-weight: 400;
  }
  .footer #header {
    width: 30%;
    display: flex;
    color: white;
    flex-direction: column;
    padding: 30px 0px 60px 100px;
  }
  .footer #detail {
    margin-left: 30px;
    display: flex;
    flex-direction: column;
  }
  .footer #data {
    display: flex;
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
