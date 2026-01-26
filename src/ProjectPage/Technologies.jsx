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
        "Arduino (C++)",
        "Mermaid"
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
            Teknologier jeg har erfaring med
        </h1>

        <div className="technology-section">
            <ul className="technology-list">
                {technologies1.map((technology, index) => (
                    <li key={index} className="technology1">
                        {technology}
                    </li>
                ))}
            </ul>

            <ul className="technology-list">
                {technologies2.map((technology, index) => (
                    <li key={index} className="technology2">
                        {technology}
                    </li>
                ))}
            </ul>
        </div>
        </>
    )
}

export default Technologies