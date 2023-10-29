import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import Footer from "../../Component/Footer";
import CardAdmin from "../../Component/CardProfile/CardAdmin";
import Package from "../../Component/Package";
import Noti from "../../Component/Noti";
import ListChat from "../../Component/ListChat";
import Chat from "../../Component/Chat";

const ProfileAdmin = ({ url, user, setUser,showNoti ,setShownoti, notis,setNotis,setCompares,showChat,setShowChat,setShowListChat,showListChat, className }) => {
  return (
    <div className={className}>
      {showNoti=="show"?(
        <Noti url={url} user={user} setShownoti={setShownoti} notis={notis} setNotis={setNotis}></Noti>
      ):null
      }
      

      {showListChat == "show" ? <ListChat setShowListChat={setShowListChat} setShowChat={setShowChat} /> : null}

      {showChat == "show" ? <Chat setShowChat={setShowChat}/> : null }

      <Navbar
        user={user}
        setUser={setUser}
        setShownoti={setShownoti}
        setCompares={setCompares}
        setShowListChat={setShowListChat}
      />
      
      <CardAdmin />
      <div className="rating">
        <div className="box-rating">
          <div className="box-category">
            <div className="number">100K+</div>
            <div className="box-name">Factory</div>
          </div>
          <div className="box-category">
            <div className="number">123K+</div>
            <div className="box-name">Fabric</div>
          </div>
          <div className="box-category">
            <div className="number">45</div>
            <div className="box-name">Designer</div>
          </div>
          <div className="box-category">
            <div className="number">4.5</div>
            <div className="box-name">Rating</div>
          </div>
        </div>
      </div>
      <div className="package">
        <div className="head-name">
            <h1>Package</h1>
        </div>
        
      </div>
      <div className="sale-package">
        <Package/>
      </div>
      <Footer />
    </div>
  );
};

export default styled(ProfileAdmin)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");

  .rating {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .box-rating {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 150px;
    width: 1100px;
    background-color: #333a56;
    color: white;
    margin: 50px 0px 150px 0px;
    border-radius: 100px;
  }
  .box-category {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .box-category .number {
    font-family: "Lora";
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .box-category .box-name {
    font-family: "Lora";
    font-size: 18px;
    font-weight: 400;
    text-align: center;
  }
  .package{
    position: relative;
  }
  .package .head-name h1{
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    transform: translate(205%, -90%);
    z-index: 2;
    font-size: 50px;
  }
  .head-name h1{
    background-color: white;
    width: 300px;
    height: 80px;
    border: 1px solid;
    border-radius: 50px;
  }
  .sale-package{
    width: 100%;
    height: 500px;
    background-color: #333a56;
    margin-bottom: 50px;
    padding-top: 100px;
  }
`;
