import React from "react";
import './NasiPartneri.scss'

import Partner from '../../../assets/images/partner.png'

const nasiPartneri = (props) => {
  return (
    <div className="NasiPartneri">
      <h2>Nasi Partneri</h2>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="partneri">
        <img src={Partner} alt="Partner"/>
        <img src={Partner} alt="Partner"/>
        <img src={Partner} alt="Partner"/>
      </div>
    </div>
  );
};

export default nasiPartneri