import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import Contact from "./Contact.jsx";

function Cv() {
    return (
    <>
        <div className="CV-page">
            {Education()}
            {Experience()}
        </div>
        <Contact/>
    </>

    );
}

export default Cv