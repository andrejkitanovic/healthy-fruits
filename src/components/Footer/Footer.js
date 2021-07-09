import React from "react";
import "./Footer.scss";

import {Link} from 'react-router-dom'

import Pozadina from "../../assets/images/footer-pozadina.png";
import Logo from "../../assets/images/logo.png";

import {MdMail,MdPhone , MdLocationOn} from 'react-icons/md'

const footer = (props) => (
  <div className="Footer" id="footer">
    <img className="pozadina" src={Pozadina} alt="Footer" />

    <div className="grid">
      <div>
        <h4>Snabblänkar</h4>
        <Link to="/">Hem</Link>
        <Link to="/o-nama">Om oss</Link>
        <Link to="/proizvodi">Frukt</Link>
        <Link to="/proizvodi">Grönsaker</Link>
        <Link to="/proizvodi">Äpplen</Link>
        <Link to="/proizvodi">Kontakt</Link>
        {/* <Link to="/partneri">Nasi partneri</Link> */}
      </div>
      

      <div className="kontakt">
        <h4>Kontakt</h4>
        <a href="mailto:christian@dinfrukt.se"><MdMail /> christian@dinfrukt.se</a>
        <a href="tel:+46723595987"><MdPhone /> +46 723-5959-87</a>
        <p><MdLocationOn /> Serbia, Belgrade</p>
      </div>
      <iframe
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362281.8538956186!2d20.142414908230165!3d44.81490282615904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a7aa3d7b53fbd%3A0x1db8645cf2177ee4!2sBelgrade!5e0!3m2!1sen!2srs!4v1610220489567!5m2!1sen!2srs"
        width="400"
        height="250"
        frameBorder="0"
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
      ></iframe>
      
      <img src={Logo} alt="Healthy Fruits" />
    </div>

    <div className="copyright">
      <p>Copyright C 2020.All rights reserved</p>
    </div>
  </div>
);

export default footer;
