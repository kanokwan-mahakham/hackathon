import styled from "styled-components";
import React, { useState, useEffect } from "react";
import axios from "axios";

const ListChatItem = ({url,item,socket,setRoom, setShowChat}) => {
  

  const [data, setData] = useState([]);

  function show() {
    setShowChat("show");
    setRoom(item.room);
    socket.emit("join_room", item.room);
  }

  useEffect(() => {
    async function getCompanies() {
      try {
        const res = await axios.get(`${url}/users/${item.companyId}`)
        const ress = await axios.get(`${url}/informations/${res.data.informationId}`)
        setData(ress.data);
      } catch (error) {
        console.error(error);
      }
    }
    getCompanies();
  }, [item]);

  

  return (
    
            <div className="contact-user" onClick={show}>
              <img src={data.profile} />
              <p>{data.name}</p>
            </div>
          
  );
};

export default ListChatItem;
 