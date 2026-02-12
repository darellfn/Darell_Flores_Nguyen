import { titles } from './cvPageContent.js'
import { experiences } from './cvPageContent.js'

function Experience() {
    return (
        <section className="section">

            <div className="titles">
                <h1 className="CV-titles">
                    {titles.experience}
                </h1>
            </div>
            
            {experiences.map((work, index) => (
                <div key={index}>
                    <div className="divider"></div>

                    <h2 className="undertitles">
                        {work.position}
                    </h2>

                    <h4 className="dates">
                        {work.year}
                    </h4>

                    <ul className="experience-list">
                        {work.expList.map((workType, index) => (
                            <li key={index}>
                                {workType}
                            </li>
                        ))}
                    </ul>

                </div>
            ))}
                
        </section>        
    )
}

export default Experience