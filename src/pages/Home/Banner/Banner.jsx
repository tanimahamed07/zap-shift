import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";
import { FaArrowAltCircleDown } from "react-icons/fa";
const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative">
        <img src={bannerImg1} />
        <div className="flex absolute bottom-20 gap-0 left-20">
          <button className=" btn btn-primary rounded-2xl text-secondary ">
            Track Your Parcel
          </button>
          <div className="-rotate-130">
            <FaArrowAltCircleDown size={40} />
          </div>
          <button className="ml-3 btn btn-outline border-2 border-gray-200 rounded-xl">
            Be A Rider
          </button>
        </div>
      </div>
      <div>
        <img src={bannerImg2} />
      </div>
      <div>
        <img src={bannerImg3} />
      </div>
    </Carousel>
  );
};

export default Banner;
