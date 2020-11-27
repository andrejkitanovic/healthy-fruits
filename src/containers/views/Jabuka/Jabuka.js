import React from 'react'
import './Jabuka.scss'

import ZagarantovanKvalitet from '../../../components/Pocetna/ZagarantovanKvalitet/ZagarantovanKvalitet'
import OpisJabuka from '../../../components/Jabuke/OpisJabuka/OpisJabuka'
import ProcesProizvodnje from '../../../components/Jabuke/ProcesProizvodnje/ProcesProizvodnje'

import PrikazJabuka from '../../../assets/images/jabuke/prikazjabuka.png'

const Jabuke = (props) => {
  return (
    <div className="Jabuke">
        <div className="pozadina"><img src={PrikazJabuka} alt="Jabuka"/></div>
        <OpisJabuka />
        <ProcesProizvodnje/>
      <ZagarantovanKvalitet />
    </div>
  )
}

export default Jabuke
