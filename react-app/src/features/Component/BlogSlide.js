import styled from "styled-components";

const BlogSlide = ({ imageHome, className }) => {
  const image1 = require("../../image Hackathon/image/promote1.jpg");
  const image2 = require("../../image Hackathon/image/promote2.jpg");
  const image3 = require("../../image Hackathon/image/promote3.jpg");

  return (
    <div className={className}>
      <div className="blog-slide">
        <img src={image1}></img>
        <img src={image2}></img>
        <img src={image3}></img>
      </div>
    </div>
  );
};

export default styled(BlogSlide)`
@import url("https://fonts.googleapis.com/css2?family=Anuphan:wght@200;300;400;500&family=Lora:wght@400;500;600;700&family=Pangolin&family=Prompt:wght@200;500;700&display=swap");
  .blog-slide{
    display: flex;
    justify-content: center;
    margin-left:20px;
  }
  .blog-slide img {
    width: 500px;
    height: 350px;
    margin: 60px 20px 60px 0px;
    border-radius: 20px;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
