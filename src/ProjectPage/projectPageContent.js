// Global

export const titles = {
    project: "Prosjekter",
    software: "Software Engineering - ",
    teamwork: "Et samarbeid med andre",
    technology: "Teknologier jeg har erfaring med",
    technologies: "Teknologier: "
}

// Projects

export const projects = [
    {
        name: "Ell",
        text: `Ell er en prototype-applikasjon utviklet sammen med en bruker som en del av en oppgave i emnet IN1050 – Introduksjon til design, bruk og interaksjon. 
        Wireframen ble laget ved hjelp av Miro, og gir en oversikt over både individuelt og felles strømforbruk i kollektiv. Den sporer ditt personlige 
        strømforbruk, slik at du kun betaler for det du selv bruker, og ikke andres forbruk.`,
        img: "images/ell.png",
        alt: "ell",
        usedTechs: "Miro",
        moreInfo: false,
        infoTitle: null,
        link: null,
        pictureOnLeft: true,
        buttonPath: "/project",
        buttonContent: "Mer info →",
        scrollPath: "Ell" 
    },
    {
        name: "The Milk Carton",
        text: `Milk Carton var en "tangible" prototype designet og produsert av teamet mitt, Innotink, i forbindelse med emnet IN1060 – Bruksorientert design. Hovedmålet med prosjektet var å samarbeide tett med brukere for å utvikle en teknisk løsning basert på temaet «på/av». 
        Ikonene på kartongen fungerer som indikatorer for både brukere og kunder, og viser når en bestemt type melk begynner å bli tom eller er helt tom. Teknologien som ble brukt i prosjektet var Arduino. 
        For mer informasjon, besøk Innotink sin nettside via IN1060-emnesiden. `,
        img: "images/milk.png",
        alt: "The Milk Carton",
        usedTechs: "Arduino (C++)",
        moreInfo: true,
        infoTitle: "Info:",
        link: "https://www.uio.no/studier/emner/matnat/ifi/IN1060/v24/prosjektgrupper/innotink/",
        pictureOnLeft: false,
        buttonPath: "/project",
        buttonContent: "Mer info →",
        scrollPath: "The Milk Carton" 
    },
    {
        name: "Algoritmer",
        text: `Jeg har stor interesse for algoritmer og problemløsning, og er spesielt 
        opptatt av at systemer skal kjøre så effektivt som mulig. Jeg bruker mye 
        tid på å utforske og implementere algoritmer med fokus på ytelse og ressursbruk. 
        På GitHub har jeg publisert flere egne implementasjoner, blant annet av 
        sorteringsalgoritmer, skrevet i språk som Python, Java og Kotlin. Disse har jeg skrevet ned slik at jeg kan bruke de i fremtiden.  
        Gjennom dette arbeidet har jeg utviklet en sterk forståelse for algoritmisk tenkning, 
        datastrukturer og hvordan effektive løsninger bidrar til robuste og skalerbare systemer.`,
        img: "images/algorithm.png",
        alt: "algorithm",
        usedTechs: "Visual Studio Code, Python, Java, JavaScript, Kotlin",
        moreInfo: true,
        infoTitle: "GitHub:",
        link: "https://github.com/darellfn/Sorting_Algorithms.git",
        pictureOnLeft: true,
        buttonPath: "/project",
        buttonContent: "Mer info →",
        scrollPath: "algorithm" 
    },
    {
        name: "Denne nettsiden",
        text: `Jeg har utviklet en egen nettside om meg selv som fungerer som en personlig portefølje, hvor jeg presenterer min CV, erfaringer og prosjekter på en oversiktlig og brukervennlig måte. 
        Nettsiden er bygget med HTML, CSS og JavaScript med React rammeverk, og er utviklet med fokus på responsivt design, god struktur og en tydelig brukeropplevelse på tvers av ulike enheter.
        Gjennom arbeidet med nettsiden har jeg fått praktisk erfaring med moderne front-end-utvikling, komponentbasert arkitektur i React og samspillet mellom design og funksjonalitet. 
        Prosjektet gir også et godt bilde av min tekniske kompetanse, arbeidsmetodikk og interesse for kontinuerlig forbedring og effektiv utvikling.`,
        img: "images/dfn.png",
        alt: "dfn",
        usedTechs: "Visual Studio Code, HTML, CSS, JavaScript, React, Vite",
        moreInfo: true,
        infoTitle: "GitHub:",
        link: "https://github.com/darellfn/Darell_Flores_Nguyen.git",
        pictureOnLeft: false,
        buttonPath: "/project",
        buttonContent: "Mer info →",
        scrollPath: "dfn-bro" 
    },
    {
        name: "The Hidden Sky",
        text: `Jeg utviklet et spill i samarbeid med en designer, hvor jeg hadde hovedansvaret for den tekniske delen av prosjektet. Som utvikler jobbet jeg med å implementere spillmekanikker, 
        logikk og struktur ved hjelp av Python og Pygame, mens designeren fokuserte på visuelt uttrykk, brukeropplevelse og spillfølelse. Prosjektet ga verdifull erfaring i tverrfaglig samarbeid, 
        problemløsning og praktisk bruk av programmering i et kreativt produkt. Spillet er fremdeles under arbeid.`,
        img: "images/theHiddenSky.png",
        alt: "The Hidden Sky",
        usedTechs: "Visual Studio Code, Python, Pygame",
        moreInfo: true,
        infoTitle: "GitHub:",
        link: "https://github.com/darellfn/The-Hidden-Sky.git",
        pictureOnLeft: true,
        buttonPath: "/project",
        buttonContent: "Mer info →",
        scrollPath: "The Hidden Sky" 
    }
]

