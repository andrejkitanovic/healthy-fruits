import React from 'react'
import './NasiProizvodi.scss'

import Voce from '../../assets/images/voce.jpg'

const nasiProizvodi = (props) => (
  <div className="NasiProizvodi">
    <h2>Nasi Proizvodi</h2>
    <div className="proizvodi">
      <div>
        <img src={Voce} alt="Voce" />
        <p>Voce</p>
      </div>
      <div>
        <img src={Voce} alt="Voce" />
        <p>Povrce</p>
      </div>
      <div>
        <img src={Voce} alt="Voce" /> 
        <p>Proizvodi</p>
      </div>
    </div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
)

export default nasiProizvodi
