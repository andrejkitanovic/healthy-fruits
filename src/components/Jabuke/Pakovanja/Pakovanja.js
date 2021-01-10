import React from "react";
import "./Pakovanja.scss";

import pakovanje1 from "../../../assets/images/pakovanje1.png";
import pakovanje2 from "../../../assets/images/pakovanje2.png";
import pakovanje3 from "../../../assets/images/pakovanje3.png";
import pakovanje4 from "../../../assets/images/pakovanje4.png";

import kutija1 from "../../../assets/images/kutija1.png";
import kutija2 from "../../../assets/images/kutija2.png";
import kutija3 from "../../../assets/images/kutija3.png";
// import kutija4 from "../../../assets/images/kutija4.png";
// import kutija5 from "../../../assets/images/kutija5.png";
// import kutija6 from "../../../assets/images/kutija6.png";
// import kutija7 from "../../../assets/images/kutija7.png";
// import kutija8 from "../../../assets/images/kutija8.png";
// import kutija9 from "../../../assets/images/kutija9.png";
// import kutija10 from "../../../assets/images/kutija10.png";
// import kutija11 from "../../../assets/images/kutija11.png";

const Pakovanja = (props) => {
  return (
    <div className="Pakovanja">
      <div className="overlay" onClick={props.close}></div>
      <div className="box">
        <div className="pakovanje">
          <img src={pakovanje1} alt="pakovanje" />
          <div className="opis">
            <p>Foodtainer 4</p>
            <ul>
              <li>Polystyren / polypropen</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={pakovanje2} alt="pakovanje" />
          <div className="opis">
            <p>Foodtainer 6</p>
            <ul>
              <li>Kartong</li>
              <li>Polystyren / polypropen</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={pakovanje3} alt="pakovanje" />

          <div className="opis">
            <p>Foodtainer 8</p>
            <ul>
              <li>Kartong</li>
              <li>Polystyren / polypropen</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={pakovanje4} alt="pakovanje" />
          <div className="opis">
            <p>Påse</p>
            <ul>
              <li>1 kg/1.5 kg/2 kg neto vikt</li>
            </ul>
          </div>
        </div>

        <div className="pakovanje">
          <img src={kutija1} alt="pakovanje" />

          <div className="opis">
            <p>Kartong låda Babypoker</p>
            <ul>
              <li>1 lager</li>
              <li>B 30 / L 40 / H 9 cm</li>
              <li>Unfärlig vikt 3 kg</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Baslager 10 x 21 lager = 210 kartonger</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baslager 8 x 21 lager = 168 kartonger</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija2} alt="pakovanje" />
          <div className="opis">
            <p>Kartong låda</p>
            <ul>
              <li>1 lager</li>
              <li>B 30 / L 50 / H 10 cm</li>
              <li>Unfärlig vikt 4-4.5 kg</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Baslager 8 x 21 lager = 168 kartonger</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baslager 6 x 21 lager = 126 kartonger</li>
            </ul>
          </div>
        </div>
        <div className="pakovanje">
          <img src={kutija3} alt="pakovanje" />
          <div className="opis">
            <p>Kartong låda</p>
            <ul>
              <li>1 lager</li>
              <li>B 40 / L 60 / H 10 cm</li>
              <li>Unfärlig vikt 6-8 kg</li>
              <li>PALLET 100 x 120 cm</li>
              <li>Baslager 5 x 18 lager = 90 kartonger</li>
              <li>EUROPALLET 80 x 120 cm</li>
              <li>Baslager 4 x 18 lager = 72 kartonger</li>
            </ul>
          </div>
        </div>

     
   
      </div>
    </div>
  );
};

export default Pakovanja;
