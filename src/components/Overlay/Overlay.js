import React from 'react'
import './Overlay.scss'

const overlay = (props) => (
  <div className={'Overlay' + (props.active ? ' active' : '')} onClick={props.closeNav}/>
)

export default overlay
