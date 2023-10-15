import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = ({ user, setUser, className }) => {
  const noti = require("../../image Hackathon/icon/notification.png");
  const chat = require("../../image Hackathon/icon/send.png");
  const profile = require("../../image Hackathon/icon/contact.png");
  const logout = require("../../image Hackathon/icon/logout-black.png");

  function logOut() {
    setUser("");
  }

  return (
    <div className={className}>
      <div className="navbar">
        <div className="category">
          <a>Home</a>
          <a>Fabric</a>
          <a>Designer</a>
          <a>Factory</a>
        </div>
        <div className="search">
          <input placeholder="Search" className="search"></input>
        </div>
        <div className="about-user">
          <img src={noti} className="round-image" />
          <img src={chat} className="round-image-chat" />

          {typeof user === "object" ? (
            <Link to="/">
              <img src={profile} className="round-image" alt="Profile" />
            </Link>
          ) : (
            <Link to="/login">
              <img src={profile} className="round-image" alt="Profile" />
            </Link>
          )}

          {typeof user === "object" ? (
            <button className="logout" onClick={logOut}>
              <img src={logout} alt="Logout"  />
              Log out
            </button>
          ) : null}
          
        </div>
      </div>
    </div>
  );
};

export default styled(Navbar)`
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
  }

  @media (max-width: 768px) {
    .navbar {
      flex-direction: column;
      text-align: center;
    }
    .search {
      width: 100%;
    }
    .round-image,
    .round-image-chat {
      margin-right: 0;
      margin-bottom: 10px;
    }
    .round-image img,
    .round-image-chat img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  @media (max-width: 480px) {
    .navbar {
      margin: 15px;
    }
    .search {
      height: 40px;
      font-size: 14px;
    }
  }

  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");

  .navbar a {
    margin: 40px;
    font-size: 26px;
    font-weight: 500;
  }
  .navbar {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 30px;
  }
  .search {
    width: 250px;
    height: 30px;
    border-radius: 100px;
    font-family: "lora";
    font-size: 16px;
    font-weight: 400;
    padding-left: 10px;
  }
  .input .search {
    padding-left: 10px;
  }
  .about-user {
    display: flex;
    align-items: center;
  }
  .round-image {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: #333a56;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-right: 15px;
  }

  .round-image img {
    max-width: 100%;
    max-height: 100%;
  }
  .round-image-chat {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin-right: 15px;
  }
  .round-image-chat img {
    max-width: 100%;
    max-height: 100%;
  }
  .logout {
    height: 45px;
    padding: 10px;
    font-family: "lora";
    font-size: 16px;
    font-weight: 400;
    display: flex;
    align-items: center;
    background-color: white;
    border-radius: 20px;
    border: none;
  }
  .logout img {
    max-width: 100%;
    max-height: 100%;
    margin-right: 10px;
  }
`;
