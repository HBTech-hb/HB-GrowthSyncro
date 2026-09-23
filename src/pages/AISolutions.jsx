import React from 'react';

export default function AISolutions() {
  const whatsappBase = "https://wa.me/918080224138?text=";

  return (
    <div className="min-h-screen bg-slate-900 text-white px-6 py-16 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-400">
          AI Marketing Automation & Custom Workflow Solutions
        </h1>
        <p className="text-lg text-slate-300 mb-8">
          Automate repetitive customer support, lead routing, and content delivery using custom AI agents and workflow automation tools.
        </p>

        {/* Technologies Badges */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {['Python', 'OpenAI API', 'LangChain', 'n8n', 'Zapier', 'Pinecone Vector DB'].map((tech) => (
            <span key={tech} className="bg-slate-800 border border-emerald-500/30 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Pricing Tiers */}
      <h2 className="text-3xl font-bold text-center mb-10">AI Implementation Tiers</h2>
      <div className="grid md:grid-cols-3 gap-8">
        
        {/* Tier 1 */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">WhatsApp AI Assistant</h3>
            <p className="text-3xl font-extrabold text-emerald-400 mb-4">₹19,999 <span className="text-sm text-slate-400 font-normal">/ setup</span></p>
            <p className="text-sm text-slate-400 mb-6">Delivery Time: <strong>5 Days</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ 24/7 Automated WhatsApp Chatbot</li>
              <li>✓ Knowledge Base Training on Your Data</li>
              <li>✓ Lead Capture & Instant Notification</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I am interested in the WhatsApp AI Assistant package.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book WhatsApp AI Assistant package via WhatsApp"
            className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* Tier 2 */}
        <div className="bg-slate-800 border-2 border-emerald-500 rounded-2xl p-8 flex flex-col justify-between relative shadow-2xl">
          <div>
            <h3 className="text-2xl font-bold mb-2">Workflow & CRM Automation</h3>
            <p className="text-3xl font-extrabold text-emerald-400 mb-4">₹39,999 <span className="text-sm text-slate-400 font-normal">/ setup</span></p>
            <p className="text-sm text-slate-400 mb-6">Delivery Time: <strong>10 Days</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Automated Lead Sync to CRM/Google Sheets</li>
              <li>✓ Automated Email & Follow-up Funnels</li>
              <li>✓ Custom n8n/Zapier Automation Pipeline</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I need Workflow & CRM Automation for my business.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Workflow & CRM Automation package via WhatsApp"
            className="block text-center bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

        {/* Tier 3 */}
        <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-2">Enterprise AI Integration</h3>
            <p className="text-3xl font-extrabold text-emerald-400 mb-4">₹89,999+ <span className="text-sm text-slate-400 font-normal">/ project</span></p>
            <p className="text-sm text-slate-400 mb-6">Delivery Time: <strong>3 - 5 Weeks</strong></p>
            <ul className="space-y-3 text-slate-300 mb-8">
              <li>✓ Private LLM & Fine-Tuned AI Models</li>
              <li>✓ Custom Internal Agent Software</li>
              <li>✓ Full Database & API Integration</li>
            </ul>
          </div>
          <a
            href={`${whatsappBase}${encodeURIComponent("Hi HB GrowthSyncro, I need custom Enterprise AI Integration.")}`}
            target="_blank"
            rel="noreferrer"
            aria-label="Book Enterprise AI Integration consultation via WhatsApp"
            className="block text-center bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Book via WhatsApp
          </a>
        </div>

      </div>
    </div>
  );
}