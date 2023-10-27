import styled from "styled-components";

const ListChat = ({ setShowChat,className }) => {
  const cancle = require("../../image Hackathon/icon/cancel.png");
  const photo = require("../../image Hackathon/image/background.jpeg")


  function close(){
    setShowChat("")
  }

  return (

    <div className={className}>
      <div className="popup-list">
        <div className="header">
          <p>Chat messages</p>
          <div className="btn-header">
            <img src={cancle} id="btn-cancle" onClick={close}/>
          </div>
        </div>
        <div className="body-chat">
            {/* div className="contact-user" นี้สำหรับuser 1 คนนะจ๊ะ */}
            <div className="contact-user">
                <img src={photo}/>
                <p>Kanokwan Mahakham</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default styled(ListChat)`
  .popup-list {
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
    cursor: pointer;
  }
  .btn-header {
    display: flex;
    align-items: center;
  }
  .body-chat {
    background-color: white;
    width: 100%;
    height: 340px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow-y: scroll;
  }
  .contact-user{
    display: flex;
    margin: 10px;
  }
  .contact-user img{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    margin-right:20px;
  }
  .contact-user p{
    font-family: "lora";
    font-size: 18px;
    font-weight: 500;
  }
`;
