import React from "react";
import "./style.scss";
function Card({ children, className, ...props }) {
  return (
    <div className="wrapper-card">
      <div className={"card " + className} {...props}>
        {children}
      </div>
    </div>
  );
}

export default Card;
