import React from "react";
import "./style.scss";
import AppImage from "../../assets/images/app-image.png";
export default function Home() {
  const menus = [
    {name : 'Roadmap', icons: 'icon'},
    {name : 'Get Started', icons: 'icon'},
    {name : 'Home', icons: 'icon'},
  ]

  return (
    <div className="container">
      <div className="sidebar">
        <img className="logo" src="" alt="Aztan"/>
        <ul>
          {menus.map((item, index) => (
            <li key={index}>
              <div className="icon">{item.icons}</div>
              <div className="name">{item.name}</div>
            </li>
          ))}
        </ul>
      </div>
      <div className="main-content">
        <img src={AppImage} alt="slider app" className="image" />
      
      <div className="header">
        <h1>Aztan Reactjs</h1>
        <p>slug about this page</p>
        <div>
          <button>Get Started</button>
          <button>About Us</button>
        </div>
      </div>
      <div>
        <span>50 Components + </span>
        <span>50 Components + </span>
        <span>50 Components + </span>
        <span>50 Components + </span>
      </div>
      </div>
    </div>
  );
}
