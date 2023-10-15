import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

import BoxComponent from '../../Component/box';

const ChoosePage = ({ className }) => {
    return (
        <div className={className}>
            <div className="container">
            <Link to="/" className="previous">
            &#8249;
            </Link>
                <BoxComponent
                    backgroundImage="https://www.seamwork.com/media/articles/1712/699c4218.jpg"
                    buttonText="สร้างแบรนด์"
                    path="/register-user"
                />
                <BoxComponent
                    backgroundImage="https://www.jimthompson.com/_next/image?url=https%3A%2F%2Fmedia.jimthompson.com%2F9e828e6f-15b1-4dbd-8a60-367f81387798.jpg&w=3840&q=75"
                    buttonText="ผู้ประกอบการ"
                    path="/register-company"
                />
            </div>
        </div>
    );
};

export default styled(ChoosePage)`
        background-color: #F9F8EE;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;

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
        box-shadow: 0px 4px 30px 0px rgba(0, 0, 0, 0.40);
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
