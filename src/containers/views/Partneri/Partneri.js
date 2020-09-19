import React, { useState , useEffect } from "react";
import './Partneri.scss'

import {Link} from 'react-router-dom'

import Swiper from "../../../components/Swiper/Swiper";
import NasiPartneri from "../../../components/Partneri/NasiPartneri/NasiPartneri";
import Partner from "../../../assets/images/swiper-partner.png";
import ZagarantovanKvalitet from '../../../components/Pocetna/ZagarantovanKvalitet/ZagarantovanKvalitet'

const Partneri = (props) => {
  const [swiperGlavni] = useState([
    { img: Partner },
    { img: Partner },
    { img: Partner },
    { img: Partner },
  ]);

  useEffect(() => {
    window.scrollTo(0,0)
  },[])

  return (
    <div className="Partneri">
      <Swiper key={1} content={swiperGlavni} overlay minilogo height="70vh" />
      <NasiPartneri />
      <ZagarantovanKvalitet />
      <Link to="/kontakt">Kontaktirajte nas</Link>
    </div>
  );
};

export default Partneri;
