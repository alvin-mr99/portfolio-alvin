import { Component } from 'solid-js';
import { IoCodeSlashOutline, IoTrophyOutline, IoGlobeOutline, IoHeartOutline } from 'solid-icons/io';

const About: Component = () => {
  const stats = [
    { number: '26+', label: 'Projects Completed', icon: IoCodeSlashOutline },
    { number: '9+', label: 'Years Experience', icon: IoTrophyOutline },
    { number: '25+', label: 'Technologies Mastered', icon: IoGlobeOutline },
    { number: '100%', label: 'Client Satisfaction', icon: IoHeartOutline },
  ];

  return (
    <section id="about" class="py-20 bg-dark-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            About <span class="gradient-text">Me</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Passionate developer with expertise in modern web technologies and mobile development
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image and Info */}
          <div class="space-y-8" data-aos="fade-right">
            <div class="relative">
              <div class="w-full max-w-md mx-auto lg:mx-0 aspect-square rounded-2xl bg-gradient-to-br from-primary-500/20 to-primary-300/20 p-8 glow-effect">
                <div class="w-full h-full rounded-xl bg-dark-700 flex items-center justify-center">
                  <div class="text-center">
                    <div class="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-300 flex items-center justify-center">
                      <span class="text-3xl font-bold text-white">AM</span>
                    </div>
                    <h3 class="text-2xl font-bold gradient-text">Alvin Masykur</h3>
                    <p class="text-gray-400 mt-2">Fullstack Developer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info */}
            <div class="space-y-4">
              <h3 class="text-2xl font-bold text-white mb-4">Personal Information</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <span class="text-primary-400 font-semibold">Name:</span>
                  <span class="ml-2">Alvin Masykur</span>
                </div>
                <div>
                  <span class="text-primary-400 font-semibold">Location:</span>
                  <span class="ml-2">Cilacap, Indonesia</span>
                </div>
                <div>
                  <span class="text-primary-400 font-semibold">Email:</span>
                  <span class="ml-2">alvinmasykur.am@gmail.com</span>
                </div>
                <div>
                  <span class="text-primary-400 font-semibold">Languages:</span>
                  <span class="ml-2">Indonesian, English</span>
                </div>
                <div>
                  <span class="text-primary-400 font-semibold">Degree:</span>
                  <span class="ml-2">Computer Science</span>
                </div>
                <div>
                  <span class="text-primary-400 font-semibold">Freelance:</span>
                  <span class="ml-2 text-green-400">Available</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Description and Stats */}
          <div class="space-y-8" data-aos="fade-left">
            <div class="space-y-6">
              <h3 class="text-3xl font-bold text-white">
                I'm a Passionate <span class="gradient-text">Developer</span>
              </h3>
              
              <div class="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  With 9 years of experience in web and mobile development (2016-2025), I specialize in creating 
                  innovative digital solutions that drive business growth and enhance user experiences. I've worked 
                  8 years at PT Braincode Solution and 1 year at PT Smartelco Solusi Teknologi.
                </p>
                
                <p>
                  My expertise spans across modern frameworks like SolidJS, React, Next.js, Angular, and mobile 
                  technologies including Capacitor for cross-platform development. I'm also proficient in backend 
                  development with Rust, Scala, GoLang, and Laravel, working with various databases like PostgreSQL, 
                  MongoDB, and ClickHouse.
                </p>
                
                <p>
                  I've had the privilege of working on 26+ diverse projects ranging from enterprise applications 
                  for government institutions to mobile apps and AI-powered systems, always focusing on delivering 
                  exceptional user experiences and robust, scalable architecture.
                </p>
              </div>

              <div class="flex flex-wrap gap-4 mt-6">
                <span class="px-4 py-2 bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full text-sm">
                  Full Stack Development
                </span>
                <span class="px-4 py-2 bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full text-sm">
                  Mobile Development
                </span>
                <span class="px-4 py-2 bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full text-sm">
                  UI/UX Design
                </span>
                <span class="px-4 py-2 bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full text-sm">
                  System Architecture
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div class="mt-20" data-aos="fade-up">
          <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div class="text-center p-6 rounded-lg bg-dark-700/50 border border-dark-600 card-hover">
                <div class="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full mb-4 mx-auto">
                  <stat.icon class="w-8 h-8 text-white" />
                </div>
                <div class="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div class="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 