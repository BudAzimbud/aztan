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
        <div className="navbar">
          <Theme />
          
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
