import React from "react";
import { FiShield, FiFileText } from "react-icons/fi";

const TermsAndConditions = () => {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 bg-slate-50 min-h-screen font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-4">
            <FiShield className="w-3.5 h-3.5" /> Clear Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Last updated: August 2026 • Governing all services and content on hbgrowthsyncro.in
          </p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Using Our Website</h2>
            <p>
              Welcome to HB GrowthSyncro. By visiting our site, reading our articles, or using our interactive tools, you agree to these simple terms. If you don't agree with them, please feel free to close the tab and stop using the website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. Development Services &amp; Code Ownership</h2>
            <p className="mb-3">
              We design and build custom websites, local SEO frameworks, and conversion funnels. Before starting any project, we agree with you on the exact scope, timeline (typically 5 to 7 days for standard builds), and price upfront.
            </p>
            <p>
              Once your project is completed and the final invoice is cleared, <strong>you own 100% of your website code, domain, and assets</strong>. We believe in total client independence—no hidden lock-in fees or surprise monthly software charges.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Interactive Tools &amp; Calculators</h2>
            <p>
              Our free tools (such as the ROI calculator and SEO meta generator) are provided to help you plan and estimate your growth. While they are built using realistic conversion averages, they are for guidance and educational purposes. Search engines update their ranking factors frequently, so individual business results will vary based on your local market.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Intellectual Property</h2>
            <p>
              The original written articles, guides, custom graphics, and code samples created by HB GrowthSyncro belong to us. Feel free to read, learn from, and share them with attribution, but please do not scrape, copy, or republish our content wholesale on other websites.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. Third-Party Links &amp; Ads</h2>
            <p>
              Our pages contain links to external websites, including affiliate products, third-party software, and Google AdSense ad units. While we only link to reliable sources, we cannot control external websites or changes made to their products, pricing, or terms after we link to them.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Fair Use &amp; Liability</h2>
            <p>
              We put a lot of care into engineering fast, secure, and reliable websites. However, we cannot be held legally liable for third-party hosting server outages, external Google algorithm changes, or internet connectivity issues outside our direct technical control.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">7. Get In Touch</h2>
            <p>
              Have a question about these terms or need clarification on a project agreement? Feel free to reach out directly:
            </p>
            <div className="mt-3 p-5 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="font-bold text-slate-900">HB GrowthSyncro</p>
              <p className="text-sm text-slate-600 mt-1">Location: Maharashtra, India</p>
              <p className="text-sm text-slate-600">Email: hbgrowthsyncro@gmail.com</p>
              <p className="text-sm text-slate-600">Phone: +91 8080224138</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsAndConditions;