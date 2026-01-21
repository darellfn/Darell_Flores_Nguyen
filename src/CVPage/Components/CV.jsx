function Cv() {
    return (
    <div className="CV-page">
        {Education()}
        {Experience()}
    </div>
    );
}

export default Cv

function Education() {
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
      
      <section className="section">
        
        <div className="titles">
            <h1 className="CV-titles">
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

function Experience() {
    return (
        <section className="section">

            <div className="titles">
                <h1 className="CV-titles">
                    Erfaringer
                </h1>
            </div>
            
            <div className="divider"></div>

                <h2 className="">
                    Butikkmedarbeider på Rema 1000 Vulkan
                </h2>

                <h4 className="dates">
                    2025
                </h4>

                <ul className="experience-list">
                    <li>
                        Kassearbeid
                    </li >
                    <li>
                        Varepåfylling
                    </li>

                    <li>
                        Hjelpe og gi god service til kunder
                    </li>
                </ul>
                
            <div className="divider"></div>

                <h2 className="">
                    Servicemedarbeider hos Ryde Technology
                </h2>

                    <p className="dates">
                        2025
                    </p>

                    <ul className="experience-list">
                        <li>
                            Kjøre rundt Oslo for å vedlikeholde scooter
                        </li>

                        <li>
                            Bytte batteri på scooter
                        </li>

                        <li>
                            Forfallende lagerarbeid
                        </li>
                    </ul>

            <div className="divider"></div>


                <h2 className="">
                    Servitør på Sabi Sushi Fornebu
                </h2>

                    <p className="dates">
                        2024
                    </p>

                    <ul className="experience-list">
                        <li >
                            Kassearbeid
                        </li>

                        <li>
                            Varepåfylling
                        </li>

                        <li> 
                            Servere mat og drikke til kunder
                        </li>

                        <li>
                            Hjelpe og gi god service til kunder
                        </li>
                    </ul>

            <div className="divider"></div>

                <h2 className="">
                    Renholder hos Insider Facility Solutions avd. Trondheim 
                </h2>

                    <h4 className="dates">
                        2022-2023
                    </h4>

                    <ul className="experience-list">

                        <li>
                            Vedlikehold og vasking av tog
                        </li>

                        <li>
                            Påfylling av varer i tog
                        </li>

                        <li>
                            Forfallende lagerarbeid
                        </li>

                
                    </ul>                

            <div className="divider"></div>

                
                <h2 className="">
                    Servicemedarbeider hos Rentokil Initial avd. Trondheim 
                </h2>

                    <h4 className = "dates">
                        2021-2022
                    </h4>
                    
                    <ul className="">

                        <li>
                            Vedlikehold og service for våre produkter
                        </li>

                        <li>
                            Kjørte varebil rundt Trøndelag og lverte hygieneartikler
                        </li>

                        <li>
                            Montering og demontering av produkter
                        </li>

                        <li>
                            Forfallende lagerarbeid
                        </li>

                    </ul>



        </section>        
    )
}