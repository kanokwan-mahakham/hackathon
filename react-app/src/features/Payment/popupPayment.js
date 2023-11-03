
import React, { useState, useEffect } from "react";
import InputField from "../Component/input";
import Button from "../Component/Botton";
import styled from "styled-components";
import paymentImage from "../../image Hackathon/image/qrcode.png";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";

const Backgroud = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');
  background-color: #c6ccd7; /* RGBA color with 0.7 alpha (70% opacity) */
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

  @media (max-width: 768px) {
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
  }

`;
const Styledh1 = styled.div`
  h1 {
    font-size: 43px;
    font-weight: bold;
    margin-bottom: 70px;
    margin-left: 0px;
    text-align: center;
  }
`;
const StyleRight = styled.div`

  .right-image {
    margin-top: 140px; /* Adjust the margin top */
    display: flex;
    justify-content: center;
  }

  @media (max-width: 768px) {
    .right-image  {
      margin-top:10px;
      display: flex;
    justify-content: center;
    }
  }
`;
const Styleleft = styled.div`
  .left-image {
    width: 210px;
    height: 215px;
    margin-left: 80px;
    margin-top: 5px;
    background: url(${paymentImage}) no-repeat;
    flex-shrink: 0;
    background-size: 100%;
  }

  @media (max-width: 768px) {
    .left-image   {
      width: 150px;
    height: 155px;
    margin-left: 130px;
    margin-top: 0px;
    background: url(${paymentImage}) no-repeat;
    flex-shrink: 0;
    background-size: 100%;
    }
  }
`;
const Styledtext1 = styled.div`
  .text1 {
    margin-top: 10px;
    color: #000;
    text-align: center;
    font-size:15px;
  }
  @media (max-width: 768px) {
  .text1 {
    margin-top: 10px;
    color: #000;
    text-align: center;
    font-size:10px;
  }
}
`;
const Styledtext2 = styled.div`
  margin-top: 10px;
  
  color: #000;
  text-align: center;
  font-weight: bold;

  @media (max-width: 768px) {
  .text2 {
    font-size:10px;
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

`;
const PopupPayment = ({ url, user, pomotion, setPackages,setNotis }) => {
  const [image, setImage] = useState([]);
  const navigate = useNavigate();
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0"); // เดือนใน JavaScript เริ่มจาก 0
  const year = String(currentDate.getFullYear()).slice(2); // หรือคุณสามารถใช้ .substr(2) แทน .slice(2)
  const hours = String(currentDate.getHours()).padStart(2, "0");
  const minutes = String(currentDate.getMinutes()).padStart(2, "0");
  const [formattedTime, setFormattedTime] = useState("");
  const [formattedDay, setFormattedDay] = useState("");
  const [pack, setPack] = useState("");

  useEffect(() => {
    async function getCompanies() {
      setFormattedTime(`${hours}.${minutes}`);
      if (pomotion == "day") {
        const res = String(currentDate.getDate() + 1).padStart(2, "0");
        setFormattedDay(`${res}-${month}-${year}`);
        setPack("เพิ่มการมองเห็น 1 วัน")
      } else if (pomotion == "month") {
        const res = String(currentDate.getMonth() + 2).padStart(2, "0");
        setFormattedDay(`${day}-${res}-${year}`);
        setPack("เพิ่มการมองเห็น 1 เดือน")
      } else {
        const res = String(currentDate.getFullYear() + 1).slice(2);
        setFormattedDay(`${day}-${month}-${res}`);
        setPack("เพิ่มการมองเห็น 1 ปี")
      }
    }
    getCompanies();
  }, []);

  // function handleFileChange(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = function (e) {
  //       const imagePath = e.target.result;
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
    try {
      await axios.post(`${url}/packages`, {
        companyId: user.id,
        slip: image,
        status:"waiting",
        pack: pack,
        timeEnd: formattedTime,
        dayEnd: formattedDay,
      });
      const res = await axios.get(`${url}/packages`);

      await axios.post(`${url}/notis`, {
        companyId: user.id,
        icon: "order-now.png",
        type: "wait package",
        description: "รอตรวจสอบข้อมูลเพื่อดำเนินการโปรโมท",
      });

      const notis = await axios.get(`${url}/notis`)
      setNotis(notis.data)
      setPackages(res.data);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        console.log(res.data);
        navigate("/edit-profile-company");
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Backgroud>
      <StyleContainer>
        <Styledh1>

          {pomotion=="day"?(
            <h1>เพิ่มการมองเห็น 1 วัน</h1>
          ):pomotion=="month"?(
            <h1>เพิ่มการมองเห็น 1 เดือน</h1>
          ):(
            <h1>เพิ่มการมองเห็น 1 ปี</h1>
          )}
          
        </Styledh1>
        <div className="container">
          <div className="left-content">
            <Styleprevious>
              <Link to="/edit-profile-company" className="previous">
                &#8249;
              </Link>
            </Styleprevious>

            <Styleleft>
              <div className="left-image">
                <div className="right-img"></div>
              </div>
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
              <div className="text1">สามารถชำระเงินได้ตามขั้นตอนต่อไปนี้</div>
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

            <Styledtext2>
              <div className="text1">
                เมื่อชำระเงินสำเร็จpackageจะส่งแจ้งเตือนไปหาคุณบนเว็ปไซต์
              </div>
            </Styledtext2>

            <StyledBotton>
              <Button text="ยืนยัน" onClick={submit} />
            </StyledBotton>
          </div>
          <StyleRight>
          
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
            
          </StyleRight>
        </div>
      </StyleContainer>
    </Backgroud>
  );
};

export default PopupPayment;