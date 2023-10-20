import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardNewData from "../../Component/CardProfile/CardNewData";
import PhotoProductEdit from "../../Component/Product/PhotoProductEdit";
import ProductSaleEdit from "../../Component/Product/ProductSaleEdit";
import Package from "../../Component/Package";
import Footer from "../../Component/Footer";

const ProfileEntrepreneurEdit = ({ user, url, setUser, companies, favs, setFavs,information, setInformation, className }) => {
  return (
    <div className={className}>
      <Navbar user={user} setUser={setUser} />
      <CardNewData user={user} url={url} information={information} setInformation={setInformation}/>
      <div className="products">
        <PhotoProductEdit />
        <h1>Product</h1>
        <div className="sale-product">
          <ProductSaleEdit />
        </div>
        <div className="package">
          <h1>Package</h1>
        </div>
      </div>
      <div className="shop-package">
        <Package/>
      </div>
      <Footer />
    </div>
  );
};

export default styled(ProfileEntrepreneurEdit)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  background-color: #c6ccd7;
  padding-top: 10px;

  .products {
    position: relative;
    height: fit-content;
    background-color: white;
    margin-top: 100px;
    margin-bottom: 100px;
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
  .products .package {
    position: absolute;
    transform: translate(190%, -10%);
  }
  .package h1 {
    font-size: 55px;
    font-weight: 600;
    color: white;
    width: 300px;
    height: 90px;
    background-color: black;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
