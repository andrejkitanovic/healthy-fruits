import React from 'react'
import './KategorijaVoca.scss'

const kategorijaVoca = props => (<div className="KategorijaVoca">
    <p className={props.kategorija === 0 ? "active" : null} onClick={() => props.promeniKategoriju(0)}><span />Smrznuto</p>
    <p className={props.kategorija === 1 ? "active" : null} onClick={() => props.promeniKategoriju(1)}><span />Sveze</p>
    <p className={props.kategorija === 2 ? "active" : null} onClick={() => props.promeniKategoriju(2)}><span />Suseno</p>
</div>)

export default kategorijaVoca