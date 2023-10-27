import styled from "styled-components";

const Chat = ({ className }) => {
  const cancle = require("../../image Hackathon/icon/cancel.png");
  const chat = require("../../image Hackathon/icon/bubble-chat.png");
  const file = require("../../image Hackathon/icon/attach-file.png");
  const send = require("../../image Hackathon/icon/send 2.png");
  return (
    <div className={className}>
      <div className="popup-chat">
        <div className="header">
          <p>Chat messages</p>
          <div className="btn-header">
            <img src={chat} id="btn-chat" />
            <img src={cancle} id="btn-cancle" />
          </div>
        </div>
        
        <div className="body-chat">
          <div className="right">
            <div id="text-right">
              <p>สู้ดิว่ะ</p>
            </div>
          </div>
          <div className="left">
            <div id="text-left">
              <p>ดูชาวบ้านบางระจัน</p>
            </div>
          </div>
          <div className="left">
            <div id="text-left">
              <p>เป็นตัวอย่าง</p>
            </div>
          </div>
          <div className="right">
            <div id="text-right">
              <p>ทำไมอ่ะ</p>
            </div>
          </div>
          <div className="left">
            <div id="text-left">
              <p>ไม่มีไรอ่ะสุดท้ายเค้าก็ตายอยู่ดี</p>
            </div>
          </div>
          <div className="right">
            <div id="text-right">
              <p>อ้าว</p>
            </div>
          </div>
          <div className="right">
            <div id="text-right">
              <p>แล้วจะพูดทำไม</p>
            </div>
          </div>
        </div>
        <div className="box-send-messages">
          <input id="input-messages"></input>
          <div className="btn-send-messages">
            <img src={file} />
            <img src={send} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Chat)`
  .popup-chat {
    position: fixed;
    bottom: 20px;
    right: 7px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 5;
    width: 320px;
    height: 400px;
    border-radius: 10px;
  }
  .header {
    width: 100%;
    height: 60px;
    background-color: #293241;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header p {
    color: white;
    font-family: "Lora";
    font-weight: 500;
    font-size: 20px;
    margin-left: 15px;
  }
  .btn-header img {
    width: 25px;
    height: 25px;
    margin-right: 10px;
  }
  .btn-header {
    display: flex;
    align-items: center;
  }
  .body-chat {
    background-color: white;
    width: 100%;
    height: 290px;
    overflow-y: scroll; /* เพิ่ม overflow-y และความสามารถให้มันเลื่อน */
  }

  .right {
    padding: 5px;
    margin: 0 5px;
    border-radius: 10px;
    width: 90%;
    word-wrap: break-word;
    display: flex;
    justify-content: flex-end;
  }
  .right #text-right{
    background-color: #F7F5E6;
    color: #333A56;
    width: fit-content;
    padding: 0px 15px;
    border-radius: 30px;
  }

  .left {
    padding: 5px;
    margin: 0 5px;
    border-radius: 10px;
    width: 90%;
    word-wrap: break-word;
    display: flex;
    justify-content: flex-start;
  }
  .left #text-left{
    background-color: #C6CCD7;
    color: #333A56;
    width: fit-content;
    padding: 0px 15px;
    border-radius: 30px;
  }

  .box-send-messages {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #293241;
    height: 50px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .box-send-messages img {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
  .box-send-messages #input-messages {
    height: 25px;
    width: 190px;
    border-radius: 10px;
  }
  .btn-send-messages {
    display: flex;
    align-items: center;
  }
`;
