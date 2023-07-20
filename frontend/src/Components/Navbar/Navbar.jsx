import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import NavLogo from "../../Assets/img/logo.png";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../Hooks/useAuthContext";
import { useLogout } from "../../Hooks/useLogout";
import LogoutIcon from "@mui/icons-material/Logout";
import SearchIcon from "@mui/icons-material/Search";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import { useValidate } from "../../Hooks/useValidate";

const Navbar = () => {
  const { validateClient } = useValidate();
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { token } = useAuthContext();

  const handleAddBalance = async () => {
    const response = await fetch("http://localhost:4000/add-balance", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const json = await response.json();
    console.log(json);
    window.open(`${json.payment_url}`);
  };

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    if (!user == null) {
      validateClient(token);
    }
  }, []);

  return (
    <nav class="navbar navbar-expand-lg fixed-top">
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
          class="ms-4 collapse navbar-collapse justify-content-between"
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
                  <button className="custom-button d-flex align-items-center">
                    Get started{" "}
                    <LoginIcon
                      className="ms-2"
                      style={{ fontSize: "1.25rem" }}
                    />
                  </button>
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
                  <Link to="/post-job">
                    <div className="custom-button-2 d-flex align-items-center me-4">
                      YOUR JOBS
                    </div>
                  </Link>
                )}
                <button
                  onClick={handleLogout}
                  className="d-flex align-items-center custom-button"
                >
                  LOGOUT
                  <LogoutIcon
                    className="ms-2"
                    style={{ fontSize: "1.25rem" }}
                  />
                </button>
                <div className="user-area-wrapper ms-3 d-flex justify-content-center align-items-center">
                  <div className="d-flex flex-column align-items-center justify-content-center me-3">
                    <div className="user-name">
                      {user.firstName + " " + user.lastName}
                    </div>
                    <div className="user-balance">
                      NPR: {user.balance.toFixed(2)}
                    </div>
                  </div>
                  <button
                    className="add-balance-btn"
                    onClick={() => {
                      handleAddBalance();
                    }}
                  >
                    <AddIcon />
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
