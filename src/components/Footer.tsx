import { Component } from 'solid-js';
import { IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram, IoMailOutline, IoPhonePortraitOutline, IoLocationOutline } from 'solid-icons/io';

const Footer: Component = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const services = [
    'Web Development',
    'Mobile App Development',
    'UI/UX Design',
    'System Architecture',
    'Technical Consulting',
    'API Development',
  ];

  const socialLinks = [
    { icon: IoLogoGithub, url: 'https://github.com/alvin-developer', name: 'GitHub' },
    { icon: IoLogoLinkedin, url: 'https://linkedin.com/in/alvin-developer', name: 'LinkedIn' },
    { icon: IoLogoTwitter, url: 'https://twitter.com/alvin_developer', name: 'Twitter' },
    { icon: IoLogoInstagram, url: 'https://instagram.com/alvin.developer', name: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer class="bg-dark-900 border-t border-dark-700">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div class="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div class="lg:col-span-2">
            <div class="mb-6">
              <h3 class="text-2xl font-bold gradient-text mb-4">Alvin Masykur</h3>
              <p class="text-gray-400 text-lg leading-relaxed max-w-md">
                Passionate fullstack developer with 9 years experience creating innovative digital solutions 
                with modern technologies. Specialized in Rust, Scala, SolidJS, React, and mobile development.
              </p>
            </div>

            {/* Contact Info */}
            <div class="space-y-3">
              <div class="flex items-center space-x-3 text-gray-400">
                <IoMailOutline class="w-5 h-5 text-primary-400" />
                <a href="mailto:alvinmasykur.am@gmail.com" class="hover:text-primary-400 transition-colors">
                  alvinmasykur.am@gmail.com
                </a>
              </div>
              <div class="flex items-center space-x-3 text-gray-400">
                <IoPhonePortraitOutline class="w-5 h-5 text-primary-400" />
                <a href="tel:+6281234567890" class="hover:text-primary-400 transition-colors">
                  +62 812-3456-7890
                </a>
              </div>
              <div class="flex items-center space-x-3 text-gray-400">
                <IoLocationOutline class="w-5 h-5 text-primary-400" />
                <span>Cilacap, Indonesia</span>
              </div>
            </div>

            {/* Social Links */}
            <div class="mt-6">
              <div class="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center text-gray-400 hover:bg-primary-500 hover:text-white transition-all duration-200 hover:scale-110"
                    title={social.name}
                  >
                    <social.icon class="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 class="text-white font-semibold text-lg mb-6">Quick Links</h4>
            <ul class="space-y-3">
              {quickLinks.map((link) => (
                <li>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    class="text-gray-400 hover:text-primary-400 transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 class="text-white font-semibold text-lg mb-6">Services</h4>
            <ul class="space-y-3">
              {services.map((service) => (
                <li>
                  <span class="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div class="py-8 border-t border-dark-700">
          <div class="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 class="text-white font-semibold text-lg mb-2">Stay Updated</h4>
              <p class="text-gray-400">
                Get notified about new projects and tech insights.
              </p>
            </div>
            <div class="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                class="flex-1 px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none"
              />
              <button class="px-6 py-3 bg-gradient-to-r from-primary-600 to-primary-500 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-600 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div class="py-6 border-t border-dark-700">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div class="text-gray-400 text-sm">
              © {currentYear} Alvin Masykur. All rights reserved.
            </div>
            
            <div class="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" class="hover:text-primary-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" class="hover:text-primary-400 transition-colors">
                Terms of Service
              </a>
              <div class="flex items-center space-x-2">
                <span>Made with</span>
                <span class="text-red-400">❤️</span>
                <span>in Cilacap</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Back to Top */}
        <button
          onClick={() => scrollToSection('#home')}
          class="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-full flex items-center justify-center hover:from-primary-700 hover:to-primary-600 transition-all transform hover:scale-110 shadow-lg z-50"
          title="Back to top"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer; 