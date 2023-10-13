import React from 'react';
import './choose.css';
import PreviousButton from '../../Component/previousbttn';
import BoxComponent from '../../Component/box';
const ChoosePage = () => {
    return (
        <div className="container">
             <PreviousButton />
             <BoxComponent
                backgroundImage="url('https://www.seamwork.com/media/articles/1712/699c4218.jpg')"
                buttonText="สร้างแบรนด์"
            />
            <BoxComponent
                backgroundImage="url('https://www.jimthompson.com/_next/image?url=https%3A%2F%2Fmedia.jimthompson.com%2F9e828e6f-15b1-4dbd-8a60-367f81387798.jpg&w=3840&q=75')"
                buttonText="ผู้ประกอบการ"
            />
        </div>
    );
};
export default ChoosePage;