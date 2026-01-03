import React, { useState, useEffect } from 'react';
import { Code, Smartphone, Server, Layers, Github, Linkedin, Mail, ExternalLink, Database, Cloud, Cpu, Award, Briefcase, MapPin, Globe } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "OLX Pakistan",
      company: "Dubizzle Labs",
      desc: "Pakistan's biggest marketplace super app with 30M+ downloads",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines"],
      gradient: "from-purple-600 to-blue-600",
      link: "https://play.google.com/store/apps/details?id=com.dubizzle.olx.pk",
      type: "Android"
    },
    {
      title: "ScreenGuard",
      company: "KMP Project",
      desc: "Cross-platform screen time management with shared business logic",
      tech: ["KMP", "Compose Multiplatform", "SQLDelight", "Ktor"],
      gradient: "from-green-500 to-emerald-600",
      type: "KMP"
    },
    {
      title: "HarmonyLink",
      company: "iOS App",
      desc: "Modern dating app with SwiftUI and real-time messaging",
      tech: ["Swift", "SwiftUI", "Core Data", "Combine"],
      gradient: "from-pink-500 to-rose-600",
      type: "iOS"
    },
    {
      title: "MediProx",
      company: "Healthcare System",
      desc: "BLE-based proximity tracking with Flutter admin dashboard",
      tech: ["Android", "Flutter", "BLE", "Cloud Storage"],
      gradient: "from-blue-500 to-cyan-600",
      type: "Android"
    },
    {
      title: "Starzplay",
      company: "STARZPLAY",
      desc: "Streaming platform with ExoPlayer and offline caching",
      tech: ["Kotlin", "MVVM", "ExoPlayer", "Firebase"],
      gradient: "from-orange-500 to-red-600",
      link: "https://play.google.com/store/apps/details?id=com.parsifal.starz",
      type: "Android"
    },
    {
      title: "SecureKin",
      company: "1zero7",
      desc: "Parental control app with 360° device monitoring",
      tech: ["Kotlin", "Room", "Hilt", "Coroutines"],
      gradient: "from-indigo-500 to-purple-600",
      link: "https://play.google.com/store/apps/details?id=com.app.securekin",
      type: "Android"
    }
  ];

  const skills = [
    {
      category: "Mobile Platforms",
      items: [
        { name: "Android", years: "8+", level: 95, icon: "🤖" },
        { name: "Flutter", years: "4+", level: 90, icon: "💙" },
        { name: "KMP", years: "2+", level: 88, icon: "🔗" },
        { name: "iOS", years: "0.5", level: 75, icon: "🍎" }
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "Kotlin", years: "8+", level: 95, icon: "🎯" },
        { name: "Dart", years: "4+", level: 90, icon: "🎨" },
        { name: "Java", years: "8+", level: 88, icon: "☕" },
        { name: "Swift", years: "0.5", level: 75, icon: "🚀" }
      ]
    },
    {
      category: "Architecture & Patterns",
      items: [
        { name: "Clean Architecture", level: 95 },
        { name: "MVVM / MVI", level: 93 },
        { name: "Jetpack Compose", level: 92 },
        { name: "Reactive Programming", level: 90 }
      ]
    },
    {
      category: "Backend & DevOps",
      items: [
        { name: "Spring Boot", level: 85, icon: "🍃" },
        { name: "Firebase", level: 90, icon: "🔥" },
        { name: "CI/CD", level: 88, icon: "⚙️" },
        { name: "PostgreSQL", level: 85, icon: "🐘" }
      ]
    }
  ];

  const experience = [
    { company: "Upwork", role: "Senior Mobile Developer", period: "Aug 2025 - Present", duration: "2 months" },
    { company: "Dubizzle Labs", role: "Senior Android Developer", period: "Nov 2024 - Aug 2025", duration: "10 months" },
    { company: "speeqr", role: "Senior Android Developer", period: "Apr 2024 - Oct 2024", duration: "7 months" },
    { company: "STARZPLAY", role: "Senior Android Developer", period: "Apr 2023 - Jul 2023", duration: "4 months" },
    { company: "Nextbridge Ltd.", role: "Senior Android Developer", period: "Mar 2022 - Apr 2023", duration: "1y 2m" },
    { company: "1zero7", role: "Android Developer", period: "Sep 2017 - Feb 2022", duration: "4y 6m" }
  ];

  const achievements = [
    "8+ years mobile development expertise",
    "25+ apps delivered across platforms",
    "Top-Rated on Upwork (100% success)",
    "60% deployment efficiency improvement",
    "40% reduction in bug reports",
    "Mentored 10+ developers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl transition-all duration-1000"
          style={{
            top: `${mousePosition.y / 10}px`,
            left: `${mousePosition.x / 10}px`,
          }}
        />
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl top-1/4 right-0 animate-pulse" />
        <div className="absolute w-96 h-96 bg-pink-500/20 rounded-full blur-3xl bottom-0 left-1/4 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-gray-950/50 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Muhammad Hassan
            </div>
            <div className="flex gap-4">
              <a href="https://github.com/mhassan111" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/muhammad-hassan-0aab45a1" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:mhassanuetcs12@gmail.com" className="hover:text-purple-400 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* Hero Section */}
        <div className="mb-32 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-sm text-purple-300">
            <MapPin className="inline w-4 h-4 mr-2" />
            Lahore, Pakistan • Available for Remote Work
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
            Senior Mobile Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Architecting premium mobile experiences across Android, iOS, and KMP
          </p>
          
          <p className="text-lg text-gray-500 mb-8">
            8+ years Android • 4+ years Flutter • 2+ years KMP • Spring Boot Backend
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://www.upwork.com/freelancers/~0182621baf8a16e9e5" target="_blank" rel="noopener noreferrer" 
               className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
              View Upwork Profile
            </a>
            <a href="https://mhassan111.github.io/HassanTheMobileDeveloper.github.io" target="_blank" rel="noopener noreferrer"
               className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all">
              Portfolio Website
            </a>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-purple-400">25+</div>
              <div className="text-sm text-gray-400">Apps Delivered</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-blue-400">8+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-green-400">100%</div>
              <div className="text-sm text-gray-400">Upwork Success</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-3xl font-bold text-pink-400">30M+</div>
              <div className="text-sm text-gray-400">User Reach</div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-all">
                <h3 className="text-xl font-semibold mb-6 text-purple-300">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300">
                          {skill.icon && `${skill.icon} `}{skill.name}
                        </span>
                        <span className="text-gray-500 text-sm">{skill.years || `${skill.level}%`}</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Bento Grid */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all hover:transform hover:scale-105"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-xs px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300">
                      {project.type}
                    </div>
                    {project.link && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-purple-400 transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-gray-500 mb-3">{project.company}</p>
                  
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                    {project.desc}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* KMP Showcase */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-green-400" />
              <h2 className="text-3xl font-bold text-green-300">Kotlin Multiplatform Expert</h2>
            </div>
            
            <p className="text-gray-300 mb-8 text-lg">
              Specializing in shared business logic across iOS and Android with 2+ years of production KMP experience. 
              Reduced codebase by 40% while maintaining native performance.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                <Code className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2 text-white">Shared Logic</h3>
                <p className="text-sm text-gray-400">Ktor, SQLDelight, Kotlinx Serialization, Koin DI</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                <Smartphone className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2 text-white">Compose Multiplatform</h3>
                <p className="text-sm text-gray-400">Unified UI across Android & iOS platforms</p>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-green-500/20">
                <Database className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="font-semibold mb-2 text-white">Type-Safe APIs</h3>
                <p className="text-sm text-gray-400">Apollo Kotlin GraphQL, REST with Ktor</p>
              </div>
            </div>
          </div>
        </div>

        {/* Backend Architecture */}
        <div className="mb-24">
          <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-3xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <Server className="w-8 h-8 text-blue-400" />
              <h2 className="text-3xl font-bold text-blue-300">Backend & DevOps</h2>
            </div>
            
            <div className="grid md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-white/5 rounded-xl border border-blue-500/20">
                <div className="text-3xl mb-2">🍃</div>
                <div className="font-semibold text-white">Spring Boot</div>
                <div className="text-xs text-gray-400 mt-1">Kotlin APIs</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-blue-500/20">
                <div className="text-3xl mb-2">🔥</div>
                <div className="font-semibold text-white">Firebase</div>
                <div className="text-xs text-gray-400 mt-1">Real-time DB</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-blue-500/20">
                <div className="text-3xl mb-2">⚙️</div>
                <div className="font-semibold text-white">CI/CD</div>
                <div className="text-xs text-gray-400 mt-1">GitHub Actions</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-xl border border-blue-500/20">
                <div className="text-3xl mb-2">🐘</div>
                <div className="font-semibold text-white">PostgreSQL</div>
                <div className="text-xs text-gray-400 mt-1">Supabase</div>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
          
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-purple-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-white">{exp.role}</h3>
                    <p className="text-purple-400">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-400">{exp.period}</p>
                    <p className="text-xs text-gray-500">{exp.duration}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Key Achievements
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="flex items-center gap-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 hover:border-purple-500/30 transition-all">
                <Award className="w-5 h-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">{achievement}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Available for freelance projects, consulting, or full-time opportunities. 
            Let's discuss how I can help bring your mobile vision to life.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:mhassanuetcs12@gmail.com" 
               className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2">
              <Mail size={20} />
              Get In Touch
            </a>
            <a href="tel:+923350774108" 
               className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg font-semibold hover:bg-white/10 transition-all">
              +92 335 0774108
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          <p>© 2026 Muhammad Hassan - Senior Mobile Developer</p>
          <p className="mt-2">Built with React + Tailwind CSS • Optimized for Cloudflare Pages</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;