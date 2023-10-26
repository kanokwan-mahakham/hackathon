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
          <p>Notification</p>
          <div className="btn-header">
            <img src={cancle} id="btn-cancle" onClick={closeNoti} />
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
  .popup-noti {
    position: fixed;
    top: 20px;
    right: 7px;
    background-color: white;
    border: 1px solid #ccc;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 5;
    width: 450px;
    height: 400px;
    border-radius: 10px;
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
    font-family: "Lora";
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
    border-bottom: 1px solid;
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
  }
  .box-noti-detail #noti-text {
    font-family: "lora";
    font-size: 15px;
    font-weight: 500;
    width: 190px;
    margin-left: 15px;
    color: gray;
  }
  .box-noti-detail #buy-package {
    width: 40px;
    height: 20px;
    margin-right: 15px;
  }
`;
