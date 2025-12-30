import React, { useState } from 'react';
import { Mail, Linkedin, Github, ExternalLink, Code, Briefcase, GraduationCap, Award, Menu, X, MapPin, Phone } from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = {
    languages: ['Python', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL'],
    frameworks: ['React.js', 'Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI'],
    databases: ['MongoDB', 'MySQL', 'PostgreSQL'],
    tools: ['Git', 'GitHub', 'Postman', 'VS Code', 'RESTful APIs', 'OAuth', 'JWT'],
    methodologies: ['Agile', 'Scrum', 'Version Control', 'API Integration']
  };

  const experience = [
    {
      title: 'MERN Stack Intern',
      company: 'UPTOSKILLS (EdTech Platform)',
      period: 'May 2025 – August 2025',
      location: 'Remote',
      description: [
        'Led a cross-functional team of 20+ developers to build an AI-powered Resume Builder using the MERN stack, Agile methodologies, and RESTful APIs — improving scalability and development speed by 35%',
        'Streamlined sprint planning, task allocation, and Git-based workflows, ensuring 100% on-time delivery and enhancing code quality by 20% through structured peer reviews',
        'Mentored junior developers, conducted daily stand-ups, and reported project progress to the senior team lead'
      ]
    },
    {
      title: 'MERN Stack Intern',
      company: 'PIXELTESTS, US-based EdTech startup',
      period: 'April 2024 – July 2024',
      location: 'Remote',
      description: [
        'Implemented Google OAuth–based user onboarding, reducing setup time by 50% and enhancing authentication security',
        'Engineered a ticket-generation module for a customer support automation system, refactoring 2000+ lines of Flask code to FastAPI, improving response latency by 40% and reducing manual ticket handling time by 30%',
        'Collaborated with cross-functional teams to design scalable, maintainable backend architectures following Agile best practices'
      ]
    }
  ];

  const projects = [
    {
      title: 'DATRI – Food Donation Platform',
      description: 'Built a full-stack MERN platform for food donations with QR code payment system, OCR verification, and automated birthday reminders. Increased user engagement by 60% and reduced fraud by 70%.',
      tech: ['MERN Stack', 'Gmail API', 'OCR', 'Node-Cron', 'QR Codes'],
      github: 'https://github.com/KarimunnisaShaik7862',
      demo: '#',
      year: '2025'
    },
    {
      title: 'AI-Powered Resume Builder',
      description: 'Developed a full-stack web app using Gemini API that reduces resume creation time by 75% through AI-driven content automation. Features customizable templates and PDF export functionality.',
      tech: ['MERN Stack', 'Gemini API', 'PDF Export', 'AI Integration'],
      github: 'https://github.com/KarimunnisaShaik7862',
      demo: '#',
      year: '2025'
    },
    {
      title: 'AP Govt Hostel Leave Letter Portal',
      description: 'Engineered a MERN app automating student leave requests with interactive dashboard and instant email notifications. Improved approval efficiency by 70% and accelerated communication by 90%.',
      tech: ['MERN Stack', 'Gmail API', 'Email Automation', 'Dashboard'],
      github: 'https://github.com/KarimunnisaShaik7862',
      demo: 'https://leave-frontend-pink.vercel.app/',
      year: '2024'
    }
  ];

  const achievements = [
    'Led and orchestrated SRKR CSDFest (2023), managing event planning and coordination for 150+ students',
    'Conducted MERN Stack workshops (2023-2024) for 50+ students, teaching full-stack development fundamentals',
    'Managed logistics for a 1,200+ participant spelling competition (2022-2023)',
    'Team Leader for AI-powered Resume Builder with 20+ developers'
  ];

  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science and Design',
      institution: 'SRKR Engineering College',
      location: 'Bhimavaram, Andhra Pradesh',
      period: 'Expected May 2026',
      grade: 'CGPA: 8.38 / 10'
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Modern Roof Girls Junior College',
      location: 'Nidadavole, Andhra Pradesh',
      period: '2020 – 2022',
      grade: 'Percentage: 70%'
    },
    {
      degree: 'SSC (10th Class)',
      institution: 'Montessori (E.M) High School',
      location: 'Nidadavole, Andhra Pradesh',
      period: '2020',
      grade: 'Percentage: 89%'
    }
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-violet-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
            Karimunnisa
          </h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-slate-600 hover:text-violet-600 transition-colors capitalize"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-slate-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="flex flex-col py-4 px-6 gap-4">
              {['about', 'skills', 'experience', 'projects', 'education', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-slate-600 hover:text-violet-600 transition-colors capitalize text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6 inline-block p-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full">
            <div className="bg-white rounded-full px-6 py-2">
              <p className="text-sm font-medium bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
                Open to Opportunities
              </p>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6">
            Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">Karimunnisa Shaik</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-4 max-w-3xl mx-auto">
            Full-Stack Developer specializing in MERN Stack & Python
          </p>
          
          <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
            6+ months of internship experience building scalable, high-impact solutions. 
            Proven leader committed to clean code and collaborative tech environments.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap mb-8">
            <a
              href="#contact"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white rounded-lg hover:shadow-lg transition-all"
            >
              Get in Touch
            </a>
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-slate-700 rounded-lg hover:shadow-lg transition-all border border-slate-200"
            >
              View Projects
            </a>
          </div>

          <div className="flex gap-6 justify-center items-center flex-wrap text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-violet-600" />
              <span>Tanuku, Andhra Pradesh</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-violet-600" />
              <span>+91-9392250392</span>
            </div>
          </div>

          <div className="flex gap-6 justify-center mt-6">
            <a href="https://github.com/KarimunnisaShaik7862" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-600 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/karimunnisa-shaik-aa1a992a3" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-violet-600 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:karimunnisashaik7862@gmail.com" className="text-slate-600 hover:text-violet-600 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-8 text-center">About Me</h2>
          <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              I'm a passionate full-stack developer with hands-on experience in building scalable web applications 
              using the MERN stack and Python frameworks. My journey in tech has been driven by a love for solving 
              complex problems and creating intuitive user experiences.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              During my internships at UPTOSKILLS and PIXELTESTS, I've led cross-functional teams, improved system 
              performance, and delivered projects that made a real impact. I've reduced response latency by 40%, 
              improved authentication security, and built AI-powered tools that enhanced user productivity by 75%.
            </p>
            <p className="text-lg text-slate-700 leading-relaxed">
              Currently pursuing my B.Tech in Computer Science and Design at SRKR Engineering College, I'm always 
              eager to learn new technologies and contribute to meaningful projects. I believe in writing clean, 
              maintainable code and following Agile best practices to deliver high-quality solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-slate-800 mb-4 capitalize">
                  {category === 'languages' ? 'Programming Languages' : 
                   category === 'frameworks' ? 'Frameworks & Libraries' :
                   category === 'databases' ? 'Databases' :
                   category === 'tools' ? 'Tools & Platforms' :
                   'Methodologies'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gradient-to-r from-blue-50 to-violet-50 text-slate-700 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Professional Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl p-8 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg">
                    <Briefcase className="text-violet-600" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800">{exp.title}</h3>
                    <p className="text-violet-600 font-medium">{exp.company}</p>
                    <div className="flex flex-wrap gap-3 text-slate-500 text-sm mt-1">
                      <span>{exp.period}</span>
                      <span>•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 ml-16">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-slate-700 flex items-start gap-2">
                      <span className="text-violet-600 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-violet-100 rounded-lg">
                      <Code className="text-violet-600" size={20} />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-800">{project.title}</h3>
                  </div>
                  <span className="text-xs text-slate-500 font-medium">{project.year}</span>
                </div>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 hover:text-violet-600 transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Education</h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-lg">
                    <GraduationCap className="text-violet-600" size={28} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-800 mb-2">{edu.degree}</h3>
                    <p className="text-violet-600 font-medium mb-1">{edu.institution}</p>
                    <p className="text-slate-600 text-sm mb-2">{edu.location}</p>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="text-slate-700 font-medium">{edu.period}</span>
                      <span className="text-slate-400">•</span>
                      <span className="text-slate-700 font-medium">{edu.grade}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Achievements & Leadership</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4">
                <div className="p-2 bg-gradient-to-br from-blue-100 to-violet-100 rounded-lg flex-shrink-0">
                  <Award className="text-violet-600" size={20} />
                </div>
                <p className="text-slate-700">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">Let's Connect</h2>
          <p className="text-xl text-slate-600 mb-12">
            I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
          </p>
          <div className="bg-gradient-to-br from-blue-50 to-violet-50 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-6">
              <a
                href="mailto:karimunnisashaik7862@gmail.com"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <Mail className="text-violet-600" size={32} />
                <span className="text-slate-700 font-medium">Email</span>
                <span className="text-slate-500 text-sm break-all">karimunnisashaik7862@gmail.com</span>
              </a>
              <a
                href="https://linkedin.com/in/karimunnisa-shaik-aa1a992a3"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <Linkedin className="text-violet-600" size={32} />
                <span className="text-slate-700 font-medium">LinkedIn</span>
                <span className="text-slate-500 text-sm">Connect with me</span>
              </a>
              <a
                href="https://github.com/KarimunnisaShaik7862"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-6 bg-white rounded-xl hover:shadow-md transition-shadow"
              >
                <Github className="text-violet-600" size={32} />
                <span className="text-slate-700 font-medium">GitHub</span>
                <span className="text-slate-500 text-sm">Check my code</span>
              </a>
            </div>
            <div className="mt-8 p-6 bg-white rounded-xl">
              <div className="flex items-center justify-center gap-2 text-slate-600">
                <Phone size={20} className="text-violet-600" />
                <span className="font-medium">+91-9392250392</span>
              </div>
              <p className="text-slate-500 text-sm mt-2">Available for calls and messages</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 text-center">
        <p className="text-slate-400">
          © 2024 Karimunnisa Shaik. Built with React & Tailwind CSS
        </p>
        <p className="text-slate-500 text-sm mt-2">
          Tanuku, Andhra Pradesh, India
        </p>
      </footer>
    </div>
  );
}