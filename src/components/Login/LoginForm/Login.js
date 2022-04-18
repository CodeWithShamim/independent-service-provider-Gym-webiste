import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../../images/logo.png";

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  // handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    // get input value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log(email, password);
  };
  return (
    <div className="text-center login-container ">
      <div
        className="w-25 mx-auto mt-3"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img className="logo" src={logo} alt="logo" />
        <br />
        <form onSubmit={handleLogin}>
          <div className=" text-start">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                required
              />
            </div>

            <p className="signup">
              Don't have an account? <Link to="/signup">sign up</Link>
            </p>
          </div>

          <button
            type="submit"
            className="login-btn btn btn-warning w-100 fw-bold fs-4"
          >
            Login
          </button>
        </form>

        {/* <Link
          to=""
          onClick={resetPassword}
          className="text-danger fw-bold mt-3"
        >
          Forgot your password?
        </Link> */}
      </div>
    </div>
  );
};

export default Login;
