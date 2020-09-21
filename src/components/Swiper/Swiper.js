import React from "react";

import SwiperCore, { Pagination, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";

// import Jagode from "../../assets/images/swiper-jagode.jpg";
import Overlay from "../../assets/images/overlay.png";
import OverlayTop from "../../assets/images/overlay-top.png"
import Logo from "../../assets/images/logo-swiper.png";

import "./Swiper.scss";

SwiperCore.use([Pagination, Autoplay]);

const swiper = (props) => {
  const slike = props.content.map((slika,index) => (
    <SwiperSlide key={index} style={{height:props.height}}>
      <img src={slika.img} alt="vest" />
    </SwiperSlide>
  ));

  return (
    <div className={"SwiperPocetna"}>
      <Swiper
        pagination={{ clickable: true }}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides
        loop="true"
      >
        {slike}
      </Swiper>
      {props.title ? <h1 className="title">{props.title}</h1> : null}
      {props.minilogo ? <img className="mini-logo" src={Logo} alt="Healthy food" /> : null}
      {props.logo ? (
        <img className="logo" src={Logo} alt="Healthy food" />
      ) : null}
      {props.overlay ? (
        <div className="overlay">
          <img src={Overlay} alt="Jagode" />
        </div>
      ) : null}
      {props.overlayTop ? (
        <div className="overlay-top">
          <img src={OverlayTop} alt="Jagode" />
        </div>
      ) : null}
    </div>
  );
};

export default swiper;
