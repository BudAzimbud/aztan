import React from "react";
import "./style.scss";
import AppImage from "../../assets/images/app-image.png";
import AztanLogo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Card from "../../components/Card";
import Carousel from "../../components/Carousel";
import Avatar from "../../components/Avatar";
export default function Home() {
  return (
    <div>
      <Card className="flex">
        <div className="header">
          <h1>Aztan Reactjs</h1>
          <p className="paragraph">slug about this page</p>
        </div>
        <div className="wrapper-hero">
          <div className="flex">
            <span>Reactjs</span>
            <span>Html</span>
            <span>Sass</span>
          </div>
          <Carousel>
            <img src={AppImage} alt="slider app" className="image" />
            <img src={AztanLogo} alt="slider app" className="image" />
          </Carousel>
        </div>
      </Card>
      <div className="wrapper-button">
        <Button color="danger">Get Started</Button>
        <Button>About Us</Button>
      </div>
      <div className="flex center">
        <Card>Full unit testing</Card>
        <Card>Beauty Design</Card>
        <Card>Rich components</Card>
      </div>
      <h2>Contributor</h2>
      <div className="flex">
        <Card>
          <Avatar src={AppImage} />
          <h4>Azim</h4>
          <p>Hello my name is azim , Im developer Node js</p>
          <p>Reactjs,Nestjs,Mongodb,</p>
        </Card>
        <Card>
          <Avatar src={AppImage} />
          <h4>Tania</h4>
          <p>Hello my name is tania , Im designer</p>
          <p>Htmll,Sass,Figma,Reactjs</p>
        </Card>
      </div>
    </div>
  );
}
