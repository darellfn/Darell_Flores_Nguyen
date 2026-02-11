// Global

export const titles = {
    education: "Utdanning",
    experience: "Erfaringer"
};

// Contact card

export const contact = {
    title: "Kontakt",
    socials: [
        {social: "Telefon: ", value: "+47 941 91 948", hasLink: false},
        {social: "Email: ", value: "darellfn03@gmail.com ", hasLink: false},
        {social: "GitHub:", value: "darellfn", link: "https://github.com/darellfn", hasLink: true},
        {social: "LinkedIn:", value: "Darell Flores Nguyen", link: "https://www.linkedin.com/in/darell-flores-nguyen-a02225289", hasLink: true}
    ]
};

// Education card

export const semester = {
    "6. Semester": [
      "MEVIT2110 – Medie- og kulturteori",
      "MEVIT2600 – Mediepåvirkning",
      "MEVIT2532 – Filmhistorie"
    ],
    "5. Semester": [
      "IN2010 - Algoritmer og datastrukturer",
      "IN2120 - Informasjonssikkerhet",
      "IN2090 - Databaser og datamodellering",
      "MEVIT2725 - Video Games: Aesthetics, Industry and Culture"
    ], 
    "4. Semester": [
      "IN2000 - Software Engineering med prosjektarbeid",
      "IN2150 - IT i organisasjoner"
    ],
    "3. Semester": [
      "EXPHIL03 - Examen philosophicum",
      "IN2020 - Metoder i interaksjonsdesign"
    ],
    "2. Semester": [
      "IN1010 - Objektorientert programmering",
      "IN1030 - Systemer, krav og konsekvenser",
      "IN1060 - Bruksorientert design"
    ],
    "1. Semester": [
      "IN1000 - Introduksjon til objektorientert programmering",
      "IN1020 - Introduksjon til datateknologi",
      "IN1050 - Introduksjon til design, bruk, interaksjon"
    ]
  };

export const education = [
    {grade: "Bachelor i Informatikk: Design, bruk og interaksjon", place: "Universitetet i Oslo", duration: "Aug 2023 – Jun 2026", courses: semester, hasCourses: true},
    {grade: "Studiespesialisering", place: "Byåsen videregående skole", duration: "Aug 2019 – Jun 2022", courses: null, hasCourses: false}
];

// Experience card

export const experiences = [
    {position: "Butikkmedarbeider på Rema 1000 Vulkan", year: "2025", expList: ["Kassearbeid", "Varepåfylling", "Hjelpe og gi god service til kunder"]},
    {position: "Servicemedarbeider hos Ryde Technology", year: "2025", expList: ["Kjøre rundt Oslo for å vedlikeholde scooter", "Bytte batteri på scooter", "Forfallende lagerarbeid"]},
    {position: "Servitør på Sabi Sushi Fornebu", year: "2024", expList: ["Kassearbeid", "Varepåfylling", "Servere mat og drikke til kunder", "Hjelpe og gi god service til kunder"]},
    {position: "Renholder hos Insider Facility Solutions avd. Trondheim", year: "2022-2023", expList: ["Vedlikehold og vasking av tog", "Påfylling av varer i tog", "Forfallende lagerarbeid"]},
    {position: "Servicemedarbeider hos Rentokil Initial avd. Trondheim", year: "2021-2022", expList: ["Vedlikehold og service for våre produkter", "Kjørte varebil rundt Trøndelag og lverte hygieneartikler", "Montering og demontering av produkter", "Forfallende lagerarbeid"]}
]