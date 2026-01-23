import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className='navbar-ul'>
                <li className='nav-button'>
                    <NavLink to="/" className="nav">
                        Hjem
                    </NavLink>
                </li>

                <li className='nav-button'>
                    <NavLink to="/cv" className="nav">
                        CV
                    </NavLink>
                </li>

                <li className='nav-button'>
                    <NavLink to="/project" className="nav">
                        Prosjekter
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar