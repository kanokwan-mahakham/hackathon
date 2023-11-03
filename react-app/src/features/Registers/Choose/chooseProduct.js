import React from 'react';
import styled from 'styled-components';
import BoxComponent from '../../Component/box';

const ChooseProducts = ({ className }) => {
    return (
        <div className={className}>
            <div className="content">
                <h1>ประเภทสินค้า</h1>
                <div className="container">
                    <div className="previous" href="#">
                        &#8249;
                    </div>
                    <BoxComponent
                        backgroundImage={require('../../../image Hackathon/image/farbic.jpeg')}
                        buttonText="ผ้า"
                        boxWidth="300px"
                        boxHeight="320px"
                    />
                    <BoxComponent
                        backgroundImage={require('../../../image Hackathon/image/design.jpeg')}
                        buttonText="ดีไซน์"
                        boxWidth="300px"
                        boxHeight="320px"
                    />
                    <BoxComponent
                        backgroundImage={require('../../../image Hackathon/image/factory.jpeg')}
                        buttonText="รับผลิต"
                        boxWidth="300px"
                        boxHeight="320px"
                    />
                </div>
            </div>
        </div>
    );
};

export default styled(ChooseProducts)`
@import url('https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap');
    background-color: rgba(198, 204, 215, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;

    .content {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1 {
        font-size: 40px;
        font-weight: bold;
        text-align: center;
        margin-bottom: 20px;
        margin-right:50px;
        font-family: "Anuphan";
    }

    .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        width: 1000px;
        height: 550px;
        background-color: #FFFFFF;
        border-radius: 54px;
        padding: 30px;
        padding-top: 50px;
        border: 2px solid #000;
    }

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
`;
