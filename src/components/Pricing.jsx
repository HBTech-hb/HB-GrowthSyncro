import React, { useState } from "react";
import {
  FiCheck,
  FiX,
  FiStar,
  FiArrowRight,
  FiMessageSquare,
  FiZap,
  FiChevronDown,
} from "react-icons/fi";

const Pricing = () => {
  // WhatsApp Contact Number
  const whatsappNumber = "918080224138";

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Core Pricing Plans Data
  const plans = [
    {
      id: "launch",
      name: "Business Launch",
      badge: "Essential Entry",
      price: "₹14,999",
      priceSub: "One-time investment",
      description:
        "Ideal for startups and local businesses looking to establish a high-trust digital foundation.",
      featured: false,
      ctaText: "Book Consultation",
      whatsappMsg:
        "Hi HB GrowthSyncro, I want to discuss the Business Launch plan (₹14,999).",
      features: [
        "High-Performance React Website",
        "Fully Mobile Responsive UI",
        "Direct WhatsApp Booking Integration",
        "Google Business Profile Setup",
        "Basic On-Page Technical SEO",
        "SSL Security & Fast Hosting Setup",
        "14 Days Post-Launch Support",
      ],
    },
    {
      id: "growth",
      name: "Business Growth",
      badge: "Most Popular",
      price: "Starting ₹29,999",
      priceSub: "Tailored to scale",
      description:
        "For growing brands needing high local Google search visibility and consistent customer acquisition.",
      featured: true,
      ctaText: "Request Proposal",
      whatsappMsg:
        "Hi HB GrowthSyncro, I want to request a proposal for the Business Growth plan.",
      features: [
        "Everything in Business Launch",
        "Advanced Local SEO Strategy",
        "Complete Brand Identity & Logo System",
        "High-Velocity Campaign Landing Pages",
        "Monthly Content & Web Updates",
        "Conversion Performance Tracking",
        "Google Maps Top 3 Optimization",
      ],
    },
    {
      id: "partner",
      name: "Growth Partner",
      badge: "Enterprise Scale",
      price: "Let's Talk",
      priceSub: "Full retainer partner",
      description:
        "A full-service digital partnership for businesses ready to dominate their local market.",
      featured: false,
      ctaText: "Become a Growth Partner",
      whatsappMsg:
        "Hi HB GrowthSyncro, I want to explore becoming a Growth Partner.",
      features: [
        "Everything in Business Growth",
        "Automated Customer Chat Workflows",
        "Omnichannel Digital Marketing",
        "Continuous Technical Maintenance",
        "Monthly Strategic Advisory Calls",
        "24/7 Priority Dedicated Support",
        "Quarterly ROI & Expansion Audits",
      ],
    },
  ];

  // Service Feature Matrix Table
  const comparisonMatrix = [
    {
      category: "Core Digital Platform",
      features: [
        { name: "Responsive Business Website", launch: true, growth: true, partner: true },
        { name: "WhatsApp Direct Lead Funnel", launch: true, growth: true, partner: true },
        { name: "Conversion Landing Pages", launch: false, growth: true, partner: true },
        { name: "Automated Customer Chatbot", launch: false, growth: false, partner: true },
      ],
    },
    {
      category: "Search & Visibility",
      features: [
        { name: "Google Business Profile Setup", launch: true, growth: true, partner: true },
        { name: "Local SEO Keyword Optimization", launch: "Basic", growth: "Advanced", partner: "Dominance" },
        { name: "Google Maps Pack Ranking", launch: false, growth: true, partner: true },
        { name: "Competitor Search Audits", launch: false, growth: false, partner: true },
      ],
    },
    {
      category: "Strategy & Support",
      features: [
        { name: "Brand Identity Design", launch: false, growth: true, partner: true },
        { name: "Monthly Content & Website Care", launch: false, growth: true, partner: true },
        { name: "Monthly Strategy Calls", launch: false, growth: false, partner: true },
        { name: "Priority Support Window", launch: "Standard", growth: "Fast", partner: "24/7 Priority" },
      ],
    },
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      question: "How long does it take to deliver the website?",
      answer:
        "Our standard delivery time is 5 to 7 days for the Business Launch plan once content and requirements are finalized.",
    },
    {
      question: "Do I need to pay for domain and hosting separately?",
      answer:
        "Hosting setup and SSL integration are included. We can assist you in acquiring your custom domain name directly.",
    },
    {
      question: "Will my website work well on mobile phones?",
      answer:
        "Yes, every website we engineer is 100% mobile-responsive, lightning-fast, and tested across all smartphone sizes.",
    },
    {
      question: "Can I upgrade my growth plan later?",
      answer:
        "Absolutely. You can start with the Business Launch plan and upgrade to Business Growth or Growth Partner anytime as your revenue expands.",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 px-6 sm:px-10 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Tailored Investments
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Choose the Right <span className="text-blue-600">Growth Plan.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-6 font-normal max-w-3xl mx-auto leading-relaxed">
            Predictable digital solutions built around business outcomes, customer acquisition, and verified ROI—not arbitrary deliverables.
          </p>
        </div>

        {/* THREE PREMIUM PLANS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-24">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-[28px] p-8 sm:p-10 flex flex-col justify-between transition-all duration-300 ${
                plan.featured
                  ? "bg-slate-900 text-white shadow-2xl shadow-blue-900/20 border-2 border-blue-600 lg:-translate-y-2"
                  : "bg-white text-slate-900 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-slate-300"
              }`}
            >
              {/* Featured Badge */}
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold tracking-wide uppercase shadow-lg">
                  <FiStar className="w-3.5 h-3.5 fill-current" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                {/* Plan Header */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                      plan.featured
                        ? "bg-slate-800 text-blue-400 border border-slate-700"
                        : "bg-blue-50 text-blue-600 border border-blue-100"
                    }`}
                  >
                    {!plan.featured && plan.badge}
                    {plan.featured && plan.name}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold tracking-tight mb-2 ${
                    plan.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {!plan.featured && plan.name}
                  {plan.featured && "Scale Your Revenue"}
                </h3>

                <p
                  className={`text-sm leading-relaxed mb-6 font-normal ${
                    plan.featured ? "text-slate-400" : "text-slate-600"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Pricing Number Display */}
                <div className="mb-8 pb-6 border-b border-slate-100/20">
                  <div className="flex items-baseline gap-2">
                    <span
                      className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${
                        plan.featured ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {plan.price}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-medium block mt-1 ${
                      plan.featured ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    {plan.priceSub}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3.5 mb-8">
                  <span
                    className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                      plan.featured ? "text-slate-400" : "text-slate-500"
                    }`}
                  >
                    Included Deliverables
                  </span>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`p-1 rounded-full shrink-0 mt-0.5 ${
                          plan.featured
                            ? "bg-blue-600/20 text-blue-400"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        <FiCheck className="w-3.5 h-3.5" />
                      </div>
                      <span
                        className={`text-sm font-medium ${
                          plan.featured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Trigger Button */}
              <div>
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(plan.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm font-semibold transition-all duration-200 shadow-md group ${
                    plan.featured
                      ? "bg-blue-600 hover:bg-blue-500 text-white shadow-blue-600/30"
                      : "bg-slate-900 hover:bg-blue-600 text-white"
                  }`}
                >
                  <span>{plan.ctaText}</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED FEATURE COMPARISON TABLE */}
        <div className="mb-24 bg-slate-50/70 rounded-[28px] p-8 sm:p-12 border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Full Transparency
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Detailed Solution Matrix
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Compare exact capabilities across all three growth frameworks.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900">
                  <th className="py-4 px-4 text-sm font-bold w-2/5">Capabilities</th>
                  <th className="py-4 px-4 text-sm font-bold text-center w-1/5">Launch</th>
                  <th className="py-4 px-4 text-sm font-bold text-center w-1/5 text-blue-600">Growth</th>
                  <th className="py-4 px-4 text-sm font-bold text-center w-1/5">Partner</th>
                </tr>
              </thead>
              <tbody>
                {comparisonMatrix.map((cat, idx) => (
                  <React.Fragment key={idx}>
                    {/* Category Title Row */}
                    <tr>
                      <td
                        colSpan="4"
                        className="pt-6 pb-3 px-4 text-xs font-bold uppercase tracking-wider text-slate-400 bg-slate-100/50 rounded-lg"
                      >
                        {cat.category}
                      </td>
                    </tr>
                    {cat.features.map((feat, fIdx) => (
                      <tr key={fIdx} className="border-b border-slate-100 hover:bg-white/60 transition-colors">
                        <td className="py-4 px-4 text-sm font-medium text-slate-700">
                          {feat.name}
                        </td>
                        
                        {/* Launch Column */}
                        <td className="py-4 px-4 text-center">
                          {typeof feat.launch === "boolean" ? (
                            feat.launch ? (
                              <FiCheck className="w-5 h-5 text-blue-600 mx-auto" />
                            ) : (
                              <FiX className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs font-semibold text-slate-600">{feat.launch}</span>
                          )}
                        </td>

                        {/* Growth Column */}
                        <td className="py-4 px-4 text-center bg-blue-50/30">
                          {typeof feat.growth === "boolean" ? (
                            feat.growth ? (
                              <FiCheck className="w-5 h-5 text-blue-600 mx-auto" />
                            ) : (
                              <FiX className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs font-bold text-blue-600">{feat.growth}</span>
                          )}
                        </td>

                        {/* Partner Column */}
                        <td className="py-4 px-4 text-center">
                          {typeof feat.partner === "boolean" ? (
                            feat.partner ? (
                              <FiCheck className="w-5 h-5 text-blue-600 mx-auto" />
                            ) : (
                              <FiX className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs font-semibold text-slate-600">{feat.partner}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <div className="mb-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
              Got Questions?
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-2xl border border-slate-200 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors"
                >
                  <span>{faq.question}</span>
                  <FiChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-200/60 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CUSTOM SOLUTION CTA BANNER */}
        <div className="relative bg-slate-900 rounded-[24px] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-400 bg-blue-950/80 px-3 py-1 rounded-full border border-blue-800/50 mb-4">
              <FiZap className="w-3.5 h-3.5" /> Tailored Architecture
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Need a Custom Solution?
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mt-3 font-normal leading-relaxed">
              Every business model is different. Let's discuss your specific market targets and build a custom strategy tailored to your exact budget and goals.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20HB%20GrowthSyncro,%20I'd%20like%20to%20discuss%20a%20custom%20digital%20solution`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-colors shadow-lg shadow-blue-600/25 group"
            >
              <span>Book Free Consultation</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20HB%20GrowthSyncro,%20I'd%20like%20to%20chat%20about%20my%20business%20website`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-base transition-colors shadow-lg shadow-green-600/20"
            >
              <FiMessageSquare className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;