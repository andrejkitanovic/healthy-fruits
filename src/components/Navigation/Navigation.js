import React from 'react'
import './Navigation.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const navigation = (props) => (
  <div className="Navigation">
    <img src={Logo} alt="Logo" />
    <div className="links">
      <NavLink to="/">Pocetna</NavLink>
      <NavLink to="/o-nama">O nama</NavLink>
      <NavLink to="/voce">Voce</NavLink>
      <NavLink to="/povrce">Povrce</NavLink>
      <NavLink to="/proizvodi">Proizvodi</NavLink>
      <NavLink to="/partneri">Nasi partneri</NavLink>
    </div>
    <div className={"hamburger" + (props.active ? " active" : "")} onClick={props.setNav}>
      <div />
      <div />
      <div />
    </div>
  </div>
)

export default navigation
