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
                
                                          
            </div>
            <div className = "text-div">
                <p className='hello'>
                    Hei, jeg er Darell
                </p>
                <p className = "role">
                    Full-stack Developer
                </p>
                <p className = "bio-text">
                    Velkommen til nettsiden min. 
                    Dette er mitt personlige sted hvor jeg viser frem arbeidet mitt, 
                    ferdighetene mine og prosjektene mine mens jeg utvikler meg som utvikler. 
                    Jeg har jobbet som fullstack-utvikler (front-end og back-end) i ulike prosjekter. 
                    Ta gjerne en titt rundt og ikke nøl med å ta kontakt.
                </p>

                <div className = "button-div">
                    <button className = "card-button" onClick={() => navigate("/cv")}>
                        OM MEG
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Card