import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";

import LogoBig from "../assets/images/aztan-logo.png";
import LogoSmall from "../assets/images/aztan-logo-small.png";

const Sidebar = ({
  menus,
  smallSidebar,
  handleSidebarSize,
  typeLayout,
  showSidebar,
  handleShowSidebar,
}) => {
  const [active, setActive] = useState(0);
  const colorMenu = { color: typeLayout === "bg-black" ? "white" : "" };

  return (
    <div
      className={`${
        smallSidebar
          ? `sidebar-small ${typeLayout}`
          : `sidebar ${showSidebar} ${typeLayout}`
      }`}
    >
      <div className="logo-sidebar">
        <img src={smallSidebar ? LogoSmall : LogoBig} alt="Aztan" width="60%" />
      </div>
      <div className="btn-sidebar mobile:hidden">
        <button onClick={handleSidebarSize}>
          {smallSidebar ? (
            <AiOutlineRight className="icon-btn" />
          ) : (
            <AiOutlineLeft className="icon-btn" />
          )}
        </button>
      </div>
      <div className="btn-sidebar-mobile hidden mobile:block">
        <button onClick={handleShowSidebar}>
          <AiOutlineClose className="icon-btn" />
        </button>
      </div>
      <ul>
        {menus.map((item, index) => (
          <Link to={item.link} className="menus">
            <li
              key={index}
              className={`${active === index && "active"}`}
              onClick={() => setActive(index)}
            >
              <div className="icon" style={colorMenu}>
                {item.icon}
              </div>
              <div className="name" style={colorMenu}>
                {item.name}
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
