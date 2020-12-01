import React from "react";
import "./Tehnologija.scss";

import Video3 from '../../../assets/images/jabuke/sorting.mp4'

const Tehnologija = (props) => {
  return (
    <div className="Tehnologija">
      <h2>Najsavremenija tehnologija</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic
      </p>
      <video src={Video3} controls/>
    </div>
  );
};

export default Tehnologija;
