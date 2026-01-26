import { NavLink } from 'react-router-dom'
import './ContactPage.css'

function ContactPage() {
    const contacts = "Bruh"

    return (
        <div className='contact-page'>
            <h1>
                Ta kontakt
            </h1>
            <div className='contact-card'>
                <p>
                    <strong>Telefon:</strong> +47 941 91 948
                </p>

                <p >
                    <strong>Email:</strong> darellfn03@gmail.com  
                </p>

                <p>
                    <strong>GitHub:</strong>
                    <a href="https://github.com/darellfn" target="_blank" rel="noopener noreferrer">
                        darellfn
                    </a>
                </p>

                <p>
                    <strong>LinkedIn:</strong> 
                    <a href="https://www.linkedin.com/in/darell-flores-nguyen-a02225289" target="_blank" rel="noopener noreferrer">
                    Darell Flores Nguyen
                    </a>
                </p>

            </div>
        </div>
    )
}

export default ContactPage