import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <header>
            <ul>
                <li><i className="fa-solid fa-clipboard-list"></i> TODOS</li>
                <Link to="/status">
                    <li> LIST ITEMS</li>
                </Link>

            </ul>
        </header>
    )
}

export default Navbar