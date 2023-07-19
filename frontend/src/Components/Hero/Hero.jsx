import React from "react";
import "./Hero.scss";
import heroImg from "../../Assets/img/hero-img.png";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-6 d-flex flex-column align-items-start justify-content-center">
            <div className="hero-primary-text">Stuck in a problem?</div>
            <div className="hero-secondary-text">Stuck in a problem?</div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div className="hero-img">
              <img src={heroImg} alt="hero-img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
