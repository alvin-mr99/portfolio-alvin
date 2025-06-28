import { Component, createSignal, onMount } from 'solid-js';
import { IoMenuOutline, IoCloseOutline } from 'solid-icons/io';

const Navbar: Component = () => {
  const [isOpen, setIsOpen] = createSignal(false);
  const [scrolled, setScrolled] = createSignal(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  onMount(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav class={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled() ? 'bg-dark-900/95 backdrop-blur-lg shadow-lg' : 'bg-transparent'
    }`}>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          {/* Logo */}
          <div class="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              class="text-2xl font-bold gradient-text"
            >
              Portfolio
            </a>
          </div>

          {/* Desktop Menu */}
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  class="text-gray-300 hover:text-primary-400 px-3 py-2 text-sm font-medium transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div class="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen())}
              class="text-gray-300 hover:text-primary-400 transition-colors duration-200"
            >
              {isOpen() ? (
                <IoCloseOutline class="h-6 w-6" />
              ) : (
                <IoMenuOutline class="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div class={`md:hidden transition-all duration-300 overflow-hidden ${
        isOpen() ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div class="px-2 pt-2 pb-3 space-y-1 bg-dark-800/95 backdrop-blur-lg">
          {navItems.map((item) => (
            <a
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              class="text-gray-300 hover:text-primary-400 block px-3 py-2 text-base font-medium transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 