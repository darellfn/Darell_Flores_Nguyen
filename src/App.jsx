import Webpage from "./HomePage/Components/Webpage.jsx"
import WebHeader from "./HomePage/Components/WebHeader.jsx"
import Card from "./HomePage/Components/Card.jsx"
import Cv from "./CVPage/Components/CV.jsx"
import Project from "./ProjectPage/Project.jsx"
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={
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
        }>
          </Route>

      </Routes>
    </Router>
  );
}

export default App


/*<>
    <WebHeader />
    <Webpage>
      <Card />
    </Webpage>
    <Cv />
    </>*/