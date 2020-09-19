import React from 'react'
import './KontaktForma.scss'

const kontaktForma = () => (
    <form className="KontaktForma">
        <div className="row">
            <input type="text" placeholder="Ime"/>
            <input type="text" placeholder="Prezime"/>
        </div>
        <div className="row">
            <input type="text" placeholder="Telefon"/>
            <input type="email" placeholder="E-mail"/>
        </div>
        <textarea />  
        <button type="submit">Posalji</button>
    </form>
)

export default kontaktForma