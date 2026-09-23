import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiTrendingUp,
  FiMessageCircle,
  FiSearch,
  FiZap,
  FiClock,
  FiCpu,
  FiShield,
} from "react-icons/fi";

const SERVICE_HIGHLIGHTS = {
  web: {
    title: "High-Performance React Systems",
    desc: "Custom web applications built with React for lightning-fast speeds, sub-second load times, and seamless mobile responsive layouts that pass Google Core Web Vitals.",
    metric: "99/100 Google PageSpeed Score",
    link: "/services",
  },
  seo: {
    title: "Local SEO & Google Maps Top 3",
    desc: "Optimized search engine strategies, structured schema markup, and Google Business Profile management that put your business in front of nearby high-intent callers.",
    metric: "Top 3 Local Map Pack Visibility",
    link: "/services",
  },
  funnels: {
    title: "Automated WhatsApp Lead Workflows",
    desc: "Instant customer capture systems that direct website visitors straight into your WhatsApp inbox for immediate conversation, qualification, and sales conversion.",
    metric: "3x Higher Inquiry Conversions",
    link: "/services",
  },
};

const VALUE_CHECKS = [
  "React Web Engineering",
  "Google Maps Top 3 Ranking",
  "WhatsApp Inquiry Automation",
  "Transparent 5-7 Day Delivery",
];

const STATS = [
  { icon: FiZap, value: "50+", label: "Projects Built" },
  { icon: FiTrendingUp, value: "3.2x", label: "Avg Lead Lift" },
  { icon: FiClock, value: "5-7 Days", label: "Turnaround" },
  { icon: FiShield, value: "100%", label: "Code Quality" },
];

const WORKFLOW_STEPS = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We review your business targets, target audience, and current search positioning.",
  },
  {
    step: "02",
    title: "System Architecture",
    desc: "We design and engineer high-speed React layouts optimized for mobile visitors.",
  },
  {
    step: "03",
    title: "Local SEO & Funnels",
    desc: "Integrate Google Map ranking optimizations and direct WhatsApp enquiry triggers.",
  },
  {
    step: "04",
    title: "Launch & Scale",
    desc: "Deploy with SSL security, Google indexing, and ongoing post-launch support.",
  },
];

const TABS = [
  { id: "web", label: "Web Architecture" },
  { id: "seo", label: "Local Search SEO" },
  { id: "funnels", label: "Messaging Funnels" },
];

