import React from "react";
import "./ProcesProizvodnje.scss";

import ZlatniDelises from "../../../assets/images/jabuke/zlatnedelises.jpg";
import PlantazaJabuka from "../../../assets/images/jabuke/plantaza.jpg";

const ProcesProizvodnje = (props) => {
  return (
    <div className="ProcesProizvodnje">
      <h2>Proces proizvodnje i zagarantovan kvalitet</h2>

      <div className="flex">
        <img src={ZlatniDelises} alt="Zlatni delises" />
        <p>
          Nasi vocnjaci sadrzi zaštita od nepovoljnih klimatskih faktora ,
          kvalitetan sadni materijal,kvalitetnu prihranu i navodnjavanje.Voćnjak
          je opremljen sistemom protiv izmrzavanja (antifrost sistem), sistemom
          za navodnjavanje (irigacionim sistemom), sistemom za prihranu
          (fertigacionim sitemom) kao i sistemom protivgradne zaštite, što ga
          čini najsavremenijim i najvećim voćnjakom ovog tipa u Evropi.
          Celokupna proizvodnja jabuke se odvija po GLOBAL GAP sistemu, što
          obezbeđuje izvozni kvalitet.
        </p>
      </div>

      <div className="flex">
        <p>
          U sklopu voćnjaka nalaze se i Ultra Low Oxygen hladnjača ukupnog
          kapaciteta 20.000 tona, koje zahvaljujući dinamičkoj atmosferi
          omogućavaju da se kompletan rod jabuka po potrebi čuva u komorama i do
          300 dana. Jedna od specifičnosti hladnjača sa dinamičkom atmosferom
          jeste da ubrane jabuke ulaze direktno u komoru, bez ikakvog hemijskog
          tretiranja, kao što je to praksa kod standardnih ULO hladnjača. Sve
          vreme boravka atmosferski sastav prilagođava se potrebama jabuke!
        </p>
        <img className="plantaza" src={PlantazaJabuka} alt="Zlatni delises" />
      </div>
    </div>
  );
};

export default ProcesProizvodnje;
