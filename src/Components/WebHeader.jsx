import Navbar from "./Navbar.jsx"
import './Header.css'

function WebHeader() {
    return ( 
    <section>
        <header className="head">      
            <h2 className= "web-header-left">
                Darell <span className="highlight">Flores Nguyen</span>
            </h2>
            <div className="web-header-center">
                <Navbar/>
            </div>
        </header>        
    </section>
    )
}

export default WebHeader