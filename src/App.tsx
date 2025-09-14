import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Section from './components/Section';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './components/Contact';

function App() {
  // Update document title
  useEffect(() => {
    document.title = "Vedhamsh - Portfolio";
  }, []);

  return (
    <div className="flex">
      <Sidebar />
       
      <main className="flex-1 ml-20">
        <div className="snap-y snap-mandatory h-screen overflow-y-auto">
          <Section id="home">
            <Home />
          </Section>
          
          <Section id="about">
            <About />
          </Section>
          
          <Section id="projects">
            <Projects />
          </Section>
          
          <Section id="contact" className="bg-blue-50">
            <Contact />
          </Section>
        </div>
      </main>
    </div>
  );
}

export default App;