import { NavLink } from 'react-router-dom'
import './ContactPage.css'
import { contact } from './contactPageContent.js'

function ContactPage() {
    return (
        <div className='contact-page'>
            <h1>
                {contact.title1} <span className='highlight'>{contact.title2}</span>
            </h1>
            <div className='contact-card'>
                {contact.socials.map((cont, index) => {
                    if (!cont.hasLink) {
                        return (
                            <p key={index}>
                                <strong>{cont.social}</strong>{cont.value}
                            </p>
                        )
                    } else {
                        return (
                            <p>
                                <strong>{cont.social}</strong>
                                <a href={cont.link} target="_blank" rel="noopener noreferrer">
                                    {cont.value}
                                </a>
                            </p>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default ContactPage