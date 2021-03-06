import React from 'react'
import './Navigation.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const navigation = (props) => (
  <div className="Navigation">
    <img src={Logo} alt="Logo" />
    <div className="links">
      <NavLink to="/" exact>Pocetna</NavLink>
      <NavLink to="/o-nama">O nama</NavLink>
      <NavLink to="/voce">Voce</NavLink>
      <NavLink to="/povrce">Povrce</NavLink>
      <NavLink to="/jabuke">Jabuke</NavLink>
      <NavLink to="/kontakt">Kontakt</NavLink>
    </div>
    <div className={"hamburger" + (props.active ? " active" : "")} onClick={props.openNav}>
      <div />
      <div />
      <div />
    </div>
  </div>
)

export default navigation
