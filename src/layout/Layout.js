import React, { useState } from "react";

import { menus } from "../navigation/vertical";
import Theme from "../components/Theme";
import Sidebar from "../components/Sidebar";

import "./style.scss";

export default function Layout({ children }) {
  const [smallSidebar, setSmallSidebar] = useState(false);

  const [typeLayout, setTypeLayout] = useState("shadow");

  const handleSidebarSize = () => {
    setSmallSidebar(!smallSidebar);
  };

  return (
    <div className="wrapper">
      <Sidebar
        smallSidebar={smallSidebar}
        handleSidebarSize={handleSidebarSize}
        menus={menus}
        typeLayout={typeLayout}
      />
      <div
        className={`${smallSidebar ? "main-content-small" : "main-content"}`}
      >
        <div
          className={` navbar-component shadow flex justify-between ${
            typeLayout === "bg-black" ? "" : typeLayout
          }`}
        >
          <Theme />
          <select
            onChange={(event) => {
              setTypeLayout(event.target.value);
            }}
            className="w-[80px] p-2.5  text-gray-500 bg-white text-[15px] rounded-md  outline-none appearance-none"
          >
            <option selected disabled>
              Layout
            </option>
            <option value="border-[1px] border-gray-400">Border</option>
            <option value="shadow-xl">Shadow</option>
            <option value="bg-black">Semi dark</option>
          </select>
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