export const softwareProjects = [
    {
        name: "Sunshine",
        text: `Sunshine er en app som lar brukere sjekke lønnsomheten ved å installere solcellepaneler i sin egen bolig. 
        Appen er en Android-applikasjon utviklet i Kotlin ved hjelp av Jetpack Compose. Sunshine benytter sanntids- 
        og historiske observasjoner fra METs Frost API for å gi brukerne innsikt i potensielle besparelser og energiproduksjon 
        fra solcellepaneler.
        
        Dette var et gruppeprosjekt der vi anvendte etablerte metoder innen programvareutvikling for å strukturere utviklingsprosessen. 
        Vi organiserte arbeidet ved hjelp av Scrum for iterativ fremdrift og Kanban for oppgavestyring og visualisering av arbeidsflyt, noe som bidro til effektivt samarbeid, 
        fleksibilitet og jevn fremdrift gjennom hele prosjektet. Vi benyttet plattformen Jira.
        Gjennom dette prosjektet forbedret vi ikke bare våre tekniske ferdigheter, men lærte også viktigheten av teamarbeid og programvareutvikling i praksis.`,
        img: "images/sunshine1.png",
        alt: "Sunshine",
        techTitle: null,
        usedTechs: [],
        moreInfo: false,
        infoTitle: null,
        processTitle: null,
        process: null,
        pictureOnLeft: true,
        hasVideo: false,
        src: null,
        video: null
    },
    {
        name: "Min rolle i Sunshine-prosjektet",
        text: `Jeg jobbet som fullstack-utvikler, og bidro både på front-end og back-end, samtidig som jeg var med på å forme den overordnede systemarkitekturen for å 
        sikre skalerbarhet og vedlikeholdbarhet. I tillegg hadde jeg rollen som teamets GitHub-ansvarlig, der jeg effektiviserte arbeidsflyten for versjonskontroll, 
        gjennomgikk og flettet pull requests, løste konflikter og håndhevet beste praksis for branching og kodekvalitet. I noen grad, kan man si at jeg har gjort noen
        praksiser fra DevOps. Ved å kombinere teknisk utvikling med arkitektonisk design og håndtering av kodearkivet bidro jeg til smidig samarbeid, reduserte 
        integrasjonsproblemer og sikret effektiv leveranse av kode av høy kvalitet gjennom hele prosjektet.`,
        img: "images/sunshine2.png",
        alt: "Sunshine",
        techTitle: "Teknologier: ",
        usedTechs: "Android Studio, Kotlin, Figma, REST API, Jetpack Compose, Mermaid, Miro, Bruno, Google Cloud Platform, GitHub, Jira",
        moreInfo: true,
        infoTitle: "GitHub:",
        link: "https://github.com/darellfn/Sunshine.git",
        processTitle: "Systemutviklingsprosess: ",
        process: "Smidig metode - Scrum & Kanban (ScrumBan)",
        pictureOnLeft: true,
        hasVideo: true,
        src: "https://www.youtube.com/embed/js707j7ybGA",
        video: "Sunshine demo"
    },
    {
        name: "Lockr - Bokskap nettside for FUI",
        text: `I løpet av sommeren deltok jeg i et prosjekt for Fagutvalget ved Institutt for informatikk (FUI) ved Universitetet i Oslo (UiO), der målet vårt var å utvikle et skap-/låsesystem som gjorde det mulig for brukere å reservere 
        skap gjennom en webapplikasjon. Jeg jobbet hovedsaklig med front-end, og brukte React, JavaScript og CSS til å designe og implementere et responsivt, intuitivt og visuelt tiltalende brukergrensesnitt. 
        Prosjektet ga meg verdifull praktisk erfaring innen front-end-utvikling, styrket min forståelse av moderne webteknologier og forbedret min evne til å samarbeide effektivt i team, samtidig som vi leverte en 
        funksjonell og brukervennlig webapplikasjon.`,
        img: "images/lockr.png",
        alt: "Lockr",
        techTitle: "Teknologier: ",
        usedTechs: "Visual Studio Code, Python, React, HTML, Tailwind CSS, JavaScript, Django, Node, GitHub, Jira",
        moreInfo: true,
        infoTitle: "GitHub:",
        link: "https://github.uio.no/FUI/sommerprosjekt-bokskap.git",
        processTitle: "Systemutviklingsprosess: ",
        process: "Smidig metode - Scrum & Kanban (ScrumBan)",
        pictureOnLeft: false,
        hasVideo: false,
        src: null,
        video: null
    }
]


// Technologies

export const technologies1 = [
        "Python",
        "Java",
        "Kotlin",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Android Mobile Development (Jetpack Compose)",
        "Android Studios",
        "Arduino (C++)",
        "Mermaid"
    ]

export const technologies2 = [
        "SQL (PostGreSQL)",
        "Node.js",
        "Docker",
        "Git",
        "GitHub",
        "Jira",
        "Google Cloud Platform",
        "REST API",
        "Bruno",
        "Postman",
        "Scrum",
        "Kanban"
    ]