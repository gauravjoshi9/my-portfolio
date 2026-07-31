import React, { useState, useEffect } from 'react';
import { Mail, ExternalLink, Send, ArrowRight, Code, Zap, Globe, Menu, X } from 'lucide-react';

// Google Drive Photo URL
import ABOUT_PHOTO from "./images/profile.png";
const HERO_PHOTO = "/profile.png";
export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const stats = [
    { label: 'Projects', value: '15+' },
    { label: 'Experience', value: '2+ yrs' },
    { label: 'Clients', value: '10+' }
  ];

  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'JavaScript'], level: 90 },
    { category: 'Frontend', items: ['React', 'Tailwind', 'HTML/CSS'], level: 85 },
    { category: 'Backend', items: ['Node.js', 'Express', 'Databases'], level: 80 },
    { category: 'Tools', items: ['Git', 'VS Code', 'Excel'], level: 90 }
  ];

  const projects = [
    {
      title: 'MCQ Generator System',
      description: 'Automated standardized 60-question MCQ paper generator using Python and openpyxl. Generates excel sheets for IT curriculum.',
      tech: ['Python', 'openpyxl', 'Excel'],
      link: 'https://github.com/gauravjoshi9/mcq-generator',
      icon: Code
    },
    {
      title: 'Java Pattern Programs',
      description: 'Comprehensive collection of nested loop pattern printing exercises with detailed documentation and learning resources.',
      tech: ['Java', 'Algorithms', 'DSA'],
      link: 'https://github.com/gauravjoshi9/java-patterns',
      icon: Zap
    },
    {
      title: 'Educational Platform',
      description: 'Vocational training materials for cloud computing, virtualization, and networking. Interactive learning content.',
      tech: ['Content Design', 'IT Training', 'Curriculum'],
      link: 'https://github.com/gauravjoshi9/education-platform',
      icon: Globe
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 min-h-screen text-white overflow-hidden">
      {/* Animated Background Elements with Soft Animations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Gradient Orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-3xl animate-float-medium" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl animate-float-slow" style={{animationDelay: '4s'}}></div>
        
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent opacity-30"></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400/50 rounded-full animate-float-particle" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-blue-400/50 rounded-full animate-float-particle" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 left-1/3 w-2 h-2 bg-cyan-500/40 rounded-full animate-float-particle" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-300/60 rounded-full animate-float-particle" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-cyan-400/40 rounded-full animate-float-particle" style={{animationDelay: '4s'}}></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full bg-gradient-to-b from-slate-950/80 to-transparent backdrop-blur-xl z-50 border-b border-blue-500/20 transition duration-300">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/50">
              <span className="text-white font-black text-lg">G</span>
            </div>
            <div>
              <h1 className="text-2xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">Gaurav</h1>
              <p className="text-xs text-slate-400">Developer & Creator</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-slate-300 hover:text-blue-400 transition duration-300 font-medium">Home</a>
            <a href="#about" className="text-slate-300 hover:text-blue-400 transition duration-300 font-medium">About</a>
            <a href="#skills" className="text-slate-300 hover:text-blue-400 transition duration-300 font-medium">Skills</a>
            <a href="#projects" className="text-slate-300 hover:text-blue-400 transition duration-300 font-medium">Projects</a>
            <a href="#contact" className="text-slate-300 hover:text-blue-400 transition duration-300 font-medium">Contact</a>
            
            {/* Social Icons in Header */}
            <div className="flex gap-3 ml-4 pl-4 border-l border-blue-500/30">
              <a href="https://github.com/gauravjoshi9" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition duration-300 text-sm font-semibold">
                GitHub
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition duration-300 text-sm font-semibold">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-blue-400 transition"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-950/95 backdrop-blur-xl border-t border-blue-500/20 p-6 space-y-4">
            <a href="#home" className="block text-slate-300 hover:text-blue-400 transition">Home</a>
            <a href="#about" className="block text-slate-300 hover:text-blue-400 transition">About</a>
            <a href="#skills" className="block text-slate-300 hover:text-blue-400 transition">Skills</a>
            <a href="#projects" className="block text-slate-300 hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="block text-slate-300 hover:text-blue-400 transition">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-40 pb-32 px-6 text-center min-h-screen flex items-center justify-center">
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Profile Image with Enhanced Animation */}
          <div className="mb-12 flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-500 rounded-full blur-3xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-glow"></div>
              <img 
                src={HERO_PHOTO}
                alt="Profile" 
                className="relative w-48 h-48 rounded-full border-4 border-blue-400/50 shadow-2xl object-cover group-hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-7xl md:text-8xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
              Creative Developer
            </span>
            <br />
            <span className="text-slate-100">& Tech Innovator</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building educational platforms that make complex technology simple. Crafting code with precision, creating experiences with purpose.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
            <a 
              href="#contact" 
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-bold text-lg overflow-hidden hover:shadow-2xl hover:shadow-blue-500/50 transition duration-300"
            >
              <span className="relative z-10 flex items-center gap-2 justify-center">
                Get In Touch <ArrowRight size={20} className="group-hover:translate-x-2 transition duration-300" />
              </span>
            </a>
            <a 
              href="#projects" 
              className="px-8 py-4 border-2 border-cyan-500/50 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition duration-300"
            >
              View My Work
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-12 border-t border-blue-500/20">
            {stats.map((stat, i) => (
              <div key={i} className="group">
                <div className="text-4xl font-black text-blue-400 group-hover:text-cyan-400 transition duration-300">{stat.value}</div>
                <div className="text-slate-400 text-sm mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Photo */}
      <section id="about" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-blue-950/30 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">About Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Photo */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
                <img 
                  src={ABOUT_PHOTO}
                  alt="About Me" 
                  className="relative w-80 h-96 rounded-3xl object-cover border-2 border-blue-400/50 shadow-2xl group-hover:scale-105 transition duration-500"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a developer who specializes in creating educational technology solutions. My passion is transforming complex concepts into intuitive, accessible learning experiences.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With expertise spanning Python, Java, JavaScript, and modern web frameworks, I build solutions that matter—whether that's automating curriculum or crafting seamless digital experiences.
              </p>
              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Educational Software Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Full-Stack Web Applications</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Curriculum Design & Automation</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                  <span className="text-slate-300">Cloud & Virtualization Solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="mt-16 relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative bg-slate-900/40 backdrop-blur-2xl border border-blue-500/30 rounded-2xl p-8 hover:border-blue-400/50 transition duration-500">
              <h3 className="text-2xl font-bold mb-6 text-cyan-400">Quick Facts</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="pb-4 border-b md:border-b-0 md:border-r border-blue-500/20">
                  <span className="text-slate-300 block mb-2">Coding Experience</span>
                  <span className="text-cyan-400 font-bold text-xl">2+ Years</span>
                </div>
                <div className="pb-4 border-b md:border-b-0 md:border-r border-blue-500/20">
                  <span className="text-slate-300 block mb-2">Projects</span>
                  <span className="text-cyan-400 font-bold text-xl">15+</span>
                </div>
                <div className="pb-4 border-b md:border-b-0 md:border-r border-blue-500/20">
                  <span className="text-slate-300 block mb-2">Technologies</span>
                  <span className="text-cyan-400 font-bold text-xl">12+</span>
                </div>
                <div>
                  <span className="text-slate-300 block mb-2">Clients</span>
                  <span className="text-cyan-400 font-bold text-xl">10+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Skills & Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, i) => (
              <div key={i} className="group">
                <div className="bg-slate-900/40 backdrop-blur-md border border-blue-500/20 rounded-xl p-6 hover:border-blue-400/50 transition duration-300">
                  <h3 className="text-xl font-bold text-cyan-400 mb-4">{skill.category}</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.items.map((item, j) => (
                      <span key={j} className="bg-blue-500/20 text-blue-300 text-sm px-3 py-1 rounded-full border border-blue-500/30 group-hover:border-blue-400/50 transition duration-300">
                        {item}
                      </span>
                    ))}
                  </div>
                  <div className="w-full bg-slate-800/50 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <div className="text-right text-sm text-slate-400 mt-2">{skill.level}%</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-24 px-6 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-16 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Featured Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => {
              const IconComponent = project.icon;
              return (
                <div 
                  key={idx} 
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative bg-slate-900/60 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-8 h-full flex flex-col hover:border-blue-400/50 transition duration-300">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition duration-300">
                      <IconComponent size={24} />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-300 transition duration-300">{project.title}</h3>
                    <p className="text-slate-400 mb-6 flex-grow leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-blue-500/30 text-blue-200 text-xs px-3 py-1 rounded-full border border-blue-500/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold transition duration-300 group/link"
                    >
                      View Project <ExternalLink size={16} className="group-hover/link:translate-x-1 transition duration-300" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Let's Collaborate</span>
          </h2>
          <p className="text-center text-slate-300 text-lg mb-16">
            Have an idea? Let's build something amazing together. Reach out anytime.
          </p>

          <div className="relative group mb-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <form onSubmit={handleSubmit} className="relative bg-slate-900/50 backdrop-blur-xl border border-blue-500/30 rounded-2xl p-10 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-cyan-400 mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition duration-300"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-cyan-400 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-cyan-400 mb-2">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full bg-slate-800/50 border border-blue-500/30 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30 transition duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold py-3 rounded-lg transition duration-300 flex items-center justify-center gap-2 hover:shadow-2xl hover:shadow-blue-500/50"
              >
                <Send size={18} />
                Send Message
              </button>
              {submitted && (
                <div className="bg-green-500/20 border border-green-500/50 text-green-300 p-4 rounded-lg text-center animate-pulse">
                  ✓ Thanks for reaching out! I'll get back soon.
                </div>
              )}
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:joshig2248@gmail.com" className="group flex items-center gap-3 px-6 py-3 bg-slate-900/40 border border-blue-500/30 rounded-lg hover:border-blue-400/50 hover:bg-slate-900/60 transition duration-300">
              <Mail size={20} className="text-cyan-400" />
              <span className="text-slate-300 group-hover:text-white transition">Email</span>
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 bg-slate-900/40 border border-blue-500/30 rounded-lg hover:border-blue-400/50 hover:bg-slate-900/60 transition duration-300">
              <span className="text-cyan-400 font-bold">◉</span>
              <span className="text-slate-300 group-hover:text-white transition font-semibold">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 px-6 py-3 bg-slate-900/40 border border-blue-500/30 rounded-lg hover:border-blue-400/50 hover:bg-slate-900/60 transition duration-300">
              <span className="text-cyan-400 font-bold">◉</span>
              <span className="text-slate-300 group-hover:text-white transition font-semibold">LinkedIn</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 border-t border-blue-500/20 bg-slate-950/50">
        <div className="max-w-5xl mx-auto text-center text-slate-400">
          <p className="mb-2">© 2024 Gaurav. Crafted with code and creativity.</p>
          <p className="text-sm">Built with React, Tailwind CSS & ❤️</p>
        </div>
      </footer>
    </div>
  );
}