
import './App.css';

import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import Project from './component/Project';
import Clients from './component/Clients';

import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/intro' element={<Intro />}/>
          <Route exact path='/skills' element={<Skills />}/>
          <Route exact path='Project' element={<Project />}/>
          <Route exact path='/clients' element={<Clients _props="krishna"/>}/>
        </Routes>

      </Router>
      {/* <Navbar />
      <Intro />


      <Skills />
      <Softskills/>
      <Clients />
      {/* <Project /> */}
      {/* <Contact /> */}

    </>
  );
}

export default App;
