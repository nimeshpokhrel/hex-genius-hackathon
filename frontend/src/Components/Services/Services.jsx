import React from "react";
import "./Services.scss";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import PublicIcon from "@mui/icons-material/Public";

const Services = () => {
  return (
    <div className="container mt-5 py-5">
      <h2 className="section-heading" id="services">
        <span style={{ color: "var(--secondary-orange)" }}>Our</span> Services
      </h2>
      <h6 className="text-center mt-3">
        we provide services making our lives easier and will also{" "}
        <span style={{ color: "var(--secondary-orange)" }}>
          serve as a employment opportunity for many.
        </span>
      </h6>
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <div className="services-wrapper">
            <div className="row">
              <div className="col-9 d-flex flex-column">
                <span className="services-title">Creating Employment</span>
                <span className="services-description mt-1">
                  We provide employment opportunities to people who can directly
                  interact with the clients
                </span>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <div className="services-icon">
                  <WorkHistoryIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-md-0 mt-4">
          <div className="services-wrapper">
            <div className="row">
              <div className="col-9 d-flex flex-column">
                <span className="services-title">Providing Services</span>
                <span className="services-description mt-1">
                  We provide employment opportunities to people who can directly
                  interact with the clients
                </span>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <div className="services-icon">
                  <MiscellaneousServicesIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-md-0 mt-4">
          <div className="services-wrapper">
            <div className="row">
              <div className="col-9 d-flex flex-column">
                <span className="services-title">Digitalize City</span>
                <span className="services-description mt-1">
                  We provide employment opportunities to people who can directly
                  interact with the clients
                </span>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-center">
                <div className="services-icon">
                  <PublicIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
