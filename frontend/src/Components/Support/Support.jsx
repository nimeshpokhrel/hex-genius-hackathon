import React from "react";
import "./Support.scss";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import InboxIcon from '@mui/icons-material/Inbox';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const Support = () => {
  return (
    <div className="container mt-5 py-5">
      <h2 className="section-heading" id="services">
        <span style={{ color: "var(--secondary-orange)" }}>Reach Our</span>{" "}
        Support
      </h2>
      <h6 className="text-center mt-3">
        you can easily reach out to our support from the{" "}
        <span style={{ color: "var(--secondary-orange)" }}>
          following contact details
        </span>
      </h6>
      <div className="row mt-5">
        <div className="col-12 col-md-4">
          <div className="contact-wrapper d-flex justify-content-between align-items-center">
            <div>
              <div className="contact-heading">Visit us at:</div>
              <div className="contact-description mt-1">Kathmandu, Nepal</div>
            </div>
            <div className="contact-icon">
              <AddLocationIcon />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <div className="contact-wrapper d-flex justify-content-between align-items-center">
            <div>
              <div className="contact-heading">Reach us at:</div>
              <div className="contact-description mt-1">info@hajurko.com</div>
            </div>
            <div className="contact-icon">
              <InboxIcon />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-4 mt-4 mt-md-0">
          <div className="contact-wrapper d-flex justify-content-between align-items-center">
            <div>
              <div className="contact-heading">Contact us at:</div>
              <div className="contact-description mt-1">+977 98XXXXXXXX</div>
            </div>
            <div className="contact-icon">
              <LocalPhoneIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
