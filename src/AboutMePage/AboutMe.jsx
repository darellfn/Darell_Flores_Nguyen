import { NavLink } from 'react-router-dom'
import './AboutMe.css'

function AboutMe() {
    return (
        <>
        <div className='about-me-page'>
            <div className="pic-and-text">
                <img src="/images/meandrio.jpg" alt="Me and Rio" className="me-and-rio"/>

                <div className='text-section'>
                    <h1>
                        Om <span className='highlight'>meg</span>
                    </h1>

                    <p className='text'>
                        Mitt navn er Darell Flores Nguyen og er full-stack utvikler med 
                        bachelor i Informatikk: Design, bruk og interaksjon. Selv om jeg har 
                        bakgrunn innen design, trives jeg best i utviklerroller og jobber primært med 
                        programmering og tekniske løsninger. Jeg har deltatt i varierte prosjekter 
                        med utvikleransvar, og liker å bygge robuste, brukervennlige og skalerbare 
                        løsninger. Jeg planlegger å ta master i Informatikk: Programmering og systemarkitektur, 
                        og jobber kontinuerlig med fritidsprosjekter for å videreutvikle ferdighetene mine og 
                        styrke kompetansen min innen utvikling.

                    </p>

                    <NavLink to="/cv" className="CV-button">
                        MIN CV
                    </NavLink>
                </div>

            </div>


        </div>

        <footer className='info-card'>
            <ul className='points'>
                <li>
                    Navn: Darell Flores Nguyen
                </li>

                <li>
                    Telefon: +47 941 91 948
                </li>

                <li>
                    Mail: darellfn03@gmail.com
                </li>
            </ul>

            <ul className='points'>
                <li>
                    Alder: 22
                </li>

                <li>
                    Utdanning: Bachelor i Informatikk: Design, bruk og interaksjon
                </li>

                <li>
                    GitHub: darellfn
                </li>
            </ul>
        </footer>
        </>
    )
}

export default AboutMe