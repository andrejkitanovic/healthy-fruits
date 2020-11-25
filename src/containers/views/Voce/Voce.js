import React, { useEffect, useState } from 'react'
import './Voce.scss'

import Swiper from '../../../components/Swiper/Swiper'
import KategorijaVoca from '../../../components/Voce/KategorijaVoca/KategorijaVoca'
import SwiperVoce from '../../../components/Voce/SwiperVoce/SwiperVoce'

import Jagode from '../../../assets/images/voce-swiper.png'

import Borovnice from '../../../assets/images/voce/sveze/borovnice.png'
import Breskva from '../../../assets/images/voce/sveze/breskva.png'
import Jagodes from '../../../assets/images/voce/sveze/jagode.png'
import Kajsija from '../../../assets/images/voce/sveze/kajsija.png'
import Nektarina from '../../../assets/images/voce/sveze/nektarina.png'
import Sljiva from '../../../assets/images/voce/sveze/sljiva.png'
import Tresnje from '../../../assets/images/voce/sveze/tresnje.png'

import Kupina from '../../../assets/images/voce/smrznuto/kupina.png'
import Malina from '../../../assets/images/voce/smrznuto/maline.png'
import Mix from '../../../assets/images/voce/smrznuto/mix.png'

const Voce = (props) => {
  const [swiperGlavni] = useState([
    { img: Jagode },
    { img: Jagode },
  ])

  const [svezeVoce] = useState([
    { img: Borovnice },
    { img: Breskva },
    { img: Jagodes },
    { img: Kajsija },
    { img: Nektarina },
    { img: Sljiva },
    { img: Tresnje },
  ])
  const [smrznutoVoce] = useState([
    { img: Malina },
    { img: Borovnice },
    { img: Tresnje },
    { img: Jagodes },
    { img: Sljiva },
    { img: Kupina },
    { img: Mix },
  ])

  const [susenoVoce] = useState([
    { img: Tresnje },
    { img: Sljiva },
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
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
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
