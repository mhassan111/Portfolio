import React, { useState, useEffect, useMemo } from 'react';
import { Code, Smartphone, Server, Layers, Github, Linkedin, Mail, ExternalLink, Database, Award, MapPin, Code2, Star, GitFork, GraduationCap } from 'lucide-react';
import {
  person, projects, projectTypes, skillGroups, experience, education, achievements, profiles,
} from './data/profiles';

// Resolve the visitor's role from ?role=<key>. Unknown / missing -> "default".
const resolveRole = () => {
  try {
    const key = new URLSearchParams(window.location.search).get('role')?.trim().toLowerCase();
    return key && Object.prototype.hasOwnProperty.call(profiles, key) ? key : 'default';
  } catch {
    return 'default';
  }
};

// A field may be a plain value or an object keyed by role with a `default`.
const pick = (value, role) =>
  value && typeof value === 'object' && !Array.isArray(value) ? (value[role] ?? value.default) : value;

const ShimmerLine = ({ width = '100%', height = '1rem' }) => (
  <div
    className="animate-pulse bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 bg-[length:200%_100%] rounded"
    style={{ width, height, animation: 'shimmer 2s infinite' }}
  />
);

const Portfolio = () => {
  const [role] = useState(resolveRole);
  const profile = profiles[role];

  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [githubRepos, setGithubRepos] = useState([]);
  const [loadingRepos, setLoadingRepos] = useState(true);
  const [activeFilter, setActiveFilter] = useState('selected');

  useEffect(() => {
    document.title = `${person.name} | ${profile.docTitle}`;
  }, [profile]);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchGithubRepos = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${person.githubUser}/repos?sort=updated&per_page=6`);
        const data = await response.json();
        setGithubRepos(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error('Failed to fetch GitHub repos:', err);
      } finally {
        setLoadingRepos(false);
      }
    };
    fetchGithubRepos();
  }, []);

  // Featured projects for this role first, everything else after (stable order).
  const orderedProjects = useMemo(() => {
    const rank = (p) => {
      const i = profile.featured.indexOf(p.title);
      return i === -1 ? profile.featured.length : i;
    };
    return [...projects].sort((a, b) => rank(a) - rank(b));
  }, [profile]);

  // First tab = projects for the selected role (default); then All and per-type tabs.
  const featuredProjects = profile.featured
    .map((title) => projects.find((p) => p.title === title))
    .filter(Boolean);
  const filters = [
    { id: 'selected', label: profile.projectsLabel },
    { id: 'All', label: 'All' },
    ...projectTypes.filter((t) => projects.some((p) => p.type === t)).map((t) => ({ id: t, label: t })),
  ];
  const filteredProjects = activeFilter === 'selected'
    ? featuredProjects
    : activeFilter === 'All'
      ? orderedProjects
      : orderedProjects.filter((p) => p.type === activeFilter);

  const skills = profile.skillOrder.map((id) => skillGroups[id]);
  const timeline = experience.map((e) => ({
    ...e,
    role: pick(e.role, role),
    description: pick(e.description, role),
    isRelevant: role === 'default' || e.relevant.includes(role),
  }));
  const relevantExperience = timeline.filter((e) => e.isRelevant);
  const otherExperience = timeline.filter((e) => !e.isRelevant);
  const currentJob = timeline[0];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f14] via-[#0f1419] to-[#11151a] text-gray-100 relative overflow-hidden">
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
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
          <div className="text-xl font-bold text-blue-500">{person.name}</div>
          <div className="hidden sm:flex gap-6">
            <a href="#experience" className="hover:text-emerald-500 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-emerald-500 transition-colors">Projects</a>
            <a href="#skills" className="hover:text-emerald-500 transition-colors">Skills</a>
            <a href="#open-source" className="hover:text-emerald-500 transition-colors">Open Source</a>
            <a href="#contact" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 mb-4">
            <MapPin className="w-4 h-4" />
            <span>{person.location}</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
            {profile.headline}
          </h1>

          <p className="text-sm md:text-base text-emerald-500 font-semibold mb-4">
            Current position: {currentJob.role} · {currentJob.company} · {currentJob.period}
          </p>

          <p className="text-xl md:text-2xl text-gray-500 mb-8 max-w-3xl">
            {profile.subtitle}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            {profile.pills.map((pill, idx) => (
              <span key={pill}
                    className={`px-4 py-2 rounded-full border ${idx % 2 === 0
                      ? 'bg-blue-500/10 border-blue-500/20 text-blue-500'
                      : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-500'}`}>
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <a href={person.upwork}
               className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center gap-2">
              <ExternalLink className="w-5 h-5" />
              View Upwork Profile
            </a>
            <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
               className="px-8 py-4 bg-[#111820]/60 border border-blue-500/20 hover:border-emerald-500/30 rounded-xl font-semibold transition-all flex items-center gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="relative py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {profile.stats.map((s) => (
            <div key={s.label} className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 text-center hover:border-emerald-500/30 transition-all">
              <div className={`text-4xl font-bold mb-2 ${s.color === 'emerald' ? 'text-emerald-500' : 'text-blue-500'}`}>
                {s.value}
              </div>
              <div className="text-gray-400 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience (role-relevant first) */}
      <section id="experience" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-500">
            {profile.experienceHeading}
          </h2>
          <p className="text-lg text-gray-500 mb-12 max-w-4xl">{profile.experienceSummary}</p>

          <div className="space-y-6">
            {relevantExperience.map((exp) => {
              const highlight = true;
              return (
              <div key={`${exp.company}-${exp.period}`} className={`backdrop-blur-sm border rounded-2xl p-8 transition-all hover:border-emerald-500/40 ${highlight
                ? 'bg-[#111820]/80 border-emerald-500/30 shadow-lg shadow-emerald-500/5'
                : 'bg-[#111820]/40 border-blue-500/10 opacity-80'}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    {highlight && role !== 'default' && (
                      <span className="inline-block mb-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                        Most relevant
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-emerald-500 mb-1">{exp.role}</h3>
                    <p className="text-xl text-blue-500 mb-2">{exp.company}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
              );
            })}
          </div>

          {otherExperience.length > 0 && (
            <>
              <h3 className="text-2xl font-bold text-gray-400 mt-14 mb-6">Other Experience</h3>
              <div className="space-y-6">
                {otherExperience.map((exp) => {
                  const highlight = false;
                  return (
              <div key={`${exp.company}-${exp.period}`} className={`backdrop-blur-sm border rounded-2xl p-8 transition-all hover:border-emerald-500/40 ${highlight
                ? 'bg-[#111820]/80 border-emerald-500/30 shadow-lg shadow-emerald-500/5'
                : 'bg-[#111820]/40 border-blue-500/10 opacity-80'}`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    {highlight && role !== 'default' && (
                      <span className="inline-block mb-2 px-3 py-1 bg-emerald-500/10 text-emerald-500 rounded-full text-xs font-semibold">
                        Most relevant
                      </span>
                    )}
                    <h3 className="text-2xl font-bold text-emerald-500 mb-1">{exp.role}</h3>
                    <p className="text-xl text-blue-500 mb-2">{exp.company}</p>
                  </div>
                  <div className="md:text-right">
                    <p className="text-gray-400">{exp.period}</p>
                    <p className="text-gray-500 text-sm">{exp.duration}</p>
                  </div>
                </div>
                <p className="text-gray-400">{exp.description}</p>
              </div>
                  );
                })}
              </div>
            </>
          )}

          <div className="mt-6 bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-emerald-500 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-emerald-500 mb-1">{education.degree}</h3>
              <p className="text-blue-500">{education.school}</p>
              <p className="text-gray-500 text-sm">{education.period}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-500">
            {activeFilter === 'selected' ? profile.projectsLabel : 'Projects'}
          </h2>

          <div className="flex flex-wrap gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-5 py-2.5 rounded-xl font-semibold transition-all ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                    : 'bg-[#111820]/60 border border-blue-500/20 text-gray-400 hover:text-emerald-500 hover:border-emerald-500/30'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div key={project.title}
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
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-[#0a0f14] text-gray-300 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-500">
            Technical Expertise
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all">
                <h3 className="text-2xl font-bold mb-6 text-emerald-500">{skillGroup.category}</h3>
                {skillGroup.tags ? (
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-sm text-emerald-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    {skillGroup.items.map((skill) => (
                      <div key={skill.name} className="space-y-2">
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KMP Showcase (only on roles where it is relevant) */}
      {profile.showKmpShowcase && (
        <section className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-[#111820] to-[#0d1218] border border-blue-500/20 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="w-8 h-8 text-emerald-500" />
                <h2 className="text-3xl md:text-4xl font-bold text-blue-500">Kotlin Multiplatform Expert</h2>
              </div>

              <p className="text-xl text-gray-500 mb-10 max-w-3xl">
                5+ years of production KMP experience sharing business logic across Android, iOS and Web —
                including a full MAUI-to-KMP migration serving 4 white-label brands from one codebase.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                  <Code className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-blue-500">Shared Logic</h3>
                  <p className="text-gray-400 text-sm">Ktor, SQLDelight, Kotlinx Serialization, Koin DI</p>
                </div>

                <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                  <Smartphone className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-blue-500">Compose Multiplatform</h3>
                  <p className="text-gray-400 text-sm">Unified UI across Android, iOS &amp; Web (WASM)</p>
                </div>

                <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                  <Database className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-blue-500">Type-Safe APIs</h3>
                  <p className="text-gray-400 text-sm">Apollo Kotlin GraphQL, REST with Ktor</p>
                </div>

                <div className="bg-[#0a0f14]/80 rounded-xl p-6 border border-emerald-500/20">
                  <Server className="w-8 h-8 text-emerald-500 mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-blue-500">Backend &amp; DevOps</h3>
                  <div className="flex flex-wrap gap-3">
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
      )}

      {/* GitHub Projects */}
      <section id="open-source" className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-8">
              <Github className="w-7 h-7 text-blue-500" />
              <h3 className="text-3xl font-bold text-blue-500">Open Source Projects</h3>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {loadingRepos ? (
                [1, 2, 3].map((i) => (
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
                ))
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
                      <p className="text-gray-400 text-xs mb-3 line-clamp-2">{repo.description}</p>
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
              href={person.github}
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

      {/* Achievements */}
      <section className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-blue-500">
            Key Achievements
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement) => (
              <div key={achievement} className="bg-[#111820]/60 backdrop-blur-sm border border-blue-500/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-all flex items-start gap-4">
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
          <div className="bg-gradient-to-br from-[#111820] to-[#0d1218] border border-blue-500/20 rounded-3xl p-8 md:p-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">
              Let's Build Something Amazing
            </h2>
            <p className="text-xl text-gray-500 mb-10">{profile.contactBlurb}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={`mailto:${person.email}`}
                 className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 rounded-xl font-semibold transition-all transform hover:scale-105 flex items-center justify-center gap-2">
                <Mail className="w-5 h-5" />
                Get In Touch
              </a>
              <a href={person.linkedin} target="_blank" rel="noopener noreferrer"
                 className="px-8 py-4 bg-[#111820]/60 border border-blue-500/20 hover:border-emerald-500/30 rounded-xl font-semibold transition-all flex items-center justify-center gap-2">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-8 px-6 border-t border-blue-500/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2026 {person.name} - {profile.docTitle}
          </p>
          <p className="text-gray-500 text-sm">Built with React + Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
