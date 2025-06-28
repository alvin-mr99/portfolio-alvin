import { Component, onMount } from 'solid-js';
import { IoDownloadOutline, IoMailOutline } from 'solid-icons/io';

const Hero: Component = () => {
  onMount(() => {
    // Typed.js effect for animated text
    const words = ['Fullstack Developer', 'UI/UX Designer', 'Mobile Developer', 'Problem Solver'];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typedElement = document.getElementById('typed-text');

    const type = () => {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        typedElement!.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
      } else {
        typedElement!.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
      }

      let typeSpeed = isDeleting ? 100 : 150;

      if (!isDeleting && charIndex === currentWord.length) {
        typeSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    };

    type();
  });

  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" class="relative min-h-screen flex items-center justify-center bg-dark-900 cyber-grid">
      <div class="absolute inset-0 bg-gradient-to-br from-dark-900/90 via-dark-800/50 to-dark-900/90"></div>
      
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="space-y-8" data-aos="fade-up">
          {/* Avatar */}
          <div class="relative mx-auto w-32 h-32 mb-8">
            <div class="w-full h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-300 p-1 glow-effect floating">
              <div class="w-full h-full rounded-full bg-dark-800 flex items-center justify-center">
                <span class="text-4xl font-bold gradient-text">AM</span>
              </div>
            </div>
          </div>

          {/* Main Heading */}
          <div class="space-y-4">
            <h1 class="hero-title text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Hi, I'm <span class="gradient-text">Alvin Masykur</span>
            </h1>
            
            <div class="hero-subtitle text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
              I'm a <span id="typed-text" class="gradient-text font-semibold"></span>
              <span class="animate-pulse text-primary-400">|</span>
            </div>
          </div>

          {/* Description */}
          <p 
            class="max-w-3xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed"
            data-aos="fade-up" 
            data-aos-delay="200"
          >
            Passionate about creating innovative digital solutions with modern technologies. 
            Specialized in building scalable web applications, mobile apps, and user-centered designs 
            that make a real impact.
          </p>

          {/* CTA Buttons */}
          <div 
            class="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
            data-aos="fade-up" 
            data-aos-delay="400"
          >
            <button
              onClick={scrollToProjects}
              class="btn-primary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <span>View My Work</span>
            </button>
            
            <button
              onClick={scrollToContact}
              class="btn-secondary flex items-center space-x-2 text-lg px-8 py-4"
            >
              <IoMailOutline class="w-5 h-5" />
              <span>Get In Touch</span>
            </button>
          </div>

          {/* Download CV */}
          <div data-aos="fade-up" data-aos-delay="600">
            <a
              href="/cv.pdf"
              download="Alvin_Masykur_CV.pdf"
              class="inline-flex items-center space-x-2 text-primary-400 hover:text-primary-300 transition-colors duration-200 mt-8"
            >
              <IoDownloadOutline class="w-5 h-5" />
              <span>Download CV</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          class="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          data-aos="fade-in" 
          data-aos-delay="800"
        >
          <div class="w-6 h-10 border-2 border-primary-400 rounded-full flex justify-center">
            <div class="w-1 h-3 bg-primary-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 