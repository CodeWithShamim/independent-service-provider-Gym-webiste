import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import logo from "../../../images/logo2.png";
import auth from "../../../firebase.init";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../../Shared/Loading";
import { toast } from "react-toastify";

const RegisterForm = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const emailRef = useRef();
  const passwordRef = useRef();
  const nameRef = useRef();

  // handle Registration
  const handleRegister = (e) => {
    e.preventDefault();
    // get input value
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;

    // console.log(email, password, name);
    // create user with email & pass

    if (name && email && password) {
      createUserWithEmailAndPassword(email, password);
    } else {
      toast.warn("Please fiil all input field!!");
    }
  };

  // use navigate
  const navigate = useNavigate();
  // Error element
  let errorElement;

  if (user) {
    toast("Congratulation, Now check your email for verification!!", {
      icon: "🚀",
    });
    navigate("/");
  }
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
    errorElement = error.message;
  }

  return (
    <div className="text-center main-container">
      <div
        className=" w-50 mx-auto login-container"
        data-aos="fade-right"
        data-aos-easing="linear"
        data-aos-duration="500"
      >
        <img className="logo img-fluid" src={logo} alt="logo" />
        <br />
        <form onSubmit={handleRegister}>
          <div className=" text-start">
            <div className="mb-3">
              <label htmlFor="exampleInputName" className="form-label">
                Name
              </label>
              <input
                ref={nameRef}
                type="text"
                className="form-control"
                id="exampleInputName"
                aria-describedby="nameHelp"
              />
            </div>

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
                required
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
                required
              />
            </div>

            <p className="signup ">
              Already have an account?{" "}
              <Link to="/login" className="text-warning">
                Login
              </Link>
            </p>
          </div>

          <button type="submit" className="login-btn btn w-100 fw-bold fs-4">
            Login
          </button>
        </form>
        <p>
          {errorElement && (
            <p className="text-warning">Error: {errorElement}</p>
          )}
        </p>

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

export default RegisterForm;
