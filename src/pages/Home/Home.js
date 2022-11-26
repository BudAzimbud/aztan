import React from "react";
import "./style.scss";
import AppImage from "../../assets/images/app-image.png";
export default function Home() {
  const menus = [
    { name: "Roadmap", icons: "icon" },
    { name: "Get Started", icons: "icon" },
    { name: "Home", icons: "icon" },
  ];

  return (
    <>
      <div className="flex">
        <div className="header">
          <h1>Aztan Reactjs</h1>
          <p>slug about this page</p>
        </div>
        <div className="wrapper-hero">
          <div className="flex">
            <span>Reactjs</span>
            <span>Html</span>
            <span>Sass</span>
          </div>
          <img src={AppImage} alt="slider app" className="image" />
        </div>
      </div>
      <div className="wrapper-button">
        <button>Get Started</button>
        <button>About Us</button>
      </div>
      <div className="flex center">
        <span>Full unit testing</span>
        <span>Beauty Design</span>
        <span>Rich components</span>
      </div>
      <div className="contributor">
        <h2 className="text-left">Contributor</h2>
        <div className="flex">
          <div>
            <h4>Azim</h4>
            <p>Hello my name is azim , Im developer Node js</p>
            <p>Reactjs,Nestjs,Mongodb,Redis,PostgreSql,Nodejs,Redis,Docker</p>
          </div>
          <div>
            <h4>Tania</h4>
            <p>Hello my name is tania , Im designer</p>
            <p>Htmll,Sass,Figma,Reactjs</p>
          </div>
        </div>
      </div>
    </>
  );
}
