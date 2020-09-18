 import React from "react";

import SwiperCore, { Pagination , Autoplay} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

import Jagode from '../../assets/images/swiper-jagode.jpg'
import Overlay from '../../assets/images/overlay.png'

import "./Swiper.scss";

SwiperCore.use([ Pagination, Autoplay]);

const swiper = (props) => {

  const slike = ( <SwiperSlide>
      <img src={Jagode} alt="vest" />
  </SwiperSlide>)

  return (
    <div  className="SwiperPocetna">
      <Swiper
       
        pagination={{ clickable: true, 
            el: ".pagination-swiper"
         }}
        slidesPerView={1}
        autoplay={{
          delay:4000,
          disableOnInteraction:false
        }}
        centeredSlides
        loop="true"
      >
        {slike}
        {slike}
        {slike}
      </Swiper>
      <div className="overlay"><img src={Overlay} alt="Jagode" /></div>
      <div className="pagination-swiper" />
    </div>
  );
};

export default swiper;