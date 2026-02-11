import Webpage from "./Webpage";
import Card from "./Card";
import LastestProjects from "./LatestProjects";
import './Home.css'

function Home() {
    return (
        <Webpage>
            <Card/>
            <LastestProjects></LastestProjects>
        </Webpage>
    )
}

export default Home