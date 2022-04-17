import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";
import img1 from "../../../images/banner/banner1.png";
import img2 from "../../../images/banner/banner2.png";
import img3 from "../../../images/banner/banner3.png";

const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel-bg1">
        <div className="d-flex align-items-center flex-column flex-md-row justify-content-center">
          <div
            data-aos="slide-right"
            data-aos-easing="linear"
            data-aos-duration="500"
          >
            <img className="img-fluid" src={img1} alt="First slide" />
          </div>

          <div
            className="text-light"
            data-aos="slide-left"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-bg2">
        <div className="d-flex align-items-center flex-column flex-md-row justify-content-center">
          <div>
            <img className="img-fluid" src={img2} alt="First slide" />
          </div>

          <div className="text-light">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-bg3">
        <div className="d-flex align-items-center flex-column flex-md-row justify-content-center">
          <div>
            <img className="img-fluid" src={img3} alt="First slide" />
          </div>

          <div className="text-light">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
