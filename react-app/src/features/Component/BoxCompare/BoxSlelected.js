import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const BoxSelected = ({ url, user, item, compares, setCompares, className }) => {
  const cancel = require("../../../image Hackathon/icon/cancel.png");

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${url}/informations/${item.informationId}`);
      setData(res.data);

      console.log("seccess");
    }
    getData();
  }, [item]);

  function cancelItem() {
    const newCompare = compares.filter((compare) => compare.id != item.id);
    setCompares(newCompare);
  }

  return (
    <div className={className}>
      <div className="box">
        <img src={cancel} onClick={cancelItem} />
        <div className="box-detail">
          <div id="name">
            <h1>{data.name}</h1>
          </div>
          <div className="detail">
            <p>{data.description}</p>
          </div>
          {item.id==user.id?(
            <Link to="/profile-company">
            <button className="button-detail">รายละเอียด</button>
          </Link> 
          ):(
            <Link to={`/company/${item.id}`}>
            <button className="button-detail">รายละเอียด</button>
          </Link> 
          )}
          
        </div>
      </div>
    </div>
  );
};

export default styled(BoxSelected)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  display: flex;

  .box {
    position: relative;
  }
  .box img {
    position: absolute;
    top: -20px;
    right: 15px;
    width: 45px;
    height: 45px;
    cursor: pointer;
  }
  .box-detail {
    width: 310px;
    height: 350px;
    margin-right: 25px;
    border-radius: 10px;
    border: 3px solid #807d7d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .box-detail h1 {
    font-family: "Lora";
    font-size: 35px;
    font-weight: 600;
  }
  .detail p {
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    padding: 18px;
    line-height: 30px;
  }
  .button-detail {
    width: 200px;
    height: 50px;
    border-radius: 30px;
    font-family: "Anuphan";
    font-size: 19px;
    font-weight: 500;
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
    color: white;
    border:none;
  }
  .button-detail:hover {
    color: #12136e;
    background-image: linear-gradient(to bottom right, #ff9d00, #ded05a);
    border:none;
    cursor: pointer;
  }
`;
