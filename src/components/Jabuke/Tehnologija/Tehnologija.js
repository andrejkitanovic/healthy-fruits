import React from "react";
import "./Tehnologija.scss";

import Video3 from "../../../assets/images/jabuke/sorting.mp4";

const Tehnologija = (props) => {
  return (
    <div className="Tehnologija">
      {/* <h2>Najsavremenija tehnologija</h2> */}

      <video src={Video3} controls />
    </div>
  );
};

export default Tehnologija;
