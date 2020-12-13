import React, { useEffect } from "react";
import "./Kontakt.scss";

// import {Link} from 'react-router-dom'
import KontaktForma from "../../../components/Kontakt/KontaktForma/KontaktForma";
import NasKontakt from "../../../components/Kontakt/NasKontakt/NasKontakt";

import Zgrada from "../../../assets/images/zgrada.png";
import Overlay from "../../../assets/images/overlay.png";

const Kontakt = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="Kontakt">
      <div className="glavna-pozadina">
        <img className="slika" src={Zgrada} alt="Plantaza" />
        <div className="overlay">
          <img src={Overlay} alt="Kontakt" />
        </div>
      </div>
      <NasKontakt />
      <div className="formaIMapa">
        <KontaktForma />
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
      </div>
    </div>
  );
};

export default Kontakt;
