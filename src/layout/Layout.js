import React, { useState } from "react";
import "./style.scss";
import Logo from "../assets/images/aztan-logo.png";

export default function Layout({ children }) {
  const menus = [
    { name: "Roadmap", icons: "icon" },
    { name: "Get Started", icons: "icon" },
    { name: "Home", icons: "icon" },
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="container">
      {/* <Navbar /> */}
      {/* <Sidebar /> */}
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="Aztan" width={200} />
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
      <div className="main-content">{children}</div>
    </div>
  );
}
