import styled from "styled-components";
import { Link,useNavigate } from "react-router-dom";

const Package = ({ className }) => {
 
  return (
    <div className={className}>
      <div className="box">
        <div className="price">THB 29 / DAY</div>
        <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 วัน</div>
        <Link to="/payment-day"><button className="button">Shop now</button></Link>
      </div>
      <div className="box">
        <div className="price">THB 499 / MONTH</div>
        <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 เดือน</div>
        <Link to="/payment-month"><button className="button">Shop now</button></Link>
      </div>
      <div className="box">
        <div className="price">THB 8999 / YEAR</div>
        <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 ปี</div>
        <Link to="/payment-year"><button className="button">Shop now</button></Link>
      </div>
    </div>
  );
};
export default styled(Package)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  display: flex;
  align-items: center;
  justify-content: center;

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 450px;
    height: 420px;
    background-color: white;
    margin: 0px 30px 50px 0px;
    flex-direction: column;
    border-radius: 40px;
  }
  .price{
    font-size: 45px;
    font-weight: 600;
}
.detail{
    font-family: "Anuphan";
    font-size: 30px;
    font-weight: 400;
    width: 70%;
    text-align: center;
    margin: 30px;
}
.button{
    width: 190px;
    height: 60px;
    font-family: "Lora";
    font-size: 30px;
    font-weight: 600;
    border-radius: 30px;
    background-color: #F7F5E6;
    color: #333A56;
    margin-top: 20px;
    cursor: pointer;
}

`;
