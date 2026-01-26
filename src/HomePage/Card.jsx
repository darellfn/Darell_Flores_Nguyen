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
                    <button className = "card-button" onClick={() => {
                        navigate("/aboutme");
                        window.scrollTo(0, 0);
                    }
                    }>
                        OM MEG
                    </button>
                </div>

                <div className='link-div'>
                    <a className='link' href="https://github.com/darellfn" target="_blank" rel="noopener noreferrer">
                        <img src="/images/github.png"></img>
                    </a>

                    <a className='link' href="https://www.linkedin.com/in/darell-flores-nguyen-a02225289" target="_blank" rel="noopener noreferrer">
                        <img src="/images/linkedin.png"/>
                    </a>

                    <div className='link' onClick={ () => {
                        navigate("/contact");
                        window.scrollTo(0, 0);
                    }}>
                        <img src="/images/mail.png" className='mail'/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card