import styled from "styled-components";

const EditBlogSlide = ({ className }) => {
  const image = require("../../image Hackathon/image/background.jpeg");
  const edit = require("../../image Hackathon/icon/editing.png")

  return (
    <div className={className}>
      <div className="blog-slide">
        <div className="image-blog">
          <img src={image}></img>
          <div className="icon-overlay-blog">
            <img src={edit} id="icon"/>
          </div>
        </div>
        <div className="image-blog">
          <img src={image}></img>
          <div className="icon-overlay-blog">
            <img src={edit} id="icon"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(EditBlogSlide)`
.blog-slide{
    display: flex;
}
.image-blog {
    position: relative;
  }
  .image-blog img {
    width: 500px;
    height: 350px;
    margin: 60px 40px 60px 0px;
    border-radius: 20px;
    opacity: 0.4;
  }
  .icon-overlay-blog #icon{
    position: absolute;
    bottom: 170px;
    left: 270px;
    width: 50px;
    height: 50px;
    z-index: 1;
    border-radius: 0;
  }
`;
