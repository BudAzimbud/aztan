import React from "react";
import "./style.scss";
export default function Layout({ children }) {
  const menus = [
    { name: "Roadmap", icons: "icon" },
    { name: "Get Started", icons: "icon" },
    { name: "Home", icons: "icon" },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <img className="logo" src="" alt="Aztan" />
        <ul>
          {menus.map((item, index) => (
            <li key={index}>
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
