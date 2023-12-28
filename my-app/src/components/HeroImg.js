import "./HeroImgStyles.css";

import React from 'react'
import BackgroundImg from "../assets/istockphoto- bg-jpg.jpg"
import { Link } from "react-router-dom";
const HeroImg = () => {
  return <div className="hero">
    <div className="mask">
        <img className="into-img" src={BackgroundImg }alt="BackgroundImg"></img>
    </div>
    <div className="content">
        <p>Hi,I Am A Freelancer.</p>
        <h1>React Developer.</h1>
        <Link to="/project" className="btn">Project</Link>
        <Link to="/contact" className="btn">Contact</Link>
    </div>
  </div>
  
}

export default HeroImg;