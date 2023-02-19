import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineLeft, AiOutlineRight, AiOutlineClose } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";

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
  const [showDropdown, setShowDropdown] = useState(null);

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
        {menus.map((item, indexParent) => (
          <Link to={item.link} className="menus">
            <li
              key={indexParent}
              className={`${active === indexParent && "active"}`}
              onClick={() => {
                setActive(indexParent);
                setShowDropdown(indexParent);
              }}
            >
              <div className="icon" style={colorMenu}>
                {item.icon}
              </div>
              <div className="name" style={colorMenu}>
                {item.name}
              </div>
              {/* {item?.submenu ? <p>Y</p> : null} */}

              {item?.submenu ? <FiChevronRight /> : null}
            </li>
            {item.submenu &&
              item?.submenu?.map((submenus, indexChild) => (
                <div
                  className={`${
                    showDropdown === indexParent && active === indexParent
                      ? "show-dropdown"
                      : "hide-dropdown"
                  } menu-dropdown `}
                >
                  <Link key={indexChild} to={submenus.url}>
                    <li>{submenus.name}</li>
                  </Link>
                </div>
              ))}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
