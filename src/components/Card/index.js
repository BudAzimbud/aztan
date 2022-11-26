import React from "react";
import "./style.scss";
function Card({ children, className, ...props }) {
  return (
    <div className={"card " + className} {...props}>
      {children}
    </div>
  );
}

export default Card;
