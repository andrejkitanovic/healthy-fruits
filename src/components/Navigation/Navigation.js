import React from 'react'
import './Navigation.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const navigation = (props) => (
  <div className="Navigation">
    <img src={Logo} alt="Logo" />
    <div className="links">
      <NavLink to="/" exact>Hem</NavLink>
      <NavLink to="/o-nama">Om oss</NavLink>
      <NavLink to="/voce">Frukt</NavLink>
      <NavLink to="/povrce">Grönsaker</NavLink>
      <NavLink to="/jabuke">Äpplen</NavLink>
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

