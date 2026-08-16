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

  // Needs-Based Pricing Plans Data
  const plans = [
    {
      id: "basic",
      name: "Basic Website",
      badge: "Start Here",
      price: "₹9,999",
      priceSub: "One-time development fee",
      description:
        "Ideal for independent professionals, consultants, and local service providers seeking a clean, fast-loading digital business card and service portfolio.",
      featured: false,
      ctaText: "Get Started",
      whatsappMsg:
        "Hi HB GrowthSyncro, I want to discuss the Basic Website plan.",
      features: [
        "1-3 Responsive Web Pages",
        "Mobile & Tablet Optimized UI",
        "Direct WhatsApp Instant Inquiry Button",
        "Cloud Hosting Setup & SSL Encryption",
        "Contact Form & Location Integration",
        "7 Days Dedicated Post-Launch Support",
      ],
    },
    {
      id: "business",
      name: "Business Lead Gen",
      badge: "Most Needed",
      price: "₹19,999",
      priceSub: "One-time development fee",
      description:
        "Engineered for established local businesses aiming to generate continuous customer inquiries, rank in local search, and automate lead intake.",
      featured: true,
      ctaText: "Build My Business",
      whatsappMsg:
        "Hi HB GrowthSyncro, I need the Business Lead Gen website.",
      features: [
        "Everything in Basic Website",
        "Up to 10 Custom Structured Pages",
        "Google Business Profile Setup & Optimization",
        "High-Conversion Lead Capture Funnels",
        "Technical On-Page SEO & Schema Markup",
        "Google Analytics 4 & Search Console Setup",
        "30 Days Dedicated Post-Launch Support",
      ],
    },
    {
      id: "custom",
      name: "Custom / E-commerce",
      badge: "Tailored Needs",
      price: "Custom Quote",
      priceSub: "Based on technical scope",
      description:
        "Tailored for online retail stores, booking platforms, and custom software web apps requiring database logic, secure authentication, and payment gateways.",
      featured: false,
      ctaText: "Discuss Custom Needs",
      whatsappMsg:
        "Hi HB GrowthSyncro, I have a custom website or e-commerce requirement.",
      features: [
        "Complete E-commerce & Razorpay/Stripe Setup",
        "Custom Dynamic Web Application Architecture",
        "Administrative Dashboard & Inventory Management",
        "Advanced Conversion Tracking & Event Analytics",
        "Automated Customer Notification Workflows",
        "Ongoing Service-Level Agreement (SLA) Options",
      ],
    },
  ];

  // Service Feature Matrix Table
  const comparisonMatrix = [
    {
      category: "Website Capabilities",
      features: [
        { name: "Responsive Layout (Mobile/Tablet/Desktop)", basic: true, business: true, custom: true },
        { name: "Direct WhatsApp Click-to-Chat", basic: true, business: true, custom: true },
        { name: "Number of Included Pages", basic: "Up to 3", business: "Up to 10", custom: "Unlimited" },
        { name: "Payment Gateway / Product Catalog", basic: false, business: false, custom: true },
      ],
    },
    {
      category: "Marketing & Search Visibility",
      features: [
        { name: "Google Business Profile Map Setup", basic: false, business: true, custom: true },
        { name: "Structured Lead Capture Forms", basic: false, business: true, custom: true },
        { name: "Search Engine Optimization", basic: "Standard Meta", business: "Local SEO & Schema", custom: "Advanced Full-Stack" },
        { name: "Web Traffic & Event Analytics", basic: false, business: true, custom: true },
      ],
    },
    {
      category: "Support & Infrastructure",
      features: [
        { name: "Cloud Server Deployment & SSL", basic: true, business: true, custom: true },
        { name: "Included Post-Launch Warranty", basic: "7 Days", business: "30 Days", custom: "Priority SLA" },
        { name: "Custom Dynamic Admin Dashboard", basic: false, business: false, custom: true },
      ],
    },
  ];

  // Frequently Asked Questions
  const faqs = [
    {
      question: "Which package is best suited for an independent professional or small service provider?",
      answer:
        "The Basic Website plan is designed specifically for professionals who need a fast, credible digital identity to showcase services, credentials, and contact details without ongoing platform overhead.",
    },
    {
      question: "Can we start with a Basic or Business website and upgrade to e-commerce later?",
      answer:
        "Yes. We construct every website with modular, scalable code architecture. When your business is ready to process digital payments, add user accounts, or manage product inventories, we expand your existing infrastructure smoothly.",
    },
    {
      question: "Are there recurring monthly maintenance or subscription fees?",
      answer:
        "Our development fees are strictly one-time investments. Standard third-party infrastructure costs (such as your domain name registration and hosting server) renew on an annual basis at cost price.",
    },
    {
      question: "What is the standard turnaround time from kickoff to public launch?",
      answer:
        "Basic website projects typically deploy within 3 to 5 business days. Business Lead Gen platforms generally launch within 7 to 10 business days, contingent upon timely delivery of your project content and verification credentials.",
    },
    {
      question: "Who retains legal ownership of the source code and digital domain?",
      answer:
        "You retain 100% legal ownership of your domain name, cloud hosting environment, database records, and source code. We do not enforce proprietary vendor lock-in.",
    },
  ];

  return (
    <section id="pricing" className="py-20 lg:py-32 px-6 sm:px-10 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Simple, Transparent Pricing
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Pay only for what <span className="text-blue-600">you need.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-6 font-normal max-w-3xl mx-auto leading-relaxed">
            Transparent development packages designed to help your business establish a high-performing digital footprint, rank in local search, and turn visitors into paying customers.
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
                    {plan.featured && "Recommended"}
                  </span>
                </div>

                <h3
                  className={`text-2xl font-bold tracking-tight mb-2 ${
                    plan.featured ? "text-white" : "text-slate-900"
                  }`}
                >
                  {plan.name}
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
                    What's Included
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
                  aria-label={`Inquire about ${plan.name} plan on WhatsApp`}
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
              Compare Features
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Detailed Deliverables Breakdown
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-slate-200 text-slate-900">
                  <th className="py-4 px-4 text-sm font-bold w-2/5">Capabilities</th>
                  <th className="py-4 px-4 text-sm font-bold text-center w-1/5">Basic</th>
                  <th className="py-4 px-4 text-sm font-bold text-center w-1/5 text-blue-600">Business</th>
                  <th className="py-4 px-4 text-sm font-bold text-center w-1/5">Custom</th>
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
                        
                        {/* Basic Column */}
                        <td className="py-4 px-4 text-center">
                          {typeof feat.basic === "boolean" ? (
                            feat.basic ? (
                              <FiCheck className="w-5 h-5 text-blue-600 mx-auto" />
                            ) : (
                              <FiX className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs font-semibold text-slate-600">{feat.basic}</span>
                          )}
                        </td>

                        {/* Business Column */}
                        <td className="py-4 px-4 text-center bg-blue-50/30">
                          {typeof feat.business === "boolean" ? (
                            feat.business ? (
                              <FiCheck className="w-5 h-5 text-blue-600 mx-auto" />
                            ) : (
                              <FiX className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs font-bold text-blue-600">{feat.business}</span>
                          )}
                        </td>

                        {/* Custom Column */}
                        <td className="py-4 px-4 text-center">
                          {typeof feat.custom === "boolean" ? (
                            feat.custom ? (
                              <FiCheck className="w-5 h-5 text-blue-600 mx-auto" />
                            ) : (
                              <FiX className="w-4 h-4 text-slate-300 mx-auto" />
                            )
                          ) : (
                            <span className="text-xs font-semibold text-slate-600">{feat.custom}</span>
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
                  type="button"
                  onClick={() => toggleFaq(index)}
                  aria-expanded={openFaq === index}
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-slate-900 hover:text-blue-600 transition-colors cursor-pointer"
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
              <FiZap className="w-3.5 h-3.5" /> Direct Consultation
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Have a tailored technical requirement?
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mt-3 font-normal leading-relaxed">
              If your enterprise requires custom API integrations, automated workflows, or specialized web application logic, connect directly for an architectural breakdown and quote.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hi%20HB%20GrowthSyncro,%20I'd%20like%20to%20chat%20about%20my%20business%20website`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat with HB GrowthSyncro on WhatsApp regarding custom website requirements"
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