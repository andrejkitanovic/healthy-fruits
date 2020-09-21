import React, { useState , useEffect } from "react";
import './Partneri.scss'

import {Link} from 'react-router-dom'

import Swiper from "../../../components/Swiper/Swiper";
import NasiPartneri from "../../../components/Partneri/NasiPartneri/NasiPartneri";
import Partner from "../../../assets/images/swiper-partner.png";
import ZagarantovanKvalitet from '../../../components/Pocetna/ZagarantovanKvalitet/ZagarantovanKvalitet'

import {MdKeyboardArrowRight} from 'react-icons/md'

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
      <Swiper key={1} content={swiperGlavni} overlay minilogo height="70vh" title="Nasi partneri"/>
      <NasiPartneri />
      <ZagarantovanKvalitet />
      <Link to="/kontakt">Kontaktirajte nas <MdKeyboardArrowRight /></Link>
    </div>
  );
};

export default Partneri;
