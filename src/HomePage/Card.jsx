import { useNavigate } from 'react-router-dom'
import { cardContent } from './homePageContent.js'
import { aboutMeButton } from './homePageContent.js'
import { socials } from './homePageContent.js'

function Card() {
    const navigate = useNavigate()

    return (
        <div className = "card">
            <div className = "pic-div">

                <div className="profile-pic">
                    <img className = "card-image" alt = {cardContent.alt} src = {cardContent.img}></img>
                </div>
                             
            </div>
            <div className = "text-div">
                <p className='hello'>
                    {cardContent.intro}
                </p>
                <p className = "role">
                    {cardContent.role}
                </p>
                <p className = "bio-text">
                    {cardContent.bio}
                </p>

                <div className = "button-div">
                    <button className = "card-button" onClick={() => {
                        navigate(aboutMeButton.path);
                        window.scrollTo(0, 0);
                    }
                    }>
                        {aboutMeButton.content}
                    </button>
                </div>

                <div className='link-div'>
                    <a className='link' href={socials.githubLink} target="_blank" rel="noopener noreferrer">
                        <img src={socials.githubImg}></img>
                    </a>

                    <a className='link' href={socials.linkedInLink}target="_blank" rel="noopener noreferrer">
                        <img src={socials.linkedInImg}/>
                    </a>

                    <div className='link' onClick={ () => {
                        navigate(socials.emailPath);
                        window.scrollTo(0, 0);
                    }}>
                        <img src={socials.emailImg} className='mail'/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Card