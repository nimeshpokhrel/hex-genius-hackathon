import React, { useState } from "react";
import "./ClientLogin.scss";
import { Link } from "react-router-dom";
import { useLogin } from "../../Hooks/useLogin";
import loginImg from "../../Assets/img/login.png";

const ClientLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="client-login-wrapper d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-12">
            <div className="client-login">
              <div className="row">
                <div className="col-6 d-lg-block d-none">
                  <div className="login-image">
                    <img src={loginImg} alt="login-img" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
                  <h4>
                    Client Login |{" "}
                    <span className="title-color">Hajurko Sahayak</span>
                  </h4>
                  <span className="not-registred mt-1">
                    Not registered yet?{" "}
                    <Link to="/client/signup/">Register Now !</Link>
                  </span>
                  {error && <>{error}</>}
                  <form className="w-100 mt-4" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column w-100 justify-content-center">
                      <span className="input-label">Email:</span>
                      <input
                        placeholder="falano@email.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="d-flex flex-column w-100 justify-content-center mt-4">
                      <span className="input-label">Password:</span>
                      <input
                        placeholder="your secret"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="text-end forgot-password mt-2">
                      <span>
                        <Link>Forgot Password ?</Link>
                      </span>
                    </div>
                    <button
                      className="custom-button w-100 mt-3"
                      disabled={isLoading}
                    >
                      Login
                    </button>
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