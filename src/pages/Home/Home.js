import React from "react";
import "./style.scss";
import AppImage from "../../assets/images/app-image.png";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import AztanLogo from "../../assets/images/logo.png";
import Button from "../../components/Button";
import Card from "../../components/Card";
import "../../assets/style/component.scss";
// import Carousel from "../../components/Carousel";
import Carousel from "../../components/Carousels";
import Avatar from "../../components/Avatar";
export default function Home() {
  return (
    <>
      <Card className="one-line">
        <div className="header">
          <h1>Aztan Reactjs</h1>
          <p className="paragraph">
            The most developer friendly & highly customizable{" "}
            <span>ReactJS Admin Dashboard Template of 2022 !</span>
          </p>
          <ul>
            <li>- Now support Bootstrap 4 & 5 🚀</li>
            <li>- React Router 6 🍦</li>
            <li>- Based on Hooks & Functional Components🔥</li>
            <li>- Based on Reactstrap & Vite 🧘</li>
          </ul>
          <Button color="dark" className="btn-header">
            Buy Me Lamborgini 🚗
          </Button>
        </div>
        <div className="wrapper-hero">
          <div className="container-stack">
            <span className="stack">Reactjs</span>
            <span className="stack">Html</span>
            <span className="stack">Sass</span>
          </div>
          <Carousel />
        </div>
      </Card>

      <div className="wrapper-button">
        <Button color="danger">Get Started</Button>
        <Button>About Us</Button>
      </div>
      <div className="one-line center">
        <Card>Full unit testing</Card>
        <Card>Beauty Design</Card>
        <Card>Rich components</Card>
      </div>
      <h2>Contributor</h2>
      <div className="contributors">
        <Card className="contributors-item">
          <div className="photo">
            <Avatar src={AppImage} size={80} />
          </div>
          <h4>Azim</h4>
          <p>Hello my name is azim , Im developer Node js</p>
          <p>Reactjs,Nestjs,Mongodb,</p>
        </Card>
        <Card className="contributors-item">
          <div className="photo">
            <Avatar
              size={80}
              src="https://akcdn.detik.net.id/community/media/visual/2021/12/21/raisa_43.png?w=700&q=90"
            />
          </div>
          <h4>Tania</h4>
          <p>Hello my name is tania , Im designer</p>
          <p>Htmll,Sass,Figma,Reactjs</p>
        </Card>
      </div>
    </>
  );
}
