import React, { useState, useEffect, useRef } from 'react';
import { Code, Smartphone, Server, Layers, Github, Linkedin, Mail, ExternalLink, Database, Cloud, Cpu, Award, Briefcase, MapPin, Globe, Terminal, Send, Sparkles, Code2, Zap, GitBranch, Star, GitFork } from 'lucide-react';

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // AI Lab states
  const [messages, setMessages] = useState([
    { role: 'system', content: 'AI Lab Terminal v1.0 - Ready to assist' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const messagesEndRef = useRef(null);
  const terminalRef = useRef(null);

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

  // Auto-scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/mhassan111/repos?sort=updated&per_page=6');
        const data = await response.json();
        setGithubRepos(data);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
      } finally {
        setLoadingRepos(false);
      }
    };

    fetchGithubRepos();
  }, []);

  // Send message to Spring Boot backend
  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setError(null);

    // Add user message to chat
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // Replace with your actual Spring Boot backend URL
      const response = await fetch('YOUR_BACKEND_URL/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: userMessage })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      
      // Add AI response to chat
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: data.response || data.message || 'Response received' 
      }]);
    } catch (err) {
      console.error('Error calling AI backend:', err);
      setError('Failed to connect to AI backend. Please check your connection.');
      setMessages(prev => [...prev, { 
        role: 'error', 
        content: 'Connection error. Please try again.' 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  // Shimmer loading component
  const ShimmerLine = ({ width = '100%', height = '1rem' }) => (
    <div 
      className="animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] rounded"
      style={{ width, height, animation: 'shimmer 2s infinite' }}
    />
  );

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
        { name: "iOS", years: "1+", level: 75, icon: "🍎" },
        { name: "KMP", years: "2+", level: 88, icon: "🔗" },
        { name: "Flutter", years: "4+", level: 90, icon: "💙" }
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "Kotlin", years: "8+", level: 95, icon: "🎯" },
        { name: "Java", years: "8+", level: 88, icon: "☕" },
        { name: "Swift", years: "1+", level: 75, icon: "🚀" },
        { name: "Dart", years: "4+", level: 90, icon: "🎨" }
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
    {
      company: "Upwork",
      role: "Senior Mobile Developer",
      period: "Aug 2025 - Present",
      duration: "2 months",
      description: "Leading cross-platform mobile development projects. Implementing CI/CD pipelines for automated testing and deployment."
    },
    {
      company: "Dubizzle Labs",
      role: "Senior Android Developer",
      period: "Nov 2024 - Aug 2025",
      duration: "10 months",
      description: "Maintained OLX Pakistan super app with 30M+ downloads. Optimized performance and implemented new features."
    },
    {
      company: "speeqr",
      role: "Senior Android Developer",
      period: "Apr 2024 - Oct 2024",
      duration: "7 months",
      description: "Developed enterprise communication solutions with real-time messaging capabilities."
    },
    {
      company: "STARZPLAY",
      role: "Senior Android Developer",
      period: "Apr 2023 - Jul 2023",
      duration: "4 months",
      description: "Built streaming platform features with ExoPlayer integration and offline caching."
    },
    {
      company: "Nextbridge Ltd.",
      role: "Senior Android Developer",
      period: "Mar 2022 - Apr 2023",
      duration: "1y 2m",
      description: "Developed enterprise mobile solutions with clean architecture implementation and mentored junior developers."
    },
    {
      company: "1zero7",
      role: "Android Developer",
      period: "Sep 2017 - Feb 2022",
      duration: "4y 6m",
      description: "Developed parental control and security applications with advanced monitoring features. Led mobile development team and implemented clean architecture patterns."
    }
  ];

  const achievements = [
    "8+ years mobile development expertise",
    "25+ apps delivered across platforms",
    "Top-Rated on Upwork (100% success)",
    "60% deployment efficiency improvement",
    "40% reduction in bug reports",
    "Mentored 5+ developers"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f14] via-[#0f1419] to-[#11151a] text-gray-100 relative overflow-hidden">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .message-enter {
          animation: fadeIn 0.3s ease-out;
        }
        
        .terminal-cursor::after {
          content: '▋';
          animation: blink 1s infinite;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
      {/* Animated Background Grid */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="fixed top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" 
           style={{ transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)` }} />
      <div className="fixed bottom-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
           style={{ transform: `translate(${-mousePosition.x * 0.02}px, ${-mousePosition.y * 0.02}px)` }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0a0f14]/90 backdrop-blur-xl border-b border-blue-500/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-500">Muhammad Hassan</div>
          <div className="flex gap-6">
            <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#ai-lab" className="hover:text-emerald-500 transition-colors">AI Lab</a>
            <a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <MapPin className="w-4 h-4" />
            <span>Lahore, Pakistan • Available for Remote Work</span>
          </div>
          
          <h1 className="text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            Senior Mobile Developer
          </h1>
          
          <p className="text-2xl text-gray-500 mb-8 max-w-3xl">
            Architecting premium mobile experiences across Android, iOS, and KMP
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500">
              8+ years Android
            </span>
            <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500">
              4+ years Flutter
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500">
              2+ years KMP
            </span>
            <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500">
              Spring Boot Backend
            </span>
          </div>

          <div className="flex gap-4">
            <a href="https://www.upwork.com/freelancers/~01dda2c8f77c9c4b89" 
               className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              View Upwork Profile
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { label: "Apps Delivered", value: "25+", color: "emerald" },
            { label: "Years Experience", value: "8+", color: "blue" },
            { label: "Upwork Success", value: "100%", color: "emerald" }
          ].map((stat, idx) => (
            <div key={idx} className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-all">
              <div className={`text-4xl font-bold mb-2 ${stat.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-500">
            Technical Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup, idx) => (
              <div key={idx} className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-emerald-500">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.items.map((skill, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300 font-medium">
                          {skill.icon && `${skill.icon} `}{skill.name}
                        </span>
                        <span className="text-emerald-500 text-sm font-semibold">
                          {skill.years || `${skill.level}%`}
                        </span>
                      </div>
                      <div className="h-2 bg-[#0a0f14] rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full transition-all duration-1000"
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
      </section>

      {/* Projects Bento Grid */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-500">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} 
                   className="group bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    {project.type}
                  </span>
                  {project.link && (
                    <a href={project.link} className="text-blue-500 hover:text-emerald-500 transition-colors">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-2 text-blue-500">{project.title}</h3>
                <p className="text-sm text-emerald-500 mb-3">{project.company}</p>
                <p className="text-gray-400 text-sm mb-4">{project.desc}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KMP Showcase */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-[#111820] to-[#0d1218] border border-blue-500/20 rounded-3xl p-12">
            <div className="flex items-center gap-3 mb-6">
              <Layers className="w-8 h-8 text-emerald-500" />
              <h2 className="text-4xl font-bold text-blue-500">Kotlin Multiplatform Expert</h2>
            </div>
            
            <p className="text-xl text-gray-500 mb-10 max-w-3xl">
              Specializing in shared business logic across iOS and Android with 2+ years of production KMP experience. 
              Reduced codebase by 40% while maintaining native performance.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                <Code className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-blue-500">Shared Logic</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Ktor, SQLDelight, Kotlinx Serialization, Koin DI
                </p>
              </div>
              
              <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                <Smartphone className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-blue-500">Compose Multiplatform</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Unified UI across Android & iOS platforms
                </p>
              </div>
              
              <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                <Database className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-blue-500">Type-Safe APIs</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Apollo Kotlin GraphQL, REST with Ktor
                </p>
              </div>
              
              <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                <Server className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold mb-3 text-blue-500">Backend & DevOps</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="text-sm">🍃 Spring Boot</span>
                  <span className="text-sm">🔥 Firebase</span>
                  <span className="text-sm">⚙️ CI/CD</span>
                  <span className="text-sm">🐘 PostgreSQL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Lab Section */}
      <section id="ai-lab" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-emerald-500" />
              <h2 className="text-5xl font-bold text-blue-500">AI Projects Portfolio</h2>
              <Sparkles className="w-8 h-8 text-emerald-500" />
            </div>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              Building intelligent applications with cutting-edge AI technologies across Android and Spring Boot platforms
            </p>
          </div>

          {/* AI-Powered Android Apps */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Smartphone className="w-7 h-7 text-emerald-500" />
              <h3 className="text-3xl font-bold text-blue-500">AI-Powered Android Apps</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI Chat with Gemini Nano */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    Gemini Nano
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">AI Chat with Gemini Nano</h4>
                <p className="text-gray-400 text-sm mb-4">
                  On-device AI chat powered by Gemini Nano for fast, private conversations
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Nano</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">AI Core</span>
                </div>
              </div>

              {/* Gemini Multimodal */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    Multimodal
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Gemini Multimodal Generation</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Advanced image analysis and description using Gemini's multimodal capabilities
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Vision</span>
                </div>
              </div>

              {/* Gemini Chatbot */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    Conversational AI
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Gemini Chatbot</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Intelligent conversational assistant with context-aware responses
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Jetpack Compose</span>
                </div>
              </div>

              {/* Summarization with Gemini Nano */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    On-Device AI
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Text Summarization</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Instant text summarization using on-device Gemini Nano for privacy
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Nano</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">NLP</span>
                </div>
              </div>

              {/* Image Description with Nano */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    Vision AI
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Image Description</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Automatic image captioning and description with Gemini Nano
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Nano</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Computer Vision</span>
                </div>
              </div>

              {/* Polish Text with Nano */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    Text Enhancement
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Text Polish Assistant</h4>
                <p className="text-gray-400 text-sm mb-4">
                  AI-powered text improvement and grammar correction with Gemini Nano
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Nano</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">NLP</span>
                </div>
              </div>

              {/* Image Generation with Imagen */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    Generative AI
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Image Generation</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Create stunning images from text prompts using Google's Imagen AI
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Imagen API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Text-to-Image</span>
                </div>
              </div>

              {/* Image Editing with Imagen */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    Image Editing
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">AI Image Editor</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Advanced image editing and manipulation powered by Imagen AI
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Imagen API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Image Processing</span>
                </div>
              </div>

              {/* Magic Selfie */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    ML Kit
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Magic Selfie Editor</h4>
                <p className="text-gray-400 text-sm mb-4">
                  AI-powered background replacement using Imagen and ML Kit Segmentation
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Imagen</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">ML Kit</span>
                </div>
              </div>

              {/* Video Metadata Creation */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    Video AI
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">Video Metadata Generator</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Auto-generate thumbnails, tags, and metadata for video content with AI
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Video Processing</span>
                </div>
              </div>

              {/* Gemini Live API */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    Live API
                  </span>
                </div>
                <h4 className="text-xl font-bold text-blue-500 mb-2">AI-Powered To-Do App</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Voice-controlled task management with Gemini Live API for natural interactions
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Kotlin</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Live</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Voice Assistant</span>
                </div>
              </div>
            </div>
          </div>

          {/* Spring Boot AI Backend Projects */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <Server className="w-7 h-7 text-emerald-500" />
              <h3 className="text-3xl font-bold text-blue-500">Spring Boot AI Backend</h3>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AI Chatbot API */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    REST API
                  </span>
                </div>
                <h4 className="text-xl font-bold text-emerald-500 mb-2">AI Chat Backend</h4>
                <p className="text-gray-400 text-sm mb-4">
                  RESTful API for AI chat with Gemini integration and conversation management
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Spring Boot</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">REST</span>
                </div>
              </div>

              {/* Image Analysis API */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    Vision API
                  </span>
                </div>
                <h4 className="text-xl font-bold text-emerald-500 mb-2">Image Analysis Service</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Backend service for image description and multimodal generation with Gemini
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Spring Boot</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Vision</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Multimodal</span>
                </div>
              </div>

              {/* Text Processing API */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    NLP API
                  </span>
                </div>
                <h4 className="text-xl font-bold text-emerald-500 mb-2">Text Processing Service</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Summarization, text polishing, and NLP services powered by Gemini AI
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Spring Boot</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">NLP</span>
                </div>
              </div>

              {/* Image Generation API */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    Generative AI
                  </span>
                </div>
                <h4 className="text-xl font-bold text-emerald-500 mb-2">Image Generation API</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Backend service for text-to-image and image editing with Imagen integration
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Spring Boot</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Imagen API</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Text-to-Image</span>
                </div>
              </div>

              {/* Video Processing API */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-emerald-500/10 rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-emerald-500" />
                  </div>
                  <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-xs font-semibold">
                    Video API
                  </span>
                </div>
                <h4 className="text-xl font-bold text-emerald-500 mb-2">Video Metadata Service</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Automated video analysis, thumbnail generation, and metadata extraction
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Spring Boot</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Vision</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">FFmpeg</span>
                </div>
              </div>

              {/* Live Assistant API */}
              <div className="bg-[#111820]/60 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-6 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center">
                    <Terminal className="w-6 h-6 text-blue-500" />
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    Live API
                  </span>
                </div>
                <h4 className="text-xl font-bold text-emerald-500 mb-2">Live Assistant Backend</h4>
                <p className="text-gray-400 text-sm mb-4">
                  Real-time AI assistant with WebSocket support and Gemini Live integration
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Spring Boot</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">Gemini Live</span>
                  <span className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">WebSocket</span>
                </div>
              </div>
            </div>
          </div>

          {/* GitHub Projects */}
          <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Github className="w-7 h-7 text-blue-500" />
              <h3 className="text-3xl font-bold text-blue-500">Open Source Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loadingRepos ? (
                // Loading state for GitHub repos
                <>
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-[#0a0f14]/80 rounded-xl p-5 border border-blue-500/10">
                      <div className="space-y-3">
                        <ShimmerLine width="60%" height="1.25rem" />
                        <ShimmerLine width="100%" height="0.75rem" />
                        <ShimmerLine width="80%" height="0.75rem" />
                        <div className="flex gap-4 mt-4">
                          <ShimmerLine width="4rem" height="0.75rem" />
                          <ShimmerLine width="4rem" height="0.75rem" />
                          <ShimmerLine width="4rem" height="0.75rem" />
                        </div>
                      </div>
                    </div>
                  ))}
                </>
              ) : (
                githubRepos.slice(0, 6).map((repo) => (
                  <a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-[#0a0f14]/80 rounded-xl p-5 border border-blue-500/10 hover:border-emerald-500/30 transition-all group"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-5 h-5 text-blue-500" />
                        <h4 className="font-bold text-blue-500 group-hover:text-emerald-500 transition-colors text-sm">
                          {repo.name}
                        </h4>
                      </div>
                      <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-emerald-500 transition-colors" />
                    </div>
                    
                    {repo.description && (
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">
                        {repo.description}
                      </p>
                    )}

                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      {repo.language && (
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                          <span>{repo.language}</span>
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        <span>{repo.stargazers_count}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <GitFork className="w-3 h-3" />
                        <span>{repo.forks_count}</span>
                      </div>
                    </div>
                  </a>
                ))
              )}
            </div>

            <a
              href="https://github.com/mhassan111"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl font-semibold transition-all flex items-center justify-center gap-2"
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-500">
            Professional Experience
          </h2>
          
          <div className="space-y-6">
            {experience.map((exp, idx) => (
              <div key={idx} className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-emerald-500 mb-1">{exp.role}</h3>
                    <p className="text-xl text-blue-500 mb-2">{exp.company}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-500">
            Key Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, idx) => (
              <div key={idx} className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all flex items-start gap-4">
                <Award className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <p className="text-gray-400">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="relative py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-[#111820] to-[#0d1218] border border-blue-500/20 rounded-3xl p-12">
            <h2 className="text-5xl font-bold mb-6 text-blue-500">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-500 mb-10">
              Available for freelance projects, consulting, or full-time opportunities. 
              Let's discuss how I can help bring your mobile vision to life.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:muhammad.hassan@example.com" 
                 className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-blue-500/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2026 Muhammad Hassan - Senior Mobile Developer
          </p>
          <p className="text-gray-500 text-sm">
            Built with React + Tailwind CSS • Optimized for Cloudflare Pages
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;