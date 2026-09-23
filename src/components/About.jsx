import React from "react";
import socialMedia from "../assets/services/social-media.webp";
import reelEditing from "../assets/services/reel-editing.webp";
import canvaDesign from "../assets/services/canva-design.webp";
import contentStrategy from "../assets/services/content-strategy.webp";

import creativeContent from "../assets/services/creative-content.webp";
import fastResponse from "../assets/services/fast-response.webp";
import affordablePricing from "../assets/services/affordable-pricing.webp";
import clientSupport from "../assets/services/client-support.webp";

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-6 sm:px-10 bg-white text-slate-900 font-poppins">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* SECTION 1: HERO & HEADING (SEO OPTIMIZED H1) */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Web Development & Local SEO Growth Agency
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Custom Web Development & Local SEO Services: Turn Online Visitors Into <span className="text-blue-600">High-Paying Customers</span>
          </h1>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            HB GrowthSyncro engineers fast React web platforms and local search systems that empower businesses in Maharashtra and across India to generate direct calls, WhatsApp leads, and real commercial revenue.
          </p>
        </div>

        {/* SECTION 2: BRAND STORY WITH SUBTLE CARD BACKGROUND */}
        <div className="max-w-4xl mx-auto bg-slate-50/80 p-8 sm:p-12 rounded-[28px] border border-slate-200/80 shadow-sm space-y-6 sm:space-y-8 font-sans relative overflow-hidden">

          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          {/* Blue Main Heading */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1a56db] tracking-tight relative z-10">
            About HB GrowthSyncro – Engineering Web Systems for Local Growth
          </h2>

          {/* Paragraph 1 */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed relative z-10">
            HB GrowthSyncro was built with a single operational objective: to equip regional business owners, healthcare practices, and independent service enterprises with fast, reliable web infrastructure that translates into tangible client revenue.
          </p>

          {/* Paragraph 2 */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed relative z-10">
            We have developed into a dedicated technical growth collaborator for commercial enterprises across Maharashtra, India. Our identity and methodology are built around three core principles:
          </p>

          {/* Name Equation Line */}
          <div className="py-3 px-5 bg-white/90 rounded-xl border border-slate-200/80 inline-block shadow-xs relative z-10">
            <p className="text-base sm:text-lg font-bold text-slate-900 tracking-wide">
              <span className="text-[#1a56db]">HB</span> GrowthSyncro = <span className="text-[#1a56db]">HB</span> + GROWTH + SYNCRO
            </p>
          </div>

          {/* Paragraph 3 */}
          <div className="space-y-4 relative z-10">
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong className="font-bold text-[#1a56db]">“HB”</strong> — Represents personal accountability and direct engineering. You collaborate directly with the technical specialists building your platform, eliminating agency middlemen and bureaucratic delays.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong className="font-bold text-[#1a56db]">“Growth”</strong> — Prioritizes commercial outcomes over vanity metrics: qualified phone consultations, direct WhatsApp bookings, and sustained local customer acquisition.
            </p>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              <strong className="font-bold text-[#1a56db]">“Syncro”</strong> — Short for synchronize. Seamlessly uniting your custom web application, Google Business search presence, and messaging lead funnels into a cohesive, high-converting ecosystem.
            </p>
          </div>

          {/* Paragraph 4 */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed relative z-10">
            We operate without template bloat or confusing technical jargon. Utilizing modern component architectures like React and tailored local search strategies, we engineer digital assets that load instantaneously and convert prospective visitors into long-term clients.
          </p>

          {/* Paragraph 5 */}
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed relative z-10">
            Our commitment is anchored in transparent communication, transparent pricing, and providing regional businesses with permanent ownership of their digital presence.
          </p>
        </div>

        {/* SECTION 3: MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-slate-900 text-white shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Our Commercial Purpose
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-white">Our Mission</h2>
              <p className="text-slate-300 text-base leading-relaxed">
                To empower local business owners with practical, affordable, and high-converting digital tools. We bridge the gap between technical web development and real-world sales by creating systems that drive measurable growth.
              </p>
            </div>
          </div>

          {/* Vision Card */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                Strategic Direction
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">Our Vision</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To become the premier growth partner for local businesses across India — trusted for delivering clean digital products, transparent communication, and genuine business revenue instead of empty vanity metrics.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 4: WHAT WE DO */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-[24px] border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">Core Services</span>
            <h2 className="text-3xl font-bold text-slate-900">
              End-to-End Digital Solutions Designed for High Conversion
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We engineer and manage your entire digital presence so you can focus on scaling operational capacity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard img={socialMedia} title="Social Media Branding" desc="Build regional brand authority, maintain visual consistency, and convert engaged followers into leads." />
            <ServiceCard img={reelEditing} title="Short-Form Video Production" desc="Engaging, high-retention video reels engineered to capture consumer attention on mobile networks." />
            <ServiceCard img={canvaDesign} title="Conversion Design & UI" desc="High-quality, brand-focused marketing assets and conversion-optimized graphic visuals." />
            <ServiceCard img={contentStrategy} title="Lead Funnels & Strategy" desc="Tailored inquiry funnels that direct incoming search traffic into immediate WhatsApp conversations." />
          </div>
        </div>

        {/* SECTION 5: WHAT MAKES US BETTER */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">Our Competitive Advantage</span>
            <h2 className="text-3xl font-bold text-slate-900">
              Why Choose HB GrowthSyncro Over Traditional Digital Agencies?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Revenue & Leads Over Likes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Traditional agencies focus on superficial views. We engineer lead pipelines that prompt local customers to initiate direct phone consultations and WhatsApp messages.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Technical Transparency</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We speak plain language. You retain complete clarity on your web architecture, local search milestones, and system performance benchmarks.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Rapid 5-to-7 Day Deployment</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                While agencies take months to iterate, we build and deploy production-grade React web systems and custom conversion assets in just 5 to 7 business days.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6: STATISTICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">50+</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Projects Delivered</p>
          </div>
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">20+</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Businesses Scaled</p>
          </div>
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">5★</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Client Satisfaction</p>
          </div>
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">5-7 Days</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Average Delivery</p>
          </div>
        </div>

        {/* SECTION 7: WHY CHOOSE US */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-[24px] border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">Key Strengths</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Growing Businesses Trust HB GrowthSyncro
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Feature img={creativeContent} text="Clear & Impactful Messaging" />
            <Feature img={clientSupport} text="Direct Specialist Support" />
            <Feature img={fastResponse} text="Fast Turnaround Times" />
            <Feature img={affordablePricing} text="Transparent Pricing" />
          </div>
        </div>

        {/* SECTION 8: FINAL CTA */}
        <div className="bg-slate-900 text-white rounded-[24px] p-8 sm:p-12 text-center border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

          <h2 className="text-3xl font-bold mb-3 text-white">
            Ready to Build a Fast, High-Converting Web System?
          </h2>

          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Connect directly with our engineering team to construct a web platform that delivers steady WhatsApp leads and phone calls.
          </p>

          <a
            href="https://wa.me/918080224138?text=Hi%20HB%20GrowthSyncro%2C%20I%20want%20to%20build%20a%20high-converting%20website%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact HB GrowthSyncro on WhatsApp for web development inquiry"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20"
          >
            Start Project on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

/* REUSABLE COMPONENTS */
const ServiceCard = ({ img, title, desc }) => (
  <div className="bg-white p-6 rounded-[20px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 text-center">
    <img src={img} alt={`${title} Service Icon`} className="w-16 h-16 mx-auto mb-4 object-contain" />
    <h3 className="font-bold text-lg text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm mt-2 leading-relaxed">{desc}</p>
  </div>
);

const Feature = ({ img, text }) => (
  <div className="p-4 flex flex-col items-center">
    <img src={img} alt={`${text} Feature Icon`} className="w-14 h-14 mx-auto mb-3 object-contain" />
    <p className="font-semibold text-slate-800 text-sm">{text}</p>
  </div>
);

export default About;