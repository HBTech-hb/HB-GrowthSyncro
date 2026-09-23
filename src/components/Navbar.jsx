import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/WEBSITE-LOGO.png";

// Icons
import {
  FaHome,
  FaServicestack,
  FaImage,
  FaPhone,
  FaBars,
  FaTimes,
  FaUser,
  FaBlog,
  FaQuestionCircle,
  FaTags,
} from "react-icons/fa";
import { FiTool } from "react-icons/fi";

const Navbar = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const primaryMobileNav = [
    { id: "home", label: "Home", path: "/", icon: <FaHome /> },
    { id: "services", label: "Services", path: "/services", icon: <FaServicestack /> },
    { id: "portfolio", label: "Portfolio", path: "/portfolio", icon: <FaImage /> },
    { id: "contact", label: "Contact", path: "/contact", icon: <FaPhone /> },
  ];

  const drawerNavItems = [
    { id: "about", label: "About Us", path: "/about", icon: <FaUser /> },
    { id: "pricing", label: "Pricing", path: "/pricing", icon: <FaTags /> },
    { id: "blog", label: "Blog", path: "/blog", icon: <FaBlog /> },
    { id: "toolkit", label: "Toolkit", path: "/toolkit", icon: <FiTool /> },
    { id: "faq", label: "FAQ", path: "/faq", icon: <FaQuestionCircle /> },
  ];

  const desktopNavItems = [
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
      {/* ================= Mobile Centered Sticky Header ================= */}
      <div className="md:hidden sticky top-0 z-[9999] px-7 pt-4">
        <div
          className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ease-in-out backdrop-blur-xl border flex items-center justify-center px-4 ${isScrolled
            ? "bg-white/95 shadow-lg border-slate-200/80 py-2"
            : "bg-white/70 border-white/50 py-3"
            }`}
        >
          <Link to="/" aria-label="HB GrowthSyncro Home" className="flex items-center justify-center">
            <img
              src={logo}
              alt="HB GrowthSyncro Logo"
              width="152"
              height="40"
              style={{ aspectRatio: '152/40' }}
              className="w-[152px] h-[40px] object-contain transition-all duration-300 ease-in-out origin-center"
              fetchpriority="high"
            />
          </Link>
        </div>
      </div>

      {/* ================= Desktop Header ================= */}
      <header className="hidden md:block sticky top-3 z-[9999] px-6 my-3">
        <nav
          className={`mx-auto max-w-5xl rounded-2xl transition-all duration-300 backdrop-blur-xl border ${isScrolled
            ? "bg-white/90 shadow-lg border-gray-200 py-3"
            : "bg-white/70 border-white/50 py-4"
            }`}
        >
          <div className="flex items-center justify-between max-w-4xl mx-auto px-6">
            <Link to="/" aria-label="HB GrowthSyncro Home" className="flex items-center">
              <img
                src={logo}
                alt="HB GrowthSyncro Logo"
                width="152"
                height="40"
                style={{ aspectRatio: '152/40' }}
                className="w-[152px] h-[40px] object-contain transition-all duration-300 ease-in-out origin-center"
                fetchpriority="high"
              />
            </Link>

            <ul className="flex items-center gap-5">
              {desktopNavItems.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`relative text-xs sm:text-sm font-medium transition-all duration-300 ${activeSection === item.id
                      ? "text-blue-600 font-semibold"
                      : "text-slate-700 hover:text-blue-600"
                      }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-blue-600"></span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              to="/contact"
              aria-label="Navigate to Contact Page"
              className="rounded-full bg-blue-600 px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg"
            >
              Get Growth Plan
            </Link>
          </div>
        </nav>
      </header>

      {/* ================= Mobile Bottom Floating Nav Bar ================= */}
      <div className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-[99990] w-[90%] max-w-md">
        <nav className="flex items-center justify-around rounded-full border border-slate-200/90 bg-white/95 px-3 py-2 shadow-xl backdrop-blur-xl">
          {primaryMobileNav.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              aria-label={`Navigate to ${item.label}`}
              className={`flex flex-col items-center justify-center text-[10px] font-semibold transition-all py-1 px-2 rounded-xl ${activeSection === item.id
                ? "text-blue-600 scale-105"
                : "text-slate-600 hover:text-slate-900"
                }`}
            >
              <span className="text-base mb-0.5">{item.icon}</span>
              <span>{item.label}</span>
            </Link>
          ))}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            className={`flex flex-col items-center justify-center text-[10px] font-semibold transition-all py-1 px-2 rounded-xl ${isMenuOpen ? "text-blue-600" : "text-slate-600"
              }`}
          >
            {isMenuOpen ? (
              <FaTimes className="text-base mb-0.5" />
            ) : (
              <FaBars className="text-base mb-0.5" />
            )}
            <span>More</span>
          </button>
        </nav>
      </div>

      {/* ================= Slide-Up Drawer for Additional Pages ================= */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 z-[99989] bg-slate-900/50 backdrop-blur-sm flex justify-center items-end pb-20 px-4">
          <div className="w-full max-w-md bg-white rounded-3xl p-5 shadow-2xl border border-slate-100 space-y-3">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                Explore Pages
              </span>
              <button
                onClick={() => setIsMenuOpen(false)}
                type="button"
                aria-label="Close menu"
                className="text-slate-500 p-1 hover:text-slate-700"
              >
                <FaTimes />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {drawerNavItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`Navigate to ${item.label}`}
                  className={`flex items-center gap-3 p-3 rounded-2xl text-xs font-medium border transition-all ${activeSection === item.id
                    ? "bg-blue-50 border-blue-200 text-blue-600 font-bold"
                    : "bg-slate-50/80 border-slate-100 text-slate-700 hover:bg-slate-100"
                    }`}
                >
                  <span className="text-blue-600 text-sm">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;