function Technologies() {
    const technologies1 = [
        "Python",
        "Java",
        "Kotlin",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Android Mobile Development (Jetpack Compose)",
        "Android Studios",
        "Arduino (C++)"
    ]

    const technologies2 = [
        "SQL (PostGreSQL)",
        "Database",
        "Node.js",
        "Docker",
        "Git",
        "GitHub",
        "Jira",
        "Google Cloud Platform",
        "REST API",
        "Bruno",
        "Postman",
        "Scrum",
        "Kanban"
    ]

    return (
        <>
        <h1 className="technology-title">
            Teknologier
        </h1>

        <div className="technology-section">
            <ul>
                {technologies1.map((technology, index) => (
                    <li key={index} className="technology">
                        {technology}
                    </li>
                ))}
            </ul>

            <ul>
                {technologies2.map((technology, index) => (
                    <li key={index} className="technology">
                        {technology}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Technologies