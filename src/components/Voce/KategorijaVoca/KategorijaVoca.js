import React from 'react'
import './KategorijaVoca.scss'

const kategorijaVoca = props => (<div className="KategorijaVoca">
        <p className={props.kategorija === 0 ? "active" : null} onClick={() => props.promeniKategoriju(0)}><span />Färskt</p>
    <p className={props.kategorija === 1 ? "active" : null} onClick={() => props.promeniKategoriju(1)}><span />Fryst</p>

    <p className={props.kategorija === 2 ? "active" : null} onClick={() => props.promeniKategoriju(2)}><span />Torkat</p>
</div>)

export default kategorijaVoca