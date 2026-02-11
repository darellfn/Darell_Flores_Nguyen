import { contact } from './cvPageContent.js'

function Contact() {
    return (
        <section className="section">
            <h1 className="titles">
                {contact.title}
            </h1>

            <div className="divider"></div>

            <div className="section-contact">
                <div>
                    {contact.socials.map((social, index) => {
                        if (!social.hasLink) {
                            return (
                                <p className="contacts" key={index}>
                                    <strong>{social.social}</strong>{social.value}
                                </p>
                            )
                        }
                        })}
                </div>

                <div>
                    {contact.socials.map((social, index) => {
                        if (social.hasLink) {
                            return (
                                <p className="contacts" key={index}>
                                    <strong>{social.social}</strong>
                                    <a href={social.link} target="_blank" rel="noopener noreferrer">
                                    {social.value}
                                    </a>
                                </p>
                            )
                        }
                    })}
                </div>
            </div>            
        </section>
    )
}

export default Contact