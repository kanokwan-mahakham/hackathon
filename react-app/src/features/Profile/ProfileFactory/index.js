import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardEdit from "../../Component/CardProfile/CardEdit";
import PhotoProduct from "../../Component/Product/PhotoProduct";
import ProductSale from "../../Component/Product/ProductSale";
import Footer from "../../Component/Footer";
import axios from "axios";


const ProfileEntrepreneurShow = ({ user, setUser, url, className }) => {

  const [information,setInformation] = useState([]);


  useEffect(() => {
    async function getCompanies() {
    try{
        // หลังจากที่ดึงข้อมูลเสร็จสิ้นให้เรียก setFactory
        const res = await axios.get(`${url}/informations/${user.informationId}`)
        setInformation(res.data)
       
       
      } catch (error) {
        // จัดการข้อผิดพลาดในกรณีที่เกิดข้อผิดพลาดในการดึงข้อมูลบริษัท
        console.error('Error fetching company data:', error);
      }
    }
  
    getCompanies();
  }, []);

  return (
    <div className={className}>
      <Navbar user={user} setUser={setUser} />
      <CardEdit user={user} information={information} />
      <div className="products">
        <PhotoProduct />
        <h1>Product</h1>
        <div className="sale-product">
          <ProductSale />
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default styled(ProfileEntrepreneurShow)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: #c6ccd7;
  padding-top: 10px;

  .products {
    height: fit-content;
    background-color: white;
    margin-top: 100px;
    margin-bottom: 200px;
    padding: 120px 70px 70px 70px;
    border-radius: 100px;
  }
  .products h1 {
    font-size: 120px;
    font-weight: 600;
    color: #333a56;
    text-align: center;
  }
  .sale-product {
    display: flex;
    justify-content: center;

  }
`;
