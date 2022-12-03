import React, { useState } from "react";
import "./style.scss";

import Sidebar from "../components/Sidebar";
import Theme from "../components/Theme";

export default function Layout({ children }) {
  const [active, setActive] = useState(0);

  return (
    <div className="container">
      <Sidebar active={active} setActive={setActive}></Sidebar>
      <div className="main-content">
            <div className="navbar">
              <Theme />
            </div>
            <div style={{ marginTop: "80px" }}>{children}</div>
      </div>
    </div>
  );
}
