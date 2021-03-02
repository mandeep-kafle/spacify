import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
    return (
        <div>
            <p><Link to="/">Home</Link></p>
            <p><Link to="/Mars">Mars</Link></p>
            <p><Link to="/Coolstuff">Coolstuff</Link></p>
            <p><Link to="/AboutDev">AboutDev</Link></p>
        </div>
    )
}

export default NavBar
