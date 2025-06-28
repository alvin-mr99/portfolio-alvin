import { Component } from 'solid-js';
import { IoBriefcaseOutline, IoSchoolOutline, IoCalendarOutline } from 'solid-icons/io';

const Experience: Component = () => {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Fullstack Developer',
      company: 'PT Smartelco Solusi Teknologi',
      period: '2024 - Present',
      location: 'Indonesia',
      description: [
        'Leading development of telecommunications and workforce management systems',
        'Architecting backend systems using Rust, Scala, and GoLang for high-performance applications',
        'Developing AI-powered solutions including OCR LLM and conversational platforms',
        'Managing full-stack development from backend APIs to frontend interfaces'
      ],
      technologies: ['Rust', 'Scala', 'GoLang', 'SolidJS', 'AI/ML', 'PostgreSQL']
    },
    {
      type: 'work',
      title: 'Senior Software Engineer',
      company: 'PT Braincode Solution',
      period: '2016 - 2024',
      location: 'Indonesia',
      description: [
        'Developed 20+ enterprise applications for government and private sectors',
        'Built comprehensive systems for ministries including Maritime Affairs, Agriculture, and PLN',
        'Created mobile applications with biometric authentication and offline capabilities',
        'Led architecture design for large-scale systems handling millions of users',
        'Mentored junior developers and established development standards'
      ],
      technologies: ['SolidJS', 'React', 'Laravel', 'Kotlin', 'Java', 'PostgreSQL', 'MongoDB']
    },
    {
      type: 'education',
      title: 'Electrical Power Installation Engineering',
      company: 'SMK Negeri 2 Cilacap',
      period: '2013 - 2016', 
      location: 'Cilacap, Indonesia',
      description: [
        'Studied fundamentals of electricity and electronics',
        'Learned Program Logic Control (PLC)',
        'Trained in high-voltage electricity, transformers, and electric motors',
        'Practiced residential electrical installations',
        'Trained in air conditioner and refrigerator servicing',
        'Skilled in electric welding and lathe machine operation',
        'Studied technical drawing for installation planning'
      ],
      technologies: [
        'Basic Electricity',
        'PLC',
        'High Voltage',
        'Transformer',
        'Electric Motor',
        'AC & Refrigerator Servicing',
        'Electric Welding',
        'Lathe Machine',
        'Technical Drawing'
      ]
    }
    
  ];

  const certifications = [
    {
      name: 'Internship Certificate - 3 Months',
      issuer: 'PT Holcim Tbk',
      year: '2015',
      credential: 'PKL-HOLCIM'
    },
    {
      name: 'Basic Military Discipline Training (LDDK) - 2 Months',
      issuer: 'Indonesian Navy, Cilacap Division',
      year: '2016',
      credential: 'LDDK-AL-CIL'
    },
    {
      name: 'PLC (Programmable Logic Controller) Electricity Certificate',
      issuer: 'Vocational High School (SMK)',
      year: '2016',
      credential: 'PLC-SMK'
    },
    {
      name: 'Practical Exam Certificate – Residential and Electric Motor Wiring',
      issuer: 'Vocational High School (SMK)',
      year: '2016',
      credential: 'EXAM-ELEC-MOTOR'
    }
  ];

  return (
    <section id="experience" class="py-20 bg-dark-800/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            My <span class="gradient-text">Experience</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional journey and educational background that shaped my expertise
          </p>
        </div>

        {/* Experience Timeline */}
        <div class="relative">
          {/* Timeline Line */}
          <div class="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-300"></div>

          <div class="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                class={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
                data-aos-delay={index * 200}
              >
                {/* Timeline Dot */}
                <div class="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 z-10">
                  <div class="w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-900 glow-effect"></div>
                </div>

                {/* Content */}
                <div class={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'} ml-12 md:ml-0`}>
                  <div class="bg-dark-800/70 rounded-xl p-6 border border-dark-600 card-hover">
                    {/* Header */}
                    <div class="flex items-start justify-between mb-4">
                      <div class="flex items-center space-x-3">
                        {exp.type === 'work' ? (
                          <IoBriefcaseOutline class="w-6 h-6 text-primary-400" />
                        ) : (
                          <IoSchoolOutline class="w-6 h-6 text-primary-400" />
                        )}
                        <div>
                          <h3 class="text-xl font-bold text-white">{exp.title}</h3>
                          <p class="text-primary-400 font-semibold">{exp.company}</p>
                        </div>
                      </div>
                    </div>

                    {/* Period and Location */}
                    <div class="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                      <div class="flex items-center space-x-1">
                        <IoCalendarOutline class="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>

                    {/* Description */}
                    <ul class="space-y-2 mb-4">
                      {exp.description.map((item) => (
                        <li class="text-gray-300 text-sm flex items-start">
                          <span class="text-primary-400 mr-2">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div class="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span class="px-3 py-1 bg-primary-500/10 text-primary-400 border border-primary-500/30 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div class="mt-20" data-aos="fade-up">
          <h3 class="text-3xl font-bold text-center mb-12 text-white">
            Certifications & <span class="gradient-text">Achievements</span>
          </h3>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                class="bg-dark-800/50 rounded-lg p-6 border border-dark-600 text-center card-hover"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div class="w-16 h-16 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🏆</span>
                </div>
                <h4 class="text-lg font-bold text-white mb-2">{cert.name}</h4>
                <p class="text-primary-400 text-sm font-semibold mb-1">{cert.issuer}</p>
                <p class="text-gray-400 text-sm mb-2">{cert.year}</p>
                <p class="text-xs text-gray-500">ID: {cert.credential}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 