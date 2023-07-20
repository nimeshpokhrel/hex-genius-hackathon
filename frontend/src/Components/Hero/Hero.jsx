import React from "react";
import "./Hero.scss";
import heroImg from "../../Assets/img/hero-img.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Hero = () => {
  return (
    <div className="hero-wrapper body-margin-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 d-flex flex-column align-items-start justify-content-center">
            <div className="hero-primary-text">Hey, stuck in a problem?</div>
            <div className="hero-secondary-text mt-2">
              In the current era where everyone is busy with their own frenetic
              secludes, we are here to help you and solve your problem !
            </div>
            <div className="hero-secondary-text-2 mt-3">
              We provide a common platform that connects clients and hireling
              offering household services across multiple categories. Here the
              clients can directly interact with the people offering their
              service.
            </div>
            <button className="d-flex align-items-center custom-button mt-4">
              JOIN US NOW
              <ArrowForwardIcon className="ms-2" />
            </button>
          </div>
          <div className="col-6 d-none d-md-block d-flex align-items-center">
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
