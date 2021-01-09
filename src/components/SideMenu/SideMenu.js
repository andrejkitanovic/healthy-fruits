import React from 'react'
import './SideMenu.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'

import {MdMail,MdPhone , MdLocationOn} from 'react-icons/md'

const sideMenu = (props) => (
  <div className={"SideMenu" + (props.active ? " active" : "")}>
    <img src={Logo} alt="Logo" />
    <div className="links">
      <NavLink to="/" exact onClick={props.closeNav}>Hem</NavLink>
      <NavLink to="/o-nama" onClick={props.closeNav}>Om oss</NavLink>
      <NavLink to="/voce" onClick={props.closeNav}>Frukt</NavLink>
      <NavLink to="/povrce" onClick={props.closeNav}>Grönsaker</NavLink>
      <NavLink to="/jabuke" onClick={props.closeNav}>Äpplen</NavLink>
      {/* <NavLink to="/proizvodi" onClick={props.closeNav}>Proizvodi</NavLink> */}
      {/* <NavLink to="/partneri" onClick={props.closeNav}>Nasi partneri</NavLink> */}
      <NavLink to="/kontakt" onClick={props.closeNav}>Kontakt</NavLink>
    </div>
    <div className="kontakt">
        <a href="mailto:christianbostrom@me.com"><MdMail /></a>
        <a href="tel:+46723595987"><MdPhone /></a>
        <a href="#footer"><MdLocationOn /></a>
      </div>
  </div>
)

export default sideMenu
