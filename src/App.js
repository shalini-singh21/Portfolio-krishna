
import './App.css';
// import './App.css';
import Contact from './component/Contact';
import Intro from './component/Intro';
import Navbar from './component/Navbar';
import Skills from './component/Skills';
import Project from './component/Project';

import Clients from './component/Clients';
import Softskills from './component/Softskills';

function App() {
  return (
    <>

      <Navbar />
      <Intro />
      <Skills />
      <Softskills/>
      <Clients />
      <Project />
      <Contact />
    </>
  );
}

export default App;
