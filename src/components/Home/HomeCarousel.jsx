import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import "../../App.css";

export const ImageSlider = ({ imagess }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    focusOnSelect: true,
  };
  return (
    <>
      <div className="tag">
        <div className="limitedtimeHeadingDiv">
          <h2 className="limitedtimeHeading">Savings to Bring in the Season</h2>
        </div>
      </div>
      <div className="imgslider">
        <Slider {...settings}>
          {imagess.map((item) => (
            <div key={item.id} className="slider_info">
              <div>
                <img src={item.src} alt={item.alt} />
              </div>
              <div className="slides">
                <h3 className="">Chic Shag Rugs​</h3>
                <h4 className="">
                  Opt for classNameic comforts with plush and pretty shag rugs.
                </h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
