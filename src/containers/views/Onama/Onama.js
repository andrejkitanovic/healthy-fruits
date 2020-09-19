import React, { useEffect, useState } from "react";

import Swiper from "../../../components/Swiper/Swiper";
import ComponentOnama from "../../../components/Onama/Onama/Onama";
import Display from "../../../components/Onama/Display/Display";

import Kamion from "../../../assets/images/kamion.png";

let changeImage = null;

const Onama = (props) => {
  const [swiperGlavni] = useState([
    { img: Kamion },
    { img: Kamion },
    { img: Kamion },
    { img: Kamion },
  ]);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])
  
  useEffect(() => {
    const changeActiveImage = () => {
      if (activeImage < 3) {
        setActiveImage((p) => p + 1);
      } else setActiveImage(0);
    };

    clearInterval(changeImage);
    changeImage = setInterval(() => {
      changeActiveImage();
    }, 3000);

    return () => clearInterval(changeImage);
  }, [activeImage]);



  return (
    <div className="Onama">
      <Swiper key={1} content={swiperGlavni} overlay minilogo height="70vh" />

      <ComponentOnama />
      <Display content={swiperGlavni} active={activeImage} />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic Lorem Ipsum is simply dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type specimen
        book. It has survived not only five centuries, but also the leap into
        electronic
      </p>
    </div>
  );
};

export default Onama;
