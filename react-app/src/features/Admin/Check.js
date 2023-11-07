import React, { useState, useEffect, useLayoutEffect } from "react";
import InputRegField from "../Component/input";
import Button from "../Component/Botton";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";

import Swal from "sweetalert2";
import axios from "axios";
const Backgroud = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  font-family: "Anuphan";
`;

const StyleContainer = styled.div`
  .container {
    font-family: "Anuphan";
    width: 1110px;
    height: 1070px;
    background-color: #ffffff;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: column;
    padding: 30px;
    flex-wrap: nowrap;
    margin-top: px;
    margin-left: 90px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.4);
  }
  @media (max-width: 1208px) {
    .container {
      font-family: "Anuphan";
      width: 75%; /* Make it full width on smaller screens */
      border-radius: 20px; /* Adjust border-radius */
      margin-top: 10px;
      margin-bottom: 10px;
      margin-bottom: 10px; /* Adjust the margin top */
      flex-direction: row;
      margin-left: 90px;
    }
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
    font-family: "Anuphan";
    font-size: 13px;
    font-weight: 700;
    line-height: 17.325px;
  }
  @media (max-width: 1208px) {
    .button {
      width: 70%;
      font-family: "Anuphan";
    }
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
    margin-right: 80px;
    border: 2px solid #000;
  }

  .button-text {
    color: #000;
    text-align: center;
    font-family: "Anuphan";
    font-size: 13px;
    font-weight: 700;
    line-height: 17.325px;
  }

  @media (max-width: 1208px) {
    .button {
      width: 70%;
      font-family: "Anuphan";
    }
  }
`;

const Styledh1 = styled.div`
  h1 {
    font-size: 43px;
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
    font-family: "Anuphan";
  }

  @media (max-width: 768px) {
    .h1 {
      font-size: 43px;
      font-weight: bold;
      padding: 0px;
      font-family: "Anuphan";
    }
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
  margin-bottom: 10px;
  gap: 10px;
  width: 100%;
  justify-content: center;

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
      margin-left: 200px;
    }
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
  }
`;
const Stylep = styled.div`
  .boxtext {
    margin: 30px;
    font-size: 17.55px;
    margin-left: 180px;
    font-family: "Anuphan";
  }

  @media (max-width: 768px) {
    .boxtext {
      font-size: 17.55px;
    }
  }
`;

const Check = ({
  url,
  companies,
  setCompanies,
  setNotis,
  products,
  setProducts,
}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const company = companies.find((com) => com.id == Number(id));
  window.scrollTo(0, 0);

  async function confirm() {
    try {
      // Step 1: Delete a notification (notis) based on notiId
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
      const ress = await axios.get(`${url}/notis`);
      const resCom = await axios.get(`${url}/users`);
      setCompanies(resCom.data);
      setNotis(ress.data);
      // Step 4: Display a success message using Swal (SweetAlert)
      Swal.fire({
        position: "center",
        icon: "success",
        title: "ยืนยันเรียบร้อย",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // Step 5: Navigate back to the home page
        navigate(-1);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function deleteUser() {
    try {
      // Step 4: Display a success message using Swal (SweetAlert)

      await Promise.all(
        products.map(async (product) => {
          if (product.companyId == company.id) {
            await axios.delete(`${url}/products/${product.id}`);
          }
        })
      );

      await axios.delete(`${url}/users/${company.id}`);
      const res = await axios.get(`${url}/users`);
      const resProducts = await axios.get(`${url}/products`);
      setCompanies(res.data);
      setProducts(resProducts.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "ยกเลิกบัญชีเรียบร้อย",
        text: "กลับสู่หน้าหลัก",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        // Step 5: Navigate back to the home page
        navigate(-1);
      });
    } catch (error) {
      console.error(error);
    }
  }

  function editUser() {
    navigate(`/editCheckdata/${company.id}`);
  }

  function back() {
    navigate(-1);
  }

  return (
    <Backgroud>
      <StyleContainer>
        <div className="container">
          <Styleprevious>
            <Link className="previous" onClick={back}>
              &#8249;
            </Link>
          </Styleprevious>
          <div className="left-content">
            <Styledh1>
              <h1>ตรวจสอบข้อมูล</h1>
            </Styledh1>

            <Stylep>
              <div className="boxtext">อีเมล : {company.email}</div>
            </Stylep>
            <Styleline1>
              <div className="underline"></div>
            </Styleline1>

            <Stylep>
              <div className="boxtext">ชื่อผู้ใช้ : {company.username}</div>
            </Stylep>
            <Styleline1>
              <div className="underline"></div>
            </Styleline1>
            <Stylep>
              <div className="boxtext">รหัสผ่าน : {company.password}</div>
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
              <div className="boxtext">
                เลขประจำตัวผู้เสียภาษี : {company.juristicNumber}
              </div>
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
              {company.status == "cancel" ? (
                <>
                  <StyledBotton>
                    <Button text="อนุมัติบัญชี" onClick={confirm} />
                  </StyledBotton>
                  <StyledBotton2>
                    <Button text="แก้ไขข้อมูล" onClick={editUser} />
                  </StyledBotton2>
                </>
              ) : (
                <>
                  <StyledBotton2>
                    <Button text="แก้ไขข้อมูล" onClick={editUser} />
                  </StyledBotton2>
                </>
              )}
            </ButtonContainer>
          </div>
        </div>
      </StyleContainer>
    </Backgroud>
  );
};

export default Check;
