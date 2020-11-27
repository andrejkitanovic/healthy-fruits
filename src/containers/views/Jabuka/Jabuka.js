import React from 'react'
import './Jabuka.scss'

import ZagarantovanKvalitet from '../../../components/Pocetna/ZagarantovanKvalitet/ZagarantovanKvalitet'
import OpisJabuka from '../../../components/Jabuke/OpisJabuka/OpisJabuka'

import Jabuka from '../../../assets/images/jabuka.png'

const Jabuke = (props) => {
  return (
    <div className="Jabuke">
        <div className="pozadina"><img src={Jabuka} alt="Jabuka"/></div>
        <OpisJabuka />
      <ZagarantovanKvalitet />
    </div>
  )
}

export default Jabuke
