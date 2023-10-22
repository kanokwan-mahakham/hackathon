import styled from "styled-components";
import Navbar from "../Component/Navbar";
import BoxSlelected from "../Component/BoxCompare/BoxSlelected";
import BoxAddSelect from "../Component/BoxCompare/BoxAddSelect";
import TableCompare from "../Component/TableCompare";
import Footer from "../Component/Footer";
import PopupCompare from "../Component/PopupCompare";
//import Footer from "../../Component/Footer";

const Compare = ({ className }) => {
  return (
    <div className={className}>
      {/* <Navbar /> */}
      <div className="title-header">
        <h1>Compare Factory</h1>
        <div id="line"></div>
      </div>
      <div className="box-compare">
        <div className="selected-choice">
          <BoxSlelected />
          <BoxSlelected />
          <BoxAddSelect />
          {/* add compare */}
        </div>
        <div className="table-compare">
          <TableCompare />
        </div>
      </div>
      <Footer />
      <div className="popup-compare">
        <PopupCompare />
      </div>
    </div>
  );
};

export default styled(Compare)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
position:relative;
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
  .selected-choice {
    display: flex;
    justify-content: flex-end;
    margin: 90px 90px 20px 90px;
  }
  .table-compare {
    display: flex;
    margin: 90px;
  }
`;
