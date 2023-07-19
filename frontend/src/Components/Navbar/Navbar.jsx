import React from "react";
import "./Navbar.scss";
import NavLogo from "../../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogout } from "../../Hooks/useLogout";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };
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
            {!user && (
              <>
                <Link>
                  <button className="custom-button me-3">
                    Provide Service
                  </button>
                </Link>
                <Link to="/client/login">
                  <button className="custom-button-2">Get Service</button>
                </Link>
              </>
            )}
            {user && (
              <>
                <button onClick={handleLogout} className="custom-button">
                  LOGOUT
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
