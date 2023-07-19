import React from "react";
import "./Navbar.scss";
import NavLogo from "../../Assets/img/logo.png";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div>
          <img src={NavLogo} alt="nav-logo" className="nav-logo" />
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-between"
          id="navbarNavAltMarkup"
        >
          <div class="navbar-nav">
            <div>nimesh</div>
          </div>
          <div>
            <button className="custom-button me-3">Provide Service</button>
            <button className="custom-button-2">Get Service</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
