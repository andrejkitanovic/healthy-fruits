import React from "react";
import "./ZagarantovanKvalitet.scss";

import Sertifikat from '../../../assets/images/sertifikat.png'

const zagarantovanKvalitet = (props) => (
  <div className="ZagarantovanKvalitet">
    <h2>Zagarantovan Kvalitet</h2>
    <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic
    </p>
    <div className="sertifikati">
        <img src={Sertifikat} alt="Sertifikat"/>
        <img src={Sertifikat} alt="Sertifikat"/>
        <img src={Sertifikat} alt="Sertifikat"/>
    </div>
  </div>
);

export default zagarantovanKvalitet;
