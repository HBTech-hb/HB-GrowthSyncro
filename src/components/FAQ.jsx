import React, { useState, useEffect } from "react";
import { FiChevronDown, FiHelpCircle, FiMessageSquare, FiPhone } from "react-icons/fi";

const faqData = [
  {
    category: "Web Development & Engineering",
    questions: [
      {
        q: "How fast can HB GrowthSyncro build and deploy my website?",
        a: "Our standard turnaround time for custom business web systems is 5 to 7 business days once project assets are finalized. Enterprise platforms requiring complex databases or custom integrations deploy within 10 to 14 business days.",
      },
      {
        q: "Will my website render quickly and smoothly across mobile devices?",
        a: "Yes. Every website is engineered mobile-first using modern React architectures and clean CSS, achieving sub-2.5 second Core Web Vitals performance scores across iOS, Android, Safari, Chrome, and Edge.",
      },
      {
        q: "Who retains legal ownership of the source code, domain name, and server?",
        a: "You retain 100% full legal ownership of your domain registration, server hosting accounts, custom source code, and design assets upon project completion.",
      },
    ],
  },
  {
    category: "Local SEO & Traffic Growth",
    questions: [
      {
        q: "How does your Search Engine Optimization (SEO) drive local client inquiries?",
        a: "We structure semantic HTML, dynamic schema markup, target high-intent search terms, optimize heading structures, improve loading speeds, and build citation authority so your site ranks prominently on Google Search and Google Maps.",
      },
      {
        q: "When will my business start seeing search engine ranking improvements?",
        a: "Google crawlers index updated sitemaps within 7 to 14 days. Organic search visibility and keyword ranking momentum build steadily over 30 to 60 days.",
      },
    ],
  },
  {
    category: "Lead Generation & Direct Conversions",
    questions: [
      {
        q: "How do WhatsApp lead funnels improve website conversion rates?",
        a: "We replace slow contact forms with instant WhatsApp communication links and automated response triggers, letting interested visitors contact your business in one tap.",
      },
      {
        q: "Do I need a physical office or storefront location to run an online service?",
        a: "No. Our digital growth strategies are built for remote service providers, local contractors, e-commerce stores, and digital platforms across India.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState("0-0");

  useEffect(() => {
    // Generate JSON-LD FAQ Schema for Google Search Rich Results
    const schemaQuestions = [];
    faqData.forEach((cat) => {
      cat.questions.forEach((item) => {
        schemaQuestions.push({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.a,
          },
        });
      });
    });

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: schemaQuestions,
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(faqSchema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const toggleAccordion = (catIndex, qIndex) => {
    const key = `${catIndex}-${qIndex}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section id="faq" className="py-20 px-6 sm:px-10 bg-slate-50 text-slate-900 font-poppins">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* SECTION HEADER WITH KEYWORD OPTIMIZED H1 */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Frequently Asked Questions
          </span>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Web Development & Local SEO FAQs – HB GrowthSyncro
          </h1>

          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Find answers to common questions regarding custom website development, turnaround times, Google Maps rankings, and lead funnel setups.
          </p>
        </div>

        {/* ACCORDION CATEGORIES */}
        <div className="space-y-8">
          {faqData.map((category, catIndex) => (
            <div key={catIndex} className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 border-b border-slate-200 pb-2">
                {category.category}
              </h2>

              <div className="space-y-3">
                {category.questions.map((item, qIndex) => {
                  const key = `${catIndex}-${qIndex}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={qIndex}
                      className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all duration-200"
                    >
                      <button
                        onClick={() => toggleAccordion(catIndex, qIndex)}
                        aria-expanded={isOpen}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer"
                      >
                        <h3 className="font-bold text-base sm:text-lg text-slate-800 flex items-center gap-2">
                          <FiHelpCircle className="text-blue-600 flex-shrink-0 w-5 h-5" />
                          {item.q}
                        </h3>
                        <FiChevronDown
                          className={`w-5 h-5 text-slate-500 flex-shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-blue-600" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5 pt-0 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100 mt-1 pt-3">
                          <p>{item.a}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA FOOTER */}
        <div className="bg-slate-900 text-white p-8 rounded-3xl text-center space-y-4 border border-slate-800 shadow-xl">
          <h2 className="text-2xl font-bold">Have More Questions About Building Your Website?</h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Our technical team is ready to analyze your business requirements and answer any custom project questions directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://wa.me/918080224138?text=Hi%20HB%20GrowthSyncro%2C%20I%20have%20questions%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition shadow-md"
            >
              <FiMessageSquare className="w-4 h-4" />
              Ask via WhatsApp
            </a>
            <a
              href="tel:+918080224138"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition border border-slate-700"
            >
              <FiPhone className="w-4 h-4" />
              Call Specialist
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;