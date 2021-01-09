import React from "react";
import "./Onama.scss";

import Bager from "../../../assets/images/bager.png";

const onama = (props) => (
  <div className="Onama-Onama">
    <h2>Om oss</h2>

    <p>
      Allt startade med en idé och i det här fallet blev den här idén
      verklighet. <br />
      Vår ide var att skapa en handelsbro mellan Balkan och Sverige, en bro som
      skulle kunna visa Sverige vilka fantastiska frukter och grönsaker Balkan
      producerar. <br />
      I dagens läge är det väldigt populärt att svenska frukt- och
      grönsakshandlare sträcker ut sin hand till bland annat Spanien, Italien,
      Holland m.m. och detta var något som vi ville ändra på.
      <br />
      Vi vill skapa en direktlinje mellan Balkan och Sverige.
  <br />
  Alla produkter som läggs ut på vår hemsida kan vi med gott samvete säga
        att vi kan matcha övriga leverantörer i EU och omvärlden. <br />
        Vårat mål är att skapa långvariga samarbeten och jobbar efter kundens
        behov, både under säsong och övriga året med det som är aktuellt.
        <br />
        Genom vår långa resa i Balkan har vi intensivt jobbat på att skapa bra
        relationer med bönder och fabriker.
    </p>

    <div className="saSlikom">
      <p>
      
        <br />
        Vårt mål har hela tiden varit att ena de olika odlarna, om att i ett
        längre samarbete med Sverige kunna motivera att odla helt efter
        kundernas behov.
        <br />
        Detta har mottagits väldigt bra av odlarna i Balkan så länge ett avtal
        följs upp. Vi står för att allt går rätt till från jord till bord.
        <br />
        Vi på Healthy Fruits har stora visioner om att hjälpa till att göra
        denna värld till en bättre plats för folk som jobbar hårt.
        <br />
        Du som handlare av oss kan alltid känna dig trygg i att hela processen
        följs upp tack vare att vi alltid har en person från företaget
        stationerad nere i Balkan.
        <br />
        Likaså finns vi alltid på plats i Sverige och ser till att allt går rätt
        till och att du snabbt kan kontakta oss för kommande leveranser.
      </p>
      <img src={Bager} alt="Bager" />
    </div>
  </div>
);

export default onama;
