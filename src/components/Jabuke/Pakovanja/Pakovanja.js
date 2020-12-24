import React from "react";
import "./Pakovanja.scss";

import pakovanje1 from '../../../assets/images/pakovanje1.png'
import pakovanje2 from '../../../assets/images/pakovanje2.png'
import pakovanje3 from '../../../assets/images/pakovanje3.png'
import pakovanje4 from '../../../assets/images/pakovanje4.png'

const Pakovanja = (props) => {
  return <div className="Pakovanja">
      <div className="overlay" onClick={props.close}></div>
      <div className="box">
          <div className="pakovanje">
            <img src={pakovanje1} alt="pakovanje"/>
            <p>4 vocke</p>
          </div>
          <div className="pakovanje">
            <img src={pakovanje2} alt="pakovanje"/>
            <p>6 vocki</p>
          </div>
          <div className="pakovanje">
            <img src={pakovanje3} alt="pakovanje"/>
            <p>8 vocki</p>
          </div>
          <div className="pakovanje">
            <img src={pakovanje4} alt="pakovanje"/>
            <p>torbe</p>
          </div>
      </div>
  </div>;
};

export default Pakovanja;
