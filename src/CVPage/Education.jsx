function Education() {
  const semester = {
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

  return (
      
      <section className="section">
        
        <div className="titles">
            <h1 className="titles">
                Utdanning
            </h1>
        </div>

        <div className="divider"></div>

        <h2 className="undertitles">
          Bachelor i Informatikk: Design, bruk og interaksjon
        </h2>

        <h4 className="">
            Universitetet i Oslo
        </h4>

        <h4 className = "dates">
            Aug 2023 – Jun 2026
        </h4>

        {Object.entries(semester).map(([semesterName, courses]) => (
          
          <div key={semesterName} className="">
            <h3>{semesterName}</h3>

            <ul className="">
              {courses.map((course, index) => (
                <li key={index}>{course}</li>
              ))}
            </ul>
          </div>

        ))}

        <div className="divider"></div>

        <h2 className="undertitles">
            Studiespesialisering
        </h2>

        <h4 className="">
            Byåsen videregående skole
        </h4>

        <h4 className = "dates">
            Aug 2019 – Jun 2022
        </h4>

      </section>
  );
}

export default Education