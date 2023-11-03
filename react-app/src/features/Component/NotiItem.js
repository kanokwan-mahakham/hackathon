import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

const NotiItem = ({ url, user, item, setNotis }) => {
  const cancle = require("../../image Hackathon/icon/cancel.png");
  const login = require("../../image Hackathon/icon/login.png");
  const order = require("../../image Hackathon/icon/order-now.png");
  const checked = require("../../image Hackathon/icon/checked.png");
  const success = require("../../image Hackathon/icon/goal.png");

  const icon = require(`../../image Hackathon/icon/${item.icon}`);

  const [company, setCompany] = useState([]);

  useEffect(() => {
    async function getCompany() {
      try {
        const res = await axios.get(`${url}/informations/${item.companyId}`);
        setCompany(res.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCompany();
  }, [item]);

  return (
    <>
      {user.status == "addmin" ? (
        item.type == "wait package" ? (
          <Link to={`/check-payment/${item.companyId}/${item.id}`}>
            <div className="noti-detail">
              <div className="box-noti-detail">
                <img src={icon} id="buy-package" />
                <p id="name">{company.name}</p>
                <p id="noti-text">{item.description}</p>
              </div>
            </div>
          </Link>
        ) : (
          <Link to={`/check-regis/${item.companyId}/${item.id}`}>
            <div className="noti-detail">
              <div className="box-noti-detail">
                <img src={icon} alt="noti"/>
                <p id="name">{company.name}</p>
                <p id="noti-text">{item.description}</p>
              </div>
            </div>
          </Link>
        )
      ) : item.type == "wait package" ? (
        <div className="noti-detail">
          <div className="box-noti-detail">
            <img src={icon} id="buy-package" alt="pack"/>
            <p id="name">{company.name}</p>
            <p id="noti-text">{item.description}</p>
          </div>
        </div>
      ) : (
        <div className="noti-detail">
          <div className="box-noti-detail">
            <img src={icon} alt="icon"/>
            <p id="name">{company.name}</p>
            <p id="noti-text">{item.description}</p>
          </div>
        </div>
      )}

      {/* แจ้งเตือนในฝั่งfactory */}
      {/* <div className="noti-detail">
        <div className="box-noti-detail">
          <img src={checked} />
          <p id="name">ThumbinThai</p>
          <p id="noti-text">การยืนยันตัวตนของคุณสำเร็จแล้ว ยินดีด้วยนะคะ</p>
        </div>
      </div>

      <div className="noti-detail">
        <div className="box-noti-detail">
          <img src={success} />
          <p id="name">Sahawath</p>
          <p id="noti-text">
            เริ่มการโปรโมทตาม package 499บาท/เดือน นับตั้งแต่วันนี้จนถึง 1
            ธันวาคม พ.ศ. 2566
          </p>
        </div>
      </div>

      <div className="noti-detail">
        <div className="box-noti-detail">
          <img src={success} />
          <p id="name">Sahawath</p>
          <p id="noti-text">
            เริ่มการโปรโมทตาม package 499บาท/เดือน นับตั้งแต่วันนี้จนถึง 1
            ธันวาคม พ.ศ. 2566
          </p>
        </div>
      </div> */}
    </>
  );
};
export default NotiItem;