import React from 'react'
import "./OpisJabuka.scss"

import Jabuka from '../../../assets/images/jabuka.png'

const OpisJabuka = (props) => {

    return <div className="OpisJabuka">
        <h2>Äpplen</h2>
        <div className="flex">
            <img src={Jabuka} alt="Jabuke"/>
            <div className="text">
                <p>Frukt: Äpplen</p>
                <p>Äpplena går att få paketerat efter kundens behov, se våra olika alternativ i länken nedan. </p>
                {/* <p>Manja pakovanja: 4 kom. , 6 kom.</p>
                <p>Veličine pakovanja: 2kg, 4kg, 6kg </p>
                <p>Dodjite i uverite se u kvalitet!</p>
                <p>Radimo sve po zelji kupca!</p> */}
                <button onClick={() => props.open()}>Se våra packningar här!</button>
            </div>
        </div>
    </div>
}

export default OpisJabuka