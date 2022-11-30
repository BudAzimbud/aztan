import React, { useState } from "react";
import "./style.scss";
import Logo from "../assets/images/aztan-logo.png";
import { menus } from "../navigation/vertical";
export default function Layout({ children }) {
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <div className="sidebar">
        <div className="logo">
          <img src={Logo} alt="Aztan" width="60%" />
          <div className="btn-side">
            <button>small</button>
          </div>
        </div>
        <ul>
          {menus.map((item, index) => (
            <li
              key={index}
              className={`${active === index && "active"}`}
              onClick={() => setActive(index)}
            >
              <div className="icon">{item.icon}</div>
              <div className="name">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <div className="navbar">navbar</div>
        <div style={{ marginTop: "80px" }}>{children}</div>
      </div>
    </div>
  );
}
