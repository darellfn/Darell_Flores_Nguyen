import { NavLink } from 'react-router-dom'
import './AboutMe.css'

function AboutMe() {
    return (
        <>
        <div className='about-me-page'>
            <div className="pic-and-text">
                <img src="/images/meandrio.png" alt="Me and Rio" className="me-and-rio"/>

                <div className='text-section'>
                    <h1>
                        Om <span className='highlight'>meg</span>
                    </h1>

                    <p className='text'>
                        Mitt navn er Darell Flores Nguyen, 22 år og er på tredjeåret mitt i 
                        bachelor i Informatikk: Design, bruk og interaksjon. Selv om jeg har 
                        bakgrunn innen design, trives jeg best i utviklerroller og jobber primært med 
                        programmering og tekniske løsninger. Jeg har deltatt i varierte prosjekter 
                        med utvikleransvar, og liker å bygge robuste, brukervennlige og skalerbare 
                        løsninger. Jeg planlegger å ta master i Informatikk: Programmering og systemarkitektur, 
                        og jobber kontinuerlig med fritidsprosjekter for å videreutvikle ferdighetene mine og 
                        styrke kompetansen min innen utvikling.
                    </p>

                    <p className='text'>
                        Mine ferdigheter er primært tekniske, med hovedfokus på utvikling og programmering.
                        Gjennom min studie har jeg tatt med meg verdifulle kunnskap som jeg implementerer praktisk på prosjekter og systemutvikling. 
                        For eksempel har IN2000 (software engineering med prosjektarbeid) lært meg å samarbeide i et team for å utvikle et komplett system fra kravspesifikasjon til implementasjon. 
                        Jeg lærte også å bruke prosjektmetodikk, systemdesign og versjonskontroll som GitHub, og fikk praktisk erfaring med teamarbeid og 
                        koordinering av komplekse oppgaver. Et annet emne er også IN2010 (Algoritmer og datastrukturer). Programmeringsemner som IN1000 og IN1000 ga meg evnen til å programmere gode koder, men IN2010 
                        styrket min evne til å løse problemer effektivt og skrive optimal kode. Jeg bruker kunnskapen til å implementere løsninger som er både 
                        raske og skalerbare, spesielt i komplekse applikasjoner og backend-logikk.
                        
                    </p>

                    <p className='text'>
                        Godt teamarbeid og effektivt samarbeid synes jeg er veldig viktig, slik at jeg sikrer at arbeidet mitt integreres sømløst med teamets arbeid. 
                        Jeg har vært ansvarlig i GitHub som en slags GitHub-master i teamet, hvor jeg etablerer og håndhever beste praksis for branching, kodekvalitet og pull requests. 
                        Jeg har løst merge-konflikter, organiserer repositorier og effektiviserer arbeidsflyten. Gjennom dette anvender jeg også prinsipper fra DevOps, særlig innen 
                        kontinuerlig integrasjon, kvalitetssikring og effektiv arbeidsflyt.
                    </p>

                    <NavLink to="/cv" className="CV-button" onClick={ ()=> {
                        window.scrollTo(0, 0);
                    }}>
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
                    GitHub: 
                    <a href="https://github.com/darellfn" target="_blank" rel="noopener noreferrer">
                        darellfn
                    </a>
                </li>
            </ul>
        </footer>
        </>
    )
}

export default AboutMe