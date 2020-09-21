import React from 'react'
import './NasKontakt.scss'

import {MdMail,MdPhone , MdLocationOn} from 'react-icons/md'

const nasKontakt = props => (
    <div className="NasKontakt">
        <a href="mailto:info@email.com"><MdMail /> info@email.com</a>
        <a href="tel:+38169333555"><MdPhone /> +381 69-333-555</a>
        <p><MdLocationOn /> Ul. Stanoje B. 38</p>
    </div>
)

export default nasKontakt