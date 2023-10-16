import styled from "styled-components";

const ProductSaleEdit = ({ className }) => {
  const cancel = require("../../../image Hackathon/icon/cancel.png");
  const image = require("../../../image Hackathon/image/background.jpeg");

  return (
    <div className={className}>
      <div className="add-product">
        <p>+</p>
      </div>

      <div className="big-box">
        <img src={cancel} id="cancel-button" />
        <div className="box">
          <img src={image} id="box-image"></img>
          <div className="box-detail">
            <p id="name">เสื้อยืดคอกลม</p>
            <p className="detail">
              <p>เสื้อยืด TK สีขาว คอกลม Polyester T-shirt</p>
              <p id="price">THB 50 -100</p>
            </p>
          </div>
        </div>
      </div>
      <div className="big-box">
        <img src={cancel} id="cancel-button" />
        <div className="box">
          <img src={image} id="box-image"></img>
          <div className="box-detail">
            <p id="name">เสื้อยืดคอกลม</p>
            <p className="detail">
              <p>เสื้อยืด TK สีขาว คอกลม Polyester T-shirt</p>
              <p id="price">THB 50 -100</p>
            </p>
          </div>
        </div>
      </div>
      <div className="big-box">
        <img src={cancel} id="cancel-button" />
        <div className="box">
          <img src={image} id="box-image"></img>
          <div className="box-detail">
            <p id="name">เสื้อยืดคอกลม</p>
            <p className="detail">
              <p>เสื้อยืด TK สีขาว คอกลม Polyester T-shirt</p>
              <p id="price">THB 50 -100</p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(ProductSaleEdit)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  .add-product {
    width: 420px;
    height: 520px;
    border: 4px dashed gray;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 20px 30px 0px;
  }
  .add-product p {
    font-size: 80px;
    font-weight: 600;
    color: gray;
  }
  .big-box{
    position: relative;
  }
  .box {
    position: relative;
    opacity: 0.4;
  }
  .big-box #cancel-button {
    position: absolute;
    top: -4px;
    right: 20px;
    width: 50px;
    height: 50px;
    z-index: 2;
  }

  .box #box-image {
    width: 420px;
    height: 520px;
    border-radius: 30px;
    margin: 10px 20px 30px 0px;
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

  .detail {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px;
    flex-direction: column;
  }
  .detail p {
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 400;
    margin: 7px;
  }
  .detail #price {
    font-weight: 600;
    color: #333a56;
  }
`;
