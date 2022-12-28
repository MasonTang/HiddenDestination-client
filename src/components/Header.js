import React from 'react'
import "../sass/homepage.scss"
import "../sass/button.scss"
import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="flex-header">
                <h1>Explore Travel Destinations</h1>
                <Link to="/destination" className="btn-header">Explore</Link>
            </div>
        </header>
    )
}

export default Header
