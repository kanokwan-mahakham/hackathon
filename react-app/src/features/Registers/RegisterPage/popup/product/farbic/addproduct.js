
import React, { useState } from "react";
import InputRegField from "../../../../../Component/input";
import Button from "../../../../../../features/Component/Botton";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Backgroud = styled.div`
  background-color: rgba(198, 204, 215, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
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
    margin-top: 20px;
  }
  .button-text {
    color: #fff;
    text-align: center;
    font-family: "Open Sans";
    font-size: 13px;
    font-weight: 700;
    line-height: 17.325px;
  }
`;

const StyleContainer = styled.div`
  .container {
    width: 870px;
    height: 470px;
    background-color: #ffffff;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: column;
    padding: 30px;
    padding-top: 20px; /* Adjust the padding top */
    margin-top: 20px; /* Adjust the margin top */
    margin-left: 20px;
    border: 2px solid #000;
  }

  @media (max-width: 768px) {
    .container {
      width: 70%; /* Make it full width on smaller screens */
      border-radius: 20px; /* Adjust border-radius */
      margin-top: 10px; /* Adjust the margin top */
      flex-direction: row;
    }
  }
`;

const StyledSelect = styled.div`
  .select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 20px;
    font-size: 14px;
    background-color: #fff;
    color: #333;
    appearance: none;
  }

  .select:hover {
    border-color: #666;
  }

  .select:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 5px rgba(77, 77, 77, 0.5);
  }

  .select::after {
    content: "\25BC"; /* Down arrow character */
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    font-size: 12px;
    color: #777;
    pointer-events: none;
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
  }

  .previous:hover {
    background-color: #ddd;
    color: black;
  }
`;

const StyleRightimg = styled.div`
  .right-image {
    margin-top: 140px; /* Adjust the margin top */
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .right-image {
      margin-top:10px;
      display: flex;
    justify-content: center;
    }
  }
    
`;

const Styledh1 = styled.div`
  .h1 {
    font-size: 30px;
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
  }

  @media (max-width: 768px) {
    .h1 {
      font-size: 20px;
      font-weight: bold;
      margin-top: 90px;
      text-align: center;
    }
  }
  
`;

const Styledtextinput = styled.div`
  .textinput {
    color: #807d7d;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 17.325px;
    border: none;
    outline: none;
  }

  @media (max-width: 768px) {
    .textinput {
      font-size: 12px;
    }
  }
`;


const Styledinput1 = styled.div`
  .input-container2 {
    display: flex;
    height: 27px;
    padding: 10px 15px;
    align-items: center;
    gap: 20px;
    border-radius: 10px;
    border: 1px solid #dbdbdb;
    margin-top: 10px;
  }

  .input-container2 input {
    color: #807d7d;
    font-family: "Open Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 17.325px;
    border: none;
    outline: none;
  }
  @media (max-width: 768px) {
    .input-container2 {
      display: flex;
      height: 50px;
      padding: 2px 2px;
      align-items: center;
      gap: 20px;
      border-radius: 10px;
      border: 1px solid #dbdbdb;
      margin-top: 10px;
    }
    .input-container2 input {
      color: #807d7d;
      font-family: "Open Sans";
      font-size: 16px;
      font-weight: 400;
      line-height: 17.325px;
      border: none;
      outline: none;
    }
  }

`;

const Styledinput = styled.label`
input {
    padding: 8px 15px 8px 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 25px;
    margin-top: 2px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    background-color: #ECEFF1;
    font-size: 16px;
    letter-spacing: 1px
}
input:focus{
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #673AB7;
    outline-width: 0
}
@media (max-width: 768px) {

}`;
const PopupAddProductFarbic = ({ url, user, setProducts }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [typeCompany, setTypeCompany] = useState(user.type);
  const [typeProduct, setTypeProduct] = useState("ผ้าฝ้าย");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  // function handleFileChange(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       const imagePath = e.target.result;
  //       console.log("Image path: ", imagePath);
  //       setImage(imagePath); // เก็บ URL ของภาพใน state
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      if (file.size <= 70 * 1024) { // ตรวจสอบขนาดของไฟล์ (70KB)
        const reader = new FileReader();
        reader.onload = function (e) {
          const imagePath = e.target.result;
          setImage(imagePath); // เก็บ URL ของภาพใน state
        };
        reader.readAsDataURL(file);
        
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "ภาพใหญ่ไป",
          showConfirmButton: false,
          timer: 2000,
        });
      }
    }
  }

  async function submit() {
    
    if (!name || !description || !image || !typeProduct || !price) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Please fill in all fields",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }

    try {
      const newProduct = {
        companyId: user.id,
        name: name,
        description: description,
        image: image,
        typeCompany: typeCompany,
        typeProduct: typeProduct,
        price: price,
      };

      await axios.post(`${url}/products`, newProduct);
      const res = await axios.get(`${url}/products`);
      setProducts(res.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        navigate("/edit-profile-company");
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Backgroud>
      <StyleContainer>
        <div className="container">
          <div className="left-content">
            <Styleprevious>
              <Link to="/edit-profile-company" className="previous">
                {" "}
                &#8249;
              </Link>
            </Styleprevious>
            <Styledh1>
              <h1>Add Product</h1>
            </Styledh1>
            <InputRegField
              placeholder="ชื่อสินค้า"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
            <InputRegField
              placeholder="รายละเอียด"
              type="text"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />

            <Styledinput1>
              <div className="input-container2">
                <Styledtextinput>
                  <div className="textinput">ประเภทสินค้า</div>
                </Styledtextinput>
                <StyledSelect>
                  <select
                    onChange={(event) => {
                      setTypeProduct(event.target.value);
                    }}
                  >
                    <option value="ผ้าฝ้าย">ผ้าฝ้าย</option>
                    <option value="ผ้าลินิน">ผ้าลินิน</option>
                    <option value="ผ้าไหม">ผ้าไหม</option>
                  </select>
                </StyledSelect>
              </div>
            </Styledinput1>

            <InputRegField
              placeholder="ราคา/เมตร"
              type="number"
              onChange={(event) => {
                setPrice(event.target.value);
              }}
            />

            <StyledBotton>
              <Button text="Continue" onClick={submit} />
            </StyledBotton>
          </div>
          <StyleRightimg>
            <div className="right-image ">
            <Styledinput>
            <input
                      type="file"
                      id="dropzone-file"
                      name="product-image"
                      accept="image/*"
                      className="hidden"
                      onChange={handleFileChange}
                    />
                </Styledinput>
                
            </div>
              </StyleRightimg>
        </div>
      </StyleContainer>
    </Backgroud>
  );
};

export default PopupAddProductFarbic;
