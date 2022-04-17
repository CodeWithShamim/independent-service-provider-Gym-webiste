import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { img, name, description, price } = service;
  return (
    <div className="service-container">
      <img className="img-fluid" src={img} alt="service-img" />
      <h4>{name}</h4>
      <p>{description}</p>
      <h6>{price}</h6>
      <button className="btn btn-dark">Check out</button>
    </div>
  );
};

export default Service;
