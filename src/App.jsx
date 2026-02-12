import Layout from "./Layout.jsx"
import Home from "./HomePage/Home.jsx"
import AboutMe from "./AboutMePage/AboutMe.jsx"
import Cv from "./CVPage/CV.jsx"
import ContactPage from "./ContactPage/ContactPage.jsx"
import Project from "./ProjectPage/Project.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="project" element={<Project />}/>
          <Route path="aboutme" element={<AboutMe />}/>  
          <Route path="cv" element={<Cv />}/>        
          <Route path="contact" element={<ContactPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App