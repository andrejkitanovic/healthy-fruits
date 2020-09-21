import React, { useState } from 'react'

import Navigation from '../../components/Navigation/Navigation'
import SideMenu from '../../components/SideMenu/SideMenu'
import Footer from '../../components/Footer/Footer'

const PageLayout = (props) => {

    const [activeNav,setActiveNav] = useState(false)

    return (
        <div className="PageLayout">
            <Navigation active={activeNav} setNav={() => setActiveNav(p => !p)}/>
            <SideMenu active={activeNav}/>
            {props.children}
            <Footer />
        </div>
    )
}

export default PageLayout