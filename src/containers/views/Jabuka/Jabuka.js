import React,{useState} from 'react'
import './Jabuka.scss'

import ZagarantovanKvalitet from '../../../components/Pocetna/ZagarantovanKvalitet/ZagarantovanKvalitet'
import OpisJabuka from '../../../components/Jabuke/OpisJabuka/OpisJabuka'
import ProcesProizvodnje from '../../../components/Jabuke/ProcesProizvodnje/ProcesProizvodnje'
import SwiperVoce from '../../../components/Voce/SwiperVoce/SwiperVoce'
import PrikazJabuka from '../../../assets/images/jabuke/prikazjabuka.png'


import ZlatniDelises from '../../../assets/images/jabuke/komercijalne/zlatnidelises.png'
import CrveniDelises from '../../../assets/images/jabuke/komercijalne/crvenidelises.png'
import Breburn from '../../../assets/images/jabuke/komercijalne/breburn.png'
import Fuji from '../../../assets/images/jabuke/komercijalne/fuji.png'
import GrannySmith from '../../../assets/images/jabuke/komercijalne/grennysmith.png'
import Gala from '../../../assets/images/jabuke/komercijalne/gala.png'

import Sweettango from '../../../assets/images/jabuke/klub/sweettango.png'
import Kiku from '../../../assets/images/jabuke/klub/kiku.png'
import Isaq from '../../../assets/images/jabuke/klub/isaq.png'
import Rubens from '../../../assets/images/jabuke/klub/rubens.png'
import Redmoon from '../../../assets/images/jabuke/klub/redmoon.png'
import Modi from '../../../assets/images/jabuke/klub/modi.png'
import Ewelina from '../../../assets/images/jabuke/klub/ewelina.png'
import PinkLady from '../../../assets/images/jabuke/klub/pinklady.png'
import Tehnologija from '../../../components/Jabuke/Tehnologija/Tehnologija'

const Jabuke = (props) => {
  const [komercijalne,] = useState([
    { img: ZlatniDelises , naziv: "Zlatni delises"},
    { img: CrveniDelises , naziv: "Crveni delises"},
    { img: Breburn , naziv: "Breburn"},
    { img: Fuji , naziv: "Fuji"},
    { img: GrannySmith , naziv: "Granny smith"},
    { img: Gala , naziv: "Gala"},
  ])

  const [klub,] = useState([
    { img: PinkLady , naziv: "Pink lady"},
    { img: Ewelina , naziv: "Ewelina"},
    { img: Modi , naziv: "Modi"},
    { img: Isaq , naziv: "Isaq"},
    { img: Redmoon , naziv: "Red moon"},
    { img: Rubens , naziv: "Rubens"},
    { img: Kiku , naziv: "Kiku"},
    { img: Sweettango , naziv: "Sweet tango"},
  ])

  return (
    <div className="Jabuke">
        <div className="pozadina"><img src={PrikazJabuka} alt="Jabuka"/></div>
        <OpisJabuka />
        <ProcesProizvodnje/>
        <h2>Komercijalne sorte</h2>
        <SwiperVoce content={komercijalne} height="30vh" autoplay="off" />
        <h2>Klub sorte</h2>
        <SwiperVoce content={klub} height="30vh" autoplay="off" />
        <p className="description">Klupske jabuke predstavljaju ekskluzivne jabuke koje mogu da proizvode samo proizvođači koji su u svom radu pokazali izuzetne rezultate i privrženost bezbednosti i kvalitetu proizvoda.</p>
      <Tehnologija/>

      <ZagarantovanKvalitet />
    </div>
  )
}

export default Jabuke
