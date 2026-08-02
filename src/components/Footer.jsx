import React from "react";
import logo from "../assets/logo/WEBSITE-LOGO.png"; // 👈 Your original logo path
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";

const Footer = () => {
  return (
    /* Added pb-28 for mobile screens so the floating navbar doesn't cover the copyright text */
    <footer className="bg-slate-50 text-slate-700 font-poppins border-t border-slate-200 pb-28 md:pb-0">
      
      {/* MAIN FOOTER CONTENT */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center lg:text-left">
          
          {/* COLUMN 1: LOGO & ABOUT */}
          <div className="flex flex-col items-center lg:items-start space-y-3">
            {/* Brand Logo */}
            <div className="flex items-center gap-2 mb-2">
              <img
                src={logo}
                alt="HB GrowthSyncro"
                className="h-10 w-auto object-contain"
              />
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              HB GrowthSyncro is the best Digital Growth Partner in Maharashtra, India. We offer complete IT & Marketing solutions under one floor!
            </p>

            {/* Contact Details */}
            <div className="pt-2 space-y-1 text-sm font-medium">
              <p className="text-slate-800 font-bold">
                <a href="tel:+918080224138" className="hover:text-blue-600 transition">
                  +91 8080224138
                </a>
              </p>
              <p>
                <a
                  href="https://hbdigital.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  www.hb-growth-syncro.vercel.app
                </a>
              </p>
              <p className="text-slate-600">
                <a href="mailto:bansodeharshad098@gmail.com" className="hover:text-blue-600 transition">
                  bansodeharshad098@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-bold text-blue-900 mb-6">Quick Links</h3>
            <ul className="space-y-2.5 text-sm font-medium text-slate-600">
              <li>
                <a href="#home" className="hover:text-blue-600 transition">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-600 transition">About</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition">Development</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition">E-Commerce</a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-600 transition">Marketing</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-600 transition">Contact</a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-600 transition">Our Work</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: WORKING HOURS */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-bold text-blue-900 mb-6">Working Hours</h3>
            <ul className="space-y-2 text-sm font-medium text-slate-600 list-disc list-inside text-left">
              <li>Mon : 10:00 am - 7.00 pm</li>
              <li>Tues : 10:00 am - 7.00 pm</li>
              <li>Wed : 10:00 am - 7.00 pm</li>
              <li>Thur : 10:00 am - 7.00 pm</li>
              <li>Fri : 10:00 am - 7.00 pm</li>
              <li>Sat : 10:00 am - 7.00 pm</li>
              <li>Sunday : Closed</li>
            </ul>
          </div>

          {/* COLUMN 4: SOCIAL MEDIA */}
          <div className="flex flex-col items-center lg:items-start">
            <h3 className="text-lg font-bold text-blue-900 mb-6">Social Media</h3>
            <div className="flex items-center gap-4 text-xl text-slate-800">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition transform hover:scale-110"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition transform hover:scale-110"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition transform hover:scale-110"
                aria-label="Twitter / X"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition transform hover:scale-110"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.linkedin.com/in/harshadbansode/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM COPYRIGHT STRIP */}
      <div className="border-t border-slate-200/80 py-6 text-center text-xs font-semibold text-slate-700 bg-slate-100/60">
        <p className="text-sm font-bold text-slate-800 mb-1">
          Copyright © {new Date().getFullYear()} HB GrowthSyncro, India
        </p>
        <p className="text-slate-500 font-normal">
          Web Design, Development & Digital Marketing Company - HB GrowthSyncro, India
        </p>
      </div>

    </footer>
  );
};

export default Footer;