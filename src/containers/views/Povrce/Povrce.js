import React, { useEffect, useState } from 'react'

import Swiper from '../../../components/Swiper/Swiper'
import SwiperVoce from '../../../components/Voce/SwiperVoce/SwiperVoce'

import PovrceSl from '../../../assets/images/povrce-swiper.png'

import Smrznuto from '../../../assets/images/smrznuto-swiper.png'

const Povrce = (props) => {
  const [swiperGlavni] = useState([
    { img: PovrceSl },
    { img: PovrceSl },
  ])
  const [povrce,] = useState([
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
    { img: Smrznuto },
  ])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <div className="Povrce">
      <Swiper key={1} content={swiperGlavni} overlay minilogo height="70vh" title="Povrce" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <SwiperVoce content={povrce} height="30vh" />
      <p style={{marginTop:"50px",paddingBottom:"10px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry</p>
      <Swiper key={2} content={swiperGlavni} height="80vh" overlayTop/>
    </div>
  )
}

export default Povrce
