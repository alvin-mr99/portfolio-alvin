import { Component } from 'solid-js';

const Skills: Component = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: '🎨',
      skills: [
        { name: 'SolidJS', level: 95 },
        { name: 'React.js', level: 90 },
        { name: 'Next.js', level: 88 },
        { name: 'Angular', level: 85 },
        { name: 'TypeScript', level: 90 },
        { name: 'Tailwind CSS', level: 92 },
      ]
    },
    {
      title: 'Backend Development',
      icon: '⚙️',
      skills: [
        { name: 'Rust', level: 90 },
        { name: 'Scala', level: 85 },
        { name: 'GoLang', level: 88 },
        { name: 'Laravel', level: 85 },
        { name: 'Node.js', level: 82 },
        { name: 'Java', level: 88 },
      ]
    },
    {
      title: 'Mobile Development',
      icon: '📱',
      skills: [
        { name: 'Capacitor', level: 90 },
        { name: 'Kotlin', level: 85 },
        { name: 'Jetpack Compose', level: 80 },
        { name: 'React Native', level: 75 },
        { name: 'Flutter', level: 70 },
        { name: 'iOS Development', level: 65 },
      ]
    },
    {
      title: 'Databases',
      icon: '🗄️',
      skills: [
        { name: 'PostgreSQL', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'SurrealDB', level: 78 },
        { name: 'ClickHouse', level: 75 },
        { name: 'Elasticsearch', level: 80 },
      ]
    },
    {
      title: 'Design & Mapping',
      icon: '🗺️',
      skills: [
        { name: 'MapLibre', level: 88 },
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX Design', level: 87 },
        { name: 'Photoshop', level: 75 },
        { name: 'GIS Technologies', level: 70 },
      ]
    },
    {
      title: 'Soft Skills',
      icon: '🧠',
      skills: [
        { name: 'Problem Solving', level: 95 },
        { name: 'Team Leadership', level: 85 },
        { name: 'Communication', level: 90 },
        { name: 'Project Management', level: 80 },
        { name: 'Client Relations', level: 88 },
        { name: 'Agile/Scrum', level: 82 },
      ]
    }
  ];

  return (
    <section id="skills" class="py-20 bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            My <span class="gradient-text">Skills</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across modern development technologies and methodologies
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              class="bg-dark-800/50 rounded-xl p-6 border border-dark-700 card-hover"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div class="flex items-center mb-6">
                <span class="text-3xl mr-4">{category.icon}</span>
                <h3 class="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div class="space-y-4">
                {category.skills.map((skill) => (
                  <div class="skill-item">
                    <div class="flex justify-between items-center mb-2">
                      <span class="text-gray-300 font-medium">{skill.name}</span>
                      <span class="text-primary-400 font-semibold">{skill.level}%</span>
                    </div>
                    <div class="w-full bg-dark-700 rounded-full h-2">
                      <div 
                        class="bg-gradient-to-r from-primary-600 to-primary-400 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={`width: ${skill.level}%`}
                        data-aos="slide-right"
                        data-aos-delay={index * 100 + 200}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Icons */}
        <div class="mt-16" data-aos="fade-up">
          <h3 class="text-2xl font-bold text-center mb-8 text-white">
            Technologies I Work With
          </h3>
          <div class="flex flex-wrap justify-center items-center gap-8">
            {[
              { name: 'SolidJS', color: 'text-blue-400' },
              { name: 'React', color: 'text-cyan-400' },
              { name: 'Next.js', color: 'text-gray-300' },
              { name: 'Angular', color: 'text-red-500' },
              { name: 'Rust', color: 'text-orange-600' },
              { name: 'Scala', color: 'text-red-600' },
              { name: 'GoLang', color: 'text-blue-500' },
              { name: 'Laravel', color: 'text-red-400' },
              { name: 'TypeScript', color: 'text-blue-600' },
              { name: 'Kotlin', color: 'text-purple-400' },
              { name: 'PostgreSQL', color: 'text-blue-300' },
              { name: 'MongoDB', color: 'text-green-500' },
              { name: 'SurrealDB', color: 'text-purple-300' },
              { name: 'ClickHouse', color: 'text-yellow-400' },
              { name: 'Elasticsearch', color: 'text-yellow-600' },
              { name: 'Capacitor', color: 'text-indigo-400' },
            ].map((tech, index) => (
              <div 
                class={`px-4 py-2 bg-dark-800 rounded-lg border border-dark-600 ${tech.color} font-semibold text-sm hover:scale-105 transition-transform duration-200`}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                {tech.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 