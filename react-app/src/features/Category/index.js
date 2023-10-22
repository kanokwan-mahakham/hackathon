import styled from "styled-components";
import BoxData from "../Component/BoxData"; 
import Footer from "../Component/Footer";
const Category = ({ className }) => {
    const image = require("../../image Hackathon/image/background.jpeg")
  return (
    <div className={className}>
      <div className="title-header">
        <h1>Factory</h1>
        <div id="line"></div>
      </div>
      <div className="box-btn">
        <p>หาโรงงานที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม Help me</p>
        <div className="button">
          <button className="btn-help-me">Help Me</button>
          <button className="btn-see-all">See All</button>
        </div>
        
        {/* นำBoxData มาใส่ตรงนี้ได้เลยจ้า*/}
        <div className="show">
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};
export default styled(Category)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .title-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .title-header h1 {
    font-family: "Lora";
    font-size: 65px;
    font-weight: 600;
    color: #333a56;
  }
  .title-header #line {
    width: 65%;
    border: 2.22px solid #333a56;
  }
  .box-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }
  .box-btn p {
    font-family: "Anuphan";
    font-size: 20px;
    font-weight: 500;
    color: #333a56;
  }
  .button {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  .btn-help-me {
    font-family: "Lora";
    font-size: 18px;
    font-weight: 600;
    background-color: white;
    border-radius: 30px;
    width: 120px;
    height: 50px;
    margin-right: 10px;
    transition: background-color 0.3s;
  }
  .btn-help-me:hover {
    background-color: #333a56;
    color: white;
    cursor: pointer;
  }
  .btn-see-all {
    font-family: "Lora";
    font-size: 18px;
    font-weight: 600;
    background: none;
    border: none;
    width: 120px;
    height: 50px;
    margin-right: 40px;
    transition: background-color 0.3s;
    color: #333a56;
  }
  .btn-see-all:hover {
    color: #4f7108;
    cursor: pointer;
  }
  .show{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin:50px;
  }
`;
