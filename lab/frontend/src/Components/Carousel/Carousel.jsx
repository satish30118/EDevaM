import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImg from "./CarouselImg";
import "./Carousel.css";

export default function HomeCarousel() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <>
      <div className="h-carousel">
        <Slider {...settings}>
          {CarouselImg.map((d) => (
            <div className="h-carousel-img">
              <img src={d.img} alt={d.name} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}