        import React from 'react';
        import Button from '../Component/Botton';
        import styled from 'styled-components';
        import paymentImage from '../../image Hackathon/image/qrcode.png';
        import slip from '../../image Hackathon/image/Slip.jpeg';

        const Backgroud = styled.div`
            background-color: rgba(198, 204, 215, 0.7);
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
                color: #FFF;
                text-align: center;
                font-family: 'Open Sans';
                font-size: 13px;
                font-weight: 700;
                line-height: 17.325px;
            }
        `;

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
            font-family: 'Open Sans';
            font-size: 13px;
            font-weight: 700;
            line-height: 17.325px;
        }
        `

        const StyleContainer = styled.div`
            .container {
                width: 870px;
                height: 570px;
                background-color: #FFFFFF;
                border-radius: 54px;
                display: flex;
                flex-wrap: wrap;
                align-content: flex-start;
                flex-direction: column;
                padding: 30px;
                padding-top: px;
                margin-bottom: 70px;
                margin-left: 20px;
                border: 2px solid #000;
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

        const Styledh1 = styled.div`
            h1 {
                font-size: 40px;
                font-weight: bold;
                margin-bottom: 20px;
                margin-left: 320px;
            }
        `;

        const Styleleft = styled.div`
            .left-image {
                width: 250px;
                height: 255px;
                display:flex;
                margin-left: 170px;
                margin-top: 5px;
                background: url(${paymentImage})no-repeat;
                background-size: 100%;
            }
        `;

        const StyleRight = styled.div`
            .right-image {
                display:flex;
                width: 250px;
                height: 755px;
                
                margin-left:-180px;
                margin-top:100px;
                background: url(${slip})no-repeat;
                flex-shrink: 0;
                background-size: 100%;
            }
        `;

        const Styledtext1 = styled.div`
            .text1 {
                margin-top: 10px;
                color: #000;
                text-align: center;
                margin-left:-160px;
                
            }
        `;

        const Styledtext2 = styled.div`
            .text2 {
                margin-top: 10px;
                margin-left:190px;
                display:flex;
                color: #000;
                text-align: center;
                font-weight: bold;
            }
        `;

        const Styledtext3 =styled.div`
        .text3{
            margin-top: 10px;
                margin-left:100px;
                display:flex;
                color: #000;
                text-align: center;
                font-weight: bold;
        }`;

        const ButtonContainer = styled.div`
            display: flex;
            flex-direction: row;
            margin-left:50px;
            margin-top:15px;
            margin-bottom:10px;
            gap: 10px; /* Adjust the gap as needed */
        `;

        const CheackPayment = () => {
            return (
                <Backgroud>
                    <StyleContainer>
                        <Styledh1>
                            <h1>Check Payment</h1>
                        </Styledh1>
                        <div className="container">
                            <div className="left-content">
                                <Styleprevious>
                                    <div href="#" className="previous"> &#8249;</div>
                                </Styleprevious>
                                <Styleleft>
                                    <div className="left-image" ></div>
                                </Styleleft>
                                <Styledtext1>
                                    <div className="text1">
                                        ธนาคารไทยพาณิชย์ (SCB)<br />
                                        405-1-39704-8<br />
                                        ชื่อบัญชี บริษัท ###### จำกัด (มหาชน) ประเภทบัญชีออมทรัพย์
                                    </div>
                                </Styledtext1>

                                <Styledtext2>
                                    <div className="text2">
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

                                <Styledtext3>
                                    <div className="text3">
                                        เมื่อชำระเงินสำเร็จpackageจะส่แจ้งเตือนไปหาคุณบนเว็ปไซต์
                                    </div>
                                </Styledtext3>
                                <ButtonContainer>
                                    <StyledBotton>
                                        <Button text="Confirm" />
                                    </StyledBotton>
                                    <StyledBotton2>
                                        <Button text="Cancel" />
                                    </StyledBotton2>
                                </ButtonContainer>
                            </div>

                            <StyleRight>
                                <div className="right-image"></div>
                            </StyleRight>
                        </div>
                    </StyleContainer>
                </Backgroud>
            );
        };

        export default CheackPayment;