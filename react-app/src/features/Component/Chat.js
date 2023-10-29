import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Chat = ({
  url,
  user,
  setShowChat,
  socket,
  room,
  setChat,
  chat,
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

  useEffect(() => {
    
    socket.on("receive_message", (data) => {
      setMessageList((list) => [...list, data]);
      setChat([...chat, data]);
      console.log(data)
      // setMessageList([...messageList, data]);
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
  }

  return (
    <div className={className}>
      <div className="popup-chat">
        <div className="header">
          <p>Chat messages</p>
          <div className="btn-header">
            <img src={chatImg} id="btn-chat" />
            <img src={cancle} id="btn-cancle" onClick={close} />
          </div>
        </div>

        <div className="body-chat">
          {messageList.map((messageContent) => {
            if (messageContent.sendId === user.id) {
              return (
                <div className="right" >
                  <div id="text-right">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="left" >
                  <div id="text-left">
                    <p>{messageContent.message}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>

        <div className="box-send-messages">
          <input
            id="input-messages"
            value={currentMessage}
            onChange={(event) => {
              setCurrentMessage(event.target.value);
            }}
          ></input>
          <div className="btn-send-messages">
            <img src={file} />
            <img src={send} onClick={sendMessage} />
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
