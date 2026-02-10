import Navbar from "./Navbar.jsx"
import './Header.css'
import { me } from './webHeaderContent.js'

function WebHeader() {
    return ( 
    <section>
        <header className="head">      
            <h2 className= "web-header-left">
                {me.firstName}<span className="highlight">{me.lastName}</span>
            </h2>
            <div className="web-header-center">
                <Navbar/>
            </div>
        </header>        
    </section>
    )
}

export default WebHeader