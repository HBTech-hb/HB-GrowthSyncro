import React from "react";
import { FiLock, FiShield } from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <section className="py-16 sm:py-24 px-6 sm:px-10 bg-slate-50 min-h-screen font-sans text-slate-800">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        
        {/* Header */}
        <div className="border-b border-slate-200 pb-8 mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-100 mb-4">
            <FiLock className="w-3.5 h-3.5" /> Plain-English Policy
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            Last updated: August 2026 • Applies to HB GrowthSyncro (hbgrowthsyncro.in)
          </p>
        </div>

        <div className="space-y-8 text-slate-700 leading-relaxed text-sm sm:text-base">
          
          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">1. Who We Are &amp; What This Covers</h2>
            <p>
              We run HB GrowthSyncro, a web development and digital marketing service based in Maharashtra, India. We respect your personal data and treat it the way we would want our own treated. This policy explains what information we gather when you browse our site, get in touch, or use our tools, and exactly what we do with it.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">2. What Information We Collect</h2>
            <p className="mb-3">
              We only ask for details that we genuinely need to reply to your project inquiries or keep the site running smoothly:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-600">
              <li>
                <strong>Details You Send Us:</strong> Your name, phone number, email address, and project notes when you submit our contact form or start a chat with us on WhatsApp.
              </li>
              <li>
                <strong>Basic Technical Data:</strong> Standard server log entries like your browser type, device screen size, referring page, and anonymous traffic timestamps. None of this is used to identify you personally—it just helps us spot broken links and make pages load faster.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">3. Google Ads &amp; Cookies</h2>
            <p className="mb-3">
              We show third-party ads on this site via Google AdSense. Google uses cookies (including the DoubleClick DART cookie) to serve ads based on your visits to this website and other places on the web.
            </p>
            <p className="mb-3">
              If you prefer not to see personalized ads, you can easily turn them off by visiting Google's ad settings at:{" "}
              <a
                href="https://policies.google.com/technologies/ads"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline font-medium"
              >
                https://policies.google.com/technologies/ads
              </a>.
            </p>
            <p>
              These ad networks may automatically receive your IP address to measure how well an ad performs. We do not have direct control over the cookies used by third-party advertisers.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">4. Affiliate Links &amp; Recommendations</h2>
            <p className="mb-3">
              Across our blog, toolkit, and gear pages, we occasionally link to software, hosting providers, and hardware that we personally use or recommend. Some of these are affiliate links. If you choose to buy something through them, we may earn a small referral commission at no additional cost to you.
            </p>
            <p>
              These partner sites set their own tracking cookies to credit the referral. We never recommend products just for a payout—we only feature gear that provides real value.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">5. How We Handle &amp; Protect Your Data</h2>
            <p>
              We do not sell, rent, or trade your contact info to spammers or marketing brokers. The details you share with us stay between you and our development team so we can build your project and stay in touch. If you ever want us to delete your submitted messages or contact records, just send us a quick note and we will clear them out.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-slate-900 mb-3">6. Questions or Requests?</h2>
            <p>
              If you have any questions about this privacy notice or want to update any information you previously sent us, reach out directly:
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

export default PrivacyPolicy;