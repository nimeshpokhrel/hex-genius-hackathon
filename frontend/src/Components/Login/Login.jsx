import React, { useState } from "react";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useLogin } from "../../Hooks/useLogin";
import loginImg from "../../Assets/img/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isClient, setIsClient] = useState(true);

  const { loginClient, loginWorker, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isClient) {
      await loginClient(email, password);
    } else {
      await loginWorker(email, password);
    }
  };

  return (
    <div className="login-wrapper d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-12">
            <div className="login">
              <div className="row">
                <div className="col-6 d-lg-flex align-items-center d-none">
                  <div className="login-image">
                    <img src={loginImg} alt="login-img" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
                  <h4>
                    Account Login |{" "}
                    <span className="title-color">Hajurko Sahayak</span>
                  </h4>
                  <span className="not-registred mt-1">
                    Not registered yet?{" "}
                    <Link to="/signup/">Register Now !</Link>
                  </span>
                  {error ? (
                    <div className="login-error mt-4">{error}</div>
                  ) : (
                    <div className="mb-2"></div>
                  )}
                  <form className="w-100 mt-4" onSubmit={handleSubmit}>
                    <div className="d-flex flex-column w-100 justify-content-center mt-2">
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
                    <div className="client-check d-flex flex-column w-100 mt-4">
                      <span className="input-label">are you a worker ?</span>
                      <div className="d-flex mt-2">
                        <input
                          type="radio"
                          name="client"
                          value={isClient}
                          onChange={(e) => setIsClient(false)}
                        />
                        <span className="input-label ms-2">Yes</span>
                        <input
                          type="radio"
                          className="ms-3"
                          name="client"
                          value={isClient}
                          onChange={(e) => setIsClient(true)}
                        />
                        <span className="input-label ms-2">No</span>
                      </div>
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

export default Login;
