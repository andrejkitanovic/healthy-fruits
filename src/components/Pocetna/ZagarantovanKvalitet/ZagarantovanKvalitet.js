import React from "react";
import "./ZagarantovanKvalitet.scss";

import Sertifikat1 from "../../../assets/images/sertifikati/BRC.png";
import Sertifikat2 from "../../../assets/images/sertifikati/FSSC.png";
import Sertifikat3 from "../../../assets/images/sertifikati/GLOBALGAP.png";
import Sertifikat4 from "../../../assets/images/sertifikati/HACCP.png";
import Sertifikat5 from "../../../assets/images/sertifikati/IFS.png";
import Sertifikat6 from "../../../assets/images/sertifikati/ISO.png";
import Sertifikat7 from "../../../assets/images/sertifikati/LEAF.png";

const zagarantovanKvalitet = (props) => (
  <div className="ZagarantovanKvalitet">
    <h2>Garanterad kvalitet</h2>
    <p>
      Tack vare åratal av organiserat arbete och engagemang har man lyckats
      uppnå de högsta standarderna för produktkvalitet och service.
    </p>
    <div className="sertifikati">
      <div className="single-sertifikat">
        <img width="150px" src={Sertifikat7} alt="Sertifikat" />
      </div>

      <div className="single-sertifikat">
        <img src={Sertifikat2} alt="Sertifikat" />
      </div>
      <div className="single-sertifikat">
        <img src={Sertifikat5} alt="Sertifikat" />
      </div>
      <div className="single-sertifikat">
        <img src={Sertifikat1} alt="Sertifikat" />
      </div>
      <div className="single-sertifikat">
        <img src={Sertifikat4} alt="Sertifikat" />
      </div>

      <div className="single-sertifikat">
        <img className="gap" src={Sertifikat3} alt="Sertifikat" />
      </div>
      <div className="single-sertifikat">
        <img src={Sertifikat6} alt="Sertifikat" />
      </div>
    </div>
  </div>
);

export default zagarantovanKvalitet;
