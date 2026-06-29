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

  // Projects sourced from actual resume / work history
  const projects = [
    {
      title: "MSales",
      company: "B2B Sales & E-Commerce App",
      desc: "Migrated a B2B sales app from MAUI to KMP — Android, iOS & Web (WASM) from one shared codebase, supporting 4 white-label tenant brands with runtime theming",
      tech: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "SQLDelight", "Koin", "WASM"],
      gradient: "from-green-500 to-emerald-600",
      type: "KMP"
    },
    {
      title: "OLX Pakistan",
      company: "Dubizzle Labs",
      desc: "Pakistan's biggest marketplace super app with 30M+ downloads and 3M+ listings across electronics, cars, property, fashion & jobs",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines"],
      gradient: "from-purple-600 to-blue-600",
      link: "https://play.google.com/store/apps/details?id=com.dubizzle.olx.pk",
      type: "Android"
    },
    {
      title: "ScreenGuard",
      company: "KMP Project",
      desc: "Cross-platform screen time manager — real-time usage tracking, parental controls, focus mode and app blocking, shared across Android & iOS",
      tech: ["KMP", "Compose Multiplatform", "SQLDelight", "Ktor", "Koin"],
      gradient: "from-cyan-500 to-blue-600",
      link: "https://github.com/mhassan111/ScreenGuard",
      type: "KMP"
    },
    {
      title: "HarmonyLink",
      company: "iOS App",
      desc: "Dating & social discovery app with swipe-based matching, real-time chat, video calls and in-app purchases",
      tech: ["Swift", "SwiftUI", "Core Data", "Combine", "AVFoundation"],
      gradient: "from-pink-500 to-rose-600",
      type: "iOS"
    },
    {
      title: "MediProx",
      company: "Healthcare Proximity Tracking",
      desc: "BLE-based proximity tracking for medical staff — geo-fencing alerts and automated audio recording, plus a Flutter admin dashboard",
      tech: ["Android", "BLE", "Flutter", "Google Cloud Storage"],
      gradient: "from-blue-500 to-cyan-600",
      type: "Flutter"
    },
    {
      title: "STARZPLAY",
      company: "STARZPLAY",
      desc: "Streaming app for movies, series and live sports with offline DRM-protected video caching and adaptive bitrate streaming",
      tech: ["Kotlin", "MVVM", "ExoPlayer", "Firebase"],
      gradient: "from-orange-500 to-red-600",
      type: "Android"
    },
    {
      title: "SecureKin",
      company: "1zero7",
      desc: "360° parental control & device monitoring — screen time, geofencing, app blocking and social media tracking",
      tech: ["Kotlin", "Java", "Room", "Hilt", "Coroutines"],
      gradient: "from-indigo-500 to-purple-600",
      type: "Android"
    },
    {
      title: "Playmeo",
      company: "KMP Project",
      desc: "Cross-platform WebView wrapper for Android & iOS from a single shared codebase with shared navigation and URL interception",
      tech: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "Koin"],
      gradient: "from-teal-500 to-emerald-600",
      type: "KMP"
    },
    {
      title: "QR-Fit",
      company: "Nextbridge Ltd.",
      desc: "Fitness tracking app for park walks and routes — navigation, fitness scoring and leaderboard ranking",
      tech: ["Kotlin", "MVVM", "Google Maps API", "Room"],
      gradient: "from-lime-500 to-green-600",
      type: "Android"
    },
    {
      title: "ChatApp Backend",
      company: "Spring Boot Service",
      desc: "Real-time chat backend with JWT auth, WebSocket (STOMP) messaging, Redis presence caching and PostgreSQL persistence, fully Dockerized",
      tech: ["Spring Boot", "Kotlin", "WebSocket", "Redis", "PostgreSQL", "Docker"],
      gradient: "from-amber-500 to-orange-600",
      type: "Backend"
    }
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const filters = ["All", "Android", "iOS", "Flutter", "KMP", "Backend"];

  const filteredProjects = activeFilter === "All"
    ? projects
    : projects.filter(p => p.type === activeFilter);

  const skills = [
    {
      category: "Mobile Platforms",
      items: [
        { name: "Android", years: "8+", level: 95, icon: "🤖" },
        { name: "iOS", years: "2+", level: 78, icon: "🍎" },
        { name: "KMP", years: "4+", level: 90, icon: "🔗" },
        { name: "Flutter", years: "4+", level: 90, icon: "💙" }
      ]
    },
    {
      category: "Languages",
      items: [
        { name: "Kotlin", years: "8+", level: 95, icon: "🎯" },
        { name: "Java", years: "8+", level: 88, icon: "☕" },
        { name: "Swift", years: "2+", level: 78, icon: "🚀" },
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
        { name: "Spring Boot", level: 80, icon: "🍃" },
        { name: "Firebase", level: 90, icon: "🔥" },
        { name: "CI/CD", level: 88, icon: "⚙️" },
        { name: "PostgreSQL", level: 78, icon: "🐘" }
      ]
    }
  ];

  const experience = [
    {
      company: "Upwork",
      role: "Senior Mobile Developer",
      period: "Aug 2025 - Present",
      duration: "Present",
      description: "Leading cross-platform mobile development projects for international clients. Implementing CI/CD pipelines for automated testing and deployment."
    },
    {
      company: "Dubizzle Labs",
      role: "Senior Android Developer",
      period: "Nov 2024 - Aug 2025",
      duration: "10 months",
      description: "Architected scalable Android features for OLX Pakistan — 30M+ downloads. Implemented Clean Architecture with MVVM using Jetpack Compose and Kotlin Coroutines."
    },
    {
      company: "speeqr",
      role: "Senior Android Developer",
      period: "Apr 2024 - Oct 2024",
      duration: "7 months",
      description: "Developed feature-rich Android apps with Jetpack Compose, integrated WebRTC real-time communication, and implemented offline-first architecture with Room."
    },
    {
      company: "Upwork",
      role: "Senior Android / KMP Developer",
      period: "Jul 2023 - Apr 2024",
      duration: "10 months",
      description: "Delivered 15+ mobile applications across Android, Flutter, and KMP platforms with shared business logic between Android and iOS."
    },
    {
      company: "STARZPLAY",
      role: "Senior Android Developer",
      period: "Apr 2023 - Jul 2023",
      duration: "4 months",
      description: "Built streaming platform features with ExoPlayer integration, offline DRM video caching and adaptive bandwidth optimization."
    },
    {
      company: "Nextbridge Ltd.",
      role: "Senior Android Developer",
      period: "Mar 2022 - Apr 2023",
      duration: "1y 2m",
      description: "Led a team of 4 developers, migrated legacy Java codebase to Kotlin with Jetpack Compose, and implemented CI/CD pipelines reducing deployment time by 60%."
    },
    {
      company: "1zero7",
      role: "Android Developer",
      period: "Sep 2017 - Feb 2022",
      duration: "4y 6m",
      description: "Developed and maintained 20+ Android apps, introduced Flutter for cross-platform work, and implemented automated testing reducing bug reports by 40%."
    }
  ];

  const achievements = [
    "8+ years mobile development expertise",
    "25+ apps delivered across platforms",
    "Top-Rated on Upwork (100% Job Success)",
    "60% deployment efficiency improvement",
    "40% reduction in bug reports",
    "Mentored 10+ developers"
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
            Architecting premium mobile experiences across Android, iOS, KMP and Flutter
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500">
              8+ years Android
            </span>
            <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500">
              4+ years Flutter
            </span>
            <span className="px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-500">
              4+ years KMP
            </span>
            <span className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-emerald-500">
              Spring Boot Backend
            </span>
          </div>

          <div className="flex gap-4">
            <a href="https://www.upwork.com/freelancers/~0182621baf8a16e9e5"
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

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25"
                    : "bg-[#111820]/60 border border-blue-500/20 text-gray-400 hover:text-emerald-500 hover:border-emerald-500/30"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, idx) => (
              <div key={idx}
                   className="group bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all hover:transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                    {project.type}
                  </span>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-emerald-500 transition-colors">
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
              4+ years of production KMP experience sharing business logic across Android, iOS and Web —
              including a full MAUI-to-KMP migration serving 4 white-label brands from one codebase.
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
                  Unified UI across Android, iOS & Web (WASM)
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

      {/* GitHub Projects */}
      <section id="ai-lab" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Github className="w-7 h-7 text-blue-500" />
              <h3 className="text-3xl font-bold text-blue-500">Open Source Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loadingRepos ? (
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
              <a href="mailto:mhassanuetcs12@gmail.com"
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
            Built with React + Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;