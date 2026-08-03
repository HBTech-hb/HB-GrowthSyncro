import React, { useState } from "react";
import { FiChevronDown, FiHelpCircle, FiMessageSquare, FiPhone } from "react-icons/fi";

const faqData = [
  {
    category: "Website & Development",
    questions: [
      {
        q: "How fast can you build and deliver my website?",
        a: "Our standard delivery turnaround is 5 to 7 days for the Business Launch package once content, logo, and core business information are submitted.",
      },
      {
        q: "Will my website work on all mobile smartphones?",
        a: "Yes. Every website we build uses a modern mobile-first React structure. It is 100% responsive, fast-loading, and tested across iOS and Android devices.",
      },
      {
        q: "Do I need technical knowledge to manage my website?",
        a: "Not at all. We set up simple workflows and provide post-launch maintenance packages so you never have to worry about technical updates or code.",
      },
    ],
  },
  {
    category: "Local SEO & Google Search",
    questions: [
      {
        q: "How does Google Maps Top 3 Optimization work?",
        a: "We optimize your Google Business Profile (GBP), perform local keyword placement, improve local citations, and set up review workflows to push your business into top local map search results.",
      },
      {
        q: "When will I start seeing search ranking results?",
        a: "Technical website indexing usually happens within 7–14 days. Local SEO rankings and Google Maps visibility typically build momentum over 30 to 60 days.",
      },
    ],
  },
  {
    category: "Pricing & Payments",
    questions: [
      {
        q: "Are there any hidden costs after the project starts?",
        a: "No hidden fees. Our pricing is completely transparent. Hosting setup and SSL certificates are included in our launch plans.",
      },
      {
        q: "Do you offer post-launch support and edits?",
        a: "Yes! Every project includes a 14-day dedicated post-launch support window. We also offer monthly care retainers for ongoing updates.",
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
                        onClick={() => toggleAccordion(catIdx, qIdx)}
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-sm transition-colors shadow-lg"
              >
                <FiMessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>

              <a
                href="tel:+918080224138"
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