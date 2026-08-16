import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiMessageSquare, FiPhone } from "react-icons/fi";

const faqData = [
  {
    category: "Website & Development",
    questions: [
      {
        q: "How fast can you build and deliver my website?",
        a: "Our standard delivery turnaround for the Business Launch package is 5 to 7 business days once brand assets, logos, and service descriptions are submitted. Custom enterprise builds or platforms requiring multi-tier databases and third-party API integrations typically deploy within 10 to 14 business days.",
      },
      {
        q: "Will my website work on all mobile smartphones and modern browsers?",
        a: "Yes. Every website is engineered mobile-first using modern component-driven React and clean CSS architectures. We test each build across Safari, Chrome, Edge, iOS, and Android to ensure optimal touch navigation, zero layout shift, and sub-2.5 second Core Web Vitals loading speeds.",
      },
      {
        q: "Do I need technical knowledge to manage my website after launch?",
        a: "Not at all. We deliver clean, self-sufficient web applications and provide step-by-step handover documentation. If your team requires periodic content updates, structural additions, or server maintenance, we offer flexible post-launch support retainers.",
      },
      {
        q: "Who retains legal ownership of the source code and domain?",
        a: "You retain 100% legal ownership of your domain name registration, hosting servers, production source code repositories, and user analytics from the moment final delivery is fulfilled.",
      },
    ],
  },
  {
    category: "Local SEO & Google Search",
    questions: [
      {
        q: "How does Google Maps Top 3 Optimization work?",
        a: "We perform complete Google Business Profile (GBP) optimization, correct Name-Address-Phone (NAP) consistency across verified business directories, structure local schema markup on your web pages, and set up customer review workflows to improve local relevance, distance, and prominence signals.",
      },
      {
        q: "When will I start seeing search ranking results and customer inquiries?",
        a: "Search engine crawlers typically index new, semantic sitemaps within 7 to 14 days of launch. Organic search visibility and Google Maps local 3-pack rankings build steady compounding traction over 30 to 60 days as citation authority and user engagement grow.",
      },
    ],
  },
  {
    category: "Pricing & Infrastructure",
    questions: [
      {
        q: "Are there any hidden costs after the project begins?",
        a: "No. Our pricing is completely transparent. Development estimates cover end-to-end architecture, mobile responsiveness, SSL security encryption, and deployment configuration without hidden setup charges.",
      },
      {
        q: "Do you offer post-launch support and warranty?",
        a: "Yes. Every project launch includes a dedicated post-launch support window (7 days for Basic, 30 days for Business) to address any technical adjustments. Ongoing maintenance agreements are also available for growing businesses.",
      },
    ],
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState("0-0");

  const toggleAccordion = (catIdx, qIdx) => {
    const key = `${catIdx}-${qIdx}`;
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <section id="faq" className="py-20 lg:py-32 px-6 sm:px-10 bg-white text-slate-900">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Clear Answers
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-slate-600 mt-4 text-base sm:text-lg leading-relaxed">
            Everything you need to know about our web development process, local SEO, delivery timelines, and growth systems.
          </p>
        </div>

        {/* ACCORDION GROUPS */}
        <div className="space-y-12">
          {faqData.map((group, catIdx) => (
            <div key={catIdx} className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100 px-4 py-2 rounded-lg inline-block">
                {group.category}
              </h2>

              <div className="space-y-3">
                {group.questions.map((faq, qIdx) => {
                  const key = `${catIdx}-${qIdx}`;
                  const isOpen = openIndex === key;

                  return (
                    <div
                      key={qIdx}
                      className="bg-slate-50 border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200"
                    >
                      <button
                        type="button"
                        onClick={() => toggleAccordion(catIdx, qIdx)}
                        aria-expanded={isOpen}
                        className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
                      >
                        <span className="pr-4 text-base sm:text-lg">{faq.q}</span>
                        <FiChevronDown
                          className={`w-5 h-5 text-slate-500 shrink-0 transition-transform duration-300 ${
                            isOpen ? "rotate-180 text-blue-600" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-6 pb-6 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-200/60 pt-4 bg-white">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* STILL HAVE QUESTIONS CTA */}
        <div className="bg-slate-900 text-white rounded-[24px] p-8 sm:p-12 text-center border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-4">
            <FiHelpCircle className="w-12 h-12 text-blue-400 mx-auto" />
            <h3 className="text-2xl sm:text-3xl font-bold">Still Have Questions?</h3>
            <p className="text-slate-400 text-sm sm:text-base">
              Can't find the answer you are looking for? Speak directly with our technical team on WhatsApp or give us a call.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/918080224138?text=Hi%20HB%20GrowthSyncro,%20I%20have%20a%20question%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ask questions on WhatsApp"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors shadow-lg"
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href="tel:+918080224138"
                aria-label="Call HB GrowthSyncro directly"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 hover:bg-slate-100 font-semibold text-sm transition-colors"
              >
                <FiPhone className="w-4 h-4" />
                <span>Call Us (+91 8080224138)</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;