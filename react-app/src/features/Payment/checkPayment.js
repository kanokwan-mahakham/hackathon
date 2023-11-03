import React, { useState, useEffect } from "react";
import Button from "../Component/Botton";
import styled from "styled-components";
import paymentImage from "../../image Hackathon/image/qrcode.png";
import { Link,useNavigate,useParams } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Backgroud = styled.div`

  background-color: #000;
  display: flex;
  justify-content: center;
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
    font-family: "Anuphan";
    font-size: 13px;
    font-weight: 700;
    line-height: 17.325px;
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
    font-family: "Anuphan";
    font-weight: 700;
    line-height: 17.325px;
  }
`;

const StyleContainer = styled.div`
  .container {
    width: 870px;
    height: 570px;
    background-color: #ffffff;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    flex-direction: column;
    padding: 30px;
    padding-top: px;
    margin-bottom: 70px;
    margin-left: 20px;
    border: 2px solid #dddd;
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
    left: 40px;
  }

  .previous:hover {
    background-color: #ddd;
    color: black;
  }
`;

const Styledh1 = styled.div`
  h1 {
    font-size: 40px;
    font-weight: 17px;
    margin-bottom: 20px;
    margin-left: 320px;
    font-family: "Anuphan";
    color:#fff;

  }
`;

const Styleleft = styled.div`
  .left-image {
    width: 250px;
    height: 255px;
    display: flex;
    margin-left: 170px;
    margin-top: 5px;
    background: url(${paymentImage}) no-repeat;
    background-size: 100%;
  }
`;

const StyleRight = styled.div`
  .right-image {
    display: flex;
    width: 120px;
    height: 205px;
    margin-left: -180px;
    margin-top: 100px;

    flex-shrink: 0;
    background-size: 100%;
  }
`;

const Styledtext1 = styled.div`
  .text1 {
    margin-top: 10px;
    color: #000;
    text-align: center;
    margin-left: -160px;
    font-family: "Anuphan";
  }
`;

const Styledtext2 = styled.div`
  .text2 {
    margin-top: 10px;
    margin-left: 190px;
    display: flex;
    font-family: "Anuphan";
    color: #000;
    text-align: center;
    font-weight: bold;
  }
`;

const Styledtext3 = styled.div`
  .text3 {
    margin-top: 10px;
    margin-left: 100px;
    display: flex;
    font-family: "Anuphan";
    color: #000;
    text-align: center;
    font-weight: bold;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 50px;
  margin-top: 15px;
  margin-bottom: 10px;
  gap: 10px; /* Adjust the gap as needed */
`;

const CheackPayment = ({ url, packages, setPackages,setCompanies, setNotis }) => {

    const { id } = useParams();
    const { notiId } = useParams();
    const navigate = useNavigate();
    const pomotion = packages.find((packs)=> packs.companyId == Number(id));

    async function setUser(){
        const respone = await axios.get(`${url}/users/${pomotion.companyId}`)
        const {id,pack,...item} = respone.data;
        await axios.put(`${url}/users/${id}`,{...item,pack:1})

    }

    async function confirm() {
      try {
        // Step 1: Delete a notification (notis) based on notiId
        await axios.delete(`${url}/notis/${Number(notiId)}`);
    
        // Step 2: Create a new notification
        await axios.post(`${url}/notis`, {
          companyId: pomotion.companyId,
          icon: "checked.png",
          type: "confirm",
          description: `เริ่มการโปรโมทตาม ${pomotion.pack} นับตั้งแต่วันนี้จนถึงวันที่ ${pomotion.dayEnd}`,
        });
    
        // Step 3: Update the user's status to "company"
        const { id, status, ...item } = pomotion;
        await axios.delete(`${url}/packages/${id}`)
        await axios.post(`${url}/packages`, { ...item, status: "completed" });
        

        const ress = await axios.get(`${url}/notis`)
        const resCom = await axios.get(`${url}/packages`)
        setPackages(resCom.data)
        setNotis(ress.data)
        setUser()
        const resUser = await axios.get(`${url}/users`)
        setCompanies(resUser.data)
        
    
        // Step 4: Display a success message using Swal (SweetAlert)
        Swal.fire({
          position: "center",
          icon: "success",
          title: "เริ่มการโปรโมท",
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
          await axios.delete(`${url}/packages/${Number(id)}`)
      
          // Step 2: Create a new notification
          await axios.post(`${url}/notis`, {
            companyId: pomotion.companyId,
            icon: "cancel.png",
            type: "cancel",
            description: `โปรโมชั่นของคุณถูกยกเลิก สอบถามเพิ่มเติมโปรดติดต่อเจ้าหน้าที่`,
          });
      
          // Step 3: Update the user's status to "company"
          
          const ress= await axios.get(`${url}/notis`)
          setNotis(ress.data)
      
          // Step 4: Display a success message using Swal (SweetAlert)
          Swal.fire({
            position: "center",
            icon: "success",
            title: "ยืนยันโปรโมชั่น",
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
        <Styledh1>
          <h1>{pomotion.pack}</h1>
        </Styledh1>
        <div className="container">
          <div className="left-content">
            <Styleprevious>
              <Link to="/" className="previous">
                &#8249;
              </Link>
            </Styleprevious>
            <Styleleft>
              <div className="left-image"></div>
            </Styleleft>
            <Styledtext1>
              <div className="text1">
                ธนาคารไทยพาณิชย์ (SCB)
                <br />
                405-1-39704-8
                <br />
                ชื่อบัญชี บริษัท ###### จำกัด (มหาชน) ประเภทบัญชีออมทรัพย์
              </div>
            </Styledtext1>

            <Styledtext2>
              <div className="text2">สามารถชำระเงินได้ตามขั้นตอนต่อไปนี้</div>
            </Styledtext2>
            <Styledtext1>
              <div className="text1">
                1. เซฟภาพหน้าจอ
                <br />
                2. เปิดแอพธนาคารของท่าน
                <br />
                3. เลือกเมนูสแกน QR
                <br />
                4. กดปุ่มรูปภาพ เพื่อเลือกรูปหน้าจอ QR ที่จับภาพไว้
                <br />
              </div>
            </Styledtext1>

            <Styledtext3>
              <div className="text3">
                เมื่อชำระเงินสำเร็จpackageจะส่แจ้งเตือนไปหาคุณบนเว็ปไซต์
              </div>
            </Styledtext3>
            <ButtonContainer>
              <StyledBotton>
                <Button text="ยืนยัน" onClick={confirm} />
              </StyledBotton>
              <StyledBotton2>
                <Button text="ยกเลิก" onClick={cancel} />
              </StyledBotton2>
            </ButtonContainer>
          </div>

          <StyleRight>
            <div className="right-image">
                <img src={pomotion.slip} ></img>
            </div>
          </StyleRight>
        </div>
      </StyleContainer>
    </Backgroud>
  );
};

export default CheackPayment;
