
import React from 'react';
import InputField from '../Component/input';
import Button from '../Component/Botton';
import styled from 'styled-components';
import paymentImage from '../../image Hackathon/image/qrcode.png';


const Backgroud = styled.div`
background-color: #C6CCD7; /* RGBA color with 0.7 alpha (70% opacity) */
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
    margin-left:50px;
}
.button-text {
    color: #FFF;
    text-align: center;
    font-family: 'Open Sans';
    font-size: 13px;    
    font-weight: 700;
    line-height: 17.325px;
}
`;

const StyleContainer =styled.div`
.container {
    width: 870px;
    height: 570px;
    background-color: #FFFFFF;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: column;
    padding: 30px;
    padding-top: px;
    margin-top: 0px;
    margin-left: 20px;
    border: 2px solid #000;
}
`

const Styleprevious = styled.div`
.previous{
    text-decoration: none;
    display: inline-block;
    padding: 8px 16px;
    background-color: #f1f1f1;
    color: black;
    border-radius: 50%;
}

.previous:hover{
    background-color: #ddd;
    color: black;
}
`


const Styledh1 = styled.div`
h1 {
    font-size: 43px;
    font-weight: bold;
    margin-botton: 70px;
    margin-left: 0px;
    text-align: center;
        

}
`
const StyleRight= styled.div`.right {
    width: 220px;
    height: 150px;
    border-radius: 40px;
    margin-top: 140px;
    padding-right:30px;
   
}`


const Styleleft = styled.div`
  .left-image {
    width: 250px;
    height: 255px;
    margin-left: 80px;
    margin-top: 5px;
    background: url(${paymentImage})no-repeat;
    flex-shrink: 0;
    background-size: 100%; 
  }
`;

const Styledtext1 = styled.div`
.text1{
    margin-top:10px;
    color: #000;
    text-align: center;
}`
const Styledtext2 = styled.div`
margin-top:10px;
    margin-botton:140px;
    color: #000;
    text-align: center;
    font-weight: bold;
`
const PopupPayment   = () => {
    return (
        <Backgroud>
        <StyleContainer>
        <Styledh1><h1>Payment</h1></Styledh1>
        <div className="container">
        
            <div className="left-content">
                <Styleprevious>
                <div href="#" className="previous"> &#8249;</div></Styleprevious>
                    
            <Styleleft>   
                <div className="left-image">
                    <div className="right-img"></div>
                </div>
            </Styleleft>
            <Styledtext1>
                <div className="text1">
                    ธนาคารไทยพาณิชย์ (SCB)<br />
                    405-1-39704-8<br />
                    ชื่อบัญชี บริษัท ###### จำกัด (มหาชน) ประเภทบัญชีออมทรัพย์
                </div>
            </Styledtext1>

            <Styledtext2>
                <div className="text1">
                    สามารถชำระเงินได้ตามขั้นตอนต่อไปนี้
                </div>
            </Styledtext2>
            <Styledtext1>
                <div className="text1">
                1. เซฟภาพหน้าจอ<br />
                2. เปิดแอพธนาคารของท่าน<br />
                3. เลือกเมนูสแกน QR<br />
                4. กดปุ่มรูปภาพ เพื่อเลือกรูปหน้าจอ QR ที่จับภาพไว้<br />
                </div>
            </Styledtext1>

            <Styledtext2>
                <div className="text1">
                เมื่อชำระเงินสำเร็จpackageจะส่แจ้งเตือนไปหาคุณบนเว็ปไซต์
                </div>
            </Styledtext2>

                    <StyledBotton>
                        <Button text="Continue" />
                    </StyledBotton>
                    
            </div>
            <StyleRight>   
                <div className='right'>
                <div class="flex items-center justify-center w-full">
                    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-16 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                        <div class="flex flex-col items-center justify-center pt-2 pb-3">
                            <svg class="w-6 h-6 mb-2 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                            </svg>
                        <p class="mb-1 text-xs text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                    <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div>

                </div>
            </StyleRight>
        </div>
        </StyleContainer>
        </Backgroud>
        
    );
};

export default  PopupPayment




; 