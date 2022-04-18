import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  const getDate = new Date();
  const getYear = getDate.getFullYear();
  return (
    <div
      // style={
      //   {
      //   position: "absolute",
      //   bottom: "0",
      //   width: "100%",
      //   height: "60px",
      //   background: "black",
      // }
      className="bg-dark py-4"
    >
      <div class="footer-dark">
        <footer>
          <div class="container">
            <div class="row">
              <div class="col-sm-6 col-md-3 item">
                <h3>Services</h3>
                <ul>
                  <li>
                    <a href="http://google.com/">Home</a>
                  </li>
                  <li>
                    <a href="http://google.com/">Running</a>
                  </li>
                  <li>
                    <a href="http://google.com/">Practical</a>
                  </li>
                </ul>
              </div>
              <div class="col-sm-6 col-md-3 item">
                <h3>About</h3>
                <ul>
                  <li>
                    <a href="http://google.com/">About me</a>
                  </li>
                  <li>
                    <a href="http://google.com/">My working process</a>
                  </li>
                  <li>
                    <a href="http://google.com/">My instruments</a>
                  </li>
                </ul>
              </div>
              <div class="col-md-6 item text">
                <h3>Eyun Fitness</h3>
                <p>
                  Hello, this is eyun and welcome to eyun fitnees. this website
                  only independent service provider.
                </p>
              </div>
              <div class="col item social">
                <a href="https://fb.com/CodeWithShamim">
                  <BsFacebook></BsFacebook>
                </a>
                <a href="https://twitter.com/CodeWithShamim">
                  <BsTwitter></BsTwitter>
                </a>
                <a href="https://linkedin.com/in/CodeWithShamim">
                  <BsLinkedin></BsLinkedin>
                </a>
                <a href="https://github.com/CodeWithShamim">
                  <BsGithub></BsGithub>
                </a>
              </div>
            </div>
            <p className="text-light mt-3">Copyright &copy; {getYear}</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
