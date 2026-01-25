import { NavLink } from 'react-router-dom'

function LastestProjects() {
    return (
        <div className="latest-projects-section">
            <div className="latest-projects-text-and-button">
                <div className="latest-text">
                    <h1>
                        Profilprosjekter
                    </h1>

                    <h3>
                        Nyeste prosjekter fullført
                    </h3>
                </div>

                <NavLink to="/project" className="see-all-button">
                    SE ALLE
                </NavLink>

            </div>

            <div className="latest-projects-card-section">
                <div className="card-and-text">
                    <div className="latest-projects-card">
                        <img src="/public/images/dfn.png" alt="dfn"/>
                    </div>

                    <div className="card-text">
                        <h2>
                            Denne nettsiden
                        </h2>
                        <NavLink to="/project" className="more" state={{scrollTo: "dfn-bro"}}>
                            Vite mer →
                        </NavLink>
                    </div>
                </div>

                <div className="card-and-text">
                    <div className="latest-projects-card">
                        <img src="/public/images/algorithm.png" alt=""/>
                    </div>

                    <div className="card-text">
                        <h2>
                            Algoritmer
                        </h2>
                        <NavLink to="/project" className="more" state={{scrollTo: "algorithm"}}>
                            Vite mer →
                        </NavLink>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LastestProjects