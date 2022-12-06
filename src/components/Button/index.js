import React from "react";
import "./style.scss";
function Button({ color = "primary", ...props }) {
  return (
    <button className={"btn " + color + " "+props.className}>
      {props.children}
    </button>
  );
}

export default Button;
