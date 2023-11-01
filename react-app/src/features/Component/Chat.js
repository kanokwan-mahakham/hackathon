import styled from "styled-components";
import React, { useState, useEffect, useMemo, useRef } from "react";
import axios from "axios";
import ScrollToBottom from "react-scroll-to-bottom";

const Chat = ({
  url,
  user,
  setShowChat,
  socket,
  room,
  setChat,
  chat,
  setRoom,
  className,
}) => {
  const cancle = require("../../image Hackathon/icon/cancel.png");
  const chatImg = require("../../image Hackathon/icon/bubble-chat.png");
  const file = require("../../image Hackathon/icon/attach-file.png");
  const send = require("../../image Hackathon/icon/send 2.png");

  const [currentMessage, setCurrentMessage] = useState("");
  const [messageList, setMessageList] = useState([]);
  const [check, setCheck] = useState([]);
  

  useEffect(() => {
    const data = chat.filter((mes) => mes.room == room);
    if (data) {
      setMessageList(data);
    }
  }, []);

  useMemo(() => {
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      setChat([...chat, data]);
      console.log(data);
    });
  }, [socket]);

  const sendMessage = async () => {
  
    if (currentMessage !== "") {
      const messageData = {
        room: room,
        sendId: user.id,
        message: currentMessage,
      };

      await socket.emit("send_message", messageData);
      await axios.post(`${url}/chats`, messageData);
      // setMessageList((list) => [...list, messageData]);
      let updatedMessageList = [...messageList, messageData];
      let updatedChat = [...chat, messageData];
      setMessageList(updatedMessageList);
      setChat(updatedChat);
      setCurrentMessage("");
    }
  };

  function close() {
    setShowChat("");
    setRoom("");
  }

  return (
    <div className={className}>
      <div className="popup-chat">
        <div className="header">
          <p>ข้อความ</p>
          <div className="btn-header">

            <img src={cancle} id="btn-cancle" onClick={close} />
          </div>
        </div>

        

        <ScrollToBottom className="body-chat" >
          {messageList.map((messageContent) => {
            if (messageContent.sendId === user.id) {
              return (
                <div className="right">
                  <div id="text-right">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="left">
                  <div id="text-left">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              );
            }
          })}
        </ScrollToBottom>

        <div className="box-send-messages">
          <input
            id="input-messages"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          ></input>
          <div className="btn-send-messages">
          
            <img src={send} onClick={sendMessage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Chat)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .popup-chat {
    position: fixed;
    bottom: 20px;
    right: 7px;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 5;
    width: 320px;
    height: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

  }
  .header {
    width: 100%;
    height: 60px;
    background-image: linear-gradient(to bottom right, #ff9d00, #ded05a);
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header p {
    color:black;
    font-family: "Anuphan";
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
  .right #text-right {
    background-color: #f7f5e6;
    color: #333a56;
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
  .left #text-left {
    background-color: #c6ccd7;
    color: #333a56;
    width: fit-content;
    padding: 0px 15px;
    border-radius: 30px;
  }

  .box-send-messages {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-image: linear-gradient(to bottom right, #ff9d00, #ded05a);
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
    width: 230px;
    border-radius: 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
  .btn-send-messages {
    display: flex;
    align-items: center;
  }
`;
