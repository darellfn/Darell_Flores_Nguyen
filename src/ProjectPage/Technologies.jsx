import { titles } from "./projectPageContent"
import { technologies1 } from "./projectPageContent"
import { technologies2 } from "./projectPageContent"

function Technologies() {

    return (
        <>
        <h1 className="technology-title">
            {titles.technology}
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