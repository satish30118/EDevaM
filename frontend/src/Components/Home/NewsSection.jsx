import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AwardsData from "../Awards/AwardsData";

export default function NewsSection() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
  };
  return (
    <>
      <div>
        <Slider {...settings}>
          {AwardsData?.map((d) => (
            <div>
              <div>
                Hello
                <img src={d.img} alt="" />
                {d?.title}
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div>
        {AwardsData?.map((d) => (
          <div>{d.title}</div>
        ))}
      </div>
    </>
  );
}
