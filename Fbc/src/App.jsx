import { useEffect, useRef, Suspense, lazy } from "react";
import "./App.css";
import { useTheme } from "./context/ThemeContext";
import { useLocation } from "react-router-dom";

// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Essential components (loaded immediately)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Lazy loaded components
const Hero = lazy(() => import("./components/Hero"));
const About = lazy(() => import("./pages/About"));
const CompanyLogo = lazy(() => import("./components/CompanyLogo"));
const PurposeSection = lazy(() => import("./components/PurposeSection"));
const FeaturesSection = lazy(() => import("./components/FeaturesSection"));
const ScheduleSection = lazy(() => import("./components/ScheduleSection"));
const MonitorSection = lazy(() => import("./components/MonitorSection"));
const PricingSection = lazy(() => import("./components/PricingSection"));
const ServicesSection = lazy(() => import("./components/ServicesSection"));
const TestimonialsSection = lazy(
  () => import("./components/TestimonialsSection"),
);
const NewsletterSection = lazy(() => import("./components/NewsletterSection"));
const NotFound = lazy(() => import("./components/NotFound"));
const Contact = lazy(() => import("./components/Contact"));
const FAQ = lazy(() => import("./components/FAQ"));

// Lazy loaded pages
const Partner = lazy(() => import("./pages/Partner"));
const Contibutors = lazy(() => import("./pages/Contibutors"));
const SupportCareer = lazy(() => import("./pages/SupportCareer"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicyPage"));
const CookiePolicyPage = lazy(() => import("./pages/CookiePolicyPage"));
const TermsOfUsePage = lazy(() => import("./pages/TermsOfUsePage"));
const ContributorGuide = lazy(() => import("./pages/ContributorGuide"));
const LeaderBoard = lazy(() => import("./pages/LeaderBoard"));
const HowItWorks = lazy(() => import("./pages/HowItWorks"));
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));

// Router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Analytics hooks
import useScrollTracking from "./utils/useScrollTracking";
import useTimeTracking from "./utils/useTimeTracking";
import { trackPageView } from "./utils/analytics";
import Loader from "./components/Loader";

// Hash Navigation component
function HashNavigation() {
  const location = useLocation();
  const previousHash = useRef(location.hash);

  useEffect(() => {
    if (location.hash && location.hash !== previousHash.current) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
    previousHash.current = location.hash;
  }, [location]);

  return null;
}

// Home Page Component to reduce nesting
function HomePage() {
  return (
    <>
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <CompanyLogo />
        <PurposeSection />
        <FeaturesSection />
      </section>
      <section id="services">
        <ScheduleSection />
        <MonitorSection />
        <ServicesSection />
      </section>
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <section id="newsletter"></section>
    </>
  );
}

function AppContent() {
  const { isDarkMode } = useTheme();
  const location = useLocation();

  // Initialize analytics tracking hooks
  useScrollTracking();
  useTimeTracking();

  useEffect(() => {
    const currentPath = location.pathname;
    let pageTitle = "Friends Best Center";

    switch (currentPath) {
      case "/":
        pageTitle = "Accueil | Friends Best Center";
        break;
      case "/partner":
        pageTitle = "Partenaires | Friends Best Center";
        break;
      case "/about":
        pageTitle = "À propos | Friends Best Center";
        break;
      case "/contact":
        pageTitle = "Contact | Friends Best Center";
        break;
      case "/login":
        pageTitle = "Connexion | Friends Best Center";
        break;
      case "/signup":
        pageTitle = "Inscription | Friends Best Center";
        break;
      case "/contributors":
        pageTitle = "Contributeurs | Friends Best Center";
        break;
      case "/contributor-guide":
        pageTitle = "Guide Contributeur | Friends Best Center";
        break;
      case "/support-career":
        pageTitle = "Support Carrière | Friends Best Center";
        break;
      case "/faqs":
        pageTitle = "FAQ | Friends Best Center";
        break;
      case "/privacy-policy":
        pageTitle = "Politique de Confidentialité | Friends Best Center";
        break;
      case "/cookies":
        pageTitle = "Politique des Cookies | Friends Best Center";
        break;
      case "/terms-of-use":
        pageTitle = "Conditions d'Utilisation | Friends Best Center";
        break;
      case "/how-it-works":
        pageTitle = "Comment ça marche | Friends Best Center";
        break;
      //  NEW: Admin page title
      case "/admin/dashboard":
        pageTitle = "Admin Dashboard | Friends Best Center";
        break;
      default:
        pageTitle = "Page Non Trouvée | Friends Best Center";
    }

    document.title = pageTitle;

    const pageName =
      currentPath === "/"
        ? "Accueil"
        : currentPath.charAt(1).toUpperCase() + currentPath.slice(2);
    trackPageView(pageName);
  }, [location.pathname]);

  return (
    <main className="relative min-h-screen overflow-x-hidden scroll-smooth transition-colors duration-300">
      {/* Background Gradients */}
      <div className="pointer-events-none fixed inset-0 z-0">
        <div
          className={`absolute -top-28 -left-28 w-[500px] h-[500px] rounded-full blur-[80px] ${isDarkMode ? "bg-gradient-to-tr from-indigo-500/10 to-pink-500/10" : "bg-gradient-to-tr from-indigo-500/20 to-pink-500/20"}`}
        ></div>
        <div
          className={`absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-[100px] ${isDarkMode ? "bg-gradient-to-tr from-blue-500/10 to-purple-500/10" : "bg-gradient-to-tr from-blue-500/20 to-purple-500/20"}`}
        ></div>
      </div>

      <div className="relative z-10 overflow-hidden">
        <Navbar />
        <HashNavigation />

        {/* Single Suspense wrapper for all routes */}
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/partner" element={<Partner />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/contributors" element={<Contibutors />} />
            <Route path="/contributor-guide" element={<ContributorGuide />} />
            <Route path="/support-career" element={<SupportCareer />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />
            <Route path="/terms-of-use" element={<TermsOfUsePage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            {/* NEW: Admin Dashboard Route */}
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        {/* Toast container for messages */}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick={false}
          draggable
          theme={isDarkMode ? "dark" : "light"}
          pauseOnHover
        />

        <Footer />
        <ScrollToTop />
      </div>
    </main>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
