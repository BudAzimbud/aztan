import React, { useState } from "react";
import "./style.scss";

export default function Layout({ children }) {
  const menus = [
    { name: "Roadmap", icons: "icon" },
    { name: "Get Started", icons: "icon" },
    { name: "Home", icons: "icon" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <img src="" alt="Aztan" />
        </div>
        <ul>
          {menus.map((item, index) => (
            <li
              key={index}
              className={`${active === index && "active"}`}
              onClick={() => setActive(index)}
            >
              <div className="icon">{item.icons}</div>
              <div className="name">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <div className="main-content">{children}</div>
    </div>
  );
}
