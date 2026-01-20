function Cv() {
  const semester = {
    "1. Semester": [
      "IN1000 - Introduksjon til objektorientert programmering",
      "IN1020 - Introduksjon til datateknologi",
      "IN1050 - Introduksjon til design, bruk, interaksjon"
    ],
    "2. Semester": [
      "IN1010 - Objektorientert programmering",
      "IN1030 - Systemer, krav og konsekvenser",
      "IN1060 - Bruksorientert design"
    ],
    "3. Semester": [
      "EXPHIL03 - Examen philosophicum",
      "IN2020 - Metoder i interaksjonsdesign"
    ],
    "4. Semester": [
      "IN2000 - Software Engineering med prosjektarbeid",
      "IN2150 - IT i organisasjoner"
    ],
    "5. Semester": [
      "IN2010 - Algoritmer og datastrukturer",
      "IN2120 - Informasjonssikkerhet",
      "IN2090 - Databaser og datamodellering",
      "MEVIT2725 - Video Games: Aesthetics, Industry and Culture"
    ],
    "6. Semester": [
      "MEVIT2110 – Medie- og kulturteori",
      "MEVIT2600 – Mediepåvirkning",
      "MEVIT2532 – Filmhistorie"
    ]
  };

  return (
    <div className="CV-page">
      
      <section className="utdanning-section">
        
        <div className="edu-titles">
            <h1 className="CV-titles">
                Utdanning
            </h1>
        </div>

        <div className="divider"></div>

        <h2 className="undertitles">
          Bachelor i Informatikk: Design, bruk og interaksjon
        </h2>

        <h2 className="alma-mater">
            Universitetet i Oslo
        </h2>

        <p className="dates">
            Aug 2023 – Jun 2026
        </p>

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

        <h2 className="alma-mater">
            Byåsen videregående skole
        </h2>

        <p className="dates">
            Aug 2019 – Jun 2022
        </p>

      </section>
    </div>
  );
}

export default Cv