import styled from "styled-components";
import BoxData from "../Component/BoxData";
import Footer from "../Component/Footer";
import Navbar from "../Component/Navbar";
import PopupCompare from "../Component/PopupCompare";
import { Link } from "react-router-dom";


const Category = ({
  url,
  user,
  setUser,
  setFavs,
  companies,
  type,
  compares,
  setCompares,
  className,
}) => {
  const image = require("../../image Hackathon/image/background.jpeg");
  return (
    <div className={className}>
      <Navbar user={user} setUser={setUser} />
      <div className="title-header">
        {type == "company" ? (
          <h1>Factory</h1>
        ) : type == "fabric" ? (
          <h1>Fabric</h1>
        ) : (
          <h1>Designer</h1>
        )}

        <div id="line"></div>
      </div>
      <div className="box-btn">
        {type == "company" ? (
          <p>หาโรงงานที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม Help me</p>
        ) : type == "fabric" ? (
          <p>หาร้านขายผ้าที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม Help me</p>
        ) : (
          <p>หานักออกแบบที่คุณต้องการได้ง่ายขึ้นเพียงกดปุ่ม Help me</p>
        )}

        <div className="button">

        {type == "company" ? (
          <Link to="/HelpmeFactoryOne"><button className="btn-help-me">Help Me</button></Link>
        ) : type == "fabric" ? (
          <Link to="/HelpmeFabicOne"><button className="btn-help-me">Help Me</button></Link>
        ) : (
          <Link to="/HelpmeDesignOne"><button className="btn-help-me">Help Me</button></Link>
        )}
          

          {type == "company" ? (
          <Link to="/company"><button className="btn-see-all">See All</button></Link>
        ) : type == "fabric" ? (
          <Link to="/fabric"><button className="btn-see-all">See All</button></Link>
        ) : (
          <Link to="/designer"><button className="btn-see-all">See All</button></Link>
        )}
          

        </div>

        {/* นำBoxData มาใส่ตรงนี้ได้เลยจ้า*/}
        <div className="show">

          {type == "company"
            ? companies
                .filter((company) => company.type === "company" && company.status == "company")
                .map((company) => (
                  <BoxData
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    setFavs={setFavs}
                    compares={compares}
                    setCompares={setCompares}
                  />
                ))
            : type == "fabric"
            ? companies
            .filter((company) => company.type === "frabic shop" && company.status == "company")
            .map((company) => (
              <BoxData
                key={company.id}
                user={user}
                url={url}
                item={company}
                setFavs={setFavs}
                compares={compares}
                setCompares={setCompares}
              />
            )):
            companies
                .filter((company) => company.type === "designer" && company.status == "company")
                .map((company) => (
                  <BoxData
                    key={company.id}
                    user={user}
                    url={url}
                    item={company}
                    setFavs={setFavs}
                    compares={compares}
                    setCompares={setCompares}
                  />
                ))}

        </div>
      </div>
      {compares.length != 0 ?(
        <PopupCompare url={url} compares={compares} setCompares={setCompares}/>
      ):(null)}
      <Footer />
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
  .show {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 50px;
  }
`;
