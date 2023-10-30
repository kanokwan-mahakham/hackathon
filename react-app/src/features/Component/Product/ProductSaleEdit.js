import axios from "axios";
import styled from "styled-components";

const ProductSaleEdit = ({ url, setProducts, product, className }) => {
  const cancel = require("../../../image Hackathon/icon/cancel.png");
  const image = require("../../../image Hackathon/image/background.jpeg");

  async function deleteProduct(){
    try{
        await axios.delete(`${url}/products/${product.id}`)
        const res = await axios.get(`${url}/products`)
        setProducts(res.data)
    }catch(error){
      console.error(error)
    }
  }

  return (
    <div className={className}>
      <div className="big-box">
        <img src={cancel} id="cancel-button" onClick={deleteProduct} />
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
    </div>
  );
};

export default styled(ProductSaleEdit)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  
  
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
    cursor: pointer;
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
