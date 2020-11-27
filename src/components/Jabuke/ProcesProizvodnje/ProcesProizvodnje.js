import React from 'react'
import './ProcesProizvodnje.scss'

import ZlatniDelises from '../../../assets/images/jabuke/zlatnedelises.jpg'

const ProcesProizvodnje = (props) => {
  return (
    <div className="ProcesProizvodnje">
      <h2>Proces proizvodnje i zagarantovan kvalitet</h2>

      <div className="flex">
        <img src={ZlatniDelises} alt="Zlatni delises" />
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic.
        </p>
      </div>

      <div className="flex">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic.
        </p>
        <img src={ZlatniDelises} alt="Zlatni delises" />
      </div>
    </div>
  )
}

export default ProcesProizvodnje
