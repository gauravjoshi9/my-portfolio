import React, { useState } from 'react';
import { Mail, ExternalLink, Send } from 'lucide-react';

export default function Portfolio() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

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

  const projects = [
    {
      title: 'MCQ Generator System',
      description: 'Automated standardized 60-question MCQ paper generator for IT curriculum using Python and openpyxl',
      tech: ['Python', 'openpyxl', 'Excel'],
      link: 'https://github.com/gauravjoshi9/mcq-generator'
    },
    {
      title: 'Java Pattern Programs',
      description: 'Collection of nested loop pattern printing exercises with comprehensive documentation',
      tech: ['Java', 'Algorithms', 'Data Structures'],
      link: 'https://github.com/gauravjoshi9/java-patterns'
    },
    {
      title: 'Educational Content Platform',
      description: 'Vocational training materials for cloud computing, virtualization, and networking concepts',
      tech: ['Content Creation', 'IT Training', 'Curriculum Design'],
      link: 'https://github.com/gauravjoshi9/education-platform'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 min-h-screen text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-sm z-50 border-b border-slate-700">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Gaurav
          </div>
          <div className="flex gap-8">
            <a href="#about" className="hover:text-blue-400 transition">About</a>
            <a href="#projects" className="hover:text-blue-400 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold mb-6 leading-tight">
            Creative Developer & <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Content Creator</span>
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Building educational platforms and learning systems. Passionate about clean code, problem-solving, and making complex topics accessible.
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#contact" className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition transform hover:scale-105 inline-block">
              Get In Touch
            </a>
            <a href="#projects" className="border border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-3 rounded-lg font-semibold transition inline-block">
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* About / Resume Section */}
      <section id="about" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-slate-300 text-lg mb-6">
                I'm a developer specializing in educational technology and curriculum development. With expertise in Python, Java, and web technologies, I create systems that bridge the gap between complex technical concepts and practical learning.
              </p>
              <p className="text-slate-300 text-lg mb-4">
                My focus areas include:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li>✓ Educational Software Development</li>
                <li>✓ Curriculum Design & Content Creation</li>
                <li>✓ Automated Testing Systems</li>
                <li>✓ Cloud Computing & Virtualization</li>
                <li>✓ Full-Stack Web Development</li>
              </ul>
            </div>
            <div className="bg-slate-900/50 p-8 rounded-lg border border-slate-700">
              <h3 className="text-xl font-bold mb-6">Skills</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-blue-400 font-semibold mb-1">Languages</p>
                  <p className="text-slate-300">Python, Java, JavaScript, SQL</p>
                </div>
                <div>
                  <p className="text-blue-400 font-semibold mb-1">Frameworks & Libraries</p>
                  <p className="text-slate-300">React, Express.js, Node.js</p>
                </div>
                <div>
                  <p className="text-blue-400 font-semibold mb-1">Tools & Platforms</p>
                  <p className="text-slate-300">Git, Excel, openpyxl, VSCode</p>
                </div>
                <div>
                  <p className="text-blue-400 font-semibold mb-1">Other Skills</p>
                  <p className="text-slate-300">REST APIs, Databases, Problem Solving</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <div key={idx} className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-blue-400 transition transform hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-blue-300 text-sm px-3 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Let's Connect</h2>
          <p className="text-center text-slate-300 mb-12">
            Have a project in mind? Want to collaborate? Drop me a message!
          </p>

          <form onSubmit={handleSubmit} className="bg-slate-900/50 p-8 rounded-lg border border-slate-700 space-y-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                placeholder="Gaurav Joshi"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="w-full bg-slate-800 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center gap-2 transform hover:scale-105"
            >
              <Send size={18} />
              Send Message
            </button>
            {submitted && (
              <div className="bg-green-500/20 border border-green-500 text-green-300 p-4 rounded-lg">
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}
          </form>

          <div className="flex gap-6 justify-center mt-12 flex-wrap">
            <a href="mailto:gauravjoshi2248@gmail.com" className="text-slate-300 hover:text-blue-400 transition flex items-center gap-2">
              <Mail size={24} /> Email
            </a>
            <a href="https://github.com/gauravjoshi9" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition flex items-center gap-2">
              GitHub
            </a>
            <a href="https://linkedin.com/in/gaurav-joshi-40a2b7374" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-blue-400 transition flex items-center gap-2">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-700 py-8 px-6 text-center text-slate-400">
        <p>© 2024 Gaurav. All rights reserved. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
}