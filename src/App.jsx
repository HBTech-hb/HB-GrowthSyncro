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

// Resets scroll position to top when navigating between routes
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Dynamic SEO Engine: Updates document title, description, and OpenGraph tags per route
const SEOPageTitle = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageData = {
      "/": {
        title: "HB GrowthSyncro | Web Engineering, AI Solutions & SEO Agency",
        description:
          "HB GrowthSyncro builds high-converting web applications, automated AI growth funnels, organic SEO systems, and custom software.",
      },
      "/about": {
        title: "About Us | HB GrowthSyncro - Digital Growth & Engineering",
        description:
          "Learn about HB GrowthSyncro, our mission, technical architecture, and how we help businesses scale online without physical limits.",
      },
      "/services": {
        title: "Services | Web Development, SEO, AI Automation & Branding",
        description:
          "Explore our full suite of digital solutions: Custom React Engineering, Search Engine Optimization, AI Lead Workflows, and Brand Graphic Design.",
      },
      "/portfolio": {
        title: "Portfolio & Work Showcase | HB GrowthSyncro",
        description:
          "Browse our portfolio of high-performance web applications, brand identities, SEO rankings, and software engineering projects.",
      },
      "/pricing": {
        title: "Packages & Pricing | HB GrowthSyncro Web Engineering",
        description:
          "Transparent pricing plans for website development, SEO campaigns, AI automation, and ongoing retainer support.",
      },
      "/blog": {
        title: "Digital Growth & Web Tech Blog | HB GrowthSyncro",
        description:
          "Read insights, guides, and trends on modern web development, local & national SEO tactics, AI systems, and conversion optimization.",
      },
      "/toolkit": {
        title: "Digital Growth Toolkit & Recommended Tech | HB GrowthSyncro",
        description:
          "Explore curated tools, AI platforms, hosting software, and tech stack recommendations to supercharge your online business.",
      },
      "/faq": {
        title: "Frequently Asked Questions | HB GrowthSyncro",
        description:
          "Get clear answers regarding project delivery timelines, SEO ranking expectations, source code ownership, and AI integrations.",
      },
      "/contact": {
        title: "Contact Us | HB GrowthSyncro Strategy Consultation",
        description:
          "Connect directly with our engineering team via WhatsApp, phone, or inquiry form to start your web or SEO project today.",
      },
      "/privacy-policy": {
        title: "Privacy Policy | HB GrowthSyncro",
        description: "Official privacy policy and data security commitments of HB GrowthSyncro.",
      },
      "/terms-and-conditions": {
        title: "Terms & Conditions | HB GrowthSyncro",
        description: "Official terms of service and website usage agreement for HB GrowthSyncro.",
      },
    };

    const current = pageData[pathname] || {
      title: "HB GrowthSyncro | Web Engineering & AI Solutions",
      description:
        "High-converting websites, custom software, AI marketing funnels, and search growth engines.",
    };

    // Update document title
    document.title = current.title;

    // Update meta description tag dynamically
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", current.description);
    }

    // Update Open Graph tags for social sharing preview
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", current.title);

    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", current.description);
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
      <SEOPageTitle />
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