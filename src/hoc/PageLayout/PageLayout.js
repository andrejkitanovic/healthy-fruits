import React from 'react'

import Navigation from '../../components/Navigation/Navigation'
import Footer from '../../components/Footer/Footer'

const PageLayout = (props) => {

    return (
        <div className="PageLayout">
            <Navigation />
            {props.children}
            <Footer />
        </div>
    )
}

export default PageLayout