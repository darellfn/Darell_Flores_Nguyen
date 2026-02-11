import { NavLink } from 'react-router-dom'
import './AboutMe.css'
import { title } from './aboutMeContent.js'
import { cvTitle } from './aboutMeContent.js'
import { aboutMeContents } from './aboutMeContent.js'
import { contactInfo1 } from './aboutMeContent.js'
import { contactInfo2 } from './aboutMeContent.js'

function AboutMe() {
    return (
        <>
        <div className='about-me-page'>
            <div className="pic-and-text">
                <img src="/images/meandrio.png" alt="Me and Rio" className="me-and-rio"/>

                <div className='text-section'>
                    <h1>
                        {title.word1}<span className='highlight'>{title.word2}</span>
                    </h1>

                    {aboutMeContents.paragraphs.map((text, index) => (
                        <p className='text' key={index}>
                            {text}
                        </p>
                    ))}

                    <NavLink to="/cv" className="CV-button" onClick={ ()=> {
                        window.scrollTo(0, 0);
                    }}>
                        {cvTitle.minCV}
                    </NavLink>
                </div>

            </div>
        </div>

        <footer className='info-card'>
            <ul className='points'>
                {contactInfo1.map((text, index) => (
                    <li key={index}>
                        {text.label} {text.value}
                    </li>
                ))}
            </ul>

            <ul className='points'>
                {contactInfo2.map((text, index) => {
                    if (text.label !== "GitHub: ") {
                        return (
                            <li key={index}>
                                {text.label} {text.value}
                            </li>
                            )
                    } else {
                        return (
                            <li key={index}>
                                {text.label} 
                                <a href={text.link} target="_blank" rel="noopener noreferrer">
                                    {text.value}
                                </a>
                            </li>
                            )
                        }
                    })}
            </ul>
        </footer>
        </>
    )
}

export default AboutMe