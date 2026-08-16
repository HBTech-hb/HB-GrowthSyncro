import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/WEBSITE-LOGO.png";

// 1. FontAwesome Icons (Fa)
import {
  FaHome,
  FaUser,
  FaServicestack,
  FaImage,
  FaPhone,
  FaArrowRight,
  FaBlog
} from "react-icons/fa";

// 2. Feather Icons (Fi) 
import {
  FiTool,
} from "react-icons/fi";

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "services", label: "Services", path: "/services" },
    { id: "portfolio", label: "Portfolio", path: "/portfolio" },
    { id: "pricing", label: "Pricing", path: "/pricing" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "toolkit", label: "Toolkit", path: "/toolkit" },
    { id: "faq", label: "FAQ", path: "/faq" },
  ];

  return (
    <>
      {/* ================= Mobile Top Header (Centered Logo Only) ================= */}
      <div className="md:hidden sticky top-0 z-[9999] px-4 py-2.5">
        <div
          className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 backdrop-blur-xl border flex items-center justify-center px-4 py-2 ${
            isScrolled
              ? "bg-white/90 shadow-lg border-gray-200"
              : "bg-white/70 border-white/50"
          }`}
        >
          {/* Centered Logo */}
          <Link to="/" aria-label="HB GrowthSyncro Home" className="flex items-center justify-center">
            <img
              src={logo}
              alt="HB GrowthSyncro Logo"
              className="h-10 w-auto object-contain transition-transform active:scale-95"
            />
          </Link>
        </div>
      </div>

      {/* ================= Desktop Header ================= */}
      <div className="hidden md:block sticky top-3 z-[9999] px-6 m-5">
        <nav
          className={`mx-auto max-w-5xl rounded-2xl transition-all duration-300 backdrop-blur-xl border ${
            isScrolled
              ? "bg-white/90 shadow-lg border-gray-200"
              : "bg-white/70 border-white/50"
          }`}
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto px-6 py-4">
            {/* Logo */}
            <Link to="/" aria-label="HB GrowthSyncro Home">
              <img
                src={logo}
                alt="HB GrowthSyncro Logo"
                className="h-12 w-auto object-contain transition duration-300"
              />
            </Link>

            {/* Desktop Links */}
            <ul className="flex items-center gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`relative font-medium transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-blue-600 font-semibold"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-blue-600"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="flex items-center gap-5">
              <Link
                to="/contact"
                aria-label="Navigate to Contact Page for Growth Plan"
                className="group flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Get Growth Plan
                <FaArrowRight className="transition group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </nav>
      </div>

      {/* ================= Mobile Bottom Floating Nav ================= */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[99990] w-auto max-w-[92vw]">
        <nav className="flex items-center justify-around gap-2 sm:gap-4 rounded-full border border-gray-200/80 bg-white/95 px-4 py-2.5 shadow-2xl backdrop-blur-xl">
          <Link
            to="/"
            className={`flex flex-col items-center text-[9px] font-semibold transition-colors ${
              activeSection === "home"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaHome className="text-sm mb-0.5" />
            Home
          </Link>

          <Link
            to="/about"
            className={`flex flex-col items-center text-[9px] font-semibold transition-colors ${
              activeSection === "about"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaUser className="text-sm mb-0.5" />
            About
          </Link>

          <Link
            to="/services"
            className={`flex flex-col items-center text-[9px] font-semibold transition-colors ${
              activeSection === "services"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaServicestack className="text-sm mb-0.5" />
            Services
          </Link>

          <Link
            to="/portfolio"
            className={`flex flex-col items-center text-[9px] font-semibold transition-colors ${
              activeSection === "portfolio"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaImage className="text-sm mb-0.5" />
            Portfolio
          </Link>

          <Link
            to="/blog"
            className={`flex flex-col items-center text-[9px] font-semibold transition-colors ${
              activeSection === "blog"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaBlog className="text-sm mb-0.5" />
            Blog
          </Link>
          
          <Link
            to="/toolkit"
            className={`flex flex-col items-center text-[9px] font-semibold transition-colors ${
              activeSection === "toolkit"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FiTool className="text-sm mb-0.5" />
            Toolkit
          </Link>

          <Link
            to="/contact"
            className={`flex flex-col items-center text-[9px] font-semibold transition-colors ${
              activeSection === "contact"
                ? "text-blue-600"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            <FaPhone className="text-sm mb-0.5" />
            Contact
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;