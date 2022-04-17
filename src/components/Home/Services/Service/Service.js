import React from "react";
import { Link } from "react-router-dom";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  return (
    <div className="service-container">
      <span>See More Details</span>
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
        <Link to={`/checkout/${name}`}>
          <button className="checkout-btn btn btn-dark">Check out</button>
        </Link>
      </div>
    </div>
  );
};

export default Service;
