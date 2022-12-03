import React from "react";
function Avatar({ src, size = 50 }) {
  console.log(src);
  return (
    <img
      src={src}
      style={{
        borderRadius: "50%",
        border: "1px solid black",
      }}
      alt="Avatar"
      width={size}
      height={size}
    />
  );
}

export default Avatar;
