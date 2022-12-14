import React from "react";
import "./index.scss";

function Avatar({ src, size = 50 }) {
  console.log(src);
  return (
    <img src={src} className="avatar" alt="Avatar" width={size} height={size} />
  );
}

export default Avatar;
