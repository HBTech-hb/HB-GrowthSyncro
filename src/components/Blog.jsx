import React, { useState } from "react";
import {
  FiSearch,
  FiClock,
  FiTag,
  FiMessageSquare,
  FiBookOpen,
  FiX,
  FiArrowRight,
} from "react-icons/fi";

const blogs = [
  {
    id: "choose-website-developer",
    title: "How to Choose the Best Website Developer for Your Local Business in 2026",
    author: "HB GrowthSyncro",
    date: "February 7, 2026",
    category: "Web Development",
    readTime: "5 min read",
    excerpt:
      "Not all websites make money. Learn the 5 crucial technical factors to check before hiring a web developer for your business.",
    content: `
      <p class="mb-4">Getting a website developed for your business is an important investment. However, many small business owners make the mistake of choosing a developer solely based on cheap pricing, leading to slow websites that fail to convert visitors into customers.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. Mobile-First Responsiveness</h3>
      <p class="mb-4">Over 80% of local search traffic originates from mobile devices. If your website takes more than 3 seconds to load on a smartphone, you lose potential calls instantly.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. Conversion-Focused Lead Funnels</h3>
      <p class="mb-4">A good website must have direct WhatsApp call-to-actions, clear inquiry forms, and click-to-call buttons readily accessible.</p>
    `,
  },
  {
    id: "google-maps-top-3",
    title: "How to Rank in Google Maps Top 3 and Get Daily Local Leads",
    author: "HB GrowthSyncro",
    date: "February 4, 2026",
    category: "Local SEO",
    readTime: "7 min read",
    excerpt:
      "A step-by-step local SEO guide on optimizing your Google Business Profile to outrank competitors and drive phone calls.",
    content: `
      <p class="mb-4">Ranking in the Google Maps Local 3-Pack is the most reliable way for local businesses to gain direct calls without paying for continuous ads.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Complete Profile Optimization</h3>
      <p class="mb-4">Ensure your business category, address, phone number, and operating hours match perfectly across all online directories.</p>
    `,
  },
  {
    id: "whatsapp-lead-funnel",
    title: "Why WhatsApp Automation is Replacing Traditional Contact Forms",
    author: "HB GrowthSyncro",
    date: "February 4, 2026",
    category: "Lead Generation",
    readTime: "4 min read",
    excerpt:
      "Discover how high-converting WhatsApp funnels turn website visitors into instant sales conversations in seconds.",
    content: `
      <p class="mb-4">Traditional contact forms lose up to 60% of potential inquiries due to delayed response times. Direct WhatsApp chat widgets allow business owners to engage leads immediately.</p>
    `,
  },
];

const categories = ["All", "Web Development", "Local SEO", "Lead Generation"];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeArticle, setActiveArticle] = useState(null);

  const filteredBlogs = blogs.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="blog" className="py-20 lg:py-32 px-6 sm:px-10 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Growth Insights & Guides
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Our <span className="text-blue-600">Blogs</span>
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Practical strategies, local SEO tips, and web development insights built to scale local businesses.
          </p>
        </div>

        {/* SEARCH & FILTERS */}
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles on SEO, web development..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-white border border-slate-200 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                    : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-[24px] border border-slate-200/80 p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-3">
                  <span className="inline-flex items-center gap-1 text-blue-600 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                    <FiTag className="w-3 h-3" /> {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <FiClock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h2>

                <p className="text-xs text-slate-400 mb-4">
                  {post.date} — By {post.author}
                </p>

                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              {/* DUAL ACTION BUTTONS: READ & DISCUSS */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                {/* READ BUTTON */}
                <button
                  onClick={() => setActiveArticle(post)}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer"
                >
                  <FiBookOpen className="w-3.5 h-3.5" />
                  <span>Read Article</span>
                </button>

                {/* DISCUSS BUTTON (WHATSAPP) */}
                <a
                  href={`https://wa.me/918080224138?text=Hi%20HB%20GrowthSyncro,%20I%20want%20to%20discuss%20the%20article:%20'${encodeURIComponent(post.title)}'`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-blue-600 text-white font-semibold text-xs transition-colors shadow-sm"
                >
                  <FiMessageSquare className="w-3.5 h-3.5" />
                  <span>Discuss</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* FULL ARTICLE MODAL VIEW */}
        {activeArticle && (
          <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[99999] flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-10 relative max-h-[85vh] overflow-y-auto shadow-2xl">
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition"
              >
                <FiX className="w-5 h-5" />
              </button>

              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block mb-3">
                {activeArticle.category}
              </span>

              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-2">
                "{activeArticle.title}"
              </h1>

              <p className="text-xs text-slate-400 mb-6">
                By {activeArticle.author} / {activeArticle.date}
              </p>

              <div
                className="text-slate-700 text-sm sm:text-base leading-relaxed border-t border-slate-100 pt-6"
                dangerouslySetInnerHTML={{ __html: activeArticle.content }}
              />

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/918080224138?text=Hi%20HB%20GrowthSyncro,%20I%20have%20questions%20about%20the%20article:%20'${encodeURIComponent(activeArticle.title)}'`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-500 transition"
                >
                  <FiMessageSquare className="w-4 h-4" />
                  <span>Discuss Article on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;