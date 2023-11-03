import styled from "styled-components";
import React, { useState } from "react";

const BlogSlide = ({ className, index, image }) => {
  const [expanded, setExpanded] = useState(index === 0);

  const handleBoxClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={className}>
      <div
        className={`box-blog ${expanded ? "expanded" : ""}`}
        onClick={handleBoxClick}
        style={{ backgroundImage: `url(${image})` }} 
      ></div>
    </div>
  );
};

export default styled(BlogSlide)`
  .box-blog {
    width: 30px;
    height: 250px;
    margin: 10px;
    cursor: pointer;
    transition: width 0.3s ease-in, height 0.3s ease-in;
    border-radius: 15px;
    
  }

  .expanded {
    width: 500px;
    height: 275px;
  }
`;

