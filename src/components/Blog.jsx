import React, { useState } from "react";
import {
  FiSearch,
  FiClock,
  FiTag,
  FiMessageSquare,
  FiBookOpen,
  FiArrowLeft,
} from "react-icons/fi";

const blogs = [
  {
    id: "developer-creator-playbook-2026",
    title:
      "The 2026 Developer & Creator Playbook: Building Modern Websites & Staying Sharp",
    author: "HB GrowthSyncro",
    date: "February 10, 2026",
    category: "Tech & Lifestyle",
    readTime: "6 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Discover why modern websites need speed, analytics, and mobile-first design, along with the productivity tools every developer and creator should have.",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">
        Building a website today is completely different from what it was a few years ago.
        Speed, user experience, and mobile-first design determine whether visitors stay or leave.
      </p>

      <p class="mb-4 text-slate-700 leading-relaxed">
        Whether you're launching a business, creating a personal portfolio, or starting an online store,
        modern web development is about delivering fast, responsive, and conversion-focused experiences.
      </p>

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">
        Why Your Business Needs a Fast, Custom Website Today
      </h3>

      <h4 class="text-lg font-semibold text-slate-900 mt-4 mb-2">
        Instant Trust & Credibility
      </h4>
      <p class="mb-4 text-slate-700 leading-relaxed">
        A clean, responsive website immediately builds confidence. Slow-loading pages,
        outdated designs, and broken layouts often send visitors directly to competitors.
      </p>

      <h4 class="text-lg font-semibold text-slate-900 mt-4 mb-2">
        Full Analytics Control
      </h4>
      <p class="mb-4 text-slate-700 leading-relaxed">
        Integrating Google Analytics 4 (GA4) and Google Ads conversion tracking helps you
        understand where visitors come from, how they interact with your site, and how to
        improve conversions.
      </p>

      <h4 class="text-lg font-semibold text-slate-900 mt-4 mb-2">
        Continuous Lead Capture
      </h4>
      <p class="mb-4 text-slate-700 leading-relaxed">
        Your website works around the clock by collecting enquiries through contact forms,
        click-to-call buttons, WhatsApp integration, and strategically placed call-to-actions.
      </p>

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">
        The Workstation Setup: Gear That Keeps You Productive
      </h3>

      <p class="mb-4 text-slate-700 leading-relaxed">
        Coding, designing, testing, and analyzing performance require long hours at a desk.
        The right workspace setup improves productivity while reducing fatigue.
      </p>

      <h4 class="text-lg font-semibold text-slate-900 mt-4 mb-2">
        High-Performance Laptops & Monitors
      </h4>
      <p class="mb-2 text-slate-700 leading-relaxed">
        Fast processors, sufficient RAM, and quality displays make multitasking,
        compiling code, and design work significantly smoother.
      </p>

      <p class="mb-6">
        👉 <a href="https://amzn.to/4fUJEop" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline">
        Check Top Developer Laptops on Amazon
        </a>
      </p>

      <h4 class="text-lg font-semibold text-slate-900 mt-4 mb-2">
        Ergonomic Workwear & Footwear
      </h4>
      <p class="mb-2 text-slate-700 leading-relaxed">
        Comfortable, breathable footwear can make a noticeable difference during long workdays,
        especially if you use a standing desk.
      </p>

      <p class="mb-6">
        👉 <a href="https://amzn.to/4wE3ATy" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline">
        View Recommended Ergonomic & Daily Shoes on Amazon
        </a>
      </p>

      <h4 class="text-lg font-semibold text-slate-900 mt-4 mb-2">
        Daily Grooming & Skincare Essentials
      </h4>
      <p class="mb-2 text-slate-700 leading-relaxed">
        Extended screen time and busy schedules can affect your appearance.
        A simple grooming and skincare routine helps you stay confident during client meetings
        and video calls.
      </p>

      <p class="mb-6">
        👉 <a href="https://link.amazon/B05ZrKgj6" target="_blank" rel="noopener noreferrer" class="text-blue-600 font-semibold hover:underline">
        Explore Top Grooming & Skincare Products on Amazon
        </a>
      </p>

      <h3 class="text-2xl font-bold text-slate-900 mt-8 mb-4 border-b border-slate-100 pb-2">
        Final Thoughts
      </h3>

      <p class="mb-4 text-slate-700 leading-relaxed">
        Building a successful online presence goes beyond launching a website.
        Pair a fast, modern web experience with the right tools and workspace,
        and you'll be better equipped for long-term growth and productivity.
      </p>

      <div class="mt-8 p-6 rounded-2xl bg-slate-50 border border-slate-200">
        <p class="text-xs text-slate-500 leading-relaxed">
          <strong>Disclaimer:</strong> Some of the links in this article are affiliate
          links. If you purchase through them, we may earn a small commission at no
          additional cost to you. Thank you for supporting HB GrowthSyncro.
        </p>
      </div>
    `,
  },
  {
    id: "choose-website-developer",
    title:
      "How to Choose the Best Website Developer for Your Local Business in 2026",
    author: "HB GrowthSyncro",
    date: "February 7, 2026",
    category: "Web Development",
    readTime: "5 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Not all websites make money. Learn the 5 crucial technical factors to check before hiring a web developer for your business.",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">Getting a website developed for your business is an important investment. However, many small business owners make the mistake of choosing a developer solely based on cheap pricing, leading to slow websites that fail to convert visitors into customers.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">1. Mobile-First Responsiveness</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">Over 80% of local search traffic originates from mobile devices. If your website takes more than 3 seconds to load on a smartphone, you lose potential calls instantly.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">2. Conversion-Focused Lead Funnels</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">A good website must have direct WhatsApp call-to-actions, clear inquiry forms, and click-to-call buttons readily accessible.</p>
    `,
  },
  {
    id: "google-maps-top-3",
    title: "How to Rank in Google Maps Top 3 and Get Daily Local Leads",
    author: "HB GrowthSyncro",
    date: "February 4, 2026",
    category: "Local SEO",
    readTime: "7 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "A step-by-step local SEO guide on optimizing your Google Business Profile to outrank competitors and drive phone calls.",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">Ranking in the Google Maps Local 3-Pack is the most reliable way for local businesses to gain direct calls without paying for continuous ads.</p>
      
      <h3 class="text-xl font-bold text-slate-900 mt-6 mb-3">Complete Profile Optimization</h3>
      <p class="mb-4 text-slate-700 leading-relaxed">Ensure your business category, address, phone number, and operating hours match perfectly across all online directories.</p>
    `,
  },
  {
    id: "whatsapp-lead-funnel",
    title: "Why WhatsApp Automation is Replacing Traditional Contact Forms",
    author: "HB GrowthSyncro",
    date: "February 4, 2026",
    category: "Lead Generation",
    readTime: "4 min read",
    imageUrl:
      "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&w=1200&q=80",
    excerpt:
      "Discover how high-converting WhatsApp funnels turn website visitors into instant sales conversations in seconds.",
    content: `
      <p class="mb-4 text-slate-700 leading-relaxed">Traditional contact forms lose up to 60% of potential inquiries due to delayed response times. Direct WhatsApp chat widgets allow business owners to engage leads immediately.</p>
    `,
  },
];

const categories = [
  "All",
  "Web Development",
  "Local SEO",
  "Lead Generation",
  "Tech & Lifestyle",
];

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

  const handleSelectArticle = (post) => {
    setActiveArticle(post);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToBlogs = () => {
    setActiveArticle(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="blog" className="py-16 lg:py-24 px-6 sm:px-10 bg-slate-50 text-slate-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* CONDITION 1: FULL ARTICLE PAGE VIEW */}
        {activeArticle ? (
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/80 p-6 sm:p-12 shadow-sm overflow-hidden">
            {/* BACK BUTTON */}
            <div className="mb-8 pb-6 border-b border-slate-100 flex items-center justify-between">
              <button
                onClick={handleBackToBlogs}
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600 bg-slate-100 hover:bg-blue-50 px-4 py-2 rounded-xl transition-all cursor-pointer"
              >
                <FiArrowLeft className="w-4 h-4" />
                <span>Back to Blogs</span>
              </button>

              <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                <FiTag className="w-3 h-3" /> {activeArticle.category}
              </span>
            </div>

            {/* ARTICLE HEADER */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
              {activeArticle.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-500 mb-8">
              <span>By <strong className="text-slate-800">{activeArticle.author}</strong></span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-600 font-medium">
                <FiClock className="w-3.5 h-3.5" /> {activeArticle.readTime}
              </span>
            </div>

            {/* FEATURED BANNER IMAGE */}
            <div className="mb-10 rounded-2xl overflow-hidden aspect-[16/9] w-full border border-slate-100 shadow-inner">
              <img
                src={activeArticle.imageUrl}
                alt={activeArticle.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* ARTICLE CONTENT */}
            <div
              className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-base sm:text-lg"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            {/* BOTTOM ACTION BAR */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={handleBackToBlogs}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 text-sm font-semibold transition cursor-pointer"
              >
                <FiArrowLeft className="w-4 h-4" />
                <span>Back to All Articles</span>
              </button>

              <a
                href={`https://wa.me/918080224138?text=Hi%20HB%20GrowthSyncro,%20I%20have%20questions%20about%20the%20article:%20'${encodeURIComponent(activeArticle.title)}'`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold transition shadow-md shadow-emerald-600/20"
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>Discuss Article on WhatsApp</span>
              </a>
            </div>
          </div>
        ) : (
          /* CONDITION 2: BLOG GRID & LIST VIEW */
          <div className="space-y-12">
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
                  className="bg-white rounded-[24px] border border-slate-200/80 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* CARD IMAGE */}
                    <div 
                      onClick={() => handleSelectArticle(post)}
                      className="aspect-[16/9] w-full overflow-hidden bg-slate-100 cursor-pointer relative"
                    >
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-4 left-4 inline-flex items-center gap-1 text-xs font-bold text-blue-600 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                        <FiTag className="w-3 h-3" /> {post.category}
                      </span>
                    </div>

                    {/* CARD CONTENT */}
                    <div className="p-6">
                      <div className="flex items-center justify-between text-xs font-medium text-slate-400 mb-2">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <FiClock className="w-3.5 h-3.5" /> {post.readTime}
                        </span>
                      </div>

                      <h2 
                        onClick={() => handleSelectArticle(post)}
                        className="text-xl font-bold text-slate-900 mb-3 hover:text-blue-600 transition-colors line-clamp-2 cursor-pointer"
                      >
                        {post.title}
                      </h2>

                      <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* ACTION BUTTONS */}
                  <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                    {/* READ BUTTON */}
                    <button
                      onClick={() => handleSelectArticle(post)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors shadow-sm cursor-pointer"
                    >
                      <FiBookOpen className="w-3.5 h-3.5" />
                      <span>Read Article</span>
                    </button>

                    {/* DISCUSS BUTTON */}
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
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;