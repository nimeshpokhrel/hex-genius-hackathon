import React from "react";
import "./ClientLogin.scss";
import { Link } from "react-router-dom";

const ClientLogin = () => {
  return (
    <div className="client-login-wrapper d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-7 col-12">
            <div className="client-login p-4">
              <div className="row">
                <div className="col-3">nimesh</div>
                <div className="col-9 d-flex flex-column align-items-center justify-content-center">
                  <h4>
                    Login | <span className="title-color">Hajurko Sahayak</span>
                  </h4>
                  <span className="not-registred mt-1">
                    Not registered yet?{" "}
                    <Link to="/client/signup/">Register Now !</Link>
                  </span>
                  <form className="w-100 mt-4">
                    <div className="d-flex flex-column w-100 justify-content-center">
                      <span className="input-label">Email:</span>
                      <input
                        placeholder="falano@email.com"
                        type="email"
                        required
                      ></input>
                    </div>
                    <div className="d-flex flex-column w-100 justify-content-center mt-4">
                      <span className="input-label">Password:</span>
                      <input
                        placeholder="your secret"
                        type="password"
                        required
                      ></input>
                    </div>
                    <button className="custom-button w-100 mt-4">Login</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientLogin;
