import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import {
  Menu,
  X,
  ChevronDown,
  Sun,
  Moon,
  Sparkles,
  Users,
  BookOpen,
  Zap,
  LogIn,
  UserPlus,
} from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import logo from "../assets/logo.png";

// Custom hook for smooth scrolling
const useSmoothScroll = () => {
  const scrollToElement = useCallback((elementId, offset = 80) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }, []);
  return scrollToElement;
};

// Custom hook for outside click detection
const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback]);
};

const ModernNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const { isDarkMode, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef(null);
  const smoothScroll = useSmoothScroll();

  // Navigation links
  const navLinks = useMemo(
    () => [
      {
        href: "/#home",
        label: "Accueil",
        icon: <Sparkles className="w-4 h-4" />,
      },
      {
        href: "/about",
        label: "À propos",
        icon: <Users className="w-4 h-4" />,
      },
      {
        href: "/#services",
        label: "Services",
        icon: <Zap className="w-4 h-4" />,
      },
      {
        href: "/#testimonials",
        label: "Témoignages",
        icon: <BookOpen className="w-4 h-4" />,
      },
      { href: "/#faq", label: "FAQ", icon: <BookOpen className="w-4 h-4" /> },
    ],
    [],
  );

  // Dropdown items
  const dropdownItems = useMemo(
    () => [
      {
        href: "/contributors",
        label: "Contributeurs",
        icon: "👥",
        description: "Notre équipe",
      },
      {
        href: "/contributor-guide",
        label: "Guide",
        icon: "📖",
        description: "Comment contribuer",
      },
    ],
    [],
  );

  // Active link detection
  const activeLink = useMemo(() => {
    const currentPath = location.pathname + location.hash;
    return currentPath === "/" ? "/#home" : currentPath;
  }, [location]);

  const isCommunityActive = useMemo(() => {
    return dropdownItems.some((item) =>
      location.pathname.startsWith(item.href),
    );
  }, [location, dropdownItems]);

  // Navigation handler
  const handleNavClick = useCallback(
    (href) => {
      if (href.includes("#")) {
        const sectionId = href.split("#")[1];
        if (location.pathname !== "/") {
          navigate("/");
          setTimeout(() => smoothScroll(sectionId), 100);
        } else {
          smoothScroll(sectionId);
        }
      } else {
        navigate(href);
      }
      setIsMenuOpen(false);
      setIsDropdownOpen(false);
    },
    [location.pathname, navigate, smoothScroll],
  );

  const handleDropdownItemClick = useCallback(
    (href) => {
      navigate(href);
      setIsDropdownOpen(false);
      setIsMenuOpen(false);
    },
    [navigate],
  );

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useOutsideClick(dropdownRef, () => setIsDropdownOpen(false));

  // Scroll lock for mobile
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleKeyDown = useCallback((event, action) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      action();
    }
  }, []);

  // ============ LOGO COMPONENT ============
  const Logo = ({ className = "", isMobile = false }) => (
    <button
      onClick={() => handleNavClick("/#home")}
      className={`flex items-center gap-2 sm:gap-3 cursor-pointer group transition-all duration-300 hover:scale-105 ${className}`}
      aria-label="Friends Best Center - Accueil"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2E5A] via-[#D4AF37] to-[#0A2E5A] rounded-lg blur-md opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
        <div
          className={`relative rounded-lg p-1.5 shadow-sm group-hover:shadow-md transition-all duration-300 ${isDarkMode ? "bg-gray-800/80" : "bg-white/80"} backdrop-blur-sm border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
        >
          <img
            src={logo}
            alt="F.B.C"
            className={`${isMobile ? "w-9 h-9" : "w-10 h-10 sm:w-11 sm:h-11"} object-contain`}
          />
        </div>
      </div>
      <div className="hidden sm:flex flex-col items-start">
        <span
          className={`text-lg font-bold leading-tight transition-colors duration-300 ${isDarkMode ? "text-white group-hover:text-[#D4AF37]" : "text-[#0A2E5A] group-hover:text-[#D4AF37]"}`}
        >
          F.B.C
        </span>
        <span
          className={`text-[9px] font-medium uppercase tracking-wider ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
        >
          Friends Best Center
        </span>
      </div>
    </button>
  );

  // ============ NAV LINK COMPONENT ============
  const NavLink = ({ link, isMobile = false }) => {
    const isActive = activeLink === link.href;
    const isHovered = hoveredLink === link.href;

    return (
      <button
        onClick={() => handleNavClick(link.href)}
        onMouseEnter={() => !isMobile && setHoveredLink(link.href)}
        onMouseLeave={() => !isMobile && setHoveredLink(null)}
        className={`
          ${isMobile ? "flex items-center gap-3 text-base font-medium py-3 px-4 rounded-xl w-full text-left transition-all duration-200" : "flex items-center gap-2 text-sm font-medium relative px-3 py-2 rounded-lg transition-all duration-200"}
          ${
            isActive
              ? isMobile
                ? isDarkMode
                  ? "bg-[#0A2E5A]/20 text-[#D4AF37]"
                  : "bg-[#0A2E5A]/10 text-[#0A2E5A]"
                : isDarkMode
                  ? "text-[#D4AF37]"
                  : "text-[#0A2E5A]"
              : isDarkMode
                ? isMobile
                  ? "text-gray-300 hover:bg-gray-800/50 hover:text-[#D4AF37]"
                  : "text-gray-300 hover:text-[#D4AF37]"
                : isMobile
                  ? "text-gray-700 hover:bg-gray-50 hover:text-[#0A2E5A]"
                  : "text-gray-600 hover:text-[#0A2E5A]"
          }
        `}
      >
        {isMobile && (
          <span className="transition-transform duration-200">{link.icon}</span>
        )}
        <span className="relative z-10">{link.label}</span>
        {!isMobile && (
          <div
            className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#D4AF37] rounded-full transition-all duration-300 ${isActive || isHovered ? "w-8 opacity-100" : "w-0 opacity-0"}`}
          />
        )}
      </button>
    );
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Navigation principale"
        className={`fixed top-0 inset-x-0 z-[9999] border-b backdrop-blur-md transition-all duration-300 ${isScrolled ? (isDarkMode ? "bg-gray-900/90 border-gray-800 shadow-lg" : "bg-white/90 border-gray-200 shadow-lg") : isDarkMode ? "bg-gray-900/70 border-gray-800/50" : "bg-white/70 border-gray-200/50"}`}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center gap-2 ml-12">
            {navLinks.map((link) => (
              <NavLink key={link.href} link={link} />
            ))}

            {/* Community Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                onKeyDown={(e) =>
                  handleKeyDown(e, () => setIsDropdownOpen(!isDropdownOpen))
                }
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-lg transition-all duration-200 ${isCommunityActive || isDropdownOpen ? (isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]") : isDarkMode ? "text-gray-300 hover:text-[#D4AF37]" : "text-gray-600 hover:text-[#0A2E5A]"}`}
                aria-expanded={isDropdownOpen}
                aria-haspopup="true"
              >
                <span>Communauté</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
                />
                {(isCommunityActive || isDropdownOpen) && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#D4AF37] rounded-full" />
                )}
              </button>

              {isDropdownOpen && (
                <div
                  className={`absolute top-full right-0 mt-2 w-56 rounded-xl border shadow-xl overflow-hidden z-50 ${isDarkMode ? "bg-gray-800/95 border-gray-700" : "bg-white/95 border-gray-200"}`}
                >
                  <div className="py-2">
                    {dropdownItems.map((item, index) => (
                      <button
                        key={item.href}
                        onClick={() => handleDropdownItemClick(item.href)}
                        className={`flex items-start gap-3 px-4 py-3 text-sm w-full text-left transition-colors duration-200 ${isDarkMode ? "text-gray-300 hover:bg-gray-700/50 hover:text-[#D4AF37]" : "text-gray-700 hover:bg-gray-50 hover:text-[#0A2E5A]"}`}
                      >
                        <span className="text-lg mt-0.5">{item.icon}</span>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.label}</span>
                          <span
                            className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
                          >
                            {item.description}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden xl:flex items-center gap-2">
            {/* Login Button */}
            <Link
              to="/login"
              className={`
                px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2
                ${
                  isDarkMode
                    ? "bg-gray-800 hover:bg-gray-700 text-white border border-gray-700"
                    : "bg-gray-100 hover:bg-gray-200 text-[#0A2E5A] border border-gray-300"
                }
              `}
            >
              <LogIn className="w-4 h-4" />
              Connexion
            </Link>

            {/* Contact Button */}
            <Link
              to="/contact"
              className={`
                px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200
                bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a] hover:from-[#0A2E5A]/90 hover:to-[#1a4a7a]/90
                text-white shadow-md hover:shadow-lg flex items-center gap-2
              `}
            >
              <Sparkles className="w-4 h-4" />
              Nous contacter
            </Link>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-200 ${isDarkMode ? "bg-gray-800 hover:bg-gray-700 text-[#D4AF37]" : "bg-gray-100 hover:bg-gray-200 text-[#0A2E5A]"}`}
              aria-label={isDarkMode ? "Mode clair" : "Mode sombre"}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`xl:hidden p-2.5 rounded-lg transition-all duration-200 ${isDarkMode ? "bg-gray-800/50 hover:bg-gray-700/50 text-white" : "bg-gray-100/50 hover:bg-gray-200/50 text-[#0A2E5A]"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[9990] lg:hidden transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] z-[9995] border-r shadow-xl backdrop-blur-md overflow-hidden transition-all duration-300 lg:hidden ${isDarkMode ? "bg-gray-900/98 border-gray-800" : "bg-white/98 border-gray-200"} ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-5 border-b ${isDarkMode ? "border-gray-800" : "border-gray-200"}`}
        >
          <Logo isMobile />
          <button
            onClick={() => setIsMenuOpen(false)}
            className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="p-4 space-y-1 overflow-y-auto h-full pb-32">
          {navLinks.map((link) => (
            <NavLink key={link.href} link={link} isMobile />
          ))}

          {/* Community Section */}
          <div
            className={`mt-6 rounded-xl border ${isDarkMode ? "border-gray-800 bg-gray-800/30" : "border-gray-200 bg-gray-50/50"}`}
          >
            <div
              className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
            >
              Communauté
            </div>
            {dropdownItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleDropdownItemClick(item.href)}
                className={`flex items-center gap-3 px-4 py-3 w-full text-left transition-colors ${isDarkMode ? "text-gray-300 hover:bg-gray-700/50 hover:text-[#D4AF37]" : "text-gray-700 hover:bg-gray-100 hover:text-[#0A2E5A]"}`}
              >
                <span className="text-lg">{item.icon}</span>
                <div>
                  <p className="text-sm font-medium">{item.label}</p>
                  <p
                    className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
                  >
                    {item.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Mobile CTA Buttons */}
          <div className="pt-6 space-y-3">
            {/* Login Button - Mobile */}
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className={`block w-full px-5 py-3.5 rounded-xl text-center font-semibold text-sm border transition-all ${isDarkMode ? "border-gray-700 text-gray-300 hover:bg-gray-800" : "border-gray-300 text-[#0A2E5A] hover:bg-gray-100"}`}
            >
              <span className="flex items-center justify-center gap-2">
                <LogIn className="w-4 h-4" />
                Connexion
              </span>
            </Link>

            {/* Contact Button - Mobile */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full px-5 py-3.5 rounded-xl text-center font-semibold text-sm bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a] text-white shadow-lg"
            >
              Nous contacter
            </Link>
          </div>

          {/* Mobile Theme Toggle */}
          <div className="pt-4">
            <button
              onClick={toggleTheme}
              className={`w-full flex items-center justify-center gap-3 py-3 px-4 rounded-xl transition-colors ${isDarkMode ? "bg-gray-800 hover:bg-gray-700 text-[#D4AF37]" : "bg-gray-100 hover:bg-gray-200 text-[#0A2E5A]"}`}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
              <span className="font-medium text-sm">
                {isDarkMode ? "Mode clair" : "Mode sombre"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModernNavbar;
