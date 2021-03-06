import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";
import img from "../../../images/women.png";
import { Button } from "react-bootstrap";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="main-container">
      <div className="d-flex mx-auto w-75 align-items-center justify-content-center">
        <div className="title-effect"></div>
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className="pt-5 text-light w-50"
        >
          MY SERVICE
        </h1>
        <div className="title-effect"></div>
      </div>

      <div className="services-container container my-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>

      {/* extra section  */}

      <div className="container mt-5 d-flex justify-content-around align-items-center flex-column flex-md-row">
        <img className="img-fluid extra-section-img" src={img} alt="" />
        <div>
          <h1 data-aos="flip-bottom" className="my-4">
            How To Keep Your Body Fit And Strongh!!
          </h1>
          <p className="mx-4">
            Oftentimes the hardest part of keeping your body fit and strong is
            sticking to an exercise plan. To keep your body fit and strong,
            choose activities that fit your personality. Do you like to play on
            a team or go solo? Do you prefer going to the gym or walking in the
            park? Whatever you like to do, there’s an activity you can choose to
            help keep your body in good shape.
          </p>

          <Button variant="dark border border-light">Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Services;
