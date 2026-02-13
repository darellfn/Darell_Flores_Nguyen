import { titles } from './cvPageContent.js'
import { education } from './cvPageContent.js'

function Education() {
  return (
      <section className="section">
        <div className="titles">
          <h1 className="titles">
            {titles.education}
          </h1>
        </div>

        {education.map((alma, index) => {
          return (
          <div key={index}>
            <div>

            <div className="divider"></div>

            <h2 className="undertitles">
              {alma.grade}
            </h2>

            <h4 className="place">
              {alma.place}
            </h4>

            <h4 className = "dates">
              {alma.duration}
            </h4>
          
            </div>

            {alma.hasCourses && alma.courses && (
              <div>
                {Object.entries(alma.courses).map(([semesterName, courses]) => (
                <div key={semesterName}>
                  <h3 className='semester'>{semesterName}</h3>
                  <ul className="courses">
                    {courses.map((course, index) => (
                      <li key={index}>{course}</li>
                    ))}
                  </ul>
                </div>
                ))}
              </div>
            )}
          </div>
        )
        })}
      </section>
  );
}

export default Education