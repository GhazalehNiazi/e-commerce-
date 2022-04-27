import React from "react";
import { useNavigate } from "react-router-dom";
function Image({ src, className, category }) {
  const navigate = useNavigate();

  const clickHandler = () => {
    console.log(category);
    navigate(`/shopping/${category}`);
  };

  return <img src={src} className={className} onClick={clickHandler} />;
}

export default Image;
