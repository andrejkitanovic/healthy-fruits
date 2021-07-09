import React from 'react'
import './NasKontakt.scss'

import {MdMail,MdPhone , MdLocationOn} from 'react-icons/md'

const nasKontakt = props => (
    <div className="NasKontakt">
        <a href="mailto:christian@dinfrukt.se"><MdMail /> christian@dinfrukt.se</a>
        <a href="tel:+46723595987"><MdPhone /> +46 723-5959-87</a>
        <p><MdLocationOn /> Serbia, Belgrade</p>
    </div>
)

export default nasKontakt