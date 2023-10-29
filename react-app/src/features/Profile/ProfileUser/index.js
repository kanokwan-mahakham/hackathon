import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardUser from "../../Component/CardProfile/CardUser";
import BoxData from "../../Component/BoxData";
import Footer from "../../Component/Footer";
import axios from "axios";
import CardNewData from "../../Component/CardProfile/CardNewData";
import CardEdit from "../../Component/CardProfile/CardEdit";
import PopupCompare from "../../Component/PopupCompare";
import Noti from "../../Component/Noti";
import ListChat from "../../Component/ListChat";
import Chat from "../../Component/Chat";

const ProfileUser = ({
  user,
  url,
  setUser,
  companies,
  favs,
  setFavs,
  information,
  compares,
  setCompares,
  setShownoti,
  showNoti,
  notis,
  showChat,
  setShowChat,
  setShowListChat,
  showListChat,
  listChat,
  socket,
  room,
  setRoom,
  chat,
  setChat,
  className,
}) => {
  const [factory, setFactory] = useState([]);

  useEffect(() => {
    async function getCompanies() {
      const companiesData = [];
      // กรอง favs ที่มี customerId ตรงกับ user.id
      const filteredFavs = favs.filter((fav) => fav.customerId === user.id);

      try {
        // ใช้ Promise.all เพื่อดึงข้อมูลของบริษัทพร้อมกัน
        await Promise.all(
          filteredFavs.map(async (getFav) => {
            const response = await axios.get(
              `${url}/users/${getFav.companyId}`
            );
            companiesData.push(response.data);
          })
        );
        // หลังจากที่ดึงข้อมูลเสร็จสิ้นให้เรียก setFactory

        setFactory(companiesData);
        console.log(`userPage : ${factory}`);
      } catch (error) {
        // จัดการข้อผิดพลาดในกรณีที่เกิดข้อผิดพลาดในการดึงข้อมูลบริษัท
        console.error("Error fetching company data:", error);
      }
    }

    getCompanies();
  }, [user]);

  return (
    <div className={className}>
      {showNoti == "show" ? (
        <Noti
          url={url}
          user={user}
          setShownoti={setShownoti}
          notis={notis}
        ></Noti>
      ) : null}
      
      {showListChat == "show" ? <ListChat url={url} user={user} listChat={listChat} setShowListChat={setShowListChat} setShowChat={setShowChat} socket={socket} setRoom={setRoom} /> : null}
      {showChat == "show" ? <Chat url={url} user={user} setShowChat={setShowChat} socket={socket} room={room} setChat={setChat} chat={chat} /> : null }


      <Navbar
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
      />
      <CardEdit user={user} information={information} />

      <div className="approved">
        <h1>Approved</h1>
        <div className="line"></div>
        {factory.length > 0 ? (
          <>
            <div className="box-category">
              <div className="name-category">Factory</div>
              <div className="collect">
                {factory.map((company) =>
                  company.type == "company" ? (
                    <BoxData
                      key={company.id}
                      user={user}
                      url={url}
                      item={company}
                      setFavs={setFavs}
                      compares={compares}
                      setCompares={setCompares}
                    />
                  ) : null
                )}
              </div>
            </div>

            <div className="box-category">
              <div className="name-category">Fabric</div>
              <div className="collect">
                {factory.map((company) =>
                  company.type == "frabic shop" ? (
                    <BoxData
                      key={company.id}
                      user={user}
                      url={url}
                      item={company}
                      setFavs={setFavs}
                      compares={compares}
                      setCompares={setCompares}
                    />
                  ) : null
                )}
              </div>
            </div>
            <div className="box-category">
              <div className="name-category">Designers</div>
              <div className="collect">
                {factory.map((company) =>
                  company.type == "designer" ? (
                    <BoxData
                      key={company.id}
                      user={user}
                      url={url}
                      item={company}
                      setFavs={setFavs}
                      compares={compares}
                      setCompares={setCompares}
                    />
                  ) : null
                )}
              </div>
            </div>
          </>
        ) : null}
      </div>
      {compares.length != 0 ? (
        <PopupCompare url={url} compares={compares} setCompares={setCompares} />
      ) : null}
      <Footer />
    </div>
  );
};

export default styled(ProfileUser)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .approved {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .approved h1 {
    font-size: 80px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .approved .line {
    border-bottom: 4px solid black;
    width: 70%;
    margin: 20px 0px 50px 0px;
  }
  .box-category {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 150px;
  }
  .name-category {
    font-size: 50px;
    font-weight: 600;
    color: #333a56;
    width: 350px;
    height: 90px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border: 3px solid black;
    margin: 40px 0px;
  }
  .collect {
    display: flex;
    flex-wrap: wrap;
  }
`;
