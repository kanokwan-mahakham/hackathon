import styled from "styled-components";

const BoxAddSelect = ({ className }) => {
  return (
    <div className={className}>
      <div className="box">
        <div className="box-detail">
          <button id="button-add-compare">+&nbsp;&nbsp;เพิ่มเปรียบเทียบ</button>
        </div>
      </div>
    </div>
  );
};

export default styled(BoxAddSelect)`
  @import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  display: flex;

  .box {
    position: relative;
  }
  .box-detail {
    width: 310px;
    height: 350px;
    margin-right: 35px;
    border-radius: 10px;
    border: 3px dashed #807d7d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .box-detail #button-add-compare{
    width: 100%;
    height: 100%;
    border-radius: 10px;
    font-family: "Anuphan";
    font-size: 25px;
    font-weight: 500;
    color: gray;
    background: none;
    border: none;
  }
`;
