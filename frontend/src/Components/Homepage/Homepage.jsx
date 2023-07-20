import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
};

export default Homepage;
