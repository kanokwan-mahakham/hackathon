import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const CardNewData = ({ user, url, information, setInformation, className }) => {
  const image = require("../../../image Hackathon/image/background.jpeg");
  const location = require("../../../image Hackathon/icon/pin.png");
  const call = require("../../../image Hackathon/icon/call.png");
  const telephone = require("../../../image Hackathon/icon/telephone.png");
  const facebook = require("../../../image Hackathon/icon/facebook.png");
  const mail = require("../../../image Hackathon/icon/arroba.png");
  const website = require("../../../image Hackathon/icon/world-wide-web.png");
  const linkIn = require("../../../image Hackathon/icon/linkedin-big-logo.png");

  const [name, setName] = useState(information.name);
  const [address, setAddress] = useState(information.address);
  const [tel, setTel] = useState(information.tel);
  const [facebooks, setFacebooks] = useState(information.facebook);
  const [email, setEmail] = useState(information.email);
  const [linkWeb, setLinkWeb] = useState(information.website);
  const [ins, setIns] = useState(information.instagram);
  const [description, setDescription] = useState(information.description);
  const [profile, setProfile] = useState(information.profile);
  const navigate = useNavigate();

  function handleFileChange(event) { 
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const imagePath = e.target.result;
        console.log("Image path: ", imagePath);
        setProfile(imagePath)// เก็บ URL ของภาพใน state
      };
      reader.readAsDataURL(file);
    }
  }

  async function submit() {
    const update = {
      name: name,
      description: description,
      address: address,
      tel: tel,
      facebook: facebooks,
      email: email,
      instagram: ins,
      website: linkWeb,
      profile:profile
    };
    try {
      const {
        id,
        name,
        description,
        address,
        tel,
        facebook,
        email,
        instagram,
        website,
        profile,
        ...item
      } = information;
      const up = await axios.put(`${url}/informations/${user.id}`, {
        ...update,
        ...item,
      });
      console.log(up);
      setInformation(up.data);
      console.log("update information");
      console.log(information);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        if(user.status == "customer"){
          navigate("/profile-user");
        }else{
          navigate("/profile-company");
        }
       
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={className}>
      <div className="profile">
        <div className="box-profile">
          <div className="profile-image">
            {/* <img src={image} /> */}

            <input
              type="file"
              id="product-image"
              name="product-image"
              accept="image/*"
              className="file-input"
              style={{ display: 'none'}}
              onChange={handleFileChange}
            />

            <label htmlFor="product-image" className="file-label">
              <div className="file-box">
                <span className="plus-icon">+</span>
              </div>
            </label>

            <p id="detail">
              <input
                placeholder="Description"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></input>
            </p>
          </div>
          <div className="line"></div>
          <div className="profile-detail">
            <h1 id="name">
              <input
                placeholder="Name"
                value={name}
                onChange={(event) => {
                  setName(event.target.value);
                }}
              ></input>
            </h1>
            <div className="detail" id="location">
              <img src={location} />
              <input
                placeholder="Address"
                value={address}
                onChange={(event) => {
                  setAddress(event.target.value);
                }}
              ></input>
            </div>
            <div className="contact">
              <h2>Contact</h2>
              <div className="total-detail">
                <div id="left">
                  <div className="detail" id="เบอร์สำนักงาน">
                    <img src={call} />
                    <input
                      placeholder="Tel"
                      value={tel}
                      onChange={(event) => {
                        setTel(event.target.value);
                      }}
                    ></input>
                  </div>
                  {/* <div className="detail" id="เบอร์ตัวเอง">
                    <img src={telephone} />
                    <input placeholder="Tel"></input>
                  </div> */}
                  <div className="detail" id="facebook">
                    <img src={facebook} />
                    <input
                      placeholder="Facebook"
                      value={facebooks}
                      onChange={(event) => {
                        setFacebooks(event.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="detail" id="mail">
                    <img src={mail} />
                    <input
                      placeholder="Email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
                <div className="rigth">
                  <div className="detail" id="linkIn">
                    <img src={linkIn} />
                    <input
                      placeholder="Instagram"
                      value={ins}
                      onChange={(event) => {
                        setIns(event.target.value);
                      }}
                    ></input>
                  </div>
                  <div className="detail" id="website">
                    <img src={website} />
                    <input
                      placeholder="Website"
                      value={linkWeb}
                      onChange={(event) => {
                        setLinkWeb(event.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="button-chat">
              {user.status == "company" || user.status == "waiting" ? (
                <Link to="/profile-company">
                  {" "}
                  <button onClick={submit}>Save</button>
                </Link>
              ) : (
                <Link to="/profile-user">
                  {" "}
                  <button onClick={submit}>Save</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(CardNewData)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  /* Profile */
  .profile {
    display: flex;
    justify-content: center;
    margin: 70px 70px 20px 70px;
  }
  .box-profile {
    background-color: #293241;
    width: 1200px;
    height: 650px;
    border-radius: 20px;
    display: flex;
    align-items: center;
  }
  .profile-image {
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 20px;
  }
  .profile-image img {
    width: 280px;
    height: 310px;
  }
  .profile-image #detail {
    width: 280px;
    color: white;
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    line-height: 33px;
  }
  .line {
    border-right: 3px solid white;
    height: 500px;
  }
  .profile-detail {
    display: flex;
    flex-direction: column;
    width: 55%;
    justify-content: center;
    align-items: center;
  }
  .profile-detail #name {
    font-family: "Lora";
    font-size: 50px;
    font-weight: 600;
    color: white;
    margin: 10px;
  }
  .detail {
    display: flex;
    align-items: center;
    width: 100%;
  }
  .detail img {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  .detail p {
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 400;
    color: white;
  }
  .profile-detail #location {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .contact {
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .contact h2 {
    color: white;
    font-size: 30px;
    font-weight: 600;
  }
  .total-detail {
    display: flex;
    width: 100%;
  }
  .total-detail #left {
    width: 50%;
  }
  .total-detail .detail img {
    width: 25px;
    height: 25px;
  }
  .total-detail .detail {
    display: flex;
    padding-left: 50px;
  }
  .button-chat {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding-right: 130px;
  }
  .button-chat button {
    width: 130px;
    height: 45px;
    margin: 30px 20px 0px 0px;
    border-radius: 20px;
    font-family: "Lora";
    font-size: 25px;
    font-weight: 600;
    background-color: white;
  }

  /* //////////////////////////////// */
  .file-label {
  display: inline-block;
  cursor: pointer;
}

.file-box {
  width: 280px;
  height: 310px;
  background-color: #f4f4f4;
  border: 2px dashed #aaa;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  overflow: hidden; /* เพิ่มบรรทัดนี้เพื่อซ่อนส่วนที่เกินขอบของ input file */
}

.plus-icon {
  font-size: 40px;
  color: #aaa;
  z-index: 1;
}

.plus-icon:hover {
  color: #555;
}

.product-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: relative; /* เพิ่มบรรทัดนี้เพื่อให้สามารถกำหนด z-index */
  z-index: 0; /* กำหนดค่า z-index เพื่อให้รูปภาพอยู่ด้านหลังของ plus icon */
}
`;