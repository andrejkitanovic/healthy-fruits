import React from "react";

import SwiperCore, { Pagination , Navigation, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import './SwiperVoce.scss'

SwiperCore.use([Pagination , Navigation , Autoplay]);

const swiper = (props) => {
  const slike = props.content.map((slika,index) => (
    <SwiperSlide key={index} style={{height:props.height}}>
      <img src={slika.img} alt="vest" />
    </SwiperSlide>
  ));

  console.log(window.innerWidth)

  return (
    <div className={"SwiperVoce"} >
      <Swiper
      navigation
        pagination={{ clickable: true }}
        slidesPerView={window.innerWidth < 1024 ? 2 : 4}
        freeMode
        autoplay={props.autoplay !== "off" && {
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {slike}
      </Swiper>
    </div>
  );
};

export default swiper;
