import { Component, createSignal } from 'solid-js';
import { IoMailOutline, IoPhonePortraitOutline, IoLocationOutline, IoLogoGithub, IoLogoLinkedin, IoLogoTwitter, IoLogoInstagram, IoPaperPlaneOutline } from 'solid-icons/io';

const Contact: Component = () => {
  const [formData, setFormData] = createSignal({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = createSignal(false);
  const [submitStatus, setSubmitStatus] = createSignal<'idle' | 'success' | 'error'>('idle');

  const contactInfo = [
    {
      icon: IoMailOutline,
      title: 'Email Address',
      value: 'alvinmasykur.am@gmail.com',
      link: 'mailto:alvinmasykur.am@gmail.com'
    },
    {
      icon: IoPhonePortraitOutline,
      title: 'Phone Number',
      value: '+62 812-3456-7890',
      link: 'tel:+6281234567890'
    },
    {
      icon: IoLocationOutline,
      title: 'Location',
      value: 'Cilacap, Indonesia',
      link: 'https://maps.google.com/?q=Cilacap,Indonesia'
    }
  ];

  const socialLinks = [
    {
      icon: IoLogoGithub,
      name: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: IoLogoLinkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: IoLogoTwitter,
      name: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-sky-400'
    },
    {
      icon: IoLogoInstagram,
      name: 'Instagram',
      url: 'https://instagram.com',
      color: 'hover:text-pink-400'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would normally send the form data to your backend
      console.log('Form submitted:', formData());
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  return (
    <section id="contact" class="py-20 bg-dark-800/50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div class="text-center mb-16" data-aos="fade-up">
          <h2 class="text-4xl md:text-5xl font-bold mb-4">
            Get In <span class="gradient-text">Touch</span>
          </h2>
          <p class="text-xl text-gray-400 max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div class="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div class="space-y-8" data-aos="fade-right">
            <div>
              <h3 class="text-3xl font-bold text-white mb-6">
                Let's Talk About Your <span class="gradient-text">Project</span>
              </h3>
              <p class="text-gray-300 text-lg leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with amazing people. 
                Whether you need a web application, mobile app, or consulting on your technical architecture, 
                I'm here to help you achieve your goals.
              </p>
            </div>

            {/* Contact Info Cards */}
            <div class="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  class="flex items-center space-x-4 p-4 bg-dark-700/50 rounded-lg border border-dark-600 card-hover"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div class="flex-shrink-0">
                    <div class="w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-300 rounded-lg flex items-center justify-center">
                      <info.icon class="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 class="text-white font-semibold">{info.title}</h4>
                    <a 
                      href={info.link}
                      class="text-gray-400 hover:text-primary-400 transition-colors"
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div class="pt-8">
              <h4 class="text-white font-semibold mb-4">Follow Me</h4>
              <div class="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    class={`w-12 h-12 bg-dark-700 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 hover:bg-dark-600 ${social.color} hover:scale-110`}
                    title={social.name}
                  >
                    <social.icon class="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div class="p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-lg">
              <div class="flex items-center space-x-3">
                <div class="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span class="text-green-400 font-semibold">Available for Freelance Projects</span>
              </div>
              <p class="text-gray-300 text-sm mt-2">
                Currently accepting new projects and collaborations. Average response time: 24 hours.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div class="bg-dark-700/50 rounded-xl p-8 border border-dark-600" data-aos="fade-left">
            <h3 class="text-2xl font-bold text-white mb-6">Send Message</h3>
            
            <form onSubmit={handleSubmit} class="space-y-6">
              {/* Name and Email */}
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData().name}
                    onInput={(e) => handleInputChange('name', e.currentTarget.value)}
                    class="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label class="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData().email}
                    onInput={(e) => handleInputChange('email', e.currentTarget.value)}
                    class="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label class="block text-sm font-semibold text-gray-300 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  value={formData().subject}
                  onInput={(e) => handleInputChange('subject', e.currentTarget.value)}
                  class="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors"
                  placeholder="Project inquiry, collaboration, etc."
                />
              </div>

              {/* Message */}
              <div>
                <label class="block text-sm font-semibold text-gray-300 mb-2">
                  Message *
                </label>
                <textarea
                  required
                  rows="6"
                  value={formData().message}
                  onInput={(e) => handleInputChange('message', e.currentTarget.value)}
                  class="w-full px-4 py-3 bg-dark-800 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:border-primary-500 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project, requirements, timeline, and budget..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting()}
                class={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  isSubmitting()
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-700 hover:to-primary-600 transform hover:scale-105'
                } text-white`}
              >
                {isSubmitting() ? (
                  <>
                    <div class="loading-spinner w-5 h-5"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <IoPaperPlaneOutline class="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus() === 'success' && (
                <div class="p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus() === 'error' && (
                <div class="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-center">
                  Something went wrong. Please try again or contact me directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
