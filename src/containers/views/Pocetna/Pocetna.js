import React, {useState} from "react";

import Swiper from "../../../components/Swiper/Swiper";
import Onama from "../../../components/Pocetna/Onama/Onama";
import NasiProizvodi from "../../../components/Pocetna/NasiProizvodi/NasiProizvodi";
import ZagarantovanKvalitet from '../../../components/Pocetna/ZagarantovanKvalitet/ZagarantovanKvalitet'

import Jagode from "../../../assets/images/swiper-jagode.jpg";

const Pocetna = (props) => {
  const [swiperGlavni,] = useState([{img:Jagode},{img:Jagode},{img:Jagode},{img:Jagode}]);

  return (
    <div className="Pocetna">
      <Swiper key={1} content={swiperGlavni} overlay logo height="70vh"/>
      <Onama />
      <NasiProizvodi />
      <Swiper key={2} content={swiperGlavni}  height="40vh"/>
      <ZagarantovanKvalitet />
    </div>
  );
};

export default Pocetna;
