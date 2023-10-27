import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardEdit from "../../Component/CardProfile/CardEdit";
import PhotoProduct from "../../Component/Product/PhotoProduct";
import ProductSale from "../../Component/Product/ProductSale";
import Footer from "../../Component/Footer";
import Noti from "../../Component/Noti";
import ListChat from "../../Component/ListChat";
import { Link,useNavigate,useParams } from "react-router-dom";
import axios from "axios";
import CardCompany from "../../Component/CardProfile/CardCompany";

const SeeProfile = ({
  user,
  setUser,
  url,
  products,
  companies,
  className,
  compares ,
  setCompares,
  showChat,setShowChat
  ,setShownoti,showNoti,notis
}) => {


  const { id } = useParams();

  const [company , setCompany] = useState([]);
  const [information , setInformation] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const findeCompany = companies.find((com)=> com.id == id);
        setCompany(findeCompany);
        const response = await axios.get(`${url}/informations/${findeCompany.informationId}`)
        setInformation(response.data)
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, [id]);


  return (
    <div className={className}>
             {showNoti=="show"?(
        <Noti url={url} user={user} setShownoti={setShownoti} notis={notis} ></Noti>
      ):null
      }
      {showChat=="show"?(
        <ListChat setShowChat={setShowChat}/>
      ):null}
      
      <Navbar user={user} setUser={setUser} setShownoti={setShownoti} setCompares={setCompares} setShowChat={setShowChat}  />
      
      <CardCompany user={company} information={information} />

      <div className="products">

        <PhotoProduct information={information} />

        <h1>Product</h1>
        <div className="sale-product">

          {products.length > 0
            ? products.map((product) => {
                return product.companyId === Number(id) ? (
                  <ProductSale key={product.id} product={product} />
                ) : null;
              })
            : null}
            
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default styled(SeeProfile)`
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
