import React, { useEffect, useState } from "react";
import "./Voce.scss";

import Swiper from "../../../components/Swiper/Swiper";
import KategorijaVoca from "../../../components/Voce/KategorijaVoca/KategorijaVoca";
import SwiperVoce from "../../../components/Voce/SwiperVoce/SwiperVoce";

// import Jagode from '../../../assets/images/swiper-jagode.jpg'
import VoceSwiper from "../../../assets/images/swiper-voce.jpg";
// import VoceSwiper2 from '../../../assets/images/swiper-voce2.jpg'

import Borovnice from "../../../assets/images/voce/sveze/borovnice.png";
import Breskva from "../../../assets/images/voce/sveze/breskva.png";
import Jagode from "../../../assets/images/voce/sveze/jagode.png";
import Kajsija from "../../../assets/images/voce/sveze/kajsija.png";
import Nektarina from "../../../assets/images/voce/sveze/nektarina.png";
import Sljiva from "../../../assets/images/voce/sveze/sljiva.png";
import Tresnje from "../../../assets/images/voce/sveze/tresnje.png";
import Jabuke from "../../../assets/images/voce/sveze/jabuke.png";
import Lubenica from "../../../assets/images/voce/sveze/lubenica.png";
import Kruska from "../../../assets/images/voce/sveze/kruska.png";
import Grozdje from "../../../assets/images/voce/sveze/grozdje.png";

import Kupina from "../../../assets/images/voce/smrznuto/kupina.png";
import Malina from "../../../assets/images/voce/smrznuto/maline.png";
import Mix from "../../../assets/images/voce/smrznuto/mix.png";

import SuvaSljiva from "../../../assets/images/voce/suseno/suvasljiva.png";
import SuvaVisnja from "../../../assets/images/voce/suseno/suvavisnja.png";

const Voce = (props) => {
  const [swiperGlavni] = useState([
    { img: VoceSwiper },
    // { img: VoceSwiper2 },
  ]);

  const [svezeVoce] = useState([
    { img: Borovnice, naziv: "Blåbär" },
    { img: Jagode, naziv: "Jordgubbar" },
    { img: Tresnje, naziv: "Körsbär" },
    { img: Sljiva, naziv: "Plommon" },
    { img: Grozdje, naziv: "Druvor" },
    { img: Kajsija, naziv: "Aprikos" },
    { img: Nektarina, naziv: "Nektarin" },
    { img: Breskva, naziv: "Persika" },
    { img: Kruska, naziv: "Päron" },
    { img: Jabuke, naziv: "Äpple" },
    { img: Lubenica, naziv: "Vattenmelon" },
  ]);
  const [smrznutoVoce] = useState([
    { img: Malina, naziv: "Hallon" },
    { img: Borovnice, naziv: "Blåbär" },
    { img: Jagode, naziv: "Jordgubbar" },
    { img: Kupina, naziv: "Björnbär" },
    { img: Tresnje, naziv: "Körsbär" },
    { img: Sljiva, naziv: "Plommon" },
    { img: Mix, naziv: "Mix" },
  ]);

  const [susenoVoce] = useState([
    { img: SuvaVisnja, naziv: "Körsbär" },
    { img: SuvaSljiva, naziv: "Plommon" },
  ]);
  const [kategorija, setKategorija] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const promeniKategoriju = (kategorija) => {
    setKategorija(kategorija);
  };

  const swiperKategorija =
    kategorija === 0 ? svezeVoce : kategorija === 1 ? smrznutoVoce : susenoVoce;

  return (
    <div className="Voce">
      <Swiper
        key={1}
        content={swiperGlavni}
        overlay
        minilogo
        height="70vh"
        title="Frukt och bär"
      />
      <KategorijaVoca
        kategorija={kategorija}
        promeniKategoriju={promeniKategoriju}
      />
      <SwiperVoce content={swiperKategorija} height="30vh" autoplay="off" />
      <Swiper key={2} content={swiperGlavni} height="80vh" overlayTop />
    </div>
  );
};

export default Voce;
