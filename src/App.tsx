import { Component, onMount } from 'solid-js';
import AOS from 'aos';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

const App: Component = () => {
  onMount(() => {
    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100,
    });
  });

  return (
    <div class="relative min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <ParticlesBackground />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App; 