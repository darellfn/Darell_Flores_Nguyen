import Technologies from "./Technologies";
import './Project.css'
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { projects } from "./projectPageContent";
import { titles } from "./projectPageContent";
import { softwareProjects } from "./projectPageContent";

function Project() {
    const location = useLocation();
    
    useEffect(() => {
        const scrollId = location.state?.scrollTo;
        if (scrollId) {
            setTimeout(() => {
                const section = document.getElementById(scrollId);
                if (section) {
                section.scrollIntoView({ behavior: "smooth" });
                }
            }, 50);
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location.state]);

    return (
        <div className="project-page">
            <h1 className="project-title">
                {titles.project}
            </h1>

            {projects.map((project, index) => {
                if (project.pictureOnLeft) {
                    return (
                        <div className="project-section" key={index}>

                            <div className="project-card">
                                <img src={project.img} alt={project.alt} className="imga"></img>
                            </div>

                            <div className="project-card">
                                <h1>
                                    {project.name}
                                </h1>
                                <p className="project-text">
                                    {project.text}
                                </p>

                                <p className="tech-text">
                                    <strong className="tech">{titles.technologies}</strong>{project.usedTechs}
                                </p>

                                <p className="more-info">{project.infoTitle}  
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.link}
                                    </a>
                                </p>
                            </div>

                        </div>
                    )
                } else {
                    return (
                        <div className="project-section" key={index}>
                            <div className="project-card">
                                <h1>
                                    {project.name}
                                </h1>

                                <p className="project-text">
                                   {project.text}
                                </p>

                                <p className="tech-text">
                                    <strong className="tech">{titles.technologies}</strong>{project.usedTechs}
                                </p>

                                <p className="more-info">{project.infoTitle}
                                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                                        {project.link}
                                    </a>
                                </p>
                                
                            </div>

                            <div className="project-card">
                                <img src={project.img} alt={project.alt} className="imga"></img>
                            </div>

                        </div>
                    )
                }
            })}
            

            <h1 className="software-engineering">
                {titles.software}<span className="highlight">{titles.teamwork}</span>
            </h1>

            {softwareProjects.map((project, index) => {
                if (project.pictureOnLeft) {
                    return (
                        <div className="project-section_and_video" key={index}>
                            <div className="project-section">
                                <div className="project-card">
                                    <img src={project.img} alt={project.alt} className="imga"></img>
                                </div>
                                
                                <div className="project-card">
                                    <h1>
                                        {project.name}
                                    </h1>
                                    <p className="project-text">
                                        {project.text}
                                    </p>

                                    <p className="tech-text">
                                        <strong className="tech">{project.techTitle}</strong>{project.usedTechs}
                                    </p>

                                    <p className="tech-text">
                                        <strong className="tech">{project.processTitle}</strong>{project.process}
                                    </p>

                                    <p className="more-info">{project.infoTitle} 
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.link}                    
                                        </a>
                                    </p>
                                </div>
                            </div>

                            {project.hasVideo && (
                                <div className="video-box">
                                    <iframe
                                        src="https://www.youtube.com/embed/js707j7ybGA"
                                        title="Sunshine demo"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div> 
                            )}
                        </div>
                    )
                } else {
                    return (
                        <div className="project-section_and_video" key={index}>
                            <div className="project-section">
                                <div className="project-card">
                                    <h1>
                                        {project.name}
                                    </h1>
                                    <p className="project-text">
                                        {project.text}
                                    </p>

                                    <p className="tech-text">
                                        <strong className="tech">{project.techTitle}</strong>{project.usedTechs}
                                    </p>

                                    <p className="tech-text">
                                        <strong className="tech">{project.processTitle}</strong>{project.process}
                                    </p>

                                    <p className="more-info">{project.infoTitle} 
                                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                                            {project.link}                    
                                        </a>
                                    </p>
                                </div>

                                <div className="project-card">
                                    <img src={project.img} alt={project.alt} className="imga"></img>
                                </div>
                            </div>

                            {project.hasVideo && (
                                <div className="video-box">
                                    <iframe
                                        src={project.src}
                                        title={project.video}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div> 
                            )}
                        </div>
                    )
                }
            })}
        <Technologies/>
    </div>
    );
}

export default Project