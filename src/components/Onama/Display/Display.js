import React from 'react'
import './Display.scss'

import Kamion from '../../../assets/images/kamion.png'

const display = (props) => {
  const slike = props.content.map((slika, index) => (
    <div
      key={index}
      className={index === props.active ? 'active' : null}
      onClick={() => props.click(index)}
    >
      <img src={Kamion} alt="Slika" />
    </div>
  ))

  return <div className="Display">{slike}</div>
}

export default display
