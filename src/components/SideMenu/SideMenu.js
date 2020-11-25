import React from 'react'
import './SideMenu.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import {MdMail,MdPhone , MdLocationOn} from 'react-icons/md'

const sideMenu = (props) => (
  <div className={"SideMenu" + (props.active ? " active" : "")}>
    <img src={Logo} alt="Logo" />
    <div className="links">
      <NavLink to="/" exact onClick={props.closeNav}>Pocetna</NavLink>
      <NavLink to="/o-nama" onClick={props.closeNav}>O nama</NavLink>
      <NavLink to="/voce" onClick={props.closeNav}>Voce</NavLink>
      <NavLink to="/povrce" onClick={props.closeNav}>Povrce</NavLink>
      {/* <NavLink to="/proizvodi" onClick={props.closeNav}>Proizvodi</NavLink> */}
      {/* <NavLink to="/partneri" onClick={props.closeNav}>Nasi partneri</NavLink> */}
      <NavLink to="/kontakt" onClick={props.closeNav}>Kontakt</NavLink>
    </div>
    <div className="kontakt">
        <a href="mailto:info@email.com"><MdMail /></a>
        <a href="tel:+38169333555"><MdPhone /></a>
        <a href="#footer"><MdLocationOn /></a>
      </div>
  </div>
)

export default sideMenu
