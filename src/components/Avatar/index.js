import React from "react";
function Avatar({ src, size = 50 }) {
  console.log(src);
  return (
    <img
      src={src}
      style={{
        borderRadius: "50%",
        boxShadow: '0px 8px 30px -10px rgba(0,0,0,0.6)',
        objectFit: 'cover'

      }}
      alt="Avatar"
      width={size}
      height={size}
    />
  );
}

export default Avatar;
