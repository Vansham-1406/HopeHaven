import React from "react";
import Banner1 from "../assets/B1.jpg";
import Banner2 from "../assets/B2.jpg";
import Banner3 from "../assets/B3.jpg";
import Banner4 from "../assets/B4.jpg";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const Carousel1 = () => {
  return (
    <Carousel showThumbs={false} autoPlay infiniteLoop>
      <div>
        <img src={Banner1} alt="Banner1" />
      </div>
      <div>
        <img src={Banner2} alt="Banner1" />
      </div>
      <div>
        <img src={Banner3} alt="Banner1" />
      </div>
      <div>
        <img src={Banner4} alt="Banner1" />
      </div>
    </Carousel>
  );
};

export default Carousel1;
