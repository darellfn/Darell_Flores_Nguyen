import Webpage from "./HomePage/Components/Webpage.jsx"
import WebHeader from "./HomePage/Components/WebHeader.jsx"
import Card from "./HomePage/Components/Card.jsx"
import Cv from "./CVPage/Components/CV.jsx"

function App() {
  return(
    <>
    <WebHeader />
    <Webpage>
      <Card />
    </Webpage>
    <Cv />
    </>

  );
}

export default App
