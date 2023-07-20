import React from "react";
import Navbar from "../Navbar/Navbar";
import Hero from "../Hero/Hero";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";
import FAQ from "../FAQ/FAQ";
import Support from "../Support/Support";

const Homepage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <FAQ />
      <Support />
      <Footer />
    </div>
  );
};

export default Homepage;
