import React from "react";
import "./ProcesProizvodnje.scss";

import ZlatniDelises from "../../../assets/images/jabuke/zlatnedelises.jpg";
import PlantazaJabuka from "../../../assets/images/jabuke/plantaza.jpg";

const ProcesProizvodnje = (props) => {
  return (
    <div className="ProcesProizvodnje">
      <h2>Produktionsprocess och garanterad kvalitet</h2>

      <div className="flex">
        <img src={ZlatniDelises} alt="Zlatni delises" />
        <p>
          Företagen som vi samarbetar med följer noga de senaste
          utvecklingarna och förbättras kontinuerligt med nya system och kyl
          anläggningar. Äppelfälten är utrustade med antifrost system,
          bevattningssystem och skydd mot hagel.
        </p>
      </div>

      <div className="flex">
        <p>
          Allt som görs är noga utfört inom GLOBAL GAPS villkor, vilket ger en
          kvalitet som går att exportera över hela världen. Kyl anläggningar är
          utrustade med Ultra Low Oxygen och har en kapacitet på 20000 ton,
          detta möjliggör att hela äppelskörden kan förvaras i upp till 300
          dagar. I kylrummen är även MafRoda system installerat som sorterar
          äpplena efter vikt, färg och diameter.
        </p>
        <img className="plantaza" src={PlantazaJabuka} alt="Zlatni delises" />
      </div>
    </div>
  );
};

export default ProcesProizvodnje;
