import { Component, createSignal, For } from 'solid-js';
import { IoEyeOutline, IoCodeSlashOutline, IoGlobeOutline, IoPhonePortraitOutline } from 'solid-icons/io';

const Projects: Component = () => {
  const [selectedCategory, setSelectedCategory] = createSignal('all');

  const projects = [
    {
      id: 'geisa',
      title: 'GEISA Platform',
      description: 'Geographic Information System Application with advanced spatial analysis, thematic mapping, and chatbot integration for geospatial data management and visualization.',
      category: 'gis',
      type: 'Geographic Information System',
      technologies: ['SolidJS', 'GIS APIs', 'Spatial Analysis', 'MapLibre', 'AI Chatbot'],
      features: ['Spatial Analysis', 'Thematic Mapping', 'AI Chatbot', 'Area Management'],
      status: 'Production',
      year: '2023',
      client: 'Geospatial Agency',
      image: '/list-project/geisa/area-page.png',
      gallery: [
        '/list-project/geisa/area-page.png',
        '/list-project/geisa/thematic-page.png',
        '/list-project/geisa/chatbot-page.png',
                 '/list-project/geisa/status-page.png'
       ]
     },{
      id: 'iot-kkp',
      title: 'IoT KKP Dashboard',
      description: 'Advanced IoT dashboard for Ministry of Maritime Affairs and Fisheries with Dark Ocean theme featuring vessel monitoring and maritime analytics.',
      category: 'iot',
      type: 'IoT Dashboard',
      technologies: ['SolidJS', 'IoT Integration', 'MapLibre', 'Real-time Data', 'Dark Theme'],
      features: ['Vessel Tracking', 'Maritime Analytics', 'Weather Monitoring', 'Fleet Management'],
      status: 'Production',
      year: '2023',
      client: 'Ministry of Maritime Affairs',
      image: '/list-project/iot-kkp/dashboard.png',
      gallery: [
        '/list-project/iot-kkp/dashboard.png',
        '/list-project/iot-kkp/pelacak.png',
        '/list-project/iot-kkp/cuaca.png',
        '/list-project/iot-kkp/manajemen-armada.png'
      ]
    },
    {
      id: 'pln',
      title: 'PLN Smart Analytics',
      description: 'Modern analytics and monitoring system for PLN with AI/ML integration for big data analysis, loss monitoring, and voltage management.',
      category: 'analytics',
      type: 'Enterprise System',
      technologies: ['SolidJS', 'TypeScript', 'AI/ML', 'Big Data', 'Enterprise APIs'],
      features: ['Smart Analytics', 'Loss Monitoring', 'Voltage Management', 'AI Integration'],
      status: 'Production',
      year: '2023',
      client: 'PLN Indonesia',
      image: '/list-project/pln/dashboard-page.png',
      gallery: [
        '/list-project/pln/dashboard-page.png',
        '/list-project/pln/analytics-page.png',
        '/list-project/pln/voltage-page.png',
        '/list-project/pln/system-monitor-page.png'
      ]
    },
    {
      id: 'smart-wfm',
      title: 'Smart WFM Dashboard',
      description: 'Enterprise-level Work Force Management system with comprehensive modules for technician management, ticket handling, reporting, and analytics for telecommunications infrastructure.',
      category: 'web',
      type: 'Enterprise Dashboard',
      technologies: ['SolidJS', 'TypeScript', 'Advanced Analytics', 'Real-time Data', 'Enterprise APIs'],
      features: ['Technician Management', 'Ticket System', 'Advanced Reporting', 'Performance Analytics'],
      status: 'Production',
      year: '2024',
      client: 'Telkom Indonesia',
      image: '/list-project/smart-wfm/dashboard-analytic.png',
      gallery: [
        '/list-project/smart-wfm/dashboard-analytic.png',
        '/list-project/smart-wfm/ticket-dashboard.png',
        '/list-project/smart-wfm/technician-tracking.png',
        '/list-project/smart-wfm/report-dashboard.png'
      ]
    },
    {
      id: 'smart-wfm-mobile',
      title: 'WFM Smart Mobile',
      description: 'Comprehensive Smart Work Force Management mobile app for field technicians handling IOAN/PSB installations, OSP maintenance, and routine maintenance tasks.',
      category: 'mobile',
      type: 'Mobile Application',
      technologies: ['SolidJS', 'Capacitor', 'Tailwind CSS', 'MapLibre', 'TypeScript'],
      features: ['Field Service Management', 'Real-time Tracking', 'Offline Support', 'Map Integration'],
      status: 'Production',
      year: '2024',
      client: 'Telkom Indonesia',
      image: '/list-project/smart-wfm-mobile/dashboard-1.png',
      gallery: [
        '/list-project/smart-wfm-mobile/dashboard-1.png',
        '/list-project/smart-wfm-mobile/dashboard-2.png',
        '/list-project/smart-wfm-mobile/ioan-instalasi.png',
        '/list-project/smart-wfm-mobile/maintenance-overview.png'
      ]
    },
    {
      id: 'santara-mobile',
      title: 'SANTARA Mobile',
      description: 'Mobile application for agricultural extension workers and farmers with AI-assisted data collection, real-time monitoring, and field management to support Indonesia\'s 2025 food self-sufficiency goals.',
      category: 'mobile',
      type: 'Agricultural Mobile App',
      technologies: ['SolidJS', 'Capacitor', 'AI Integration', 'Offline Data Sync', 'Government APIs'],
      features: ['AI-Assisted Data Collection', 'Field Management', 'Biometric Authentication', 'Survey Management'],
      status: 'Production',
      year: '2024',
      client: 'Government of Indonesia',
      image: '/list-project/santara-mobile/dashboard.png',
      gallery: [
        '/list-project/santara-mobile/dashboard.png',
        '/list-project/santara-mobile/survey.png',
        '/list-project/santara-mobile/petani.png',
        '/list-project/santara-mobile/lahan.png'
      ]
    },
    {
      id: 'santara',
      title: 'SANTARA Platform',
      description: 'Comprehensive digital platform integrating BMKG, PUPR, BAPENAS, and Ministry of Agriculture for Indonesia\'s 2025 food self-sufficiency goals.',
      category: 'web',
      type: 'Web Platform',
      technologies: ['SolidJS', 'TypeScript', 'Tailwind CSS', 'MapLibre', 'Node.js'],
      features: ['Multi-Institution Integration', 'Agricultural Monitoring', 'Weather Analytics', 'Data Visualization'],
      status: 'Production',
      year: '2024',
      client: 'Government of Indonesia',
      image: '/list-project/santara/dashboard.png',
      gallery: [
        '/list-project/santara/dashboard.png',
        '/list-project/santara/weather-climate-overview.png',
        '/list-project/santara/rice-production-overview.png',
        '/list-project/santara/water-management-overview.png'
      ]
    },
    {
      id: 'ai-vision',
      title: 'AI Vision OCR',
      description: 'Intelligent document classification using OCR technology with OpenCV, Tesseract OCR, and AI Vision for automated document processing.',
      category: 'ai',
      type: 'AI/ML Application',
      technologies: ['React.js', 'Python', 'OpenCV', 'Tesseract OCR', 'AI Vision'],
      features: ['Document Classification', 'OCR Processing', 'AI Analysis', 'Database Storage'],
      status: 'Production',
      year: '2023',
      client: 'Enterprise Client',
      image: '/list-project/ai-vision/dashboard.png',
      gallery: [
        '/list-project/ai-vision/dashboard.png',
        '/list-project/ai-vision/upload-1.png',
        '/list-project/ai-vision/document-detail-1.png',
        '/list-project/ai-vision/image-processing.png'
      ]
    },
    {
      id: 'clarity',
      title: 'CLARITY Dashboard',
      description: 'AI-powered project management dashboard for telecommunications infrastructure monitoring across Indonesia using advanced analytics.',
      category: 'web',
      type: 'Analytics Dashboard',
      technologies: ['SolidJS', 'AmCharts', 'MapLibre', 'TypeScript', 'Tailwind CSS'],
      features: ['Project Management', 'Infrastructure Monitoring', 'Advanced Analytics', 'Real-time Reports'],
      status: 'Production',
      year: '2024',
      client: 'Telkom Akses',
      image: '/list-project/clarity/dashboard.png',
      gallery: [
        '/list-project/clarity/dashboard.png',
        '/list-project/clarity/analytics.png',
        '/list-project/clarity/geospatial.png',
        '/list-project/clarity/project.png'
      ]
    },
    
    {
      id: 'takaful',
      title: 'Takaful Ticketing System',
      description: 'Complete ticketing system for Takaful insurance company with automatic escalation features for claims and service requests.',
      category: 'web',
      type: 'Ticketing System',
      technologies: ['SolidJS', 'TypeScript', 'REST APIs', 'Database', 'Notification System'],
      features: ['Ticket Management', 'Auto Escalation', 'Claims Processing', 'Real-time Updates'],
      status: 'Production',
      year: '2023',
      client: 'Takaful Insurance',
      image: '/list-project/takaful/dashboard-page.png',
      gallery: [
        '/list-project/takaful/dashboard-page.png',
        '/list-project/takaful/kelola-tiket-page.png',
        '/list-project/takaful/create-tiket-1-page.png',
        '/list-project/takaful/laporan-analitik-1-page.png'
      ]
    },
    {
      id: 'uin-bike',
      title: 'UIN Bike System',
      description: 'Comprehensive bike sharing system for UIN Jakarta with admin dashboard for managing stations, users, and real-time monitoring.',
      category: 'web',
      type: 'Management System',
      technologies: ['SolidJS', 'TypeScript', 'Real-time Monitoring', 'Payment Gateway', 'IoT'],
      features: ['Bike Sharing', 'Station Management', 'User Management', 'Real-time Tracking'],
      status: 'Production',
      year: '2023',
      client: 'UIN Jakarta',
      image: '/list-project/uin-bike/dashboard.png',
      gallery: [
        '/list-project/uin-bike/dashboard.png',
        '/list-project/uin-bike/manajemen-stasiun.png',
        '/list-project/uin-bike/realtime-monitor.png',
        '/list-project/uin-bike/dashboard-analytik.png'
      ]
    },
    {
      id: 'm-paspor-mobile',
      title: 'M-Paspor Mobile',
      description: 'Modern mobile passport application with biometric authentication, queue management, and seamless user experience.',
      category: 'mobile',
      type: 'Government Mobile App',
      technologies: ['SolidJS', 'Capacitor', 'Biometric Auth', 'Queue System', 'Government APIs'],
      features: ['Biometric Auth', 'Queue Management', 'Document Processing', 'Real-time Updates'],
      status: 'Production',
      year: '2023',
      client: 'Ministry of Law and Human Rights',
      image: '/list-project/m-paspor-mobile/dashboard.png',
      gallery: [
        '/list-project/m-paspor-mobile/dashboard.png',
        '/list-project/m-paspor-mobile/face-id.png',
        '/list-project/m-paspor-mobile/queue.png',
        '/list-project/m-paspor-mobile/interview.png'
      ]
    },
    {
      id: 'posgis',
      title: 'PosGIS Transport System',
      description: 'Integrated transportation information system with spatial data visualization using PostGIS for route planning and analysis.',
      category: 'gis',
      type: 'GIS Application',
      technologies: ['SolidJS', 'PostGIS', 'MapLibre', 'Spatial Analysis', 'Transport APIs'],
      features: ['Spatial Visualization', 'Route Planning', 'Transport Analytics', 'Interactive Maps'],
      status: 'Production',
      year: '2023',
      client: 'Transportation Department',
      image: '/list-project/posgis/dashboard-page.png',
      gallery: [
        '/list-project/posgis/dashboard-page.png',
        '/list-project/posgis/location-page.png',
        '/list-project/posgis/transport-page.png',
        '/list-project/posgis/analytic-page.png'
      ]
    },
    {
      id: 'uin-bike-mobile',
      title: 'UIN Bike Mobile',
      description: 'Modern bike sharing mobile application for UIN Jakarta with electric bike rental system, biometric authentication, and seamless user experience for academic community.',
      category: 'mobile',
      type: 'Bike Sharing Mobile App',
      technologies: ['SolidJS', 'Capacitor', 'Biometric Auth', 'Payment Gateway', 'Real-time Tracking'],
      features: ['Electric Bike Rental', 'Biometric Login', 'Digital Wallet', 'Ride Tracking'],
      status: 'Production',
      year: '2023',
      client: 'UIN Jakarta',
      image: '/list-project/uin-bike-mobile/dashboard-1.png',
      gallery: [
        '/list-project/uin-bike-mobile/dashboard-1.png',
        '/list-project/uin-bike-mobile/scan-1.png',
        '/list-project/uin-bike-mobile/wallet-1.png',
        '/list-project/uin-bike-mobile/ride-summary.png'
      ]
    },
    {
      id: 'relogica',
      title: 'Relogica System',
      description: 'Advanced reliability analysis and monitoring system for industrial equipment with failure mode analysis, predictive maintenance, and performance indicators.',
      category: 'analytics',
      type: 'Reliability Analysis System',
      technologies: ['SolidJS', 'TypeScript', 'Data Analytics', 'Machine Learning', 'Industrial IoT'],
      features: ['Failure Mode Analysis', 'Predictive Maintenance', 'Performance Monitoring', 'Industrial Analytics'],
      status: 'Production',
      year: '2023',
      client: 'Industrial Partner',
      image: '/list-project/relogica/dashboard-page.png',
      gallery: [
        '/list-project/relogica/dashboard-page.png',
        '/list-project/relogica/failuremode-page.png',
        '/list-project/relogica/indicator-page.png',
        '/list-project/relogica/company-page.png'
      ]
    },
    {
      id: 'wfm-osp',
      title: 'WFM OSP System',
      description: 'Work Force Management system specifically designed for Outside Plant (OSP) operations including project management, budget tracking, and resource allocation.',
      category: 'web',
      type: 'Project Management System',
      technologies: ['SolidJS', 'TypeScript', 'Project Management APIs', 'Budget Tracking', 'Resource Planning'],
      features: ['Project Management', 'Budget Tracking', 'User Management', 'Work Order System'],
      status: 'Production',
      year: '2023',
      client: 'Telecommunications Company',
      image: '/list-project/wfm-osp/dashboard-page.png',
      gallery: [
        '/list-project/wfm-osp/dashboard-page.png',
        '/list-project/wfm-osp/project-wo-page.png',
        '/list-project/wfm-osp/budget-page.png',
        '/list-project/wfm-osp/user-page.png'
      ]
    },
    {
      id: 'wfm-ioan',
      title: 'WFM IOAN System',
      description: 'Specialized Work Force Management system for Indoor/Outdoor Access Network (IOAN) operations with comprehensive tracking, reporting, and timeline management.',
      category: 'web',
      type: 'Network Management System',
      technologies: ['SolidJS', 'TypeScript', 'Network APIs', 'Real-time Tracking', 'Reporting Tools'],
      features: ['Network Management', 'Location Tracking', 'Timeline Management', 'Ticket System'],
      status: 'Production',
      year: '2023',
      client: 'Network Infrastructure Company',
      image: '/list-project/wfm-ioan/overview-page.png',
      gallery: [
        '/list-project/wfm-ioan/overview-page.png',
        '/list-project/wfm-ioan/location-page.png',
        '/list-project/wfm-ioan/ticket-page.png',
        '/list-project/wfm-ioan/timeline-page.png'
      ]
    },
    {
      id: 'smart-entry',
      title: 'Smart Entry System',
      description: 'Intelligent access control and entry management system with smart authentication and monitoring capabilities for secure facility management.',
      category: 'iot',
      type: 'Access Control System',
      technologies: ['SolidJS', 'IoT Integration', 'Access Control APIs', 'Security Systems', 'Real-time Monitoring'],
      features: ['Smart Authentication', 'Access Control', 'Security Monitoring', 'Entry Logging'],
      status: 'Production',
      year: '2023',
      client: 'Security Solutions Company',
      image: '/list-project/smart-entry/main-page.png',
      gallery: [
        '/list-project/smart-entry/main-page.png',
        '/list-project/smart-entry/login-page.png'
      ]
    },
    {
      id: 'ims',
      title: 'Information Management System',
      description: 'Comprehensive information management system for organizational data handling, user management, and project coordination with modern dashboard interface.',
      category: 'web',
      type: 'Information Management System',
      technologies: ['SolidJS', 'TypeScript', 'Database Management', 'User Authentication', 'Data Analytics'],
      features: ['Data Management', 'User Administration', 'Project Coordination', 'Analytics Dashboard'],
      status: 'Production',
      year: '2023',
      client: 'Enterprise Client',
      image: '/list-project/ims/dashboard-page.png',
      gallery: [
        '/list-project/ims/dashboard-page.png',
        '/list-project/ims/user-page.png',
        '/list-project/ims/project-page.png',
        '/list-project/ims/login-page.png'
      ]
    },
    
     {
       id: 'agatha',
       title: 'Agatha AI Platform',
       description: 'Advanced AI-powered conversational platform with intelligent chat capabilities, machine learning integration, and modern user interface for enhanced user interactions.',
       category: 'ai',
       type: 'AI Conversational Platform',
       technologies: ['React.js', 'AI/ML APIs', 'Natural Language Processing', 'Machine Learning', 'REST APIs'],
       features: ['AI Conversation', 'Machine Learning', 'Smart Analytics', 'Real-time Chat'],
       status: 'Production',
       year: '2024',
       client: 'AI Technology Company',
       image: '/list-project/Agatha/landing-page.jpeg',
       gallery: [
         '/list-project/Agatha/landing-page.jpeg',
         '/list-project/Agatha/chat.jpeg',
         '/list-project/Agatha/ai.jpeg'
       ]
     },
     {
       id: 'be-relogica',
       title: 'BE Relogica API',
       description: 'High-performance backend system for reliability analysis built with Rust and Scala, featuring advanced data processing, real-time analytics, and enterprise-grade scalability.',
       category: 'backend',
       type: 'Backend API System',
       technologies: ['Rust', 'Scala', 'PostgreSQL', 'ClickHouse', 'Microservices'],
       features: ['High Performance', 'Real-time Analytics', 'Scalable Architecture', 'Data Processing'],
       status: 'Production',
       year: '2023',
       client: 'Industrial Partner',
       image: '/list-project/relogica/dashboard-page.png',
       gallery: [
         '/list-project/relogica/dashboard-page.png',
         '/list-project/relogica/failuremode-page.png'
       ]
     },
     {
       id: 'be-geisa',
       title: 'BE GeISA API',
       description: 'Robust backend infrastructure for geographic information systems using GoLang and Laravel, handling spatial data processing, geospatial analytics, and high-volume GIS operations.',
       category: 'backend',
       type: 'GIS Backend System',
       technologies: ['GoLang', 'Laravel', 'PostgreSQL', 'SurrealDB', 'Spatial Processing'],
       features: ['Spatial Data Processing', 'Geospatial APIs', 'High Volume Processing', 'Real-time Analytics'],
       status: 'Production',
       year: '2023',
       client: 'Geospatial Agency',
       image: '/list-project/geisa/area-page.png',
       gallery: [
         '/list-project/geisa/area-page.png',
         '/list-project/geisa/thematic-page.png'
       ]
     },
     {
       id: 'be-ai-vision',
       title: 'BE AI Vision API',
       description: 'Intelligent backend system for document processing and AI vision capabilities, built with Python and Rust for optimal performance in machine learning workflows.',
       category: 'backend',
       type: 'AI/ML Backend System',
       technologies: ['Rust', 'Python', 'MongoDB', 'Elasticsearch', 'Machine Learning'],
       features: ['AI Vision Processing', 'Document Analysis', 'ML Pipelines', 'Image Processing'],
       status: 'Production',
       year: '2023',
       client: 'Enterprise Client',
       image: '/list-project/ai-vision/dashboard.png',
       gallery: [
         '/list-project/ai-vision/dashboard.png',
         '/list-project/ai-vision/image-processing.png'
       ]
     },
     {
       id: 'be-ocr-llm',
       title: 'BE OCR LLM API',
       description: 'Advanced backend system combining OCR technology with Large Language Models, built with Rust and Scala for high-performance text extraction and AI-powered document understanding.',
       category: 'backend',
       type: 'OCR + LLM Backend',
       technologies: ['Rust', 'Scala', 'LLM Integration', 'MongoDB', 'Machine Learning'],
       features: ['OCR Processing', 'LLM Integration', 'Document Understanding', 'Text Analysis'],
       status: 'Production',
       year: '2024',
       client: 'AI Technology Company',
       image: '/list-project/ai-vision/document-detail-1.png',
       gallery: [
         '/list-project/ai-vision/document-detail-1.png',
         '/list-project/ai-vision/document-detail-2.png'
       ]
     },
     {
       id: 'be-wfm',
       title: 'BE WFM API',
       description: 'Enterprise-grade backend system for workforce management, developed with GoLang and Laravel, supporting complex business logic, real-time operations, and scalable microservices architecture.',
       category: 'backend',
       type: 'Enterprise Backend System',
       technologies: ['GoLang', 'Laravel', 'PostgreSQL', 'MySQL', 'Microservices'],
       features: ['Enterprise Logic', 'Real-time Operations', 'Scalable APIs', 'Complex Data Processing'],
       status: 'Production',
       year: '2024',
       client: 'Telkom Indonesia',
       image: '/list-project/smart-wfm/dashboard-analytic.png',
       gallery: [
         '/list-project/smart-wfm/dashboard-analytic.png',
         '/list-project/smart-wfm/system-management.png'
       ]
     },
     {
       id: 'be-agatha',
       title: 'BE Agatha API',
       description: 'Sophisticated backend system powering AI conversational platform with advanced natural language processing, built using Rust and Scala for optimal performance and scalability.',
       category: 'backend',
       type: 'AI Backend System',
       technologies: ['Rust', 'Scala', 'SurrealDB', 'Elasticsearch', 'AI/ML APIs'],
       features: ['NLP Processing', 'AI Conversation Engine', 'Real-time Chat', 'Machine Learning'],
       status: 'Production',
       year: '2024',
       client: 'AI Technology Company',
       image: '/list-project/Agatha/ai.jpeg',
       gallery: [
         '/list-project/Agatha/ai.jpeg',
         '/list-project/Agatha/chat.jpeg'
       ]
     }
   ];

  const categories = [
    { id: 'all', name: 'All Projects', icon: IoGlobeOutline },
    { id: 'web', name: 'Web Applications', icon: IoGlobeOutline },
    { id: 'mobile', name: 'Mobile Apps', icon: IoPhonePortraitOutline },
    { id: 'backend', name: 'Backend Systems', icon: IoCodeSlashOutline },
    { id: 'ai', name: 'AI/ML Projects', icon: IoCodeSlashOutline },
    { id: 'iot', name: 'IoT Systems', icon: IoCodeSlashOutline },
    { id: 'analytics', name: 'Analytics Systems', icon: IoCodeSlashOutline },
    { id: 'gis', name: 'GIS Applications', icon: IoCodeSlashOutline },
  ];

  const filteredProjects = () => {
    if (selectedCategory() === 'all') return projects;
    return projects.filter(project => project.category === selectedCategory());
  };

  return (
    <section id="projects" class="py-20 bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            My <span class="gradient-text">Projects</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Comprehensive showcase of 26+ innovative solutions including backend systems, AI platforms, government systems, enterprise applications, and mobile solutions across diverse industries
          </p>
        </div>

        {/* Category Filter */}
        <div class="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
          <For each={categories}>
            {(category) => (
              <button
                onClick={() => setSelectedCategory(category.id)}
                class={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory() === category.id
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white'
                    : 'bg-dark-800 text-gray-300 hover:bg-dark-700 hover:text-primary-400'
                }`}
              >
                <category.icon class="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            )}
          </For>
        </div>

        {/* Projects Grid */}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <For each={filteredProjects()}>
            {(project, index) => (
              <div 
                class="bg-dark-800/50 rounded-xl overflow-hidden border border-dark-700 card-hover group"
                data-aos="fade-up"
                data-aos-delay={index() * 100}
              >
                {/* Project Image */}
                <div class="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMWUyOTNiIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY0NzQ4YiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
                    }}
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent"></div>
                  
                  {/* Status Badge */}
                  <div class="absolute top-4 right-4">
                    <span class="px-3 py-1 bg-green-500/90 text-white text-xs font-semibold rounded-full">
                      {project.status}
                    </span>
                  </div>

                  {/* Category Badge */}
                  <div class="absolute top-4 left-4">
                    <span class="px-3 py-1 bg-primary-500/90 text-white text-xs font-semibold rounded-full">
                      {project.type}
                    </span>
                  </div>

                  {/* Hover Actions */}
                  <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div class="flex space-x-4">
                      <button class="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors">
                        <IoEyeOutline class="w-5 h-5" />
                      </button>
                      <button class="p-3 bg-dark-700 text-white rounded-full hover:bg-dark-600 transition-colors">
                        <IoCodeSlashOutline class="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div class="p-6">
                  <div class="flex items-center justify-between mb-3">
                    <h3 class="text-xl font-bold text-white group-hover:text-primary-400 transition-colors">
                      {project.title}
                    </h3>
                    <span class="text-sm text-gray-500">{project.year}</span>
                  </div>

                  <p class="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Client */}
                  <div class="mb-4">
                    <span class="text-primary-400 font-semibold text-sm">Client: </span>
                    <span class="text-gray-300 text-sm">{project.client}</span>
                  </div>

                  {/* Features */}
                  <div class="mb-4">
                    <div class="flex flex-wrap gap-2">
                      {project.features.slice(0, 3).map((feature) => (
                        <span class="px-2 py-1 bg-dark-700 text-gray-300 text-xs rounded">
                          {feature}
                        </span>
                      ))}
                      {project.features.length > 3 && (
                        <span class="px-2 py-1 bg-dark-700 text-gray-400 text-xs rounded">
                          +{project.features.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div class="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span class="px-2 py-1 bg-primary-500/10 text-primary-400 border border-primary-500/30 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span class="px-2 py-1 bg-primary-500/10 text-primary-300 border border-primary-500/30 text-xs rounded">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}
          </For>
        </div>

        {/* View More */}
        <div class="text-center mt-12" data-aos="fade-up">
          <p class="text-gray-400 mb-4">
            Showing all {projects.length} major projects. Interested in discussing a collaboration?
          </p>
          <button class="btn-primary" onClick={() => {
            const contactElement = document.querySelector('#contact');
            if (contactElement) {
              contactElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            Let's Work Together
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 