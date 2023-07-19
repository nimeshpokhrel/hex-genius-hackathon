import React from "react";
import "./Navbar.scss";
import NavLogo from "../../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogout } from "../../Hooks/useLogout";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  const handleLogout = async () => {
    await logout();
  };
  return (
    <nav class="navbar navbar-expand-lg">
      <div class="container">
        <div className="me-md-5 me-4">
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
            <Link to="/">
              <div className="nav-item me-45">HOME</div>
            </Link>
            <Link to="/#services">
              <div className="nav-item me-45">SERVICES</div>
            </Link>
            <div className="nav-item me-45">FAQs</div>
            <div className="nav-item me-45">SUPPORT</div>
          </div>
          <div className="d-flex align-items-center">
            {!user && (
              <>
                <Link to="/login">
                  <button className="custom-button">Get started</button>
                </Link>
              </>
            )}
            {user && (
              <>
                {user && user.userType === "client" && (
                  <Link to="/find-worker">
                    <div className="custom-button-2 d-flex align-items-center me-4">
                      <SearchIcon className="me-2" />
                      FIND A WORKER
                    </div>
                  </Link>
                )}
                {user && user.userType === "worker" && (
                  <div className="custom-button-2 d-flex align-items-center me-4">
                    <AddIcon className="me-2" />
                    POST A JOB
                  </div>
                )}
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
