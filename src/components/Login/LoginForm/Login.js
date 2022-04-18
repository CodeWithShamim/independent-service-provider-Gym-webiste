import React, { useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../../../images/logo2.png";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error2] =
    useSendPasswordResetEmail(auth);

  const emailRef = useRef("");
  const passwordRef = useRef("");

  // handle Login
  const handleLogin = (e) => {
    e.preventDefault();
    // get input value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    // console.log(email, password);
    if (email && password) {
      signInWithEmailAndPassword(email, password);
    } else {
      toast.warn("Please fiil all input field!!");
    }
  };

  // use Navigate
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  // Set Error
  let errorElement;

  if (error) {
    errorElement = error.message;
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (user) {
    toast("Successfully login");
    navigate(from, { replace: true });
  }

  // Reset password
  const resetPassword = async () => {
    const resetEmail = emailRef.current.value;
    if (resetEmail) {
      await sendPasswordResetEmail(resetEmail);
      toast("Successfully reset email");
    } else {
      toast.error("Plsease add your email address!!");
    }
  };
  if (sending) {
    return <Loading></Loading>;
  }
  if (error2) {
    errorElement = error2.message;
  }

  return (
    <div className="text-center main-login-container">
      <div
        className=" w-50 mx-auto login-container"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img className="logo img-fluid mt-4" src={logo} alt="logo" />
        <br />
        <form onSubmit={handleLogin}>
          <div className=" text-start">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                ref={emailRef}
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                ref={passwordRef}
                type="password"
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <p className="signup ">
              Don't have an account?{" "}
              <Link to="/signup" className="text-warning">
                sign up
              </Link>
            </p>
          </div>

          <button type="submit" className="login-btn btn w-100 fw-bold fs-4">
            Login
          </button>
        </form>
        <p className="text-warning">{errorElement}</p>
        <Link onClick={resetPassword} to="">
          Forgotten password?
        </Link>

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
