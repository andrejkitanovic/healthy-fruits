import React, { useEffect } from 'react'
import './Pocetna.scss'

// import Swiper from '../../../components/Swiper/Swiper'
import Onama from '../../../components/Pocetna/Onama/Onama'
import NasiProizvodi from '../../../components/Pocetna/NasiProizvodi/NasiProizvodi'
import ZagarantovanKvalitet from '../../../components/Pocetna/ZagarantovanKvalitet/ZagarantovanKvalitet'

import Grozdje from '../../../assets/images/grozdje.png'

import Plantaza from '../../../assets/images/plantaza-jabuka.png'
import Logo from '../../../assets/images/logo-swiper.png'
import Overlay from '../../../assets/images/overlay.png'

const Pocetna = (props) => {
  // const [plantaza] = useState([{ img: Grozdje }])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="Pocetna">
      <div className="pozadina">
        <img className="slika" src={Plantaza} alt="Plantaza"/>
        <img className="logo" src={Logo} alt="Logo"/>
        <div className="overlay">
          <img src={Overlay} alt="Jagode" />
        </div>
      </div>
      <Onama />
      <NasiProizvodi />
      <div className="pozadina quarter">
        <img className="slika" src={Grozdje} alt="Grozdje" />
      </div>

      <ZagarantovanKvalitet />
    </div>
  )
}

export default Pocetna
