import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Package = ({ user, className }) => {
  function wait() {
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Please wait for approval. Account from admin",
      showConfirmButton: false,
      timer: 2000,
    });
  }
  return (
    <div className={className}>
      {user.status == "addmin" ? (
        <>
          <div className="box">
            <div className="price">29 บาท / วัน</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 วัน</div>
            <button className="button">ซื้อทันที</button>
          </div>
          <div className="box">
            <div className="price">499 บาท / เดือน</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 เดือน</div>
            <button className="button">ซื้อทันที</button>
          </div>
          <div className="box">
            <div className="price">8999 บาท / ปี</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 ปี</div>
            <button className="button">ซื้อทันที</button>
          </div>
        </>
      ) : user.status == "company" ? (
        <>
          <div className="box">
            <div className="price">29 บาท / วัน</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 วัน</div>
            <Link to="/payment-day">
              <button className="button">ซื้อทันที</button>
            </Link>
          </div>
          <div className="box">
            <div className="price">499 บาท / เดือน</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 เดือน</div>
            <Link to="/payment-month">
              <button className="button">ซื้อทันที</button>
            </Link>
          </div>
          <div className="box">
            <div className="price">8999 บาท / ปี</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 ปี</div>
            <Link to="/payment-year">
              <button className="button">ซื้อทันที</button>
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="box">
            <div className="price">29 บาท / วัน</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 วัน</div>
              <button className="button" onClick={wait}>ซื้อทันที</button> 
          </div>
          <div className="box">
            <div className="price">499 บาท / เดือน</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 เดือน</div>
              <button className="button" onClick={wait} >ซื้อทันที</button> 
          </div>
          <div className="box">
            <div className="price">8999 บาท / ปี</div>
            <div className="detail">อัตตราการมอง เห็นเพิ่มขึ้น ใน 1 ปี</div>
              <button className="button" onClick={wait} >ซื้อทันที</button>
          </div>
        </>
      )}
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
  .price {
    font-size: 45px;
    font-weight: 600;
  }
  .detail {
    font-family: "Anuphan";
    font-size: 30px;
    font-weight: 400;
    width: 70%;
    text-align: center;
    margin: 30px;
  }
  .button {
    width: 190px;
    height: 60px;
    font-family: "Lora";
    font-size: 30px;
    font-weight: 600;
    border-radius: 30px;
    background-image: linear-gradient(to bottom right, #ff9d00, #ded05a);
    border:none;
    color: #12136e;
    margin-top: 20px;
    cursor: pointer;
  }
  .button:hover{
    background-image: linear-gradient(to bottom right, #12136e, #6b78ff);
    color: white;
  }
`;
