import React from 'react'
import './SideMenu.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

const sideMenu = (props) => (
  <div className={"SideMenu" + (props.active ? " active" : "")}>
    <img src={Logo} alt="Logo" />
    <div className="links">
      <NavLink to="/">Pocetna</NavLink>
      <NavLink to="/o-nama">O nama</NavLink>
      <NavLink to="/voce">Voce</NavLink>
      <NavLink to="/povrce">Povrce</NavLink>
      <NavLink to="/proizvodi">Proizvodi</NavLink>
      <NavLink to="/partneri">Nasi partneri</NavLink>
    </div>
  </div>
)

export default sideMenu
