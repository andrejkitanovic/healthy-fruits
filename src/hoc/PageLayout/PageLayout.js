import React from 'react'
import Navigation from '../../components/Navigation/Navigation'

const PageLayout = (props) => {

    return (
        <div className="PageLayout">
            <Navigation />
            {props.children}
        </div>
    )
}

export default PageLayout