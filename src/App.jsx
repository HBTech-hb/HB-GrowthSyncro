import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Admin Components & Pages
import AdminLogin from "./admin/AdminLogin";
import ProtectedRoute from "./admin/ProtectedRoute";
import AdminLayout from "./components/AdminLayout";
import AdminDashboard from "./pages/AdminDashboard"; // Added import
import AdminProjects from "./pages/AdminProjects"; 

import LeadsPage from "./pages/LeadsPage";

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
import AffiliateStore from "./components/AffiliateStore";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import TestimonialsSlider from "./components/TestimonialsSlider";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsAndConditions from "./components/TermsAndConditions";

// Resets scroll position to the top when navigating between pages
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Public Website Layout Wrapper
const PublicLayout = ({ children }) => {
  const location = useLocation();
  const currentPath = location.pathname.replace("/", "") || "home";

  return (
    <div className="font-poppins flex flex-col min-h-screen">
      <ScrollToTop />
      <Navbar activeSection={currentPath} />
      <main className="flex-grow">{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const MainContent = () => {
  return (
    <Routes>
      {/* ---------------- PUBLIC ROUTES ---------------- */}
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
            <TestimonialsSlider />
          </PublicLayout>
        }
      />
      <Route
        path="/about"
        element={
          <PublicLayout>
            <About />
          </PublicLayout>
        }
      />
      <Route
        path="/services"
        element={
          <PublicLayout>
            <Services />
          </PublicLayout>
        }
      />
      <Route
        path="/portfolio"
        element={
          <PublicLayout>
            <Portfolio />
          </PublicLayout>
        }
      />
      <Route
        path="/pricing"
        element={
          <PublicLayout>
            <Pricing />
          </PublicLayout>
        }
      />
      <Route
        path="/blog"
        element={
          <PublicLayout>
            <Blog />
          </PublicLayout>
        }
      />
      <Route
        path="/toolkit"
        element={
          <PublicLayout>
            <AffiliateStore />
          </PublicLayout>
        }
      />
      <Route
        path="/faq"
        element={
          <PublicLayout>
            <FAQ />
          </PublicLayout>
        }
      />
      <Route
        path="/contact"
        element={
          <PublicLayout>
            <Contact />
          </PublicLayout>
        }
      />
      <Route
        path="/privacy-policy"
        element={
          <PublicLayout>
            <PrivacyPolicy />
          </PublicLayout>
        }
      />
      <Route
        path="/terms-and-conditions"
        element={
          <PublicLayout>
            <TermsAndConditions />
          </PublicLayout>
        }
      />

      {/* ---------------- ADMIN ROUTES ---------------- */}
      <Route path="/admin/login" element={<AdminLogin />} />

      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminLayout />
          </ProtectedRoute>
        }
      >
        {/* Default /admin redirect */}
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        
        {/* Protected Dashboard & Leads routes */}
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="leads" element={<LeadsPage />} />
        <Route path="projects" element={<AdminProjects />} />
      </Route>

      {/* ---------------- CATCH-ALL FALLBACK ---------------- */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
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