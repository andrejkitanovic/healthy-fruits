import React from "react";
import "./Onama.scss";

import { Link } from "react-router-dom";

const onama = (props) => (
  <div className="Pocetna-Onama">
    <h2>Välkomna till oss på Healthy Fruits</h2>
    <p>
      Vi är ett frukt- och grönsaksföretag som fokuserar på kvalitè och
      kundfokus. Vi som företag har stora visioner om att skapa en handelsbro
      mellan Balkan och Sverige, häng gärna med på våran resa i att skapa en
      förändring.
    </p>
    <Link to="/o-nama">Läs mer</Link>
  </div>
);

export default onama;
