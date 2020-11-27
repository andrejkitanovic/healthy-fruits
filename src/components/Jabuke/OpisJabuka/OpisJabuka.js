import React from 'react'
import "./OpisJabuka.scss"

import Jabuka from '../../../assets/images/jabuka.png'


const OpisJabuka = (props) => {

    return <div className="OpisJabuka">
        <h2>Jabuke</h2>
        <div className="flex">
            <img src={Jabuka} alt="Jabuke"/>
            <div className="text">
                <p>Voce: Jabuka</p>
                <p>Lorem Ipsum is simply dummy</p>
                <p>Lorem Ipsum is simply dummy</p>
                <p>Lorem Ipsum is simply dummy</p>
                <p>Lorem Ipsum is simply dummy</p>
            </div>
        </div>
    </div>
}

export default OpisJabuka