import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Floating Action Component
import FloatingWhatsApp from "./components/FloatingWhatsApp";

// Layout & Page Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio/portfolio";
import Pricing from "./components/Pricing";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import TestimonialsSlider from "./components/TestimonialsSlider";

// Resets scroll position to the top when navigating between pages
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const MainContent = () => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "") || "home";

  return (
    <div className="font-poppins flex flex-col min-h-screen">
      {/* Scroll to top when changing routes */}
      <ScrollToTop />

      {/* Header Navigation */}
      <Navbar activeSection={currentPath} />

      {/* Main Routes */}
      <main className="flex-grow">
        <Routes>
          {/* Focused Home Landing Route */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <TestimonialsSlider />
              </>
            }
          />

          {/* Dedicated Sub-Pages */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />

          {/* Catch-all Fallback */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </div>
  );
};

function App() {
  return (
    <Router>
      <MainContent />
    </Router>
  );
}

export default App;