import React, { useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";

// Layout & Critical Components (Loaded Immediately for fast initial paint)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import Home from "./components/Home";
import TestimonialsSlider from "./components/TestimonialsSlider";

// Lazy-Loaded Public Routes (Drastically reduces initial JavaScript bundle size)
const About = lazy(() => import("./components/About"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio/portfolio"));
const Pricing = lazy(() => import("./components/Pricing"));
const Contact = lazy(() => import("./components/Contact"));
const Blog = lazy(() => import("./components/Blog"));
const AffiliateStore = lazy(() => import("./components/AffiliateStore"));
const FAQ = lazy(() => import("./components/FAQ"));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./components/TermsAndConditions"));

// Lazy-Loaded Admin Routes (Keeps heavy admin scripts out of public visitor bundles)
const AdminLogin = lazy(() => import("./admin/AdminLogin"));
const ProtectedRoute = lazy(() => import("./admin/ProtectedRoute"));
const AdminLayout = lazy(() => import("./components/AdminLayout"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const AdminProjects = lazy(() => import("./pages/AdminProjects"));
const LeadsPage = lazy(() => import("./pages/LeadsPage"));

// Lightweight Spinner Fallback for Route Navigation
const PageLoader = () => (
  <div className="flex justify-center items-center min-h-[60vh]">
    <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
  </div>
);

// Resets scroll position to the top when navigating between routes
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
    <Suspense fallback={<PageLoader />}>
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
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="leads" element={<LeadsPage />} />
          <Route path="projects" element={<AdminProjects />} />
        </Route>

        {/* ---------------- CATCH-ALL FALLBACK ---------------- */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
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