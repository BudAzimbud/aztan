import React from "react";

import { menus } from "../navigation/vertical";
import Theme from '../components/Theme'
import Sidebar from "../components/Sidebar";

import "./style.scss";

export default function Layout({ children }) {
  

  return (
    <div className='container'>
      <Sidebar menus={menus}/>
      <div className='main-content'>
        <div className='navbar'>
          <Theme />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
