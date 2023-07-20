import React from "react";
import "./FindWorker.scss";
import Navbar from "../Navbar/Navbar";
import AvailableCategories from "../AvailableCategories/AvailableCategories";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const FindWorker = () => {
  return (
    <div className="body-margin">
      <Navbar />
      <div className="container">
        <h4 className="ms-2 text-center mt-5">
          Our Availab<span className="secondary-color">le Categories</span>
        </h4>
        <AvailableCategories />
        <Services />
      </div>
      <Footer />
    </div>
  );
};

export default FindWorker;
