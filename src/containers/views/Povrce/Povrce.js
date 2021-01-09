import React, { useEffect, useState } from 'react'

import Swiper from '../../../components/Swiper/Swiper'
import SwiperVoce from '../../../components/Voce/SwiperVoce/SwiperVoce'

import PovrceSl from '../../../assets/images/povrce-swiper.png'
// import SwiperPovrce from '../../../assets/images/swiper-povrce.jpg'

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
import KiseliKupus from '../../../assets/images/povrce/kiselikupus.png'

const Povrce = (props) => {
  const [swiperGlavni] = useState([
    { img: PovrceSl },
    // { img: SwiperPovrce },
  ])
  const [povrce,] = useState([
    { img: KiseliKupus , naziv: "Surkål"},
    { img: Brokoli , naziv: "Broccoli"},
    { img: Celer , naziv: "Selleri"},
    { img: Cvekla , naziv: "Beta"},
    { img: Karfiol , naziv: "Blomkål"},
    { img: Krastavac , naziv: "Gurka"},
    { img: Krompir , naziv: "Potatisar"},
    { img: Luksutkasrebrenjaka, naziv: "Silver sutka lök" },
    { img: Mladcrniluk, naziv: "Unga lökar" },
    { img: Mladkrompir, naziv: "Unga potatisar" },
    { img: Paprikacrvena, naziv: "röd paprika" },
    { img: Paprikazelena, naziv: "Paprika zelena" },
    { img: Paradajz, naziv: "Paradajz" },
    { img: Paskanat, naziv: "Paskanat" },
    { img: Persun, naziv: "Persun" },
    { img: Plavipatlidzan, naziv: "Plavi patlidzan" },
    { img: Praziluk, naziv: "Praziluk" },
    { img: Rotkvabela, naziv: "Rotkva bela" },
    { img: Rotkvacrna, naziv: "Rotka crna" },
    { img: Tikvica, naziv: "Tikvica" },
    { img: Zelenasalata, naziv: "Zelena salata"}
  ])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])



  return (
    <div className="Povrce">
      <Swiper key={1} content={swiperGlavni} overlay minilogo height="70vh" title="Grönsaker" />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p>Citat</p>
      <SwiperVoce content={povrce} height="30vh" autoplay="off" />
      {/* <p style={{marginTop:"50px",paddingBottom:"10px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting
        industry</p> */}
      <Swiper key={2} content={swiperGlavni} height="80vh" overlayTop/>
    </div>
  )
}

export default Povrce
