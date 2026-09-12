import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <a href="#about" className="skip-to-content">
        Skip to main content
      </a>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
