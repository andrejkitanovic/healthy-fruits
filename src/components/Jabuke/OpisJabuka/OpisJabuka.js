import React from 'react'
import "./OpisJabuka.scss"

import Jabuka from '../../../assets/images/jabuka.png'

const OpisJabuka = (props) => {

    return <div className="OpisJabuka">
        <h2>Jabuke</h2>
        <div className="flex">
            <img src={Jabuka} alt="Jabuke"/>
            <div className="text">
                <p>Voće: Jabuka</p>
                <p>Osnovna pakovanja: Drvene,plastične,karton </p>
                <p>Manja pakovanja: 4 kom. , 6 kom.</p>
                <p>Veličine pakovanja: 2kg, 4kg, 6kg </p>
                <p>Dodjite i uverite se u kvalitet!</p>
                <p>Radimo sve po zelji kupca!</p>
            </div>
        </div>
    </div>
}

export default OpisJabuka