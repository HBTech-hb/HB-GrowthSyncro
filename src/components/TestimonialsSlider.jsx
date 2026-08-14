import React, { memo } from "react";
import {
  FiStar,
  FiCheckCircle,
  FiArrowRight,
  FiMessageSquare,
  FiTrendingUp,
  FiUsers,
  FiAward,
} from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";

// Testimonials Data Array
const testimonialsData = [
  {
    id: 1,
    name: "Vikram Sharma",
    business: "Royal Fitness Club",
    industry: "Health & Wellness",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    review:
      "HB GrowthSyncro transformed our gym's online presence completely. Trial signups increased by 180% in 60 days, and our local Google Maps ranking jumped to the top 3. Professional execution from day one.",
  },
  {
    id: 2,
    name: "Priya Nair",
    business: "STYLE MANTRA",
    industry: "Beauty & Lifestyle",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    review:
      "The WhatsApp automated appointment funnel and website design HB GrowthSyncro built reduced our missed inquiries dramatically. Our weekend consultations grew over 3x in just three months.",
  },
  {
    id: 3,
    name: "Dr. Rajesh Kulkarni",
    business: "Apex Dental Clinic",
    industry: "Healthcare",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=200",
    review:
      "Patient trust is crucial in healthcare. HB GrowthSyncro engineered a clean, medical-grade portal that instantly builds trust and streamlined our booking process. Highly recommended partner.",
  },
  {
    id: 4,
    name: "Ananya Mehta",
    business: "Verdant Artisanal Cafe",
    industry: "Hospitality",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200",
    review:
      "We cut our dependency on third-party food aggregators by 30% thanks to HB GrowthSyncro's digital menu system and local SEO strategy. Our direct orders and table bookings skyrocketed.",
  },
  {
    id: 5,
    name: "Rohan Deshmukh",
    business: "Urban Living Realty",
    industry: "Real Estate",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200",
    review:
      "They built high-converting property landing pages with automated lead qualification. We closed site visits much faster and filtered out unqualified inquiries effortlesly.",
  },
  {
    id: 6,
    name: "Karan Verma",
    business: "Monarch Craft Studio",
    industry: "E-Commerce & Retail",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200",
    review:
      "Our local retail boutique turned into a nationwide D2C brand with 40% of our revenue now generated online. HB GrowthSyncro delivers fast, reliable, and high-ROI work every time.",
  },
];

// Reusable Star Rating Component
const StarRating = memo(({ count = 5 }) => (
  <div className="flex items-center gap-1 text-amber-400">
    {[...Array(count)].map((_, i) => (
      <FiStar key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
));
StarRating.displayName = "StarRating";

// Reusable Testimonial Card Component
const TestimonialCard = memo(({ item }) => (
  <div className="group bg-white p-8 rounded-[24px] border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-slate-300 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between">
    <div>
      {/* Top Header: Rating & Google Badge */}
      <div className="flex items-center justify-between mb-6">
        <StarRating count={item.rating} />
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600 text-xs font-semibold">
          <FcGoogle className="w-4 h-4" />
          <span>Verified Review</span>
        </div>
      </div>

      {/* Review Content */}
      <p className="text-slate-700 text-sm sm:text-base leading-relaxed font-normal mb-8 italic">
        "{item.review}"
      </p>
    </div>

    {/* Client Metadata */}
    <div className="pt-6 border-t border-slate-100 flex items-center gap-4">
      <img
        src={item.avatar}
        alt={item.name}
        loading="lazy"
        className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm shrink-0"
      />
      <div>
        <h3 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
          {item.name}
        </h3>
        <p className="text-xs font-semibold text-slate-500">
          {item.business} • <span className="text-blue-600">{item.industry}</span>
        </p>
      </div>
    </div>
  </div>
));
TestimonialCard.displayName = "TestimonialCard";

const TestimonialSection = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-32 px-6 sm:px-10 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <span className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-1.5 rounded-full inline-block mb-4 border border-blue-100">
            Client Success & Proof
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
            Trusted by Businesses That <br className="hidden sm:inline" />
            <span className="text-blue-600">Want to Grow.</span>
          </h2>

          <p className="text-slate-600 text-base sm:text-lg lg:text-xl mt-6 font-normal max-w-3xl mx-auto leading-relaxed">
            See how HB GrowthSyncro has helped local businesses build brand trust, dominate local search visibility, and generate consistent customer enquiries.
          </p>
        </div>

        {/* GOOGLE RATING CALLOUT CARD */}
        <div className="bg-slate-900 text-white rounded-[28px] p-8 sm:p-12 mb-16 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 shrink-0">
              <FcGoogle className="w-12 h-12" />
            </div>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
                <StarRating count={5} />
                <span className="text-sm font-bold text-amber-400">4.9 / 5.0</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">
                Google Verified Business Partner
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Based on 20+ verified five-star client reviews across local business domains.
              </p>
            </div>
          </div>

          <div className="relative z-10 shrink-0 flex items-center gap-3 bg-white/5 px-6 py-3.5 rounded-2xl border border-white/10">
            <FiCheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-semibold text-slate-200">
              100% Authentic Feedback
            </span>
          </div>
        </div>

        {/* STATISTICS METRICS ROW */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 lg:mb-24">
          <div className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center flex flex-col justify-center">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">50+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Projects Deployed</span>
          </div>

          <div className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center flex flex-col justify-center">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">20+</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Businesses Scaled</span>
          </div>

          <div className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center flex flex-col justify-center">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">98%</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Client Satisfaction</span>
          </div>

          <div className="p-8 rounded-[24px] bg-slate-50 border border-slate-100 text-center flex flex-col justify-center">
            <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">5★</span>
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Average Rating</span>
          </div>
        </div>

        {/* TESTIMONIALS GRID (STATIC 6-CARD GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 lg:mb-28">
          {testimonialsData.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* FINAL CONVERSION CTA */}
        <div className="relative bg-slate-900 rounded-[24px] p-8 sm:p-14 lg:p-16 overflow-hidden shadow-2xl text-center lg:text-left flex flex-col lg:flex-row items-center justify-between gap-10 border border-slate-800">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
              Ready to Start Your Next Success Story?
            </h3>
            <p className="text-slate-400 text-base sm:text-lg mt-4 font-normal leading-relaxed">
              Let's build a website and digital presence that helps your business attract more customers and create lasting trust.
            </p>
          </div>

          <div className="relative z-10 shrink-0 flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto">
            <a
              href="https://wa.me/918080224138?text=Hi%20HB%20Digital,%20I'd%20like%20to%20book%20a%20free%20growth%20consultation"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-base transition-colors shadow-lg shadow-blue-600/25 group"
            >
              <span>Book Free Consultation</span>
              <FiArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-semibold text-base transition-colors"
            >
              View Portfolio
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSection;