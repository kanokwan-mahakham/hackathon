import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const BoxData = ({ user, url, item, className }) => {
  const save = require("../../image Hackathon/icon/save-instagram.png");
  const image = require("../../image Hackathon/image/background.jpeg");

  const [data, setData] = useState("");
  const [icon, setIcon] = useState(save);
  const [favId ,setFavId] = useState("")

  async function fav (){
    if(typeof favId == "string"){
      const response = await axios.post(`${url}/customerFavs`,{customerId:user.id,companyId:item.id});
      setIcon(image) //add saved icon here
      setFavId(response.data.id)
    }else{
      const response = await axios.delete(`${url}/customerFavs/${favId}`);
      setIcon(save) 
      setFavId("")
    }
  }

  useEffect(() => {
    async function getDetail() {
      try {
        const response = await axios.get(
          `${url}/informations/${item.informationId}`
        );
        setData(response.data);

        if (typeof user == "object") {
          const responseFav = await axios.get(
            `${url}/customerFavs/${user.id}/${item.id}`
          );
          if (responseFav.data.user) {
            setIcon(image) //add saved icon here
            setFavId(responseFav.data.user.id)
            console.log("User found:", responseFav.data.user);
          }
        }
        
      } catch (error) {
        console.error(error);
      }
    }
    getDetail();
  }, [item]);

  return (
    <>
      {Object.keys(data).length > 0 ? (
        <div className={className}>
          <div className="box">
            <img src={image} id="box-image" alt="Box Image" />
            <div className="box-detail">
              <p id="name">{data.name}</p>
              <p id="detail">{data.description}</p>
  
              <div className="button">
                <button className="conpare-button">เปรียบเทียบ +</button>
                {user.status === "customer" ? (
                  <img src={icon} id="save-button" alt="Save" onClick={fav}/>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

export default styled(BoxData)`
  .box {
    position: relative;
  }
  .box #box-image {
    width: 420px;
    height: 470px;
    border-radius: 30px;
    margin: 10px 30px 30px 0px;
  }
  .box-detail {
    display: flex;
    text-align: center;
    position: absolute;
    bottom: 60px;
    left: 40px;
    background-color: white;
    width: 340px;
    height: 170px;
    border-radius: 30px;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
  }
  .image {
    flex: 1;
    overflow: hidden;
  }
  .box-detail #name {
    font-family: "Anuphan";
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 12px;
    margin-top: 8px;
  }
  .box-detail #detail {
    font-family: "Anuphan";
    font-size: 18px;
    font-weight: 40;
    margin: 0px 30px;
  }
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .conpare-button {
    background-color: #c6ccd7;
    width: 120px;
    height: 30px;
    margin: 10px;
    border-radius: 30px;
    border: none;
    font-size: 15px;
  }
  .button #save-button {
    width: 25px;
    height: 25px;
  }
`;
