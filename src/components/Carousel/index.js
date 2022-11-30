import React, { Children, useState } from "react";

function Carousel({ children }) {
  const countChilren = Children.toArray(children);
  const [current, setCurrent] = useState(0);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <button
          style={{
            border: "none",
            fontSize: "15px",
            borderRadius: "50px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            setCurrent(current - 1);
          }}
        >
          {"<"}
        </button>
        {countChilren[current]}
        <button
          style={{
            border: "none",
            fontSize: "15px",
            borderRadius: "50px",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={() => {
            setCurrent(current + 1);
          }}
        >
          {">"}
        </button>
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        {countChilren?.map((data, index) => (
          <div key={index}>{index === current ? "Active" : "Non active"}</div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
