import styled from "styled-components";
import Navbar from "../../Component/Navbar";
import CardUser from "../../Component/CardProfile/CardUser";
import BoxData from "../../Component/BoxData";
import Footer from "../../Component/Footer";

const ProfileUser = ({ className }) => {
  
  return (
    <div className={className}>
      <Navbar />
      <CardUser />
      <div className="approved">
        <h1>Approved</h1>
        <div className="line"></div>
        <div className="box-category">
          <div className="name-category">Factory</div>
          <div className="collect">
            <BoxData />
          </div>
        </div>
        <div className="box-category">
          <div className="name-category">Fabric</div>
          <div className="collect">
            <BoxData />
          </div>
        </div>
        <div className="box-category">
          <div className="name-category">Designers</div>
          <div className="collect">
            <BoxData />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default styled(ProfileUser)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .approved {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .approved h1 {
    font-size: 80px;
    font-weight: 600;
    margin-bottom: 40px;
  }
  .approved .line {
    border-bottom: 4px solid black;
    width: 70%;
    margin: 20px 0px 50px 0px;
  }
  .box-category {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 150px;
  }
  .name-category {
    font-size: 50px;
    font-weight: 600;
    color: #333a56;
    width: 350px;
    height: 90px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 40px;
    border: 3px solid black;
    margin: 40px 0px;
  }
  .collect {
    display: flex;
    flex-wrap: wrap;
  }
`;
