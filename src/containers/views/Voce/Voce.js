import React, { useEffect, useState } from 'react'
import './Voce.scss'

import Swiper from '../../../components/Swiper/Swiper'
import KategorijaVoca from '../../../components/Voce/KategorijaVoca/KategorijaVoca'
import SwiperVoce from '../../../components/Voce/SwiperVoce/SwiperVoce'

import Jagode from '../../../assets/images/voce-swiper.png'

import Smrznuto from '../../../assets/images/smrznuto-swiper.png'
import Sveze from '../../../assets/images/sveze-swiper.png'
import Suseno from '../../../assets/images/suseno-swiper.png'

const Voce = (props) => {
  const [swiperGlavni] = useState([
    { img: Jagode },
    { img: Jagode },
    { img: Jagode },
    { img: Jagode },
  ])

  const [smrznutoVoce] = useState([
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
  ])
  const [svezeVoce] = useState([
    { img: Sveze },
    { img: Sveze },
    { img: Sveze },
    { img: Sveze },
    { img: Sveze },
  ])
  const [susenoVoce] = useState([
    { img: Suseno },
    { img: Suseno },
    { img: Suseno },
    { img: Suseno },
    { img: Suseno },
    { img: Suseno },
    { img: Suseno },
    { img: Suseno },
  ])
  const [kategorija, setKategorija] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const promeniKategoriju = (kategorija) => {
    setKategorija(kategorija)
  }

  const swiperKategorija = kategorija === 0 ? smrznutoVoce : kategorija === 1 ? svezeVoce : susenoVoce

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
      <SwiperVoce content={swiperKategorija} height="30vh" />
      <Swiper key={2} content={swiperGlavni} height="80vh" overlayTop/>
    </div>
  )
}

export default Voce
