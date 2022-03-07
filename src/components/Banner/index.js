import React from 'react';
import Slider from "react-slick";
import { getAllBannerImages } from '../utils/imagesBanner';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.css';

export default function Banner() {
  const renderSlides = () =>
    getAllBannerImages().map(image => (
      <div className='banner'>
        <img src={image} alt={image.name} />
      </div>
    ));
  ;

  return (
    <div className='container-banner'  >
      <Slider
        dots={true}
        infinite={true}
        speed={500}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={5000}
        appendDots={dots => (
          <ul style={{ color: "#345C7D" }}>{dots}</ul>
        )}
      >
        {renderSlides()}
      </Slider>
    </div>
  );

}
