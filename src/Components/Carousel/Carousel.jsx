import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselImg from "./CarouselImg";
import "./Carousel.css";

export default function HomeCarousel() {
  var settings = {
    dots: true,
    infinite: true,
    fade:true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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