//Components
import About from './components/About.jsx';
import GoUp from './components/GoUp.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Skills from './components/Skills.jsx';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className='main-section'>
        <About />
        <Projects />
        <Skills />
      </section>
      <GoUp />
    </>
  );
}

export default App;