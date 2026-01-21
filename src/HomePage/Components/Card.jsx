function Card() {
    return (
        <div className = "card">
            <div className = "pic-div">
                <img className = "card-image" alt = "dfn" src = "images/profilbilde.jpeg"></img>
                
                <h2>
                    Darell Flores Nguyen
                </h2>
                
                <p>
                    Alder: 22
                </p>

                <p>
                    Stilling: B.sc. på Universitetet i Oslo
                </p> 
                
                <p>
                    Fun fact: I like collecting consoles
                </p>
                                          
            </div>
            <div className = "text-div">
                <p className = "hello">
                    Hello
                </p>
                <p className = "bio-text">
                    Velkommen til nettsiden min. 
                    Dette er mitt personlige rom hvor jeg viser frem arbeidet mitt, 
                    ferdighetene mine og prosjektene mine mens jeg utvikler meg som utvikler. 
                    Jeg har jobbet som fullstack-utvikler (front-end og back-end) i ulike prosjekter. 
                    Ta gjerne en titt rundt og ikke nøl med å ta kontakt.
                </p>

                <div className = "button-div">
                    <button className = "card-button">
                        CV
                    </button>
                    <button className = "card-button">
                        Prosjekter
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Card