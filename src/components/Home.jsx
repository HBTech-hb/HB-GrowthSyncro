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

const Home = () => {
  const [activeTab, setActiveTab] = useState("web");

  const serviceHighlights = {
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

  return (
    <div className="bg-white text-slate-900 font-poppins">
      
      {/* ================= HERO SECTION ================= */}
      <section
        id="home"
        className="relative min-h-[90vh] pt-12 pb-16 px-6 sm:px-10 overflow-hidden flex items-center border-b border-slate-100"
      >
        {/* Soft Background Glow Accent */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-gradient-to-tr from-blue-500/10 via-blue-200/20 to-transparent blur-3xl rounded-full pointer-events-none -z-10" />

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
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]">
                Turn Online Visitors Into A Reliable <br className="hidden sm:inline" />
                <span className="text-blue-600 inline-block">
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

              {/* High-Impact Description */}
              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal max-w-2xl">
                We design and engineer conversion-focused website architectures, local search dominance systems, and automated messaging workflows tailored for local businesses and growing enterprises.
              </p>

              {/* Quick Value Checks */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3.5 w-full max-w-xl">
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                  <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>React Web Engineering</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                  <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Google Maps Top 3 Ranking</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                  <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>WhatsApp Inquiry Automation</span>
                </div>
                <div className="flex items-center gap-2.5 text-slate-700 text-sm font-medium">
                  <FiCheckCircle className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>Transparent 5-7 Day Delivery</span>
                </div>
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
              <div className="mt-12 pt-8 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                <div>
                  <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                    <FiZap className="w-5 h-5 text-blue-600" />
                    <span>50+</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                    Projects Built
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                    <FiTrendingUp className="w-5 h-5 text-blue-600" />
                    <span>3.2x</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                    Avg Lead Lift
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                    <FiClock className="w-5 h-5 text-blue-600" />
                    <span>5-7 Days</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                    Turnaround
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-1.5 text-2xl sm:text-3xl font-extrabold text-slate-900">
                    <FiShield className="w-5 h-5 text-blue-600" />
                    <span>100%</span>
                  </div>
                  <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">
                    Code Quality
                  </p>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Browser Mockup Showcase with Bouncing Badges */}
            <div className="lg:col-span-5 relative flex items-center justify-center mt-6 lg:mt-0">
              
              {/* Outer Pulsing Glow */}
              <div className="absolute w-72 h-72 bg-blue-400/20 rounded-full blur-3xl -z-10 animate-pulse" />

              {/* Browser Mockup Window */}
              <div className="relative w-full max-w-lg bg-white p-3 rounded-[24px] border border-slate-200 shadow-2xl">
                
                {/* Fake Window Header Bar */}
                <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-t-2xl border-b border-slate-100">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="text-[11px] font-medium text-slate-400 bg-white px-3 py-0.5 rounded-md border border-slate-100">
                    hbgrowthsyncro.in
                  </div>
                  <div className="w-4" />
                </div>

                {/* Window Content */}
                <div className="relative rounded-b-xl overflow-hidden bg-slate-900 h-[360px] sm:h-[400px] flex flex-col justify-between p-6 text-white">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000"
                    alt="HB GrowthSyncro Production Architecture Showcase"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay"
                  />
                  
                  <div className="relative z-10">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-800/50">
                      Live Conversion Engine
                    </span>
                    <h3 className="text-xl font-bold text-white mt-3 leading-snug">
                      High-Converting Local Search Architecture
                    </h3>
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

              {/* FLOATING CARD 1: Organic Traffic (Top Right - Bouncing) */}
              <div className="absolute -top-4 -right-2 sm:right-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100">
                  <FiTrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Local SEO</p>
                  <p className="text-xs font-extrabold text-slate-900">Top 3 Map Pack</p>
                </div>
              </div>

              {/* FLOATING CARD 2: Direct Enquiries (Bottom Left - Bouncing) */}
              <div className="absolute -bottom-6 -left-2 sm:left-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-100">
                  <FiMessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold text-slate-500">Inquiry Funnel</p>
                  <p className="text-xs font-extrabold text-slate-900">Instant WhatsApp</p>
                </div>
              </div>

              {/* FLOATING CARD 3: Google Search (Middle Right - Pulsing) */}
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

          {/* Tab Buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 border-b border-slate-200 pb-4">
            <button
              type="button"
              onClick={() => setActiveTab("web")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "web"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-200"
              }`}
            >
              Web Architecture
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("seo")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "seo"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-200"
              }`}
            >
              Local Search SEO
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("funnels")}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === "funnels"
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-white text-slate-600 hover:bg-slate-200"
              }`}
            >
              Messaging Funnels
            </button>
          </div>

          {/* Active Tab Panel */}
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-xl">
              <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-md border border-blue-100">
                {serviceHighlights[activeTab].metric}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                {serviceHighlights[activeTab].title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {serviceHighlights[activeTab].desc}
              </p>
              <Link
                to={serviceHighlights[activeTab].link}
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
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 relative">
              <span className="text-4xl font-extrabold text-blue-200">01</span>
              <h3 className="text-lg font-bold text-slate-900">Discovery &amp; Audit</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We review your business targets, target audience, and current search positioning.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 relative">
              <span className="text-4xl font-extrabold text-blue-200">02</span>
              <h3 className="text-lg font-bold text-slate-900">System Architecture</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We design and engineer high-speed React layouts optimized for mobile visitors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 relative">
              <span className="text-4xl font-extrabold text-blue-200">03</span>
              <h3 className="text-lg font-bold text-slate-900">Local SEO &amp; Funnels</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Integrate Google Map ranking optimizations and direct WhatsApp enquiry triggers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 relative">
              <span className="text-4xl font-extrabold text-blue-200">04</span>
              <h3 className="text-lg font-bold text-slate-900">Launch &amp; Scale</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Deploy with SSL security, Google indexing, and ongoing post-launch support.
              </p>
            </div>
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