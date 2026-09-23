import React from 'react';

export default function LocalSEO() {
  const whatsappBase = "https://wa.me/918080224138?text=";

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          Local SEO & Google Business Profile Growth Services
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Dominate local search rankings, get listed in Google’s Map 3-Pack, and drive phone calls directly to your business.
        </p>

        {/* Toolset Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Google Business Profile', 'JSON-LD Schema', 'BrightLocal', 'Semrush', 'Ahrefs', 'GSC Optimization'].map((tool) => (
            <span key={tool} className="bg-slate-800 border border-purple-500/30 text-purple-400 px-4 py-1.5 rounded-full text-sm font-medium">
              {tool}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing Tiers */}
      <h2 className="text-3xl font-bold text-center mb-10">Monthly SEO Retainers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Tier 1 */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Local Growth Starter</h3>
            <p className="text-3xl font-extrabold text-purple-400 mb-4">₹11,999 <span className="text-sm text-slate-400 font-normal">/ month</span></p>
            <p className="text-sm text-slate-400 mb-6">Timeline: <strong>Ongoing Monthly</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Google Business Profile Optimization</li>
              <li>✓ Target 10 Local Keywords</li>
              <li>✓ Local Citation Submissions (20 Directory Listings)</li>
              <li>✓ Monthly Performance Report</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I want to start with Local SEO Starter package.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Local SEO Starter package via WhatsApp"
            className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* Tier 2 */}
        <div className="bg-slate-800 border-2 border-purple-500 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">Map Pack Dominator</h3>
            <p className="text-3xl font-extrabold text-purple-400 mb-4">₹24,999 <span className="text-sm text-slate-400 font-normal">/ month</span></p>
            <p className="text-sm text-slate-400 mb-6">Timeline: <strong>Ongoing Monthly</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ On-Page Technical SEO & Schema Fixes</li>
              <li>✓ Target 25 Hyper-Local Keywords</li>
              <li>✓ 4 Optimized Blog Articles / Month</li>
              <li>✓ Google Review Strategy & Map Optimization</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I want to get the Map Pack Dominator SEO package.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Map Pack Dominator package via WhatsApp"
            className="block text-center bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* Tier 3 */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">National & Scale SEO</h3>
            <p className="text-3xl font-extrabold text-purple-400 mb-4">₹49,999 <span className="text-sm text-slate-400 font-normal">/ month</span></p>
            <p className="text-sm text-slate-400 mb-6">Timeline: <strong>Ongoing Monthly</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Full On-Page & Off-Page Backlink Outreach</li>
              <li>✓ Unlimited Regional Keywords</li>
              <li>✓ Technical Speed & Core Web Vitals Optimization</li>
              <li>✓ Bi-weekly Strategy Calls</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I need Scale SEO for my business.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Scale SEO package via WhatsApp"
            className="block text-center bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}