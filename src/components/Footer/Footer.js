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
        <h4>Brzi linkovi</h4>
        <Link to="/">Pocetna</Link>
        <Link to="/o-nama">O nama</Link>
        <Link to="/proizvodi">Proizvodi</Link>
        <Link to="/partneri">Nasi partneri</Link>
      </div>
      <div className="kontakt">
        <h4>Kontakt</h4>
        <a href="mailto:info@email.com"><MdMail /> info@email.com</a>
        <a href="tel:+38169333555"><MdPhone /> +381 69-333-555</a>
        <p><MdLocationOn /> Ul. Stanoje B. 38</p>
      </div>
      <iframe
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11610.989161464431!2d21.88516513847551!3d43.319549316144595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4755b0b3ec7cb9a7%3A0xf513b5a4e0503ea7!2sCity%20Center%2C%20Ni%C5%A1!5e0!3m2!1sen!2srs!4v1600465951141!5m2!1sen!2srs"
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
