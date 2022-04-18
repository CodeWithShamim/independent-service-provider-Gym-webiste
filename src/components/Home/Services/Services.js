import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css";
import img from "../../../images/women.png";

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
      <div className="container mt-5 d-flex justify-content-between align-items-center flex-column flex-md-row">
        <img className="img-fluid" src={img} alt="" />
        <div>
          <h2 className="my-4">Work from home!!</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat,
            iure. Provident dolorum repellat quia explicabo molestiae aliquam
            hic ad saepe cupiditate odio magnam mollitia inventore itaque,
            aspernatur rem unde? Harum quis sequi quia, laborum qui nostrum
            tempora asperiores repellendus perferendis. Ipsa est minus similique
            doloremque natus sequi quaerat eaque qui!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
