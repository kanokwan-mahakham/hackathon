import styled from "styled-components";

const ProductSale = ({ product,className }) => {
  const save = require("../../../image Hackathon/icon/save-instagram.png");
  const image = require("../../../image Hackathon/image/background.jpeg");
  return (
    <div className={className}>
      <div className="box">
        <img src={product.image} id="box-image"></img>
        <div className="box-detail">
          <p id="name">{product.name}</p>
          <p className="detail">
            <p>{product.description}</p>
            <p id="price">{product.price}</p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default styled(ProductSale)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  .box {
    position: relative;
  }
  .box #box-image {
    width: 400px;
    height: 500px;
    border-radius: 30px;
    margin: 10px 40px 40px 0px;
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
