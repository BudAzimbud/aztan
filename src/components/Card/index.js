import React from "react";
import "./style.scss";
function Card({ children, className = "", ...props }) {
  return (
    <div data-testid="wrapper-card" className="wrapper-card">
      <div className={"card-component " + className} {...props}>
        {children}
      </div>
    </div>
  );
}

export default Card;
