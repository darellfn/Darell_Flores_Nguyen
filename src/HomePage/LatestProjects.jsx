import { NavLink } from 'react-router-dom'
import { latest } from './homePageContent'
import { latestProjects } from './homePageContent'

function LastestProjects() {
    return (
        <div className="latest-projects-section">
            <div className="latest-projects-text-and-button">
                <div className="latest-text">
                    <h1>
                        {latest.title}
                    </h1>

                    <h3>
                        {latest.latest}
                    </h3>
                </div>

                <NavLink to={latest.buttonPath} className="see-all-button">
                    {latest.buttonContent}
                </NavLink>

            </div>

            <div className="latest-projects-card-section">
                {latestProjects.map((project, index) => (
                    <div className="card-and-text" key={index}>
                        <div className="latest-projects-card">
                            <img src={project.img} alt={project.alt}/>
                        </div>

                        <div className="card-text">
                            <h2>
                                {project.name}
                            </h2>
                            <NavLink to={project.buttonPath} className="more" state={{scrollTo: project.scrollPath}}>
                                {project.buttonContent}
                            </NavLink>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default LastestProjects