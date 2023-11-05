import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const BoxUser = ({ user, url, item, type, className }) => {
  const [data, setData] = useState("");

  useEffect(() => {
    async function getDetail() {
      try {
        const response = await axios.get(
          `${url}/informations/${item.informationId}`
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getDetail();
  }, [item]);

  return (
    <>
      <div className={className}>
        <div className="box">
          <div className="box-box-image">

            {type == "pack" ? (
              <Link to={`/package/${item.id}`}>
                <img src={data.profile} alt="รูปภาพ" />
              </Link>
            ) : (
              <Link to={`/regis/${data.id}`}>
                <img src={data.profile} alt="รูปภาพ" />
              </Link>
            )}

          </div>
          <div className="box-detail">
            <p id="name">{data.name}</p>
            <p id="detail">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default styled(BoxUser)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .box {
    position: relative;
  }
  .box .box-box-image img {
    width: 300px;
    height: 350px;
    border-radius: 30px;
    margin: 10px 30px 30px 0px;
    object-fit: cover;
  }
  .box .box-box-image {
    width: 300px;
    height: 350px;
    border-radius: 30px;
    margin: 10px 15px 30px 0px;
    display: flex;
    justify-content: center;
  }
  .box .box-box-image a {
    text-decoration: none;
    color: #333a56;
  }
  .box-detail {
    display: flex;
    text-align: center;
    position: absolute;
    bottom: 30px;
    left: 12px;
    background-color: white;
    width: 245px;
    height: 120px;
    border-radius: 20px;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  .image {
    flex: 1;
    overflow: hidden;
  }
  .box-detail #name {
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
    margin-top: 3px;
  }
  .box-detail #detail {
    font-family: "Anuphan";
    font-size: 13px;
    font-weight: 400;
    margin: 0px 25px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .conpare-button {
    font-family: "Anuphan";
    background-color: #c6ccd7;
    width: 120px;
    height: 30px;
    margin: 10px;
    border-radius: 30px;
    border: none;
    font-size: 15px;
    cursor: pointer;
    color: #12136e;
    background-image: linear-gradient(to bottom right, #ff9d00, #ded05a);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
  .conpare-button:hover {
    color: #fffad4;
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    cursor: pointer;
  }
  .button #save-button {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }
`;
