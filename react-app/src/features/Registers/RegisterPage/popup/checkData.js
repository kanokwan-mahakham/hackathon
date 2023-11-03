
import React, { useState, useEffect } from "react";
import InputRegField from "../../../Component/input";
import Button from "../../../Component/Botton";
import styled from "styled-components";
import { Link,useNavigate,useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const Backgroud = styled.div`
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

const StyleContainer = styled.div`
.container {
    width: 1110px;
    height: 1070px;
    background-color: #FFFFFF;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: column;
    padding: 30px;
    flex-wrap: nowrap;
    margin-top: px;
    margin-left:90px
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.40);
}
@media (max-width: 1208px) {
  .container {
    width: 75%; /* Make it full width on smaller screens */
    border-radius: 20px; /* Adjust border-radius */
    margin-top: 10px; 
    margin-bottom: 10px; 
    margin-bottom: 10px;/* Adjust the margin top */
    flex-direction: row;
    margin-left:90px
  }
`;



const Styleprevious = styled.div`
.previous {
  text-decoration: none;
  display: inline-block;
  padding: 8px 16px;
  background-color: #f1f1f1;
  color: black;
  border-radius: 50%;
  position: absolute;
  top: 20px;
  left: 20px;
}

.previous:hover {
  background-color: #ddd;
  color: black;
}
`;

const StyledBotton = styled.div`
  .button {
    display: flex;
    width: 288.75px;
    padding: 8.663px 5.775px;
    justify-content: center;
    align-items: center;
    gap: 5.775px;
    background: #141415;
    border-radius: 8.663px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 50px;
  }

  .button-text {
    color: #fff;
    text-align: center;
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: 700;
    line-height: 17.325px;
  }
  @media (max-width: 1208px) {
    .button {
      width:70%
    }
`;
const StyledBotton2 = styled.div`
  .button {
    display: flex;
    width: 288.75px;
    padding: 8.663px 5.775px;
    justify-content: center;
    align-items: center;
    gap: 5.775px;
    background: #fff;
    border-radius: 8.663px;
    cursor: pointer;
    margin-top: 10px;
    margin-left: 50px;
    border: 2px solid #000;
  }

  .button-text {
    color: #000;
    text-align: center;
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: 700;
    line-height: 17.325px;
  }

  @media (max-width: 1208px) {
    .button {
      width:70%
    }
}
`;

const Styledh1 = styled.div`
  h1 {
    font-size: 43px;
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
   
    
  }

  @media (max-width: 768px) 
    .h1 {
    font-size: 43px;
    font-weight: bold;
    padding:0px;
    }

`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 150px;
  margin-top: 15px;
  margin-bottom: 10px;
  gap: 10px; /* Adjust the gap as needed */

  @media (max-width: 1208px) {
      margin-right: 400px;
  }

`;

const Styleleft = styled.div`
  .image {
    width: 250px;
    height: 255px;
    display: flex;
    margin-left: 380px;
    margin-top: 5px;

    background-size: 100%;
  }
  @media (max-width: 1208px) {
    .image {
      margin-left:200px;
    }
`;
const Styleline1 = styled.div`
  .underline {
    width: 800.375px;
    height: 1.444px;
    background: #d9d9d9;
    margin-bottom: 50px;
    margin-left: 120px;
  }
  @media (max-width: 1208px) {
    .underline {
      width: 50%;
    }
`;
const Stylep = styled.div`
  .boxtext {
    margin: 30px;
    font-size: 17.55px;
    margin-left: 180px;
  }

  @media (max-width: 768px) {
    .boxtext {
      font-size: 17.55px;
    }
`;

const CheckData = ({url, companies,setCompanies,setNotis}) => {

    const { id } = useParams();
    const { notiId } = useParams();
    const navigate = useNavigate();
    

    const company = companies.find((com)=> com.id == Number(id));

    async function confirm() {
      try {
        // Step 1: Delete a notification (notis) based on notiId
        await axios.delete(`${url}/notis/${Number(notiId)}`);
    
        // Step 2: Create a new notification
        await axios.post(`${url}/notis`, {
          companyId: company.id,
          icon: "checked.png",
          type: "confirm",
          description: "การยืนยันตัวตนของคุณสำเร็จแล้ว",
        });
    
        // Step 3: Update the user's status to "company"
        const { id, status, ...item } = company;
        await axios.put(`${url}/users/${id}`, { ...item, status: "company" });
        const ress= await axios.get(`${url}/notis`)
        const resCom = await axios.get(`${url}/users`)
        setCompanies(resCom.data)
        setNotis(ress.data)
    
        // Step 4: Display a success message using Swal (SweetAlert)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Step 5: Navigate back to the home page
          navigate("/");
        });
      } catch (error) {
        console.error(error);
      }
    }

    async function cancel() {
      try {
        // Step 1: Delete a notification (notis) based on notiId
        await axios.delete(`${url}/notis/${Number(notiId)}`);
    
        // Step 2: Create a new notification
        await axios.post(`${url}/notis`, {
          companyId: company.id,
          icon: "cancel.png", //icon x
          type: "cancel",
          description: "การยืนยันตัวตนของคุณไม่สำเร็จ",
        });
    
        // Step 3: Update the user's status to "company"
        const ress = await axios.get(`${url}/notis`)
        setNotis(ress.data)
    
        // Step 4: Display a success message using Swal (SweetAlert)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        }).then(() => {
          // Step 5: Navigate back to the home page
          navigate("/");

        });
      } catch (error) {
        console.error(error);
      }
    }

    
    

  return (
    <Backgroud>
      <StyleContainer>
        <div className="container">
          <Styleprevious>
            <Link to="/" className="previous">
              &#8249;
            </Link>
          </Styleprevious>
          <div className="left-content">
            <Styledh1>
              <h1>ตรวจสอบข้อมูล</h1>
            </Styledh1>

            <Stylep>
              <div className="boxtext">ผู้ประกอบการ</div>
            </Stylep>
            <Styleline1>
              <div className="underline"></div>
            </Styleline1>

            <Stylep>
              <div className="boxtext">Email : {company.email}</div>
            </Stylep>
            <Styleline1>
              <div className="underline"></div>
            </Styleline1>

            <Stylep>
              <div className="boxtext">Username : {company.username}</div>
            </Stylep>
            <Styleline1>
              <div className="underline"></div>
            </Styleline1>
            <Stylep>
              <div className="boxtext">ประเภท : {company.type}</div>
            </Stylep>
            <Styleline1>
              <div className="underline"></div>
            </Styleline1>
            <Stylep>
              <div className="boxtext">เลขประจำตัวผู้เสียภาษี : {company.juristicNumber}</div>
            </Stylep>
            <Styleline1>
              <div className="underline"></div>
            </Styleline1>

            <Styleleft>
              <div className="image">
              <img src={company.JuristicFile} />
              </div>
            </Styleleft>
            <ButtonContainer>
              <StyledBotton>
                <Button text="Confirm" onClick={confirm} />
              </StyledBotton>
              <StyledBotton2>
                <Button text="Cancel" onClick={cancel}/>
              </StyledBotton2>
            </ButtonContainer>
          </div>
        </div>
      </StyleContainer>
    </Backgroud>
  );
};

export default CheckData;