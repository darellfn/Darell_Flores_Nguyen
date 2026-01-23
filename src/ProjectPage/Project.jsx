import Technologies from "./Technologies";

function Project() {

    return (
        <div className="project-page">
            <h1 className="project-title">
                Prosjekter
            </h1>

            <div className="project-section">

                <div className="project-card">
                    <img src="images/ell.png" alt="ell" className="imga"></img>
                </div>

                <div className="project-card">
                    <h1>
                        Ell
                    </h1>
                    <p className="project-text">
                        Ell er en prototype-applikasjon utviklet sammen med en bruker som en del av en oppgave i emnet IN1050 – Introduksjon til design, bruk og interaksjon. 
                        Wireframen ble laget ved hjelp av Miro, og gir en oversikt over både individuelt og felles strømforbruk i kollektiv. Den sporer ditt personlige 
                        strømforbruk, slik at du kun betaler for det du selv bruker, og ikke andres forbruk.
                    </p>

                    <p className="tech-text">
                        <strong>Teknologier:</strong> Miro
                    </p>
                </div>

            </div>

            <div className="project-section">

                <div className="project-card">
                    <h1>
                        The Milk Carton
                    </h1>

                    <p className="project-text">
                        Milk Carton var en "tangible" prototype designet og produsert av teamet mitt, Innotink, i forbindelse med emnet IN1060 – Bruksorientert design. Hovedmålet med prosjektet var å samarbeide tett med brukere for å utvikle en teknisk løsning basert på temaet «på/av». 
                        Ikonene på kartongen fungerer som indikatorer for både brukere og kunder, og viser når en bestemt type melk begynner å bli tom eller er helt tom. Teknologien som ble brukt i prosjektet var Arduino. 
                        For mer informasjon, besøk Innotink sin nettside via IN1060-emnesiden. 
                    </p>

                    <p className="tech-text">
                        <strong>Teknologier:</strong> Arduino (C++)
                    </p>

                    <p className="more-info">Mer info:  
                        <a href="https://www.uio.no/studier/emner/matnat/ifi/IN1060/v24/prosjektgrupper/innotink/" target="_blank" rel="noopener noreferrer">
                            https://www.uio.no/studier/emner/matnat/ifi/IN1060/v24/prosjektgrupper/innotink/
                        </a>
                    </p>
                    
                </div>

                <div className="project-card">
                    <img src="images/milk.png" alt="The Milk Carton" className="imga"></img>
                </div>

            </div>

            <div className="project-section">

                <div className="project-card">
                    <img src="images/algorithm.png" alt="algorithm" className="imga"></img>
                </div>

                <div className="project-card">
                    <h1>
                        Algoritmer
                    </h1>
                    <p className="project-text">
                        Jeg har stor interesse for algoritmer og problemløsning, og er spesielt 
                        opptatt av at systemer skal kjøre så effektivt som mulig. Jeg bruker mye 
                        tid på å utforske og implementere algoritmer med fokus på ytelse og ressursbruk. 
                        På GitHub har jeg publisert flere egne implementasjoner, blant annet av 
                        sorteringsalgoritmer, skrevet i språk som Python, Java og Kotlin. Disse har jeg skrevet ned slik at jeg kan bruke de i fremtiden.  
                        Gjennom dette arbeidet har jeg utviklet en sterk forståelse for algoritmisk tenkning, 
                        datastrukturer og hvordan effektive løsninger bidrar til robuste og skalerbare systemer.
                    </p>

                    <p className="tech-text">
                        <strong>Teknologier:</strong> Visual Studio Code, Python, Java, JavaScript, Kotlin
                    </p>

                    <p className="more-info">GitHub:
                        <a href="https://github.com/darellfn/Sorting_Algorithms.git" target="_blank" rel="noopener noreferrer">
                            https://github.com/darellfn/Sorting_Algorithms.git
                        </a>
                    </p>
                    
                </div>

            </div>

            <div className="project-section">

                <div className="project-card">
                    <h1>
                        Denne nettsiden
                    </h1>

                    <p className="project-text">
                        Jeg har utviklet en egen nettside om meg selv som fungerer som en personlig portefølje, hvor jeg presenterer min CV, erfaringer og prosjekter på en oversiktlig og brukervennlig måte. 
                        Nettsiden er bygget med HTML, CSS og JavaScript med React rammeverk, og er utviklet med fokus på responsivt design, god struktur og en tydelig brukeropplevelse på tvers av ulike enheter.
                        Gjennom arbeidet med nettsiden har jeg fått praktisk erfaring med moderne front-end-utvikling, komponentbasert arkitektur i React og samspillet mellom design og funksjonalitet. 
                        Prosjektet gir også et godt bilde av min tekniske kompetanse, arbeidsmetodikk og interesse for kontinuerlig forbedring og effektiv utvikling.
                    </p>

                    <p className="tech-text">
                        <strong>Teknologier:</strong> Visual Studio Code, HTML, CSS, JavaScript, React, Vite, Node
                    </p>

                    <p className="more-info">GitHub:
                        <a href="https://github.com/darellfn/Darell_Flores_Nguyen.git" target="_blank" rel="noopener noreferrer">
                            https://github.com/darellfn/Darell_Flores_Nguyen.git                        
                        </a>
                    </p>
                </div>

                <div className="project-card">
                    <img src="images/dfn.png" alt="dfn" className="imga"></img>
                </div>

            </div>
            

            <h1 className="software-engineering">
                Software Engineering - Et samarbeid med andre
            </h1>

            <div className="project-section">
                
                <div className="project-card">

                    <img src="images/sunshine1.png" alt="Sunshine" className="imga"></img>
                   
                </div>
                
    
                <div className="project-card">
                    <h1>
                        Sunshine
                    </h1>
                    <p className="project-text">
                       Sunshine er en app som lar brukere sjekke lønnsomheten ved å installere solcellepaneler i sin egen bolig. 
                       Appen er en Android-applikasjon utviklet i Kotlin ved hjelp av Jetpack Compose. Sunshine benytter sanntids- 
                       og historiske observasjoner fra METs Frost API for å gi brukerne innsikt i potensielle besparelser og energiproduksjon 
                       fra solcellepaneler.
                    </p>

                    <p className="project-text">
                        Dette var et gruppeprosjekt der vi anvendte etablerte metoder innen programvareutvikling for å strukturere utviklingsprosessen. 
                        Vi organiserte arbeidet ved hjelp av Scrum for iterativ fremdrift og Kanban for oppgavestyring og visualisering av arbeidsflyt, noe som bidro til effektivt samarbeid, 
                        fleksibilitet og jevn fremdrift gjennom hele prosjektet. Vi benyttet plattformen Jira.
                        Gjennom dette prosjektet forbedret vi ikke bare våre tekniske ferdigheter, men lærte også viktigheten av teamarbeid og programvareutvikling i praksis.
                    </p>
                </div>
            </div>

        <div className="project-section">

            <div className="project-card">

                <img src="images/sunshine2.png" alt="Sunshine" className="imga"></img>
                    
            </div>

            <div className="sunshine-card">
                <h1>
                    Min rolle i Sunshine-prosjektet
                </h1>

                <p className="project-text">
                   Jeg jobbet som fullstack-utvikler, og bidro både på <strong>front-end</strong> og <strong>back-end</strong>, samtidig som jeg var med på å forme den overordnede systemarkitekturen for å 
                   sikre skalerbarhet og vedlikeholdbarhet. I tillegg hadde jeg rollen som teamets GitHub-ansvarlig, der jeg effektiviserte arbeidsflyten for versjonskontroll, 
                   gjennomgikk og flettet pull requests, løste konflikter og håndhevet beste praksis for branching og kodekvalitet. I noen grad, kan man si at jeg har gjort noen
                   praksiser fra <strong>DevOps</strong>. Ved å kombinere teknisk utvikling med arkitektonisk design og håndtering av kodearkivet bidro jeg til smidig samarbeid, reduserte 
                   integrasjonsproblemer og sikret effektiv leveranse av kode av høy kvalitet gjennom hele prosjektet.
                </p>

                    <p className="tech-text">
                    <strong>Teknologier:</strong> Android Studio, Kotlin, Figma, REST API, Jetpack Compose, Mermaid, Miro, Bruno, Google Cloud Platform, GitHub, Jira
                </p>

                    <p className="tech-text">
                    <strong>Systemutviklingsprosess:</strong> Smidig metode - Scrum & Kanban (ScrumBan)
                </p>

                <p className="more-info">GitHub: 
                    <a href="https://github.com/darellfn/Sunshine.git" target="_blank" rel="noopener noreferrer">
                        https://github.com/darellfn/Sunshine.git                      
                    </a>
                </p>
                
            </div>
        </div>

        <div className="video-box">
            <iframe
                src="https://www.youtube.com/embed/js707j7ybGA"
                title="Sunshine demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
        </div>

        <div className="project-section">

                <div className="project-card">
                    <h1>
                        Lockr - Bokskap nettside for FUI
                    </h1>

                    <p className="project-text">
                       I løpet av sommeren deltok jeg i et prosjekt for Fagutvalget ved Institutt for informatikk (FUI) ved Universitetet i Oslo (UiO), der målet vårt var å utvikle et skap-/låsesystem som gjorde det mulig for brukere å reservere 
                       skap gjennom en webapplikasjon. Jeg jobbet hovedsaklig med front-end, og brukte React, JavaScript og CSS til å designe og implementere et responsivt, intuitivt og visuelt tiltalende brukergrensesnitt. 
                       Prosjektet ga meg verdifull praktisk erfaring innen front-end-utvikling, styrket min forståelse av moderne webteknologier og forbedret min evne til å samarbeide effektivt i team, samtidig som vi leverte en 
                       funksjonell og brukervennlig webapplikasjon.
                    </p>

                    <p className="tech-text">
                        <strong>Teknologier:</strong> Visual Studio Code, Python, React, HTML, Tailwind CSS, JavaScript, Django, Node, Jira, GitHub
                    </p>

                    <p className="tech-text">
                        <strong>Systemutviklingsprosess:</strong> Smidig metode - Scrum & Kanban (ScrumBan)
                    </p>

                    <p className="more-info">GitHub:
                        <a href="https://github.uio.no/FUI/sommerprosjekt-bokskap.git" target="_blank" rel="noopener noreferrer">
                            https://github.uio.no/FUI/sommerprosjekt-bokskap.git                    
                        </a>
                    </p>

                </div>

                <div className="project-card">
                    <img src="images/lockr.png" alt="Lockr" className="imga"></img>
                </div>

        </div>

        <Technologies>
            
        </Technologies>
    </div>
    );
}

export default Project