import { NavLink } from 'react-router-dom'
import { navigations } from './webHeaderContent.js'

function Navbar() {
    return (
        <nav className="navbar">
            <ul className='navbar-ul'>
                {navigations.map((navigation, index) => (
                    <li className='nav-button'>
                        <NavLink to={navigation.path} className="nav" key={index}>
                            {navigation.text}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navbar