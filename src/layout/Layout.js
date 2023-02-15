import React, { useEffect, useState } from "react";
import { RiMenuFoldLine, RiMenuUnfoldLine } from "react-icons/ri";

import { menus } from "../navigation/vertical";
import Theme from "../components/Theme";
import Sidebar from "../components/Sidebar";

import "./style.scss";

export default function Layout({ children }) {
  const [smallSidebar, setSmallSidebar] = useState(false);
  const [showHumberger, setShowHumberger] = useState(0);
  const [showSidebar, setShowSidebar] = useState("hide-sidebar");

  const [typeLayout, setTypeLayout] = useState("shadow");

  const handleSidebarSize = () => {
    setSmallSidebar(!smallSidebar);
  };

  const handleShowSidebar = () => {
    setSmallSidebar(false)
    setShowHumberger(!showHumberger);
    if (showSidebar === "show-sidebar") {
      return setShowSidebar("hide-sidebar");
    }
    setShowSidebar("show-sidebar");
  };
  useEffect(()=>{
    setSmallSidebar(false)

   
    
  },[])

  return (
    <div className="wrapper">
      <Sidebar
        smallSidebar={smallSidebar}
        handleSidebarSize={handleSidebarSize}
        menus={menus}
        typeLayout={typeLayout}
        showSidebar={showSidebar}
        handleShowSidebar={handleShowSidebar}
      />
      <div
        className={`${smallSidebar ? "main-content-small" : "main-content"}`}
      >
        <div
          className={` navbar-component shadow flex justify-between ${
            typeLayout === "bg-black" ? "" : typeLayout
          }`}
        >
          <div className="flex items-center gap-1.5">
            <button className="humberger hidden mobile:block" onClick={handleShowSidebar}>
              <RiMenuUnfoldLine size={25}  />
            </button>
            <Theme />
          </div>
          <select
            onChange={(event) => {
              setTypeLayout(event.target.value);
            }}
            className="select w-[80px] p-2.5  text-[15px] rounded-md  outline-none appearance-none"
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
