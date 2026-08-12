import React from "react";
import { Link } from "react-router-dom";
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
    <footer className="bg-slate-50 text-slate-700 pt-16 pb-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* BRAND INFO */}
        <div className="space-y-4">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="HB GrowthSyncro"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            HB GrowthSyncro is a leading Digital Growth Partner in Maharashtra,
            India. We build high-converting websites, custom software, and
            automated lead funnels for business growth.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex items-center gap-3 pt-2">
            <a
              href="https://wa.me/918080224138"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-sm" />
            </a>

            <a
              href="https://www.instagram.com/hbgrowthsyncro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
              aria-label="Instagram"
            >
              <FaInstagram className="text-sm" />
            </a>

            <a
              href="https://www.linkedin.com/company/hbgrowthsyncro/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 border border-slate-200 shadow-sm"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="text-sm" />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 inline-block">
            Quick Links
          </h3>

          <ul className="space-y-2 text-xs sm:text-sm pt-1">
            <li>
              <Link
                to="/"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                About Us
              </Link>
            </li>

            <li>
              <Link
                to="/services"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                Services
              </Link>
            </li>

            <li>
              <Link
                to="/portfolio"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                Portfolio
              </Link>
            </li>

            <li>
              <Link
                to="/pricing"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                Pricing
              </Link>
            </li>

            <li>
              <Link
                to="/blog"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                Blog
              </Link>
            </li>

            <li>
              <Link
                to="/faq"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                FAQ
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-blue-600 transition-colors flex items-center gap-1.5"
              >
                <span className="text-blue-600 text-xs">›</span>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* WORKING HOURS */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 inline-block">
            Working Hours
          </h3>

          <ul className="space-y-2 text-xs sm:text-sm text-slate-600 pt-1">
            <li className="flex justify-between border-b border-slate-200 pb-1.5 gap-4">
              <span>Mon - Sat:</span>
              <span className="text-blue-600 font-semibold text-right">
                10:00 AM - 7:00 PM
              </span>
            </li>

            <li className="flex justify-between gap-4">
              <span>Sunday:</span>
              <span className="text-rose-600 font-semibold">Closed</span>
            </li>
          </ul>
        </div>

        {/* CONTACT INFO */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1.5 inline-block">
            Contact Us
          </h3>

          <ul className="space-y-3 text-xs sm:text-sm text-slate-600 pt-1">
            {/* PHONE */}
            <li className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                <FaPhoneAlt className="text-xs" />
              </div>

              <a
                href="tel:+918080224138"
                className="hover:text-blue-600 transition font-medium"
              >
                +91 8080224138
              </a>
            </li>

            {/* EMAIL */}
            <li className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                <FaEnvelope className="text-xs" />
              </div>

              <a
                href="mailto:hbgrowthsyncro@gmail.com"
                className="hover:text-blue-600 transition font-medium break-all"
              >
                hbgrowthsyncro@gmail.com
              </a>
            </li>

            {/* WEBSITE */}
            <li className="flex items-center gap-2.5">
              <div className="p-2 rounded bg-blue-50 text-blue-600 border border-blue-100 shrink-0">
                <FaGlobe className="text-xs" />
              </div>

              <a
                href="https://hbgrowthsyncro.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition font-medium break-all"
              >
                hbgrowthsyncro.in
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* COPYRIGHT BOTTOM BAR */}
      <div className="mt-12 pt-6 border-t border-slate-200 text-center text-xs text-slate-500 max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>
          Copyright © 2026{" "}
          <span className="text-slate-900 font-bold">HB GrowthSyncro</span>,
          India. All Rights Reserved.
        </p>

        <p className="text-[11px] text-blue-600 font-medium">
          Web Design, Development & Digital Marketing Agency
        </p>
      </div>
    </footer>
  );
};

export default Footer;