import Education from "./Education.jsx"
import Experience from "./Experience.jsx"
import Contact from "./Contact.jsx";
import './CV.css'

function Cv() {
    return (
    <>
        <Contact/>
        <div className="CV-page">
            <Education/>
            <Experience/>
        </div>
    </>

    );
}

export default Cv