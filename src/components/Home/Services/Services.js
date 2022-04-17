import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";

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
        <h2
          data-aos="fade-right"
          data-aos-duration="500"
          className="pt-5 text-info w-50"
        >
          MY SERVICE
        </h2>
        <div className="title-effect"></div>
      </div>

      <div className="services-container container my-5">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
