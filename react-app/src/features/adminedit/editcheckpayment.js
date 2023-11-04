import React, { useState } from "react";
    import styled from "styled-components";
    import paymentImage from "../../image Hackathon/image/qrcode.png";
    import defaultimg from "../../image Hackathon/image/choose1.jpeg";
    const Backgroud = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');
    background-color: #000;
    display: flex;
    justify-content: center;
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
    };`

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
        margin-left: 50px;
        border: 2px solid #000;
    }

    .button-text {
        color: #000;
        text-align: center;
        font-family: "Open Sans";
        font-size: 13px;
        font-family: "Anuphan";
        font-weight: 700;
        line-height: 17.325px;
    }
    };`

    const StyleContainer = styled.div`
    .container {
        width: 870px;
        height: 570px;
        background-color: #ffffff;
        border-radius: 54px;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        flex-direction: column;
        padding: 30px;
        padding-top: px;
        margin-bottom: 70px;
        margin-left: 20px;
        border: 2px solid #dddd;
    }
    };`

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
    };`

    const Styledh1 = styled.div`
    h1 {
        font-size: 40px;
        font-weight: 17px;
        margin-bottom: 20px;
        margin-left: 320px;
        font-family: "Anuphan";
        color: #fff;
    }
    };`

    const Styleleft = styled.div`
    .left-image {
        width: 250px;
        height: 255px;
        display: flex;
        margin-left: 170px;
        margin-top: 5px;
        background: url(${paymentImage}) no-repeat;
        background-size: 100%;
    }
    };`

    const StyleRight = styled.div`
  .right-image {
    display: flex;
    width: 220px;
    height: 305px;
    margin-left: -180px;
    margin-top: 100px;
    flex-shrink: 0;
    background-size: 100%;
    flex-direction: column;
  }
`;

    const Styledtext1 = styled.div`
    .text1 {
        margin-top: 10px;
        color: #000;
        text-align: center;
        margin-left: -160px;
        font-family: "Anuphan";
    }
    };`

    const Styledtext2 = styled.div`
    .text2 {
        margin-top: 10px;
        margin-left: 190px;
        display: flex;
        font-family: "Anuphan";
        color: #000;
        text-align: center;
        font-weight: bold;
    }
    };
    `
    const Styledtext3 = styled.div`
    .text3 {
        margin-top: 10px;
        margin-left: 100px;
        display: flex;
        font-family: "Anuphan";
        color: #000;
        text-align: center;
        font-weight: bold;
    }
    };
    `
    const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 50px;
    margin-top: 15px;
    margin-bottom: 10px;
    gap: 10px;
  `;
  
  const RightImageButton = styled.button`
    
    padding: 8px 15px 8px 15px;
    border: 1px solid #ccc;
    border-radius: 0px;
    margin-bottom: 0  px;
    width: 100%;
    box-sizing: border-box;
    color: #2C3E50;
    background-color: #ECEFF1;
    font-size: 16px;
    letter-spacing: 1px
    font-family: "Anuphan";
   
  `;

  const ImageInput = styled.input`
 
`;


  const EditCheckPayment = () => {
    const [imageSource, setImageSource] = useState(defaultimg);
  
    const handleImageChange = (e) => {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setImageSource(newImage);
    };

 
    return (
      <Backgroud>
        <StyleContainer>
          <Styledh1>
            <h1>แก้ไขข้อมูล</h1>
          </Styledh1>
          <div className="container">
            <div className="left-content">
              <Styleprevious>
                <div to="/" className="previous">
                  &#8249;
                </div>
              </Styleprevious>
              <Styleleft>
                <div className="left-image"></div>
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
                <div className="text2">สามารถชำระเงินได้ตามขั้นตอนต่อไปนี้</div>
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
  
              <Styledtext3>
                <div className="text3">
                  เมื่อชำระเงินสำเร็จ package จะส่งจัดเตือนไปหาคุณบนเว็ปไซต์
                </div>
              </Styledtext3>
              <ButtonContainer>
                <StyledBotton>
                  <div className="button">
                    <span className="button-text">ยืนยัน</span>
                  </div>
                </StyledBotton>
                <StyledBotton2>
                  <div className="button">
                    <span className="button-text">ยกเลิก</span>
                  </div>
                </StyledBotton2>
              </ButtonContainer>
            </div>
  
            <StyleRight>
            <div className="right-image">
        <img src={imageSource} alt="QR Code" />
        <RightImageButton>
          Edit Image
          <ImageInput
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </RightImageButton>
      </div>
            </StyleRight>
          </div>
        </StyleContainer>
      </Backgroud>
    );
  };
  
  export default EditCheckPayment;