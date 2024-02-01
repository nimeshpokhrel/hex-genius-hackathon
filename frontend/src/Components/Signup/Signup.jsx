import React, { useState } from "react";
import "./Signup.scss";
import registerImg from "../../Assets/img/register.png";
import { Link } from "react-router-dom";
import { useSignup } from "../../Hooks/useSignup";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [phone, setPhone] = useState("");
  const [isClient, setIsClient] = useState(true);
  const [service, setService] = useState("");

  const { signupClient, signupWorker, isLoading, error, setError } =
    useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("passwords do not match");
    }
    if (isClient) {
      await signupClient(
        firstName,
        lastName,
        email,
        password,
        city,
        street,
        phone
      );
    } else {
      await signupWorker(
        firstName,
        lastName,
        email,
        password,
        city,
        street,
        phone,
        service
      );
    }
  };
  return (
    <div className="register-wrapper d-flex align-items-center justify-content-center">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-10 col-12">
            <div className="register">
              <div className="row">
                <div className="col-6 d-lg-flex align-items-center d-none">
                  <div className="register-image">
                    <img src={registerImg} alt="register-img" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 d-flex flex-column align-items-center justify-content-center">
                  <h4 className="text-center">
                    Account Register |{" "}
                    <span className="title-color">Hajurko Sahayak</span>
                  </h4>
                  <span className="already-registred mt-1">
                    Already a user ? <Link to="/login/">Login Now !</Link>
                  </span>
                  {error ? (
                    <div className="register-error mt-4">{error}</div>
                  ) : (
                    <div className="mb-2"></div>
                  )}{" "}
                  <form className="w-100" onSubmit={handleSubmit}>
                    <div className="d-flex mt-4">
                      <div className="d-flex flex-column w-100 me-3">
                        <span className="input-label">First Name:</span>
                        <input
                          placeholder="John K"
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          required
                        ></input>
                      </div>
                      <div className="d-flex flex-column w-100">
                        <span className="input-label">Last Name:</span>
                        <input
                          placeholder="Doe"
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="d-flex flex-column w-100 justify-content-center mt-4">
                      <span className="input-label">Email:</span>
                      <input
                        placeholder="falano@email.com"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      ></input>
                    </div>
                    <div className="d-flex mt-4">
                      <div className="d-flex flex-column w-100 me-3">
                        <span className="input-label">Password:</span>
                        <input
                          placeholder="your secret"
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        ></input>
                      </div>
                      <div className="d-flex flex-column w-100">
                        <span className="input-label">Confirm Password:</span>
                        <input
                          placeholder="your secret again"
                          type="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="d-flex mt-4">
                      <div className="d-flex flex-column w-100 me-3">
                        <span className="input-label">City:</span>
                        <input
                          placeholder="Some City"
                          type="text"
                          value={city}
                          onChange={(e) => setCity(e.target.value)}
                          required
                        ></input>
                      </div>
                      <div className="d-flex flex-column w-100">
                        <span className="input-label">Street:</span>
                        <input
                          placeholder="Some Galli, Chowk"
                          type="text"
                          value={street}
                          onChange={(e) => setStreet(e.target.value)}
                          required
                        ></input>
                      </div>
                    </div>
                    <div className="d-flex flex-column w-100 justify-content-center mt-4">
                      <span className="input-label">Phone:</span>
                      <input
                        placeholder="+977 98XXXXXXXX"
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      ></input>
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
                    {!isClient && (
                      <div>
                        <div className="d-flex flex-column mt-4">
                        <span className="input-label">Your Citizenship:</span>
                        <input type="file" required />
                        </div>
                        <div className="d-flex flex-column mt-4">
                          <span className="input-label">Your Service:</span>
                          <select onChange={(e) => setService(e.target.value)}>
                            <option selected disabled>
                              choose your service
                            </option>
                            <option value="plumber">Plumber</option>
                            <option value="carpenter">Carpenter</option>
                            <option value="beautician">Beautician</option>
                            <option value="electrician">Electrician</option>
                            <option value="driver">Driver</option>
                            <option value="maid">Maid</option>
                            <option value="tutor">Tutor</option>
                            <option value="homecook">Homecook</option>
                            <option value="priest">Priest</option>
                          </select>
                        </div>
                      </div>
                    )}
                    <button
                      className="custom-button w-100 mt-4"
                      disabled={isLoading}
                    >
                      SIGNUP
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

export default Signup;
