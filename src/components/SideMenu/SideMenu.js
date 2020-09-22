import React from 'react'
import './SideMenu.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import {MdMail,MdPhone , MdLocationOn} from 'react-icons/md'

const sideMenu = (props) => (
  <div className={"SideMenu" + (props.active ? " active" : "")}>
    <img src={Logo} alt="Logo" />
    <div className="links">
      <NavLink to="/" exact>Pocetna</NavLink>
      <NavLink to="/o-nama">O nama</NavLink>
      <NavLink to="/voce">Voce</NavLink>
      <NavLink to="/povrce">Povrce</NavLink>
      <NavLink to="/proizvodi">Proizvodi</NavLink>
      <NavLink to="/partneri">Nasi partneri</NavLink>
    </div>
    <div className="kontakt">
        <a href="mailto:info@email.com"><MdMail /> info@email.com</a>
        <a href="tel:+38169333555"><MdPhone /> +381 69-333-555</a>
        <p><MdLocationOn /> Ul. Stanoje B. 38</p>
      </div>
  </div>
)

export default sideMenu
