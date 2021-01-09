import React from "react";
import "./Pakovanja.scss";

import pakovanje1 from "../../../assets/images/pakovanje1.png";
import pakovanje2 from "../../../assets/images/pakovanje2.png";
import pakovanje3 from "../../../assets/images/pakovanje3.png";
import pakovanje4 from "../../../assets/images/pakovanje4.png";

import kutija1 from "../../../assets/images/kutija1.png";
import kutija2 from "../../../assets/images/kutija2.png";
import kutija3 from "../../../assets/images/kutija3.png";
import kutija4 from "../../../assets/images/kutija4.png";
import kutija5 from "../../../assets/images/kutija5.png";
import kutija6 from "../../../assets/images/kutija6.png";
import kutija7 from "../../../assets/images/kutija7.png";
import kutija8 from "../../../assets/images/kutija8.png";
import kutija9 from "../../../assets/images/kutija9.png";
import kutija10 from "../../../assets/images/kutija10.png";
import kutija11 from "../../../assets/images/kutija11.png";

const Pakovanja = (props) => {
  return (
    <div className="Pakovanja">
      <div className="overlay" onClick={props.close}></div>
      <div className="box">
        <div className="pakovanje">
          <img src={pakovanje1} alt="pakovanje" />
          <div className="opis">
            <p>Foodtainer 4 voćke</p>
            <ul>
              <li>Polistiren / polipropilen</li>
              <li>Drvena kaša</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={pakovanje2} alt="pakovanje" />
          <div className="opis">
            <p>Foodtainer 6 voćki</p>
            <ul>
              <li>Karton</li>
              <li>Polistiren / polipropilen</li>
              <li>Drvena kaša</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={pakovanje3} alt="pakovanje" />

          <div className="opis">
            <p>Foodtainer 8 voćki</p>
            <ul>
              <li>Karton</li>
              <li>Polistiren / polipropilen</li>
              <li>Drvena kaša</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={pakovanje4} alt="pakovanje" />
          <div className="opis">
            <p>Torbe</p>
            <ul>
              <li>1 kg/1.5 kg/2 kg neto težine</li>
            </ul>
          </div>
        </div>

        <div className="pakovanje">
          <img src={kutija1} alt="pakovanje" />

          <div className="opis">
            <p>Kartonska kutija Babypoker</p>
            <ul>
              <li>1 sloj</li>
              <li>š 30 / d 40 / v 9 cm</li>
              <li>prib. 3 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Baza 10 x 21 sloja = 210 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Podloga 8 x 21 sloja = 168 jedinica</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija2} alt="pakovanje" />
          <div className="opis">
            <p>Kartonska kutija</p>
            <ul>
              <li>1 sloj</li>
              <li>š 30 / d 50 / v 10 cm</li>
              <li>prib. 4-4.5 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Podloga 8 x 21 sloja = 168 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Podloga 6 x 21 sloja = 126 jedinica</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija3} alt="pakovanje" />
          <div className="opis">
            <p>Kartonska kutija</p>
            <ul>
              <li>1 sloj</li>
              <li>š 40 / d 60 / v 10 cm</li>
              <li>prib. 6-8 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Podloga 5 x 18 slojeva = 90 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 4 x 18 slojeva = 72 jedinice</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija4} alt="pakovanje" />
          <div className="opis">
            <p>Plato</p>
            <ul>
              <li>2 sloja</li>
              <li>š 40 / d 60 / v 17 cm</li>
              <li>prib. 12-14 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Podloga 5 x 12 slojeva = 60 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 4 x 12 slojeva = 48 jedinica</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija5} alt="pakovanje" />

          <div className="opis">
            <p>Plato</p>
            <ul>
              <li>2 sloja</li>
              <li>š 30 / d 50 / v 17 cm</li>
              <li>prib. 8-8.5 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Podloga 8 x 12 slojeva = 96 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 6 x 12 slojeva = 72 jedinice</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija6} alt="pakovanje" />
          <div className="opis">
            <p>Fruitbox</p>
            <ul>
              <li>Loose</li>
              <li>š 30 / d 50 / v 27 cm</li>
              <li>prib. 13-14 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Baza 8 x 8 slojeva = 64 jedinice</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 6 x 8 slojeva = 48 jedinica</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija7} alt="pakovanje" />
          <div className="opis">
            <p>Maxpac kutija</p>
            <ul>
              <li>Loose</li>
              <li>š 30 / d 50 / v 27 cm</li>
              <li>prib. 13-14 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Baza 8 x 8 slojeva = 64 jedinice</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 6 x 8 slojeva = 48 jedinica</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija8} alt="pakovanje" />

          <div className="opis">
            <p>Euro kartonska kutija</p>
            <ul>
              <li>Za zapečaćene kese, torbe i pakete</li>
              <li>š 40 / d 60 / v 28 cm</li>
              <li>prib. 20-22 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Baza 5 x 7 slojeva = 35 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 4 x 7 slojeva = 28 jedinica</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija9} alt="pakovanje" />

          <div className="opis">
            <p>Traypac</p>
            <ul>
              <li>5 slojeva</li>
              <li>š 32 / d 52 / v 30 cm</li>
              <li>prib. 18 kg neto težine</li>
              <li>TRAYPAC PALETA 102 x 116 cm</li>
              <li>Baza 7 x 7 slojeva = 49 jedinica</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija10} alt="pakovanje" />

          <div className="opis">
            <p>Plastična kutija za višekratnu upotrebu</p>
            <ul>
              <li>1 sloj</li>
              <li>š 40 / d 60 / v 11 cm</li>
              <li>prib. 6-8 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Podloga 5 x 18 slojeva = 90 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 4 x 18 slojeva = 72 jedinice</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija11} alt="pakovanje" />

          <div className="opis">
            <p>Plastična kutija za višekratnu upotrebu</p>
            <ul>
              <li>2 sloja</li>
              <li>š 40 / d 60 / v 17 cm</li>
              <li>prib. 12-14 kg neto težine</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Podloga 5 x 12 slojeva = 60 jedinica</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baza 4 x 12 slojeva = 48 jedinica</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pakovanja;
