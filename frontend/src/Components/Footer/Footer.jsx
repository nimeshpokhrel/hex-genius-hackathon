import React from "react";
import "./Footer.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PermPhoneMsgIcon from "@mui/icons-material/PermPhoneMsg";

function Footer() {
  return (
    <div className="footer-wrapper pt-5 pb-4">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4">
            <h4 className="mb-2">
              Abo<span style={{ color: "var(--secondary-orange)" }}>ut Us</span>
            </h4>
            <span className="about-us-text">
              <span className="fw-bold">Hajurko Sahayak</span> is a common
              platform that connects clients and hireling offering household
              services across multiple categories. Here the clients can directly
              interact with the people offering their service from a wide range
              of providers.
            </span>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column align-items-md-center mt-md-0 mt-5">
            <div>
              <h4>
                Our
                <span style={{ color: "var(--secondary-orange)" }}>
                  {" "}
                  Socials
                </span>
              </h4>
            </div>
            <div className="social-items d-flex flex-column align-items-md-center align-items-start">
              <span>Facebook</span>
              <span className="mt-3">Twitter</span>
              <span className="mt-3">Instagram</span>
              <span className="mt-3">WhatsApp</span>
            </div>
          </div>
          <div className="col-12 col-md-4 d-flex flex-column align-items-md-center mt-md-0 mt-5">
            <div>
              <h4 className="mb-2">
                Our C
                <span style={{ color: "var(--secondary-orange)" }}>ontact</span>
              </h4>
            </div>
            <div className="contact-items d-flex flex-column align-items-md-start align-items-start">
              <span className="d-flex align-items-center">
                <LocationOnIcon className="contact-icons" />
                Kathmandu, Nepal
              </span>
              <span className="mt-3 d-flex align-items-center">
                <MailOutlineIcon className="contact-icons" />
                info@hajurko@com
              </span>
              <span className="mt-3 d-flex align-items-center">
                <LocalPhoneIcon className="contact-icons" />
                +977 98XXXXXXXX
              </span>
              <span className="mt-3 d-flex align-items-center">
                <PermPhoneMsgIcon className="contact-icons" />
                +977 98XXXXXXXX
              </span>
            </div>
          </div>
        </div>
        <div className="mt-4"></div>
        <hr />
        <div className="w-100 d-flex justify-content-center">
          <span style={{ textAlign: "center" }}>
            Made with ❤️ and ☕ by Team Kathford
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
