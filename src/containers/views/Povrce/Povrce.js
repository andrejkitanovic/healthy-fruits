import React, { useEffect, useState } from 'react'

import Swiper from '../../../components/Swiper/Swiper'
import SwiperVoce from '../../../components/Voce/SwiperVoce/SwiperVoce'

import PovrceSl from '../../../assets/images/povrce-swiper.png'

import Brokoli from '../../../assets/images/povrce/brokoli.png'
import Celer from '../../../assets/images/povrce/celer.png'
import Cvekla from '../../../assets/images/povrce/cvekla.png'
import Karfiol from '../../../assets/images/povrce/karfiol.png'
import Krastavac from '../../../assets/images/povrce/krastavac.png'
import Krompir from '../../../assets/images/povrce/krompir.png'
import Luksutkasrebrenjaka from '../../../assets/images/povrce/luksutkasrebrenjaka.png'
import Mladcrniluk from '../../../assets/images/povrce/mladcrniluk.png'
import Mladkrompir from '../../../assets/images/povrce/mladkrompir.png'
import Paprikacrvena from '../../../assets/images/povrce/paprikacrvena.png'
import Paprikazelena from '../../../assets/images/povrce/paprikazelena.png'
import Paradajz from '../../../assets/images/povrce/paradajz.png'
import Paskanat from '../../../assets/images/povrce/paskanat.png'
import Persun from '../../../assets/images/povrce/persun.png'
import Plavipatlidzan from '../../../assets/images/povrce/plavipatlidzan.png'
import Praziluk from '../../../assets/images/povrce/praziluk.png'
import Rotkvabela from '../../../assets/images/povrce/rotkvabela.png'
import Rotkvacrna from '../../../assets/images/povrce/rotkvacrna.png'
import Tikvica from '../../../assets/images/povrce/tikvica.png'
import Zelenasalata from '../../../assets/images/povrce/zelenasalata.png'

const Povrce = (props) => {
  const [swiperGlavni] = useState([
    { img: PovrceSl },
    { img: PovrceSl },
  ])
  const [povrce,] = useState([
    { img: Brokoli },
    { img: Celer },
    { img: Cvekla },
    { img: Karfiol },
    { img: Krastavac },
    { img: Krompir },
    { img: Luksutkasrebrenjaka },
    { img: Mladcrniluk },
    { img: Mladkrompir },
    { img: Paprikacrvena },
    { img: Paprikazelena },
    { img: Paradajz },
    { img: Paskanat },
    { img: Persun },
    { img: Plavipatlidzan },
    { img: Praziluk },
    { img: Rotkvabela },
    { img: Rotkvacrna },
    { img: Tikvica },
    { img: Zelenasalata}
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
