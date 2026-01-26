import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className='navbar-ul'>
                <li className='nav-button'>
                    <NavLink to="/" className="nav">
                        HJEM
                    </NavLink>
                </li>

                <li className='nav-button'>
                    <NavLink to="/project" className="nav">
                        PROSJEKTER
                    </NavLink>
                </li>

                <li className='nav-button'>
                    <NavLink to="/aboutme" className="nav">
                        OM MEG
                    </NavLink>
                </li>

                <li className='nav-button'>
                    <NavLink to="/contact" className="nav">
                        KONTAKT
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar