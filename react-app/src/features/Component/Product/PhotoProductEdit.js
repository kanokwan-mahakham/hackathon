import styled from "styled-components";

const PhotoProductEdit = ({ className }) => {
  const image = require("../../../image Hackathon/image/background.jpeg");
  const edit = require("../../../image Hackathon/icon/editing.png");

  return (
    <div className={className}>
      <div className="photo-product">
        <div className="image">
          <img src={image}></img>
          <div className="icon-overlay">
            <img src={edit} id="icon" />
          </div>
        </div>
        <div className="image">
          <img src={image}></img>
          <div className="icon-overlay">
            <img src={edit} id="icon" />
          </div>
        </div>
        <div className="image">
          <img src={image}></img>
          <div className="icon-overlay">
            <img src={edit} id="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default styled(PhotoProductEdit)`
  .photo-product {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .photo-product img {
    width: 420px;
    height: 500px;
    border-radius: 30px;
    margin: 10px 40px 40px 0px;
    opacity: 0.4;
  }
  .image {
    position: relative;
  }
  .icon-overlay #icon {
    position: absolute;
    bottom: 220px;
    left: 200px;
    width: 50px;
    height: 50px;
    z-index: 1;
    border-radius: 0;
  }
`;
