import Webpage from "./HomePage/Webpage.jsx"
import WebHeader from "./Components/WebHeader.jsx"
import Card from "./HomePage/Card.jsx"
import Cv from "./CVPage/Components/CV.jsx"
import Project from "./ProjectPage/Project.jsx"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route exact path="/" element={
          <>
            <WebHeader/>
            <Webpage>
              <Card/>
            </Webpage>
          </>
        }/>

        <Route path="/cv" element={
          <>
            <WebHeader/>
            <Cv/>
          </>
        }/>

        <Route path="/project" element={
          <>
            <WebHeader/>
            <Project className="project-card"/>
          </>
        }/>

      </Routes>
    </Router>
  );
}

export default App