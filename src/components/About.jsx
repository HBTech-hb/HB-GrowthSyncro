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
    <section id="about" className="py-20 lg:py-28 px-6 sm:px-10 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto space-y-20">

        {/* SECTION 1: HERO & HEADING */}
        <div className="text-center max-w-4xl mx-auto">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Digital Growth Partner
          </span>

          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Helping Local Businesses Turn Online Visitors Into <span className="text-blue-600">Real Customers</span>
          </h1>

          <p className="text-slate-600 mt-6 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            HB GrowthSyncro builds simple, high-performing digital systems that help small businesses get more calls, WhatsApp messages, and direct enquiries — not just followers or views.
          </p>
        </div>

        {/* SECTION 2: MISSION & VISION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="p-8 sm:p-10 rounded-[24px] bg-slate-900 text-white shadow-xl border border-slate-800 relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400 block mb-2">
                Our Purpose
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
                The Future
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-slate-900">Our Vision</h2>
              <p className="text-slate-600 text-base leading-relaxed">
                To become the premier growth partner for local businesses across India — trusted for delivering clean digital products, transparent communication, and genuine business revenue instead of empty vanity metrics.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3: WHAT WE DO */}
        <div className="bg-slate-50 p-8 md:p-12 rounded-[24px] border border-slate-200">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">What We Do</span>
            <h2 className="text-3xl font-bold text-slate-900">
              Complete Digital Solutions Built for Growth
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We manage your entire digital presence so you can focus on running your operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard img={socialMedia} title="Social Media" desc="Build local authority and engage your audience." />
            <ServiceCard img={reelEditing} title="Reels Editing" desc="Engaging short video content that drives attention." />
            <ServiceCard img={canvaDesign} title="Design Work" desc="High-quality, conversion-focused visual creatives." />
            <ServiceCard img={contentStrategy} title="Strategy & Funnels" desc="Tailored marketing funnels that convert visitors to leads." />
          </div>
        </div>

        {/* SECTION 4: WHAT MAKES US BETTER (OUR ADVANTAGE) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">Our Advantage</span>
            <h2 className="text-3xl font-bold text-slate-900">
              What Makes Us Different From Agencies?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Leads Over Likes</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Agencies focus on viral views. We focus on getting actual customers to call your business or send a WhatsApp enquiry.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">No Complex Jargon</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                We speak plain language. You always know what is being built, how it works, and what results to expect.
              </p>
            </div>

            <div className="p-6 rounded-[20px] bg-white border border-slate-200 shadow-sm">
              <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">Speed & Reliability</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Most agencies take months. We deliver high-quality, fully functioning web systems and designs in just 5 to 7 days.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: STATISTICS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">50+</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Projects Delivered</p>
          </div>
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">20+</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Businesses Helped</p>
          </div>
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">5★</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Client Support</p>
          </div>
          <div className="p-6 sm:p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">5-7 Days</span>
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Fast Delivery</p>
          </div>
        </div>

        {/* SECTION 6: WHY CHOOSE US */}
        <div className="bg-slate-50 p-8 sm:p-12 rounded-[24px] border border-slate-100">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">Why Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Why Businesses Choose HB GrowthSyncro
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <Feature img={creativeContent} text="Clear & Simple Content" />
            <Feature img={clientSupport} text="Direct Communication" />
            <Feature img={fastResponse} text="Fast Delivery" />
            <Feature img={affordablePricing} text="Budget Friendly" />
          </div>
        </div>

        {/* SECTION 7: FINAL CTA */}
        <div className="bg-slate-900 text-white rounded-[24px] p-8 sm:p-12 text-center border border-slate-800 shadow-xl relative overflow-hidden">
          <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

          <h2 className="text-3xl font-bold mb-3 text-white">
            Ready to Sync Your Business Growth?
          </h2>

          <p className="text-slate-400 mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Let’s build a simple digital system that brings you real enquiries through WhatsApp and your website.
          </p>

          <a
            href="https://wa.me/918080224138?text=Hi%20I%20want%20a%20website%20for%20my%20business"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-500 transition-colors shadow-lg shadow-green-600/20"
          >
            Contact on WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
};

/* REUSABLE COMPONENTS */
const ServiceCard = ({ img, title, desc }) => (
  <div className="bg-white p-6 rounded-[20px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1 transition-all duration-300 text-center">
    <img src={img} alt={title} className="w-16 h-16 mx-auto mb-4 object-contain" />
    <h3 className="font-bold text-lg text-slate-900">{title}</h3>
    <p className="text-slate-600 text-sm mt-2 leading-relaxed">{desc}</p>
  </div>
);

const Feature = ({ img, text }) => (
  <div className="p-4 flex flex-col items-center">
    <img src={img} alt={text} className="w-14 h-14 mx-auto mb-3 object-contain" />
    <p className="font-semibold text-slate-800 text-sm">{text}</p>
  </div>
);

export default About;