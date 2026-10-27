// Single source of truth for the portfolio.
//
// The site is one app. The visitor's role is chosen with ?role=<key>:
//   ?role=android | kmp | flutter | ios | java | ai   (anything else -> default)
//
// Facts (employers, dates, years of experience, projects) are shared by every
// role. A profile only changes emphasis: headline, summary, ordering, titles.

export const person = {
  name: "Muhammad Hassan",
  location: "Lahore, Pakistan • Available for Remote Work",
  email: "mhassanuetcs12@gmail.com",
  linkedin: "https://www.linkedin.com/in/muhammad-hassan-0aab45a1",
  github: "https://github.com/mhassan111",
  githubUser: "mhassan111",
  upwork: "https://www.upwork.com/freelancers/~0182621baf8a16e9e5",
};

// Years of experience (keep in sync with the resumes).
//   Android 10+ | iOS 4+ | Flutter 5+ | KMP 5+ | AI/ML (Python) 1+

/* ------------------------------------------------------------------ */
/* Projects                                                            */
/* ------------------------------------------------------------------ */

export const projectTypes = ["AI/ML", "Android", "iOS", "Flutter", "KMP", "Backend"];

export const projects = [
  {
    title: "CuraMind AI",
    company: "Medical RAG Assistant",
    desc: "Educational medical assistant using a LangGraph retrieve → route → web-fallback → answer flow over a Pinecone knowledge base built from a medical encyclopedia, with image observations, Whisper speech input and TTS output. Not a diagnostic tool",
    tech: ["LangGraph", "Pinecone", "FastAPI", "OpenAI", "Groq", "Tavily", "SQLite"],
    link: "https://github.com/mhassan111/CuraMind-AI",
    type: "AI/ML",
  },
  {
    title: "Cold-Chain Logistics AI Assistant",
    company: "Agentic Data Chat",
    desc: "Chat-with-your-data agent for cold-chain anomalies: a LangGraph tool-calling agent queries telemetry in SQL Server, checks corridor conditions and retrieves SOP rules from Pinecone to return an action plan. Switchable LLM backends (OpenAI, Gemini, DeepSeek, local Ollama)",
    tech: ["LangGraph", "Pinecone", "SQL Server", "Streamlit", "HuggingFace Embeddings", "GitHub Actions", "AWS EC2"],
    link: "https://github.com/mhassan111/cold-chain-logistics",
    type: "AI/ML",
  },
  {
    title: "TripMate AI",
    company: "Multi-Agent Travel Planner",
    desc: "Turns a natural-language trip request into flights, hotels and a day-by-day itinerary using a four-agent LangGraph workflow, with conversation state persisted in PostgreSQL and a Dockerized FastAPI service",
    tech: ["LangGraph", "LangChain", "Groq (Llama 3.3 70B)", "FastAPI", "PostgreSQL", "Tavily", "Docker"],
    link: "https://github.com/mhassan111/TripPlannerAgent",
    type: "AI/ML",
  },
  {
    title: "Aero Nexus AI",
    company: "AI Aircraft Maintenance Platform",
    desc: "Maintenance-analytics app where users upload an Excel file and receive analytics plus an AI maintenance recommendation. React + FastAPI deployed to Amazon EKS with images in ECR and a GitHub Actions CI/CD pipeline",
    tech: ["React", "FastAPI", "AWS", "Amazon EKS", "Amazon ECR", "Docker", "Kubernetes", "GitHub Actions"],
    link: "https://github.com/mhassan111/Aero-Nexus-Ai",
    type: "AI/ML",
  },
  {
    title: "MSales",
    company: "B2B Sales & E-Commerce App",
    desc: "Migrated a B2B sales app from MAUI to KMP — Android, iOS & Web (WASM) from one shared codebase, supporting 4 white-label tenant brands with runtime theming",
    tech: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "SQLDelight", "Koin", "WASM"],
    type: "KMP",
  },
  {
    title: "OLX Pakistan",
    company: "Dubizzle Labs",
    desc: "Pakistan's biggest marketplace super app with 30M+ downloads and 3M+ listings across electronics, cars, property, fashion & jobs",
    tech: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Flow"],
    link: "https://play.google.com/store/apps/details?id=com.dubizzle.olx.pk",
    type: "Android",
  },
  {
    title: "ScreenGuard",
    company: "KMP Project",
    desc: "Cross-platform screen time manager — real-time usage tracking, parental controls, focus mode and app blocking, shared across Android & iOS",
    tech: ["KMP", "Compose Multiplatform", "SQLDelight", "Ktor", "Koin"],
    link: "https://github.com/mhassan111/ScreenGuard",
    type: "KMP",
  },
  {
    title: "HarmonyLink",
    company: "iOS App",
    desc: "Dating & social discovery app with swipe-based matching, real-time chat, location-based discovery, video calls and in-app purchases",
    tech: ["Swift", "SwiftUI", "Core Data", "Combine", "Core Location", "AVFoundation"],
    type: "iOS",
  },
  {
    title: "MediProx",
    company: "Healthcare Proximity Tracking",
    desc: "BLE-based proximity tracking for medical staff — geo-fencing alerts and automated audio recording, plus a Flutter admin dashboard with real-time activity monitoring and cloud storage administration",
    tech: ["Android", "BLE", "Flutter", "Bloc / Riverpod", "Google Cloud Storage"],
    type: "Flutter",
  },
  {
    title: "STARZPLAY",
    company: "STARZPLAY",
    desc: "Streaming app for movies, series and live sports with offline DRM-protected video caching and adaptive bitrate streaming",
    tech: ["Kotlin", "MVVM", "ExoPlayer", "Firebase"],
    type: "Android",
  },
  {
    title: "SecureKin",
    company: "1zero7",
    desc: "360° parental control & device monitoring — screen time, geofencing, app blocking and social media tracking",
    tech: ["Kotlin", "Java", "Room", "Hilt", "Coroutines"],
    type: "Android",
  },
  {
    title: "Playmeo",
    company: "KMP Project",
    desc: "Cross-platform WebView wrapper for Android & iOS from a single shared codebase with shared navigation and URL interception",
    tech: ["Kotlin Multiplatform", "Compose Multiplatform", "Ktor", "Koin"],
    type: "KMP",
  },
  {
    title: "QR-Fit",
    company: "Nextbridge Ltd.",
    desc: "Fitness tracking app for park walks and routes — navigation, fitness scoring and leaderboard ranking",
    tech: ["Kotlin", "MVVM", "Google Maps API", "Room"],
    type: "Android",
  },
  {
    title: "TALEEMABAD",
    company: "Nextbridge Ltd.",
    desc: "Virtual school app with video lessons, online books, exam preparation and interactive quizzes",
    tech: ["Kotlin", "Java", "RxJava", "RxAndroid"],
    type: "Android",
  },
  {
    title: "ChatApp Backend",
    company: "Spring Boot Service",
    desc: "Real-time chat backend with JWT auth, WebSocket (STOMP) messaging, Redis presence caching and PostgreSQL persistence, fully Dockerized",
    tech: ["Spring Boot", "Kotlin", "WebSocket", "Redis", "PostgreSQL", "Docker"],
    type: "Backend",
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                              */
/* ------------------------------------------------------------------ */

export const skillGroups = {
  mobile: {
    category: "Mobile Platforms",
    items: [
      { name: "Android", years: "10+", level: 95, icon: "🤖" },
      { name: "iOS", years: "4+", level: 78, icon: "🍎" },
      { name: "KMP", years: "5+", level: 90, icon: "🔗" },
      { name: "Flutter", years: "5+", level: 90, icon: "💙" },
    ],
  },
  languages: {
    category: "Languages",
    items: [
      { name: "Kotlin", years: "8+", level: 95, icon: "🎯" },
      { name: "Java", years: "10+", level: 88, icon: "☕" },
      { name: "Swift", years: "4+", level: 78, icon: "🚀" },
      { name: "Dart", years: "5+", level: 90, icon: "🎨" },
      { name: "Python", years: "1+", level: 70, icon: "🐍" },
    ],
  },
  architecture: {
    category: "Architecture & Patterns",
    items: [
      { name: "Clean Architecture", level: 95 },
      { name: "MVVM / MVI", level: 93 },
      { name: "Jetpack Compose", level: 92 },
      { name: "Reactive Programming", level: 90 },
    ],
  },
  backend: {
    category: "Backend & DevOps",
    items: [
      { name: "Spring Boot", level: 80, icon: "🍃" },
      { name: "Firebase", level: 90, icon: "🔥" },
      { name: "CI/CD", level: 88, icon: "⚙️" },
      { name: "PostgreSQL", level: 78, icon: "🐘" },
    ],
  },
  ai: {
    category: "AI / ML Engineering (Python, 1+ year)",
    tags: [
      "Agentic Applications", "AI Chatbots", "RAG", "MCP Integration", "LangGraph", "LangChain",
      "Pinecone", "FAISS", "Prompt Engineering", "FastAPI", "Streamlit",
      "Whisper / TTS", "Docker & Kubernetes (EKS)", "AI-assisted Dev (Cursor, Claude Code)",
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Experience (from the resumes). A value may be a string or an object */
/* keyed by role with a `default` fallback.                            */
/* ------------------------------------------------------------------ */

export const experience = [
  {
    company: "Upwork (Freelance)",
    role: {
      default: "Senior Mobile Developer & AI/ML Engineer",
      android: "AI/ML Apps Developer (Android / KMP / iOS / Python)",
      kmp: "Senior KMP Developer (KMP / Android / iOS / Python)",
      flutter: "Senior Flutter Developer (Flutter / Android / iOS / Python)",
      ios: "Senior iOS / Android Developer (iOS / Android / KMP / Python)",
      java: "Senior Mobile & Backend Developer (Android / Kotlin / Python)",
      ai: "AI/ML Engineer (Python / Mobile)",
    },
    period: "Aug 2025 - Present",
    duration: "Present",
    description: {
      default: "Lead mobile projects for international clients, from architecture to store release. Build AI/ML applications in Python, including agentic apps, AI chatbots, RAG pipelines and MCP integrations. Implement CI/CD pipelines. Top-Rated profile with a 100% Job Success Score.",
      android: "Lead Android, Kotlin Multiplatform and iOS projects for international clients, from architecture to store release. Build AI/ML applications in Python, including agentic apps, AI chatbots, RAG pipelines and MCP integrations. Implement CI/CD pipelines. Top-Rated profile with a 100% Job Success Score.",
      kmp: "Lead Kotlin Multiplatform, Android and iOS projects for international clients, from architecture to store release. Build AI/ML applications in Python, including agentic apps, AI chatbots, RAG pipelines and MCP integrations. Implement CI/CD pipelines. Top-Rated profile with a 100% Job Success Score.",
      flutter: "Lead Flutter, Android and iOS projects for international clients, from architecture to store release. Build AI/ML applications in Python, including agentic apps, AI chatbots, RAG pipelines and MCP integrations. Implement CI/CD pipelines. Top-Rated profile with a 100% Job Success Score.",
      ios: "Lead iOS, Android and Kotlin Multiplatform projects for international clients, from architecture to store release. Build AI/ML applications in Python, including agentic apps, AI chatbots, RAG pipelines and MCP integrations. Implement CI/CD pipelines. Top-Rated profile with a 100% Job Success Score.",
      java: "Lead Android and Kotlin Multiplatform projects for international clients, from architecture to store release. Build AI/ML applications in Python, including agentic apps, AI chatbots, RAG pipelines and MCP integrations. Implement CI/CD pipelines. Top-Rated profile with a 100% Job Success Score.",
      ai: "Build AI/ML applications in Python, including agentic apps, AI chatbots, RAG pipelines and MCP integrations. Lead Android, Kotlin Multiplatform and iOS projects for international clients, from architecture to store release. Implement CI/CD pipelines. Top-Rated profile with a 100% Job Success Score.",
    },
  },
  {
    company: "Dubizzle Labs (OLX Pakistan)",
    role: "Senior Android Developer",
    period: "Nov 2024 - Aug 2025",
    duration: "10 months",
    description: "Architected scalable Android features for OLX Pakistan, the country's largest marketplace app with 30M+ downloads. Implemented Clean Architecture with MVVM using Jetpack Compose, Kotlin Coroutines and Kotlin Flow. Optimized app performance, improving user engagement metrics.",
  },
  {
    company: "speeqr",
    role: {
      default: "Senior Android Developer",
      kmp: "Senior Android / KMP Developer",
      flutter: "Senior Android / Flutter Developer",
    },
    period: "Apr 2024 - Oct 2024",
    duration: "7 months",
    description: "Built feature-rich mobile applications with modern UI using Jetpack Compose, integrated WebRTC real-time communication, and implemented offline-first architecture with a local Room database.",
  },
  {
    company: "Upwork (Freelance)",
    role: {
      default: "Senior Android / KMP Developer",
      flutter: "Senior Flutter / Android / KMP Developer",
    },
    period: "Jul 2023 - Apr 2024",
    duration: "10 months",
    description: {
      default: "Delivered 15+ mobile applications across Android, Flutter and Kotlin Multiplatform, sharing business logic between Android and iOS. Integrated a Supabase backend for real-time applications.",
      flutter: "Delivered 15+ mobile applications across Flutter, Android and Kotlin Multiplatform. Built the MediProx admin dashboard in Flutter with real-time monitoring and cloud storage administration. Integrated a Supabase backend for real-time applications.",
    },
  },
  {
    company: "STARZPLAY",
    role: "Senior Android Developer",
    period: "Apr 2023 - Jul 2023",
    duration: "4 months",
    description: "Built streaming platform features (live TV, movies and sports) with ExoPlayer, offline video caching, DRM content protection and adaptive bandwidth optimization.",
  },
  {
    company: "Nextbridge Ltd.",
    role: "Senior Android Developer / Team Lead",
    period: "Mar 2022 - Apr 2023",
    duration: "1y 2m",
    description: "Led a team of 4 developers across multiple concurrent projects, migrated a legacy Java codebase to Kotlin with Jetpack Compose, and implemented CI/CD pipelines reducing deployment time by 60%.",
  },
  {
    company: "1zero7",
    role: {
      default: "Android Developer",
      flutter: "Android Developer (Flutter Adoption Lead)",
    },
    period: "Sep 2017 - Feb 2022",
    duration: "4y 6m",
    description: "Developed and maintained 20+ mobile applications, introduced Flutter for cross-platform development, and implemented an automated testing strategy reducing bug reports by 40%.",
  },
  {
    company: "Intagleo Systems",
    role: "Junior Android Developer",
    period: "Jun 2016 - Sep 2017",
    duration: "1y 4m",
    description: "Developed native Android applications in Java following UI/UX best practices.",
  },
  {
    company: "UET Lahore, Computer Science Department",
    role: "Intern Android Developer",
    period: "Jan 2013 - Jun 2016",
    duration: "3y 6m",
    description: "Contributed to academic mobile application projects and built foundational skills in the Android SDK.",
  },
];

export const education = {
  degree: "Bachelor of Science in Computer Science (Software Development)",
  school: "University of Engineering and Technology (UET), Lahore",
  period: "2012 - 2016",
};

export const achievements = [
  "10+ years of mobile development expertise",
  "25+ apps delivered across platforms",
  "Top-Rated on Upwork (100% Job Success)",
  "60% deployment efficiency improvement with CI/CD",
  "40% reduction in bug reports through automated testing",
  "40% less development time on cross-platform migrations",
  "Mentored 10+ developers",
];

/* ------------------------------------------------------------------ */
/* Role profiles                                                       */
/* ------------------------------------------------------------------ */

const stat = (label, value, color) => ({ label, value, color });

export const profiles = {
  default: {
    docTitle: "Senior Mobile Developer & AI/ML Engineer",
    headline: "Senior Mobile Developer & AI/ML Engineer",
    subtitle: "Architecting premium mobile experiences across Android, iOS, KMP and Flutter — and building LLM agents and RAG systems in Python",
    pills: ["10+ years Android", "5+ years Flutter", "5+ years KMP", "1+ year AI/ML (Python)"],
    stats: [stat("Apps Delivered", "25+", "emerald"), stat("Years Experience", "10+", "blue"), stat("Upwork Success", "100%", "emerald")],
    skillOrder: ["mobile", "languages", "architecture", "ai", "backend"],
    featured: ["OLX Pakistan", "MSales", "CuraMind AI", "Cold-Chain Logistics AI Assistant"],
    showKmpShowcase: true,
    contactBlurb: "Available for freelance projects, consulting, or full-time opportunities. Let's discuss how I can help bring your mobile or AI vision to life.",
  },
  android: {
    docTitle: "Senior Android Developer",
    headline: "Senior Android Developer",
    subtitle: "10+ years building and shipping native Android apps in Kotlin and Java — Jetpack Compose, Clean Architecture, Coroutines & Flow",
    pills: ["10+ years Android", "Kotlin & Java", "Jetpack Compose", "Team Lead"],
    stats: [stat("Android Experience", "10+ yrs", "blue"), stat("Apps Delivered", "25+", "emerald"), stat("OLX Pakistan Downloads", "30M+", "emerald")],
    skillOrder: ["mobile", "languages", "architecture", "backend", "ai"],
    featured: ["OLX Pakistan", "STARZPLAY", "SecureKin", "MediProx", "QR-Fit", "TALEEMABAD"],
    defaultFilter: "Android",
    showKmpShowcase: true,
    contactBlurb: "Available for senior Android roles, contracts and consulting. Let's discuss how I can help ship your next Android product.",
  },
  kmp: {
    docTitle: "Senior Kotlin Multiplatform (KMP) Developer",
    headline: "Senior Kotlin Multiplatform Developer",
    subtitle: "5+ years of production KMP on top of 10+ years of native Android — Android, iOS & Web (WASM) from one shared Kotlin codebase",
    pills: ["5+ years KMP", "Compose Multiplatform", "Ktor · SQLDelight · Koin", "10+ years Android"],
    stats: [stat("KMP Experience", "5+ yrs", "blue"), stat("Apps Delivered", "25+", "emerald"), stat("MAUI → KMP Migration", "4 brands", "emerald")],
    skillOrder: ["mobile", "languages", "architecture", "backend", "ai"],
    featured: ["MSales", "ScreenGuard", "Playmeo", "OLX Pakistan", "HarmonyLink"],
    defaultFilter: "KMP",
    showKmpShowcase: true,
    contactBlurb: "Available for KMP roles, migrations and consulting. Let's discuss how I can help you share one codebase across Android, iOS and Web.",
  },
  flutter: {
    docTitle: "Senior Flutter Developer",
    headline: "Senior Flutter Developer",
    subtitle: "5+ years of Flutter & Dart backed by 10+ years of native Android and 4+ years of iOS — Bloc, Riverpod, Provider and GetX",
    pills: ["5+ years Flutter", "Bloc · Riverpod · GetX", "Native Android & iOS depth", "Flutter Adoption Lead"],
    stats: [stat("Flutter Experience", "5+ yrs", "blue"), stat("Apps Delivered", "25+", "emerald"), stat("Upwork Success", "100%", "emerald")],
    skillOrder: ["mobile", "languages", "architecture", "backend", "ai"],
    featured: ["MediProx", "MSales", "HarmonyLink", "OLX Pakistan"],
    showKmpShowcase: false,
    contactBlurb: "Available for Flutter roles and contracts. Let's discuss how I can help you ship polished cross-platform apps.",
  },
  ios: {
    docTitle: "Senior Native iOS / Android Engineer",
    headline: "Senior Native iOS & Android Engineer",
    subtitle: "10+ years of native Android and 4+ years of iOS (Swift / SwiftUI) — deep platform integration, performance and store releases",
    pills: ["4+ years iOS", "10+ years Android", "Swift & SwiftUI", "Kotlin & Jetpack Compose"],
    stats: [stat("Android Experience", "10+ yrs", "blue"), stat("iOS Experience", "4+ yrs", "emerald"), stat("Apps Delivered", "25+", "emerald")],
    skillOrder: ["mobile", "languages", "architecture", "backend", "ai"],
    featured: ["HarmonyLink", "OLX Pakistan", "STARZPLAY", "MSales", "ScreenGuard"],
    showKmpShowcase: false,
    contactBlurb: "Available for native iOS and Android roles. Let's discuss how I can help deliver your next native mobile product.",
  },
  java: {
    docTitle: "Senior Java / Spring Boot Developer",
    headline: "Senior Java / Spring Boot Developer",
    subtitle: "10+ years of Java and Kotlin engineering — Spring Boot backends with JWT, WebSocket, Redis, PostgreSQL and Docker, plus full-stack mobile delivery",
    pills: ["Java & Kotlin 10+ yrs", "Spring Boot", "REST · WebSocket · JWT", "PostgreSQL · Redis · Docker"],
    stats: [stat("Java / Kotlin", "10+ yrs", "blue"), stat("Apps Delivered", "25+", "emerald"), stat("Upwork Success", "100%", "emerald")],
    skillOrder: ["backend", "languages", "architecture", "mobile", "ai"],
    featured: ["ChatApp Backend", "TripMate AI", "Aero Nexus AI", "OLX Pakistan"],
    showKmpShowcase: false,
    contactBlurb: "Available for Java / Spring Boot and full-stack Kotlin roles. Let's discuss how I can help build your backend and the apps on top of it.",
  },
  ai: {
    docTitle: "AI/ML Engineer (Python)",
    headline: "AI/ML Engineer (Python)",
    subtitle: "Building agentic applications, AI chatbots and RAG pipelines with LangGraph, Pinecone and FastAPI — backed by 10+ years of shipping production software",
    pills: ["1+ year AI/ML (Python)", "LLM Agents & RAG", "MCP Integration", "LangGraph · Pinecone · FastAPI"],
    stats: [stat("AI/ML Experience", "1+ yr", "blue"), stat("AI Projects on GitHub", "4", "emerald"), stat("Software Experience", "10+ yrs", "emerald")],
    skillOrder: ["ai", "languages", "backend", "architecture", "mobile"],
    featured: ["CuraMind AI", "Cold-Chain Logistics AI Assistant", "TripMate AI", "Aero Nexus AI"],
    defaultFilter: "AI/ML",
    showKmpShowcase: false,
    contactBlurb: "Available for AI/ML engineering roles and contracts. Let's discuss how I can help you build reliable LLM-powered products.",
  },
};

export const roleKeys = Object.keys(profiles);
