import React from "react";
import img1 from "../../Assests/first.gif";
import img2 from "../../Assests/third.jpg";
import img3 from "../../Assests/womens.jpg";


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NCarusal = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
  };
  return (
    <div>
      <Slider className="overflow-hidden" {...settings}>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <img src={img2} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img1} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default NCarusal;
