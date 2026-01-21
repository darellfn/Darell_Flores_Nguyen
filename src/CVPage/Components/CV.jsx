import Education from "./Education.jsx"
import Experience from "./Experience.jsx"

function Cv() {
    return (
    <div className="CV-page">
        {Education()}
        {Experience()}
    </div>
    );
}

export default Cv