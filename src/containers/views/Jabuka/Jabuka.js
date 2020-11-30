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
import GrannySmith from '../../../assets/images/jabuke/komercijalne/jonaprinc.png'
import Gala from '../../../assets/images/jabuke/komercijalne/gala.png'

const Jabuke = (props) => {
  const [komercijalne,] = useState([
    { img: ZlatniDelises , naziv: "Zlatni delises"},
    { img: CrveniDelises , naziv: "Crveni delises"},
    { img: Breburn , naziv: "Breburn"},
    { img: Fuji , naziv: "Fuji"},
    { img: GrannySmith , naziv: "Granny smith"},
    { img: Gala , naziv: "Gala"},
  ])

  // const [klub,] = useState([
  //   { img: Brokoli , naziv: "Pink lady"},
  //   { img: Celer , naziv: "Ewelina"},
  //   { img: Cvekla , naziv: "Modi"},
  //   { img: Karfiol , naziv: "Isaq"},
  //   { img: Krastavac , naziv: "Red moon"},
  //   { img: Krastavac , naziv: "Rubens"},
  //   { img: Krastavac , naziv: "Kiku"},
  //   { img: Krastavac , naziv: "Sweet tango"},
  // ])

  return (
    <div className="Jabuke">
        <div className="pozadina"><img src={PrikazJabuka} alt="Jabuka"/></div>
        <OpisJabuka />
        <ProcesProizvodnje/>
        <h2>Komercijalne sorte</h2>
        <SwiperVoce content={komercijalne} height="30vh" autoplay="off" />
        <h2>Klub sorte</h2>
        <SwiperVoce content={[]} height="30vh" autoplay="off" />
      <ZagarantovanKvalitet />
    </div>
  )
}

export default Jabuke
