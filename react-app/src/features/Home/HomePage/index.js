import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import BlogSlide from "../../Component/BlogSlide";
import BoxData from "../../Component/BoxData";
import Footer from "../../Component/Footer";

const Home = ({ className }) => {
  const image = require("../../../image Hackathon/image/background.jpeg");
  
  return (
    <div className={className}>
      <Navbar />
      <div className="image">
        <img src={image}></img>
      </div>
      <div className="blog">
        <div className="header-text">
          <p>Blog</p>
        </div>
        <BlogSlide />
      </div>

      <div className="show-category">
        {/* Factory */}
        <div id="factory">
          <div className="header-category">
            <p>Factory</p>
          </div>
          <div className="detail">
            <p>รับผลิตและจัดจำหน่ายสินค้าประเภทเสื้อผ้า</p>
            <a>See All</a>
          </div>
          <div className="show-slide">
            <BoxData />
            <BoxData />
            <BoxData />
          </div>
        </div>

        {/* Fabric */}
        <div id="fabric">
          <div className="header-category">
            <p>Fabric</p>
          </div>
          <div className="detail">
            <p>ร้านค้าขายปลีก-ส่ง ผ้าม้วนนำเข้าราคาถูก</p>
            <a>See All</a>
          </div>
          <div className="show-slide">
            <BoxData />
            <BoxData />
            <BoxData />
          </div>
        </div>

        {/* Designer */}
        <div id="designer">
          <div className="header-category">
            <p>Designer</p>
          </div>
          <div className="detail">
            <p>หามืออาชีพออกแบบเสื้อผ้าแฟชั่นงานคุณภาพ</p>
            <a>See All</a>
          </div>
          <div className="show-slide">
            <BoxData />
            <BoxData />
            <BoxData />
          </div>
        </div>
      </div>
      <Footer/>
      
    </div>
  );
};


export default styled(Home)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .navbar {
    position: absolute;
    width: 100%;
    z-index: 2;
  }
  .image img {
    width: 100%;
    height: 800px;
    border-bottom-left-radius: 400px;
    border-bottom-right-radius: 400px;
  }
  .blog {
    width: 100%;
    height: 600px;
    margin: 80px 0px;
  }
  .header-text {
    border-radius: 50px;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
  }
  .header-text p {
    margin: 15px 60px;
    font-family: "lora";
    font-size: 45px;
    font-weight: 500;
  }

  /*Category */
  .show-category {
    background-color: #f7f5e6;
    padding: 40px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;
  }
  .header-category {
    background-color: #333a56;
    border-radius: 50px;
    border: 1px solid black;
    width: fit-content;
    height: fit-content;
    color: white;
    margin: 50px;
  }
  .header-category p {
    margin: 15px 60px;
    font-family: "lora";
    font-size: 45px;
    font-weight: 500;
  }
  .detail {
    display: flex;
    padding: 0px 80px 40px 50px;
    align-content: center;
    justify-content: space-between;
  }
  .detail p {
    font-family: "Anuphan";
    font-size: 33px;
    font-weight: 400;
    margin: 0 80px;
  }
  .detail a {
    font-family: "lora";
    font-size: 25px;
    font-weight: 500;
    margin: 0px;
  }

  /*Showslide */
  .show-slide {
    display: flex;
    justify-content: center;
  }

  
`;
