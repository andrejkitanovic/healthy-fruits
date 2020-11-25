import React from "react";
import "./ZagarantovanKvalitet.scss";

import Sertifikat1 from '../../../assets/images/sertifikati/BRC.png'
import Sertifikat2 from '../../../assets/images/sertifikati/FSSC.png'
import Sertifikat3 from '../../../assets/images/sertifikati/GLOBALGAP.png'
import Sertifikat4 from '../../../assets/images/sertifikati/HACCP.png'
import Sertifikat5 from '../../../assets/images/sertifikati/IFS.png'
import Sertifikat6 from '../../../assets/images/sertifikati/ISO.png'
import Sertifikat7 from '../../../assets/images/sertifikati/LEAF.png'


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
    <div className="single-sertifikat"><img width="150px" src={Sertifikat7} alt="Sertifikat"/></div>

        <div className="single-sertifikat"><img src={Sertifikat2} alt="Sertifikat"/></div>
        <div className="single-sertifikat"><img src={Sertifikat5} alt="Sertifikat"/></div>
        <div className="single-sertifikat"><img src={Sertifikat1} alt="Sertifikat"/></div>
        <div className="single-sertifikat"><img src={Sertifikat4} alt="Sertifikat"/></div>
       
        <div className="single-sertifikat"><img src={Sertifikat3} alt="Sertifikat"/></div>
        <div className="single-sertifikat"><img src={Sertifikat6} alt="Sertifikat"/></div>
    </div>
  </div>
);

export default zagarantovanKvalitet;
