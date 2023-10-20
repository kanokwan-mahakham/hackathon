import styled from "styled-components";

const BlogSlide = ({ className }) => {
  const image = require("../../image Hackathon/image/background.jpeg");

  return (
    <div className={className}>
      <div className="blog-slide">
        <img src={image}></img>
        <img src={image}></img>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default styled(BlogSlide)`
  .blog-slide img {
    width: 450px;
    height: 350px;
    margin: 60px 20px 60px 0px;
    border-radius: 20px;
  }
`;
