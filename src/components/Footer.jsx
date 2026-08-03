import React from "react";
import { Link } from "react-router-dom"; // <--- Added missing Link import
import logo from "../assets/logo/WEBSITE-LOGO.png";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* BRAND INFO */}
        <div className="space-y-4">
          <Link to="/">
            <img
              src={logo}
              alt="HB GrowthSyncro"
              className="h-10 w-auto object-contain brightness-200"
            />
          </Link>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            HB GrowthSyncro is a leading Digital Growth Partner in Maharashtra, India. We build high-converting websites, custom software, and automated lead funnels for business growth.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-400 transition-colors">
                Services
              </Link>
            </li>
            <li>
              <Link to="/portfolio" className="hover:text-blue-400 transition-colors">
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-blue-400 transition-colors">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-400 transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-blue-400 transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* WORKING HOURS */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Working Hours
          </h3>
          <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
            <li>Mon - Sat: 10:00 AM - 7:00 PM</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Contact Us
          </h3>
          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-500 text-xs shrink-0" />
              <a href="tel:+918080224138" className="hover:text-white transition">
                +91 8080224138
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500 text-xs shrink-0" />
              <a href="mailto:hbgrowthsyncro@gmail.com" className="hover:text-white transition">
                hbgrowthsyncro@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaGlobe className="text-blue-500 text-xs shrink-0" />
              <a
                href="https://hbgrowthsyncro.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                https://hbgrowthsyncro.in
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>Copyright © 2026 HB GrowthSyncro, India. All Rights Reserved.</p>
        <p className="text-[11px]">Web Design, Development & Digital Marketing Agency</p>
      </div>
    </footer>
  );
};

export default Footer;