const Home = () => {
  const [activeTab, setActiveTab] = useState("web");
  const currentService = SERVICE_HIGHLIGHTS[activeTab] || SERVICE_HIGHLIGHTS.web;

  return (
    <div className="bg-white text-slate-900 font-poppins">
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-[90vh] pt-12 pb-16 px-6 sm:px-10 overflow-hidden flex items-center border-b border-slate-100"
      >
        {/* Soft Background Glow Accent */}
        <div 
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-blue-500/10 via-blue-200/20 to-transparent blur-3xl rounded-full pointer-events-none -z-10" 
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT COLUMN: Main Narrative & Primary CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs sm:text-sm font-semibold tracking-wide mb-6 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span>HB GrowthSyncro • Digital Growth Partner</span>
              </div>

              {/* Dynamic Typewriter Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Turn Online Visitors Into A Reliable <br className="hidden sm:inline" />
                <span className="text-blue-600 block min-h-[2.8rem] sm:min-h-[3.5rem] lg:min-h-[4rem]">
                  <Typewriter
                    words={[
                      "Customer Engine.",
                      "Lead Generator.",
                      "Revenue Driver.",
                      "Trust Machine.",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
              </h1>

              {/* Description */}
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                We design and engineer conversion-focused website architectures, local search dominance systems, and automated messaging workflows tailored for local businesses and growing enterprises.
              </p>

              {/* Quick Value Checks */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl">
                {VALUE_CHECKS.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                    <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Primary CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/pricing"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-blue-600/25 group"
                >
                  <span>View Growth Plans</span>
                  <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>

                <Link
                  to="/portfolio"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-base transition-colors duration-200"
                >
                  <FiBriefcase className="w-4 h-4 text-slate-500" />
                  <span>View Work</span>
                </Link>
              </div>

              {/* Statistics Counter Bar */}
              <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pb-20 md:pb-0">
                {STATS.map(({ icon: Icon, value, label }, index) => (
                  <div key={index}>
                    <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                      <Icon className="w-5 h-5 text-blue-600" />
                      <span>{value}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* RIGHT COLUMN: Browser Mockup Showcase */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
              <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />

              {/* Browser Mockup Window */}
              <div className="relative w-full max-w-lg bg-white p-3 rounded-[24px] border border-slate-200 shadow-2xl">
                <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-t-2xl border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[11px] font-semibold text-slate-600 bg-white px-3 py-0.5 rounded-md border border-slate-100">
                    hbgrowthsyncro.in
                  </div>
                  <div className="w-4" />
                </div>

                <div className="relative rounded-b-xl overflow-hidden bg-slate-900 h-[360px] sm:h-[400px] flex flex-col justify-between p-6 text-white">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                    alt="HB GrowthSyncro Production Architecture Showcase"
                    width="1000"
                    height="667"
                    loading="eager"
                    fetchPriority="high"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                  />

                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/50">
                      Live Conversion Engine
                    </span>
                    <p className="text-xl font-bold text-white mt-3 leading-snug">
                      High-Converting Local Search Architecture
                    </p>
                  </div>

                  <div className="relative z-10 bg-slate-900/90 backdrop-blur-md p-4 rounded-xl border border-slate-800">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span>WhatsApp Direct Conversion</span>
                      <span className="text-emerald-400 font-semibold">+180% Enquiries</span>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -right-2 sm:right-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Local SEO</p>
                  <p className="text-xs font-extrabold text-slate-900">Top 3 Map Pack</p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-2 sm:left-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <FiMessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Inquiry Funnel</p>
                  <p className="text-xs font-extrabold text-slate-900">Instant WhatsApp</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute top-1/2 -right-8 -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl items-center gap-3 animate-pulse">
                <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600 border border-amber-100">
                  <FiSearch className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Google Search</p>
                  <p className="text-xs font-extrabold text-slate-900">Top 3 Local Search</p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= TECHNICAL PILLARS (INTERACTIVE TABS) ================= */}
      <section className="py-20 px-6 sm:px-10 bg-slate-50">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-100/60 px-3.5 py-1 rounded-full border border-blue-200">
              Technical Pillars
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Built for Performance &amp; Sales
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We combine web engineering, local SEO, and automated communication into a single, streamlined growth engine.
            </p>
          </div>

          {/* Accessible Tab Navigation */}
          <div 
            role="tablist" 
            aria-label="Technical Pillars"
            className="flex justify-center gap-2 sm:gap-4 border-b border-slate-200 pb-4"
          >
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`tab-${tab.id}`}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`tabpanel-${tab.id}`}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Active Tab Panel */}
          <div
            id={`tabpanel-${activeTab}`}
            role="tabpanel"
            aria-labelledby={`tab-${activeTab}`}
            className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8"
          >
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                {currentService.metric}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {currentService.title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {currentService.desc}
              </p>
              <Link
                to={currentService.link}
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:gap-3 transition-all"
              >
                <span>Explore Full Specs</span>
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900 text-white w-full md:w-64 shrink-0 text-center space-y-3">
              <FiCpu className="w-10 h-10 text-blue-400 mx-auto" />
              <p className="text-xs uppercase font-semibold text-slate-400">Execution Speed</p>
              <p className="text-2xl font-bold">5 - 7 Days</p>
              <p className="text-[11px] text-slate-400">Complete deployment setup</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4-STEP WORKFLOW ================= */}
      <section className="py-20 px-6 sm:px-10 bg-white">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-3.5 py-1 rounded-full border border-blue-100">
              Simple Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              How We Build Your Growth Engine
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {WORKFLOW_STEPS.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 relative">
                <span className="text-4xl font-extrabold text-blue-200" aria-hidden="true">
                  {item.step}
                </span>
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CALL TO ACTION BANNER ================= */}
      <section className="py-16 px-6 sm:px-10 bg-slate-900 text-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold">Ready to Turn Visitors Into Real Enquiries?</h2>
            <p className="text-slate-400 text-sm sm:text-base max-w-xl">
              Get a custom growth strategy tailored for your local business in Maharashtra and across India.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a
              href="https://wa.me/918080224138?text=Hi%20HB%20GrowthSyncro,%20I%20would%20like%20to%20discuss%20a%20digital%20growth%20plan"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with HB GrowthSyncro on WhatsApp to discuss a digital growth plan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors shadow-lg"
            >
              <FiMessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              to="/pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-colors"
            >
              View Packages
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;