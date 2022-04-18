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
            className="text-light ms-0 ms-md-5"
            data-aos="slide-left"
            data-aos-easing="linear"
            data-aos-duration="800"
          >
            <h1 className="text-info">Welcome To Eyun Fitness</h1>
            <p>
              Want to be healthy and have a perfect body? <br /> Eyun Fitness is
              the right decision for you!.
            </p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-bg2">
        <div className="d-flex align-items-center flex-column flex-md-row justify-content-center">
          <div>
            <img className="img-fluid" src={img2} alt="First slide" />
          </div>

          <div className="text-light">
            <h1 className="text-warning">Start Your Fitness Journey</h1>
            <p>
              {" "}
              Never say the sky’s the limit when there are footprints on the
              moon
            </p>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item className="carousel-bg3">
        <div className="d-flex align-items-center flex-column flex-md-row justify-content-center">
          <div>
            <img className="img-fluid" src={img3} alt="First slide" />
          </div>

          <div className="text-light">
            <h1 className="text-danger">Build A Perfect Health Growth</h1>
            <p>A winner never whines</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
