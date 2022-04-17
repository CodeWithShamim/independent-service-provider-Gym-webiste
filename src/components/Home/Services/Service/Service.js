import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  return (
    <div className="service-container">
      <img className="w-100 h-100 service-img" src={img} alt="service-img" />
      <div
        data-aos="zoom-in"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="hover-item"
      >
        <h4>{name}</h4>
        <p>{description}</p>
        <h6>{price}</h6>
        <button className="checkout-btn btn btn-dark">Check out</button>
      </div>
    </div>
  );
};

export default Service;
