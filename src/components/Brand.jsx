import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  var settings = {
    dots: false,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ul>
      <Slider {...settings}>
        <li className="item">
          <h2>VS Code</h2>
        </li>
        <li className="item">
          <h2>Postman</h2>
        </li>
        <li className="item">
          <h2>Adobe Suite</h2>
        </li>
        <li className="item">
          <h2>Git</h2>
        </li>
        <li className="item">
          <h2>Firebase</h2>
        </li>
      </Slider>
    </ul>
  );
}
