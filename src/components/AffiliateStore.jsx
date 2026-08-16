import React, { useState, useMemo } from "react";
import { FiExternalLink, FiFilter, FiTrendingUp, FiShoppingCart, FiInfo } from "react-icons/fi";

// =========================================================
// AFFILIATE PRODUCTS DATA (THOROUGH, HUMAN-WRITTEN REVIEWS)
// =========================================================
const products = [
  // --- TECH & GAMING ---
  {
    id: 1,
    name: "Logitech G502 HERO High-Precision Gaming Mouse",
    category: "Gaming & Tech",
    description: "Equipped with the HERO 25K optical sensor, customizable mechanical weights, and 11 programmable macro keys. It delivers tracking accuracy for fast-paced titles like BGMI while providing ergonomic hand support during long code navigation sprints.",
    image: "https://m.media-amazon.com/images/I/61LaIVlVOwL._SY355_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B046pLqc8" },
      { name: "Option 2", url: "https://link.amazon/B01eQWWJV" },
      { name: "Option 3", url: "https://link.amazon/B0aJZAu42" }
    ]
  },
  {
    id: 2,
    name: "Active Noise-Cancelling Wireless Headphones",
    category: "Gaming & Tech",
    description: "Features multi-mic active noise cancellation, low-latency Bluetooth connectivity, and soft memory foam ear cushions. Filters ambient office chatter and keyboard clicks, allowing deep focus during engineering tasks and competitive gameplay.",
    image: "https://m.media-amazon.com/images/I/51vUMenoNkL._SY355_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B01sF4iwt" },
      { name: "Option 2", url: "https://link.amazon/B0cNn3It1" },
      { name: "Option 3", url: "https://link.amazon/B0d27rZfk" },
      { name: "Option 4", url: "https://link.amazon/B06ceCu6c" }
    ]
  },
  {
    id: 3,
    name: "Logitech G920 Dual-Motor Force Feedback Racing Wheel",
    category: "Gaming & Tech",
    description: "Engineered with dual-motor force feedback, helical gearing for quiet steering, and stainless steel paddle shifters. Delivers realistic tire traction feedback and responsive pedal control across simulation racing titles like Forza Horizon.",
    image: "https://m.media-amazon.com/images/I/61-wBu7oM8L._SX679_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B0dVaxuRI" },
      { name: "Option 2", url: "https://link.amazon/B076IPA5i" }
    ]
  },
  {
    id: 4,
    name: "Ultra-Wide High-Refresh Productivity Monitors",
    category: "Dev Workspace",
    description: "Color-accurate IPS panels with high refresh rates and minimal bezels. Offers extensive display real estate to keep IDE code editors, active terminal logs, and live browser previews open simultaneously without tab switching.",
    image: "https://m.media-amazon.com/images/I/717Gbg9wlgL._SX425_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B0i9ky6bH" },
      { name: "Option 2", url: "https://link.amazon/B0iiMccWL" }
    ]
  },

  // --- WORKSPACE & DESK ---
  {
    id: 5,
    name: "Heavy-Duty Dual Monitor & Laptop Gas-Spring Desk Mount",
    category: "Dev Workspace",
    description: "Full-motion mechanical gas spring arm supporting dual screens with 360-degree rotation and integrated cable routing channels. Clears desktop footprint and elevates displays to natural eye level to prevent cervical strain.",
    image: "https://m.media-amazon.com/images/I/71cLrzMo5iL._SX355_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "View Mount", url: "https://link.amazon/B0cMi6ABP" }
    ]
  },
  {
    id: 6,
    name: "Anti-Glare Blue-Light Blocking Computer Glasses",
    category: "Dev Workspace",
    description: "Multi-layered anti-reflective lenses engineered to filter high-energy blue-violet light spectrums emitted by digital screens. Reduces ocular fatigue and tension headaches during long development sprints.",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B0aWCqN2B" },
      { name: "Option 2", url: "https://link.amazon/B0eSfOLkr" }
    ]
  },
  {
    id: 7,
    name: "High-Back Ergonomic Office Chair with Dynamic Lumbar Support",
    category: "Dev Workspace",
    description: "Features breathable mesh upholstery, multi-directional 3D armrests, and self-adjusting lumbar support. Promotes healthy spine alignment and comfortable weight distribution during 8+ hour workdays.",
    image: "https://m.media-amazon.com/images/I/81NwxO+jq-L._SX425_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "View Chair", url: "https://link.amazon/B08uKeljn" }
    ]
  },
  {
    id: 8,
    name: "Steel-Frame High-Density Foam Gaming Chair",
    category: "Gaming & Tech",
    description: "Heavy-duty steel framework with molded cold-cure foam and adjustable recline up to 160 degrees. Delivers robust lateral support for long gaming sessions and intense production deadlines.",
    image: "https://m.media-amazon.com/images/I/71tjo83uEOL._SX425_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "View Chair", url: "https://link.amazon/B02L9cIad" }
    ]
  },

  // --- MOTORCYCLE & RIDING ---
  {
    id: 9,
    name: "Vibration-Dampening Metal Handlebar Phone Mount",
    category: "Moto & Riding",
    description: "Constructed with CNC aluminum and elastomeric vibration dampeners that protect smartphone camera sensors from high-frequency engine resonance. Ensures secure, clear GPS line-of-sight across rough highways.",
    image: "https://m.media-amazon.com/images/I/51VwTNsumGL.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B0iAwTXeQ" },
      { name: "Option 2", url: "https://link.amazon/B0iUpOfvB" }
    ]
  },
  {
    id: 10,
    name: "4K 60FPS Weatherproof Action Camera",
    category: "Moto & Riding",
    description: "Compact action camera featuring electronic image stabilization, horizon leveling, and high-bitrate video capture. Records ultra-smooth ride footage, scenery, and road trips in high resolution.",
    image: "https://m.media-amazon.com/images/I/61dUvabnSmL._SL1500_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B032Xyc0L" },
      { name: "Option 2", url: "https://link.amazon/B04Qo2JIv" }
    ]
  },
  {
    id: 11,
    name: "Reinforced Leather & Carbon Knuckle Motorcycle Gloves",
    category: "Moto & Riding",
    description: "Abrasion-resistant full-grain leather paired with molded carbon knuckle protectors and silicone palm grips. Provides tactile lever control for smooth gear shifting alongside essential impact protection.",
    image: "https://m.media-amazon.com/images/I/51+L+CkgR3L._AC_UL480_FMwebp_QL65_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Rynox Gloves", url: "https://link.amazon/B0ejNQc0s" },
      { name: "Royal Enfield", url: "https://link.amazon/B0fcD7vqQ" }
    ]
  },
  {
    id: 12,
    name: "Long-Range Helmet Bluetooth Intercom & Sound System",
    category: "Moto & Riding",
    description: "Universal helmet intercom system with DSP noise reduction and high-fidelity audio drivers. Allows clear rider-to-passenger communication, step-by-step GPS audio navigation, and hands-free calling on open highways.",
    image: "https://m.media-amazon.com/images/I/61U3A3cwuyL._AC_UL960_FMwebp_QL65_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Option 1", url: "https://link.amazon/B0316vCBb" },
      { name: "Option 2", url: "https://link.amazon/B0fBkb6Jo" }
    ]
  },

  // --- PROFESSIONAL STYLE & GROOMING ---
  {
    id: 13,
    name: "Matte-Finish Styling Hair Wax & Grooming Care Kits",
    category: "Style & Grooming",
    description: "Formulated with natural clays and essential oils for a strong, reworkable hold without oily residue. Keeps hairstyles neat, structured, and professional throughout commutes and client meetings.",
    image: "https://m.media-amazon.com/images/I/71BT5Y6z4oL._SL1500_.jpg?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Beardo Wax", url: "https://link.amazon/B05MviYlg" },
      { name: "Ustraa Kit", url: "https://link.amazon/B0cRdYtar" }
    ]
  },
  {
    id: 14,
    name: "Breathable Smart-Casual Tailored Blazer & Stretch Chinos",
    category: "Style & Grooming",
    description: "Lightweight, wrinkle-resistant fabrics tailored for modern office and corporate presentation settings. Delivers a clean, professional aesthetic that balances all-day comfort with a sharp silhouette.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFmDpLUTpqy4vD8lTF_ZIT6mfyQFcpJTIg0teGDS5P6g&s=10?auto=format&fit=crop&w=600&q=80",
    links: [
      { name: "Blazer", url: "https://link.amazon/B0eOYFDuj" },
      { name: "Chinos", url: "https://link.amazon/B0519kmhE" }
    ]
  }
];

