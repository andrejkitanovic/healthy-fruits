import React from 'react'
import './KontaktForma.scss'

const kontaktForma = () => (
    <form className="KontaktForma">
        <div className="row">
            <input type="text" placeholder="Namn"/>
            <input type="text" placeholder="Efternamn"/>
        </div>
        <div className="row">
            <input type="text" placeholder="Telefon"/>
            <input type="email" placeholder="E-mail"/>
        </div>
        <textarea />  
        <button type="submit">Skicka</button>
    </form>
)

export default kontaktForma