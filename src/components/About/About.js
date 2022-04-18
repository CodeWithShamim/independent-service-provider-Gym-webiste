import React from "react";
import "./About.css";
import profile from "../../images/profile.jpg";

const About = () => {
  return (
    <div
      style={{ minHeight: "calc(100vh - 90px)" }}
      className="container bg-secondary p-5"
    >
      <div className="d-flex align-items-center justify-content-around mx-3">
        <div className="title-effect"></div>
        <h1 className="text-info">About</h1>
        <div className="title-effect"></div>
      </div>
      <div className="d-flex flex-column flex-md-row align-items-center justify-content-around">
        <div className="left-side">
          <img className="img-fluid" src={profile} alt="profile" />
        </div>
        <div className="right-side ms-0 ms-md-5 text-light fw-bold">
          Hello, This is Shamim Islam. Now, I am currently studying at Rangpur
          polytechnic institute in computer technology. I like to write code And
          learn new skills. My Future plan in 2022 is to Become a MERN Stack
          Developer. I already completed HTML, CSS, Javascript,Bootstrap,
          Tailwind CSS, React.js. And my next target is Node.js, MongoDB,
          Expres.js, and more. Programming Hero makes me inspiration for hard
          work. So, I always try to hard work and become a good MERN Stack
          Developer. Thanks,
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-around mx-3">
        <div className="title-effect"></div>
        <h1 className="text-danger">End</h1>
        <div className="title-effect"></div>
      </div>
    </div>
  );
};

export default About;
