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
    width: 320px;
    height: 420px;
    border-radius: 30px;
    margin: 10px 40px 40px 0px;
    object-fit: cover;
  }
  .box-detail {
    display: flex;
    text-align: center;
    position: absolute;
    bottom: 70px;
    left: 15px;
    background-color: white;
    width: 290px;
    height: 150px;
    border-radius: 30px;
    z-index: 1;
    flex-direction: column;
    justify-content: center;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
  }
  .image {
    flex: 1;
    overflow: hidden;
  }
  .box-detail #name {
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 5px;
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
