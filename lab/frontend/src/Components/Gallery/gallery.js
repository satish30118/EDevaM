import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryData from "./GalleryData";
import "./gallery.css";

export default function gallery() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      return (
        <>
          <div className="student-record-section slider-container">
            <Slider {...settings}>
              {GalleryData.map((d) => (
                <div className="students-card">
                  <div className="students-card-img">
                    <img src={d.img} alt={d.title} />
                  </div>
                  {/* <div className="students-card-text">
                    <p>
                      <span style={{ color: "brown" }}></span>
                      {d.title}
                    </p>
                  </div> */}
                </div>
              ))}
            </Slider>
          </div>
        </>
      );
    }