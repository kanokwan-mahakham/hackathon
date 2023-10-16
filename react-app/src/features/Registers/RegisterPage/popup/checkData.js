
import React from 'react';
import InputRegField from '../../../Component/input';
import Button from '../../../Component/Botton';
import styled from 'styled-components';
import doc from '../../../../image Hackathon/image/docfactory.jpeg'
const Backgroud = styled.div`
background-color: #F9F8EE;`;


const StyleContainer =styled.div`
.container {
    width: 1110px;
    height: 1070px;
    background-color: #FFFFFF;
    border-radius: 54px;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    flex-direction: row;
    padding: 30px;
    flex-wrap: nowrap
    margin-top: px;
    margin-left: 150px;
    box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.40);
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




const Styledh1 = styled.div`
h1 {
    font-size: 43px;
    font-weight: bold;
    margin-top: 30px;
    text-align: center;
    margin-left:120px;
}
`
const ButtonContainer = styled.div`
            display: flex;
            flex-direction: row;
            margin-left:150px;
            margin-top:15px;
            margin-bottom:10px;
            gap: 10px; /* Adjust the gap as needed */
        `;

        const Styleleft = styled.div`
            .image {
                width: 250px;
                height: 255px;
                display:flex;
                margin-left: 380px;
                margin-top: 5px;

                background: url(${doc})no-repeat;
                background-size: 100%;
            }
        `;
        const Styleline1 = styled.div `
.underline {
    width: 800.375px;
    height: 1.444px;
    background: #d9d9d9;
    margin-bottom:50px;
    margin-left:120px;
}
`
const Stylep = styled.div`
.boxtext{
    margin: 30px;
    padding-left: 300px;
    font-size: 17.55px;
    margin-left:180px;
    
}
`;
const CheckData = () => {
    return (
        <Backgroud>
        <StyleContainer>
        <div className="container">
        <Styleprevious>
                <div href="#" className="previous"> &#8249;</div></Styleprevious>
            <div className="left-content">
                    <Styledh1><h1>data validate</h1></Styledh1>

                    <Stylep><div className='boxtext'>ผู้ประกอบการ</div></Stylep>
                    <Styleline1>
                        <div className="underline"></div>
                    </Styleline1>

                    <Stylep><div className='boxtext'>asdf@gmail.com</div></Stylep>
                    <Styleline1>
                        <div className="underline"></div>
                    </Styleline1>

                    <Stylep><div className='boxtext'>ที่อยู่</div></Stylep>
                    <Styleline1>
                        <div className="underline"></div>
                    </Styleline1>

                    <Stylep><div className='boxtext'>Username</div></Stylep>
                    <Styleline1>
                        <div className="underline"></div>
                    </Styleline1>
                    <Stylep><div className='boxtext'>ดีไซน์เนอร์</div></Stylep>
                    <Styleline1>
                        <div className="underline"></div>
                    </Styleline1>   
                    <Stylep><div className='boxtext'>####567</div></Stylep>
                    <Styleline1>
                        <div className="underline"></div>
                    </Styleline1>
                    
                   
                   

                    <Styleleft><div className="image" ></div></Styleleft>
                    <ButtonContainer>
                                    <StyledBotton>
                                        <Button text="Confirm" />
                                    </StyledBotton>
                                    <StyledBotton2>
                                        <Button text="Cancel" />
                                    </StyledBotton2>
                    </ButtonContainer>
                   
            </div>
            
        </div>
        </StyleContainer>
        </Backgroud>
        
    );
};

export default CheckData
; 