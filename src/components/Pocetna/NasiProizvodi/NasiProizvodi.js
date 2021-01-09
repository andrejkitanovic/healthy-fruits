import React from "react";
import "./NasiProizvodi.scss";

import Pozadina from "../../../assets/images/proizvodi-pozadina.png";
import Voce from "../../../assets/images/voce.png";
import Povrce from "../../../assets/images/povrce.png";
// import Proizvod from '../../../assets/images/proizvod.png'
import Jabuka from "../../../assets/images/jabuka.png";

import { Link } from "react-router-dom";

const nasiProizvodi = (props) => (
  <div className="NasiProizvodi">
    <img className="pozadina" src={Pozadina} alt="Proizvodi" />
    <h2>Våra produkter</h2>
    <div className="proizvodi">
      <Link to="/voce">
        <img src={Voce} alt="Voce" />
        <p>Frukt</p>
      </Link>
      <Link to="/povrce">
        <img src={Povrce} alt="Voce" />
        <p>Grönsaker</p>
      </Link>
      <Link to="/jabuke">
        <img src={Jabuka} alt="Voce" style={{ marginLeft: "15px" }} />
        <p>Äpplen</p>
      </Link>
    </div>
    {/* <p>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book.
    </p> */}
    <p className="citat">
      "Vegetarian food leaves a deep impression on our nature. If the whole
      world adopts vegetarianism, it can change the destiny of humankind." -
      Albert Einstein
    </p>
  </div>
);

export default nasiProizvodi;
