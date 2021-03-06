import React, { useEffect, useState } from 'react'
import './Voce.scss'

import Swiper from '../../../components/Swiper/Swiper'
import KategorijaVoca from '../../../components/Voce/KategorijaVoca/KategorijaVoca'
import SwiperVoce from '../../../components/Voce/SwiperVoce/SwiperVoce'

// import Jagode from '../../../assets/images/swiper-jagode.jpg'
import VoceSwiper from '../../../assets/images/swiper-voce.jpg'
// import VoceSwiper2 from '../../../assets/images/swiper-voce2.jpg'

import Borovnice from '../../../assets/images/voce/sveze/borovnice.png'
import Breskva from '../../../assets/images/voce/sveze/breskva.png'
import Jagode from '../../../assets/images/voce/sveze/jagode.png'
import Kajsija from '../../../assets/images/voce/sveze/kajsija.png'
import Nektarina from '../../../assets/images/voce/sveze/nektarina.png'
import Sljiva from '../../../assets/images/voce/sveze/sljiva.png'
import Tresnje from '../../../assets/images/voce/sveze/tresnje.png'
import Jabuke from '../../../assets/images/voce/sveze/jabuke.png'
import Lubenica from '../../../assets/images/voce/sveze/lubenica.png'
import Kruska from '../../../assets/images/voce/sveze/kruska.png'

import Kupina from '../../../assets/images/voce/smrznuto/kupina.png'
import Malina from '../../../assets/images/voce/smrznuto/maline.png'
import Mix from '../../../assets/images/voce/smrznuto/mix.png'

const Voce = (props) => {
  const [swiperGlavni] = useState([
    { img: VoceSwiper },
    // { img: VoceSwiper2 },
  ])

  const [svezeVoce] = useState([
    { img: Borovnice, naziv: "Borovnica" },
    { img: Jagode, naziv: "Jagoda" },
    { img: Tresnje, naziv: "Tresnja"},
    { img: Sljiva, naziv: "Sljiva" },
    { img: Kajsija, naziv: "Kajsija" },
    { img: Nektarina, naziv: "Nektarina" },
    { img: Breskva, naziv: "Breskve" },
    { img: Kruska, naziv: "Kruska" },
    { img: Jabuke, naziv: "Jabuka"},
    { img: Lubenica, naziv: "Lubenica" },
  
  ])
  const [smrznutoVoce] = useState([
    { img: Malina, naziv: "Malina" },
    { img: Borovnice, naziv: "Borovnica" },
    { img: Jagode, naziv: "Jagoda" },
    { img: Kupina, naziv: "Kupina" },
    { img: Tresnje, naziv: "Visnja" },
    { img: Sljiva, naziv: "Sljiva" },
    { img: Mix, naziv: "Mix" },
  ])

  const [susenoVoce] = useState([
    { img: Tresnje, naziv: "Visnja" },
    { img: Sljiva, naziv: "Sljiva" },
    
  ])
  const [kategorija, setKategorija] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const promeniKategoriju = (kategorija) => {
    setKategorija(kategorija)
  }

  const swiperKategorija = kategorija === 0 ? svezeVoce : kategorija === 1 ? smrznutoVoce : susenoVoce

  return (
    <div className="Voce">
      <Swiper key={1} content={swiperGlavni} overlay minilogo height="70vh" title="Voce" />
      <KategorijaVoca
        kategorija={kategorija}
        promeniKategoriju={promeniKategoriju}
      />
      <SwiperVoce content={swiperKategorija} height="30vh" autoplay="off"/>
      <Swiper key={2} content={swiperGlavni} height="80vh" overlayTop/>
    </div>
  )
}

export default Voce