const categories = ["All", "Dev Workspace", "Gaming & Tech", "Moto & Riding", "Style & Grooming"];

const AffiliateStore = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="py-16 bg-slate-50 min-h-screen font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <FiTrendingUp className="w-3.5 h-3.5" /> Curated Recommendations
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            My Workspace Gear & <span className="text-blue-600">Daily Essentials</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            A tested and curated collection of hardware, ergonomic workstation tools, riding gear, and professional essentials that deliver real reliability and long-term durability.
          </p>
        </div>

        {/* Affiliate Disclosure Notice (AdSense & Regulatory Compliance) */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-start gap-3">
          <FiInfo className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
          <p className="text-xs text-slate-500 leading-relaxed">
            <strong>Transparency Notice:</strong> This curated catalog contains affiliate product links. If you purchase through these links, we may receive a commission at no additional cost to you. We only feature products and tools that meet high standards of build quality, performance, and everyday utility.
          </p>
        </div>

        {/* Filter Categories */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <div className="hidden sm:flex items-center gap-2 mr-2 text-slate-400 font-medium text-sm">
            <FiFilter className="w-4 h-4" /> Filter:
          </div>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-sm cursor-pointer ${
                activeCategory === category
                  ? "bg-blue-600 text-white shadow-blue-600/30 scale-105"
                  : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:bg-blue-50"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="bg-white rounded-[24px] overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="aspect-[4/3] overflow-hidden bg-slate-100 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-md text-slate-900 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                  {product.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                  {product.description}
                </p>

                {/* Multiple Links Rendered Here */}
                <div className="mt-auto pt-5 border-t border-slate-100">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                    Available Options:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {product.links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer sponsored"
                        aria-label={`View deal for ${product.name} - ${link.name}`}
                        className="flex-1 min-w-[45%] inline-flex justify-center items-center gap-1.5 bg-slate-900 hover:bg-blue-600 text-white px-3 py-2.5 rounded-xl text-xs font-bold transition-colors shadow-sm shadow-slate-900/10 group-hover:shadow-blue-600/30"
                      >
                        {link.name}
                        <FiShoppingCart className="w-3.5 h-3.5" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <p className="text-slate-500 text-lg font-medium">No products found in this category.</p>
          </div>
        )}

        {/* Bottom Educational / Buying Guidelines */}
        <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-slate-900 mb-3">
            Our Hardware & Gear Evaluation Process
          </h2>
          <p className="text-sm text-slate-600 leading-relaxed mb-4">
            Every product showcased across these categories is evaluated based on real engineering, comfort, and day-to-day durability benchmarks. We prioritize ergonomic support to minimize work-related physical strain, robust build quality, and verified compatibility across modern operating platforms.
          </p>
          <p className="text-xs text-slate-500">
            Prices and stock availability are subject to change on merchant sites. Always verify technical specifications with your current workspace or vehicle setup prior to purchase.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AffiliateStore;