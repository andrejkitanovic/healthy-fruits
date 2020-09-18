import React from 'react'
import Onama from '../../../components/Onama/Onama'
import NasiProizvodi from '../../../components/NasiProizvodi/NasiProizvodi'
import Swiper from '../../../components/Swiper/Swiper'

const Pocetna = (props) => {


    return (
        <div className="Pocetna">
            <Swiper />
            <Onama />
            <NasiProizvodi />
        </div>
    )
}

export default Pocetna