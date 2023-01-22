import React, { useState } from "react";

import { menus } from "../navigation/vertical";
import Theme from "../components/Theme";
import Sidebar from "../components/Sidebar";

import "./style.scss";

export default function Layout({ children }) {
  const [smallSidebar, setSmallSidebar] = useState(false);

  const handleSidebarSize = () => {
    setSmallSidebar(!smallSidebar);
  };

  return (
    <div className="container">
      <Sidebar
        smallSidebar={smallSidebar}
        handleSidebarSize={handleSidebarSize}
        menus={menus}
      />
      <div
        className={`${smallSidebar ? "main-content-small" : "main-content"}`}
      >
        <div className="navbar flex justify-between">
          <Theme />
          <select className="w-[80px] p-2.5 text-gray-500 bg-white text-[15px] rounded-md  outline-none appearance-none">
            <option>Layout</option>
            <option>Border</option>
            <option>Shadow</option>
            <option>Semi dark</option>
          </select>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
