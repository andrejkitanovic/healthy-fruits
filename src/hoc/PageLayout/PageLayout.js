import React, { useState } from 'react'

import Navigation from '../../components/Navigation/Navigation'
import SideMenu from '../../components/SideMenu/SideMenu'
import Footer from '../../components/Footer/Footer'
import Overlay from '../../components/Overlay/Overlay'

const PageLayout = (props) => {

    const [activeNav,setActiveNav] = useState(false)

    return (
        <div className="PageLayout">
            <Navigation active={activeNav} openNav={() => setActiveNav(true)}/>
            <SideMenu active={activeNav} closeNav={() => setActiveNav(false)}/>
            <Overlay active={activeNav} closeNav={() => setActiveNav(false)}/>
            {props.children}
            <Footer />
        </div>
    )
}

export default PageLayout