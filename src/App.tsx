import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
// import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Awards from './components/sections/Awards';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Projects />
        {/* <Skills /> */}
        <Experience />
        <Awards />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
