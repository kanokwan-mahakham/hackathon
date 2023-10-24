import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

const Item = ({ url, item ,compares ,setCompares}) => {
  const cancle = require("../../../image Hackathon/icon/cancel.png");
  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios.get(`${url}/informations/${item.informationId}`)
      setData(res.data)
      
      console.log("seccess");
    }
    getData();
  }, [item]);

  function cancelItem(){
    const newCompare = compares.filter((compare)=>compare.id!=item.id)
    setCompares(newCompare)
  }

  return (
            <div className="box-name">
              <img src={cancle} alt="ปิด" id="close-name" onClick={cancelItem} />
              <p>{data.name}</p>
            </div>
  )
          
};

export default Item;
