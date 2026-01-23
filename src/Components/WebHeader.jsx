import Navbar from "./Navbar.jsx"

function WebHeader() {
    return ( 
    <section>
        <header className="head">      
            <h2 className= "web-header-left">
                Darell Flores Nguyen
            </h2>

            <div className="web-header-center">
                <Navbar/>
            </div>

            <div className="right"></div>

        </header>        
    </section>
    )
}

export default WebHeader