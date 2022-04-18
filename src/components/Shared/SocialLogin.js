import React from "react";
import googleIcon from "../../images/socialIcon/google.png";
import githubIcon from "../../images/socialIcon/github.png";
import facebookIcon from "../../images/socialIcon/facebook.png";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "./Loading";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SocialLogin = () => {
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
  const [signInWithFacebook, user3, loading3, error3] =
    useSignInWithFacebook(auth);
  // use navigate
  const navigate = useNavigate();
  const location = useLocation();

  // ==========Google sign in ==================
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  // ==========Github sign in ==================
  const handleGithubSignIn = () => {
    signInWithGithub();
  };
  // ==========Facebook sign in ==================
  const handleFacebookSignIn = () => {
    signInWithFacebook();
  };

  // Loading---------
  if (loading1 || loading2 || loading3) {
    return <Loading></Loading>;
  }

  // Error ---------
  let errorItem;
  if (error1 || error2 || error3) {
    console.log(error1);
    errorItem = (
      <p className="text-warning">
        {error1?.message} {error2?.message} {error3?.message}
      </p>
    );
  }

  // getUser-------
  let from = location.state?.from?.pathname || "/";
  if (user1 || user2 || user3) {
    toast("Successfully login");
    navigate(from, { replace: true });
  }

  return (
    <div>
      {/* //Show  Error --------- */}
      {errorItem}

      <div className="d-flex mt-3 align-items-center justify-content-center">
        <div className="title-effect"></div>
        <p className="mt-3 px-2">or</p>
        <div className="title-effect"></div>
      </div>
      <div
        onClick={handleGoogleSignIn}
        className="google-login bg-transparent w-75 mx-auto rounded border border-info fw-bold defalut-style"
      >
        <img src={googleIcon} alt="googleIcon" />
        <span>Continue With Google</span>
      </div>
      <div
        onClick={handleGithubSignIn}
        style={{ backgroundColor: "rgba(0, 255, 255, 0.342)" }}
        className="github-login my-2 w-75 mx-auto rounded border border-info fw-bold defalut-style"
      >
        <img src={githubIcon} alt="googleIcon" />
        <span>Continue With Github</span>
      </div>
      <div
        onClick={handleFacebookSignIn}
        className="facebook-login bg-transparent w-75 mx-auto rounded border border-info fw-bold defalut-style"
      >
        <img src={facebookIcon} alt="googleIcon" />
        <span>Continue With Facebook</span>
      </div>
    </div>
  );
};

export default SocialLogin;
