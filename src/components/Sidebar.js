import React from "react";
import Logo from "../assets/images/aztan-logo.png";
import { menus } from "../navigation/vertical";
import { Link } from "react-router-dom";

export default function Sidebar(props) {
  return (
    <div className="sidebar">
      <div className="logo">
        <img src={Logo} alt="Aztan" width="60%" />
        <div className="btn-side">
          <button>small</button>
        </div>
      </div>
      <ul>
        {menus.map((item, index) => (
          <Link to={item.link} className="menus">
            <li
              key={index}
              className={`${props.active === index && "active"}`}
              onClick={() => props.setActive(index)}
            >
              <div className="icon">{item.icon}</div>
              <div className="name">{item.name}</div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
