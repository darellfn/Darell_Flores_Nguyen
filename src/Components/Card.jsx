function Card() {
    return (
        <div className = "card">
            <div className = "pic-div">
                <img className = "card-image" alt = "dfn" src = "images/profilbilde.jpeg"></img>
                
                <h2>
                    Darell Flores Nguyen
                </h2>
                
                <p>
                    Age: 22
                </p>

                <p>
                    Occupation: B.sc. at University in Oslo
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
                    Welcome to my website. 
                    This is my personal space where I showcase my work, skills, and projects as I grow as a developer. 
                    I have worked as a full-stack developer (front-end & back-end) in projects.
                    Please take a look around and feel free to reach out.
                </p>

                <div className = "button-div">
                    <button className = "card-button">
                        CV
                    </button>
                    <button className = "card-button">
                        Projects
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Card