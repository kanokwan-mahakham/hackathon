import styled from "styled-components";

const BlogSlide = ({ className }) => {
  const image = require("../../image Hackathon/image/background.jpeg");

  return (
    <div className={className}>
      <div className="blog-slide">
        <img src={image}></img>
        <img src={image}></img>
      </div>
    </div>
  );
};

export default styled(BlogSlide)`
  .blog-slide img {
    width: 600px;
    height: 380px;
    margin: 60px 40px 60px 0px;
    border-radius: 20px;
  }
`;
