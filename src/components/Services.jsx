import React from "react";
import { 
  FiShare2, 
  FiVideo, 
  FiLayout, 
  FiTrendingUp, 
  FiCpu, 
  FiGlobe, 
  FiArrowRight, 
  FiMessageSquare 
} from "react-icons/fi";

const services = [
  {
    title: "Website Development",
    description:
      "Modern, lightning-fast, and responsive web platforms built to capture leads and establish online credibility.",
    icon: FiGlobe,
  },
  {
    title: "AI Growth Systems",
    description:
      "Using cutting-edge AI tools to optimize content creation, automate response workflows, and enhance customer engagement.",
    icon: FiCpu,
  },
  {
    title: "Content Strategy",
    description:
      "Data-driven content planning and marketing strategies that turn casual viewers into active business inquiries.",
    icon: FiTrendingUp,
  },
  {
    title: "Graphic Design",
    description:
      "Eye-catching social media posts, banners, stories, and promotional creatives that build immediate consumer trust.",
    icon: FiLayout,
  },
  {
    title: "Reel Editing",
    description:
      "Professional short-form videos with captions, dynamic transitions, and engaging edits built for high audience retention.",
    icon: FiVideo,
  },
  {
    title: "Social Media Management",
    description:
      "Content planning, scheduling, audience engagement, and account growth strategies designed to build brand authority.",
    icon: FiShare2,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-20 lg:py-32 px-6 sm:px-10 bg-white text-slate-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* SECTION HEADING */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-24">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Digital Growth Engineering
          </span>

          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            How <span className="text-blue-600">HB GrowthSyncro</span> Helps Your Business Get More Customers
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-6 font-normal max-w-3xl mx-auto leading-relaxed">
            Simple, conversion-focused digital solutions designed to turn your online presence into real WhatsApp messages, direct phone calls, and revenue-generating enquiries.
          </p>
        </div>

        {/* SERVICE CARDS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* ICON BADGE */}
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>
                </div>

                {/* ACTION FOOTER */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                  <span>Explore Capabilities</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA BANNER */}
        <div className="mt-20 lg:mt-28 relative bg-slate-900 rounded-[24px] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
              Want These Results for Your Business?
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mt-3 font-normal leading-relaxed">
              Let’s build a simple system that brings you real customers through your website and social channels.
            </p>
          </div>

          <div className="relative z-10 shrink-0">
            <a
              href="https://wa.me/918080224138?text=Hi%20I%20want%20help%20to%20get%20more%20customers"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-green-600 hover:bg-green-500 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-green-600/20"
            >
              <FiMessageSquare className="w-5 h-5" />
              <span>Get Free Consultation on WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Services;