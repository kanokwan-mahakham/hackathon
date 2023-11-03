import styled from "styled-components";
import NotiItem from "./NotiItem";

const Noti = ({ url, user, setShownoti, notis, setNotis, className }) => {
  const cancle = require("../../image Hackathon/icon/cancel.png");
  const login = require("../../image Hackathon/icon/login.png");
  const order = require("../../image Hackathon/icon/order-now.png");
  const checked = require("../../image Hackathon/icon/checked.png");
  const success = require("../../image Hackathon/icon/goal.png");

  function closeNoti() {
    setShownoti("");
  }

  return (
    <div className={className}>
      <div className="popup-noti">
        <div className="header">
          <p>ข้อความแจ้งเตือน</p>
          <div className="btn-header">
            <img src={cancle} id="btn-cancle" onClick={closeNoti} alt="cancle"/>
          </div>
        </div>
        <div className="line"></div>
        <div className="body-noti">

          {notis.length > 0 ? (
            user.status === "addmin" ? (
              notis
                .filter((item) => item.type == "wait regis" || item.type == "wait package")
                .map((filteredItem) => (
                  <NotiItem
                    key={filteredItem.id}
                    url={url}
                    user={user}
                    item={filteredItem}
                    setNotis={setNotis} 
                  />
                ))
            ) : (
              notis
                .filter((item) => item.companyId === user.id)
                .map((filteredItem) => (
                  <NotiItem
                    key={filteredItem.id}
                    url={url}
                    user={user}
                    item={filteredItem}
                    setNotis={setNotis} 
                  />
                ))
            )
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default styled(Noti)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .popup-noti {
    position: fixed;
    top: 20px;
    right: 7px;
    background-color: white;
    border: 1px solid #ccc;
    z-index: 5;
    width: 450px;
    height: 400px;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  .header {
    width: 100%;
    height: 60px;
    background-color: white;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header p {
    color: #293241;
    font-family: "Anuphan";
    font-weight: 600;
    font-size: 30px;
    margin-left: 30px;
  }
  .btn-header img {
    width: 25px;
    height: 25px;
    margin-right: 25px;
  }
  .btn-header {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .line {
    display: flex;
    width: 90%;
    border: 2px solid;
    margin: 5px 20px;
  }
  .body-noti {
    background-color: white;
    width: 100%;
    height: 340px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    overflow-y: scroll;
  }
  .noti-detail {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-noti-detail {
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid black;
  }
  .box-noti-detail img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  .box-noti-detail p {
    width: 125px;
    font-family: "lora";
    font-size: 18px;
    font-weight: 500;
    text-decoration: none;
  }
  .box-noti-detail #noti-text {
    font-family: "lora";
    font-size: 15px;
    font-weight: 500;
    width: 190px;
    margin-left: 15px;
    color: gray;
  }
  .box-noti-detail #name{
    color: black;
  }
  .box-noti-detail #buy-package {
    width: 40px;
    height: 20px;
    margin-right: 15px;
  }
  .popup-noti a{
    text-decoration: none;
  }
`;
