import React from "react";
import FaqImg from "../../Assets/img/faq.png";
import "./FAQ.scss";

const FAQ = () => {
  return (
    <div className="container mt-5">
      <h2 className="section-heading" id="services">
        <span style={{ color: "var(--secondary-orange)" }}>Frequently</span>{" "}
        Asked Questions
      </h2>
      <h6 className="text-center mt-3">
        these are some of the frequently asked questions{" "}
        <span style={{ color: "var(--secondary-orange)" }}>
          regarding out platform and services.
        </span>
      </h6>
      <div className="row mt-3">
        <div className="col-5 d-none d-md-flex faq-image align-items-center justify-content-center">
          <img src={FaqImg} alt="" />
        </div>
        <div className="col-12 col-md-7 d-flex align-items-start justify-content-center">
          <div className="row">
            <div className="col-6 mt-4">
              <div className="faq-wrapper">
                <div className="faq-title">
                  How much time does it take to get the services ?
                </div>
                <div className="faq-description mt-2">
                  <b>Time for arrival of servicemen:</b> Usually, it takes 30
                  mins - 1 hour for them to arrive at your doorsteps,
                </div>
              </div>
            </div>
            <div className="col-6 mt-4">
              <div className="faq-wrapper">
                <div className="faq-title">
                  How many jobs can I take at once ?
                </div>
                <div className="faq-description mt-2">
                  <b>Multiple Work:</b> You can accept as many job requests you
                  get as long as you complete them in time
                </div>
              </div>
            </div>
            <div className="col-6 mt-4">
              <div className="faq-wrapper">
                <div className="faq-title">
                  How much experience do I need to be a service provider ?
                </div>
                <div className="faq-description mt-2">
                  <b>Basic Training:</b> You need basic training certificate or
                  skilled enough to provide those services.
                </div>
              </div>
            </div>
            <div className="col-6 mt-4">
              <div className="faq-wrapper">
                <div className="faq-title">Are the service man qualified ?</div>
                <div className="faq-description mt-2">
                  <b>Verified Certification:</b> All our service man are
                  qualified and verified by their certificates.
                </div>
              </div>
            </div>
            <div className="col-6 mt-4">
              <div className="faq-wrapper">
                <div className="faq-title">How do I pay ?</div>
                <div className="faq-description mt-2">
                  <b>Means of payment:</b> You can pay through our website
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
