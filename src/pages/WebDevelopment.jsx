import React from 'react';

export default function WebDevelopment() {
  const whatsappBase = "https://wa.me/918080224138?text=";

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-blue-500">
          Custom Web Development & Software Engineering Services
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          We build lightning-fast React and Next.js web applications engineered to convert visitors into paying clients.
        </p>
        
        {/* Technologies Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'TypeScript', 'PostgreSQL'].map((tech) => (
            <span key={tech} className="bg-slate-800 border border-blue-500/30 text-blue-400 px-4 py-1.5 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing Tiers */}
      <h2 className="text-3xl font-bold text-center mb-10">Transparent Service Packages</h2>
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Starter */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">High-Converting Landing Page</h3>
            <p className="text-3xl font-extrabold text-blue-400 mb-4">₹14,999 <span className="text-sm text-slate-400 font-normal">/ project</span></p>
            <p className="text-sm text-slate-400 mb-6">Delivery Time: <strong>5 - 7 Days</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Single Page React/Next.js Build</li>
              <li>✓ Mobile Responsive & Fast Load Speed</li>
              <li>✓ WhatsApp & Lead Form Integration</li>
              <li>✓ Basic SEO Setup</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I'm interested in the Landing Page Package.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Landing Page Package via WhatsApp"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* Growth (Highlighted) */}
        <div className="bg-slate-800 border-2 border-blue-500 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-4 py-1 rounded-full uppercase">
            Most Popular
          </span>
          <div>
            <h3 className="text-2xl font-bold mb-2">Full Business Web Portal</h3>
            <p className="text-3xl font-extrabold text-blue-400 mb-4">₹34,999 <span className="text-sm text-slate-400 font-normal">/ project</span></p>
            <p className="text-sm text-slate-400 mb-6">Delivery Time: <strong>10 - 14 Days</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Up to 10 Custom Dynamic Pages</li>
              <li>✓ CMS / Admin Panel Integration</li>
              <li>✓ Advanced Technical SEO & Schema Markup</li>
              <li>✓ Payment Gateway Integration</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I'm interested in the Business Web Portal Package.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Business Web Portal Package via WhatsApp"
            className="block text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* Enterprise */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Custom SaaS / Web Application</h3>
            <p className="text-3xl font-extrabold text-blue-400 mb-4">₹79,999+ <span className="text-sm text-slate-400 font-normal">/ custom</span></p>
            <p className="text-sm text-slate-400 mb-6">Delivery Time: <strong>3 - 6 Weeks</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Full-Stack Application Architecture</li>
              <li>✓ Database & Custom API Backend</li>
              <li>✓ User Authentication & Dashboard</li>
              <li>✓ 30 Days Maintenance & Support</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I need a Custom Web Application consultation.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Custom Web Application consultation via WhatsApp"
            className="block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}