import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Card() {
    const navigate = useNavigate()

    return (
        <div className = "card">
            <div className = "pic-div">

                <div className="profile-pic">
                    <img className = "card-image" alt = "dfn" src = "images/profilbilde.jpeg"></img>
                </div>
                
                <h2>
                    Darell Flores Nguyen
                </h2>
                
                <div className="pic-bio">
                    <p>
                        <strong>Alder:</strong> 22
                    </p>

                    <p>
                        <strong>Stilling:</strong> B.sc. på Universitetet i Oslo
                    </p> 
                
                    <p>
                        <strong>Rolle:</strong> Fullstack utvikler
                    </p>
                </div>
                                          
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
                    <button className = "card-button" onClick={() => navigate("/cv")}>
                        CV
                    </button>
                    
                    <button className = "card-button" onClick={() => navigate("/project")}>
                        Prosjekter
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Card