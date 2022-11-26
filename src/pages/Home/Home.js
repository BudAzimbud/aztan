import React from "react";
import "./style.scss";
import AppImage from "../../assets/images/app-image.png";
export default function Home() {
  return (
    <div className="container">
      <div className="container">
        <img src={AppImage} alt="slider app" className="image" />
      </div>
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
  );
}
