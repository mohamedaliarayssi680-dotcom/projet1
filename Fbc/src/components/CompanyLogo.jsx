import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  GraduationCap,
  Heart,
  Laptop,
  Users,
  Target,
  Sparkles,
  BookOpen,
  Shield,
} from "lucide-react";

const CompanyLogo = () => {
  const [hoveredLogo, setHoveredLogo] = useState(null);
  const { isDarkMode } = useTheme();

  // Icons representing F.B.C's 4 domains + support
  const partners = [
    { name: "Soutien Scolaire", icon: BookOpen, color: "#0A2E5A" },
    { name: "Santé & Secours", icon: Heart, color: "#D4AF37" },
    { name: "Compétences Numériques", icon: Laptop, color: "#0A2E5A" },
    { name: "Inclusion & Autonomie", icon: Users, color: "#D4AF37" },
    { name: "Accompagnement", icon: Target, color: "#0A2E5A" },
    { name: "Réussite", icon: Sparkles, color: "#D4AF37" },
  ];

  return (
    <section
      className={`w-full py-12 lg:py-16 overflow-hidden transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900/50" : "bg-gray-50/50"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* Left Content Section */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="relative">
              {/* Decorative background - F.B.C colors */}
              <div
                className={`absolute -inset-4 rounded-2xl transform rotate-1 transition-colors duration-300 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#0A2E5A]/30 to-[#D4AF37]/20"
                    : "bg-gradient-to-r from-[#0A2E5A]/10 to-[#D4AF37]/10"
                }`}
              ></div>

              {/* Main content card */}
              <div
                className={`relative rounded-xl shadow-lg p-6 lg:p-8 transition-all duration-300 hover:shadow-xl border ${
                  isDarkMode
                    ? "bg-gray-800 border-gray-700 shadow-[#0A2E5A]/20"
                    : "bg-white border-gray-200 shadow-[#0A2E5A]/10"
                }`}
              >
                <div
                  className={`border-l-4 pl-6 transition-colors duration-300 ${
                    isDarkMode ? "border-[#D4AF37]" : "border-[#0A2E5A]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"
                      } animate-pulse`}
                    />
                    <span
                      className={`text-sm font-medium uppercase tracking-wider transition-colors duration-300 ${
                        isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                      }`}
                    >
                      Notre Approche
                    </span>
                  </div>

                  <h3
                    className={`text-xl lg:text-2xl xl:text-3xl font-bold leading-tight mb-2 transition-colors duration-300 ${
                      isDarkMode ? "text-white" : "text-[#0A2E5A]"
                    }`}
                  >
                    Formation &
                  </h3>
                  <p
                    className={`text-lg lg:text-xl font-semibold mb-4 transition-colors duration-300 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                    }`}
                  >
                    Accompagnement Global
                  </p>

                  <div
                    className={`flex items-center text-sm transition-colors duration-300 ${
                      isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                  >
                    <svg
                      className={`w-4 h-4 mr-2 transition-colors duration-300 ${
                        isDarkMode ? "text-[#D4AF37]" : "text-green-600"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Approche personnalisée
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Logo Marquee Section */}
          <div className="flex-1 min-w-0">
            <div className="relative">
              {/* Gradient overlays */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-r to-transparent z-20 pointer-events-none transition-colors duration-300 ${
                  isDarkMode ? "from-gray-900" : "from-gray-50"
                }`}
              ></div>
              <div
                className={`absolute right-0 top-0 bottom-0 w-8 lg:w-16 bg-gradient-to-l to-transparent z-20 pointer-events-none transition-colors duration-300 ${
                  isDarkMode ? "from-gray-900" : "from-white"
                }`}
              ></div>

              {/* Marquee container */}
              <div className="overflow-hidden py-4">
                <div
                  className="flex"
                  style={{
                    animation: "marquee 30s linear infinite",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.animationPlayState = "paused")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.animationPlayState = "running")
                  }
                >
                  {/* First set of logos */}
                  {partners.map((partner, index) => (
                    <div
                      key={index}
                      className={`flex-shrink-0 mx-6 lg:mx-10 group cursor-pointer transition-transform duration-300 hover:scale-105`}
                      onMouseEnter={() => setHoveredLogo(index)}
                      onMouseLeave={() => setHoveredLogo(null)}
                    >
                      <div
                        className={`relative rounded-xl p-4 lg:p-5 transition-all duration-300 ${
                          isDarkMode
                            ? "bg-gray-800/50 hover:bg-gray-800"
                            : "bg-white hover:bg-gray-50"
                        } border ${
                          isDarkMode
                            ? "border-gray-700 hover:border-[#D4AF37]/50"
                            : "border-gray-200 hover:border-[#0A2E5A]/50"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                            hoveredLogo === index
                              ? isDarkMode
                                ? "bg-gradient-to-r from-[#0A2E5A]/20 to-[#D4AF37]/10 scale-105"
                                : "bg-gradient-to-r from-[#0A2E5A]/10 to-[#D4AF37]/5 scale-105"
                              : "bg-transparent"
                          }`}
                        />
                        <div className="relative flex flex-col items-center justify-center gap-3">
                          {/* 3D-style Icon */}
                          <div
                            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              hoveredLogo === index
                                ? "transform -translate-y-1 shadow-lg"
                                : ""
                            }`}
                            style={{
                              background: `linear-gradient(135deg, ${partner.color}20, ${partner.color}40)`,
                              boxShadow:
                                hoveredLogo === index
                                  ? `0 10px 30px ${partner.color}40`
                                  : "none",
                            }}
                          >
                            <partner.icon
                              size={28}
                              className="transition-all duration-300"
                              style={{ color: partner.color }}
                            />
                          </div>
                          {/* Partner Name */}
                          <span
                            className={`text-xs lg:text-sm font-medium text-center transition-colors duration-300 ${
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {partner.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Duplicate set for seamless loop */}
                  {partners.map((partner, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className={`flex-shrink-0 mx-6 lg:mx-10 group cursor-pointer transition-transform duration-300 hover:scale-105`}
                      onMouseEnter={() => setHoveredLogo(`dup-${index}`)}
                      onMouseLeave={() => setHoveredLogo(null)}
                    >
                      <div
                        className={`relative rounded-xl p-4 lg:p-5 transition-all duration-300 ${
                          isDarkMode
                            ? "bg-gray-800/50 hover:bg-gray-800"
                            : "bg-white hover:bg-gray-50"
                        } border ${
                          isDarkMode
                            ? "border-gray-700 hover:border-[#D4AF37]/50"
                            : "border-gray-200 hover:border-[#0A2E5A]/50"
                        }`}
                      >
                        <div
                          className={`absolute inset-0 rounded-xl transition-all duration-300 ${
                            hoveredLogo === `dup-${index}`
                              ? isDarkMode
                                ? "bg-gradient-to-r from-[#0A2E5A]/20 to-[#D4AF37]/10 scale-105"
                                : "bg-gradient-to-r from-[#0A2E5A]/10 to-[#D4AF37]/5 scale-105"
                              : "bg-transparent"
                          }`}
                        />
                        <div className="relative flex flex-col items-center justify-center gap-3">
                          {/* 3D-style Icon */}
                          <div
                            className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center transition-all duration-300 ${
                              hoveredLogo === `dup-${index}`
                                ? "transform -translate-y-1 shadow-lg"
                                : ""
                            }`}
                            style={{
                              background: `linear-gradient(135deg, ${partner.color}20, ${partner.color}40)`,
                              boxShadow:
                                hoveredLogo === `dup-${index}`
                                  ? `0 10px 30px ${partner.color}40`
                                  : "none",
                            }}
                          >
                            <partner.icon
                              size={28}
                              className="transition-all duration-300"
                              style={{ color: partner.color }}
                            />
                          </div>
                          {/* Partner Name */}
                          <span
                            className={`text-xs lg:text-sm font-medium text-center transition-colors duration-300 ${
                              isDarkMode ? "text-gray-300" : "text-gray-700"
                            }`}
                          >
                            {partner.name}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Statistics - Updated phrases */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mt-6 text-sm transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <div className="flex items-center group cursor-pointer">
                <div
                  className={`w-2.5 h-2.5 rounded-full mr-2.5 transition-all duration-300 group-hover:scale-125 ${
                    isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"
                  }`}
                />
                <span
                  className={`group-hover:text-[#D4AF37] dark:group-hover:text-[#D4AF37] transition-colors duration-200 font-medium`}
                >
                  4 Domaines de Formation
                </span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div
                  className={`w-2.5 h-2.5 rounded-full mr-2.5 transition-all duration-300 group-hover:scale-125 ${
                    isDarkMode ? "bg-[#0A2E5A]" : "bg-[#D4AF37]"
                  }`}
                />
                <span
                  className={`group-hover:text-[#0A2E5A] dark:group-hover:text-[#0A2E5A] transition-colors duration-200 font-medium`}
                >
                  Accompagnement Sur Mesure
                </span>
              </div>
              <div className="flex items-center group cursor-pointer">
                <div
                  className={`w-2.5 h-2.5 rounded-full mr-2.5 transition-all duration-300 group-hover:scale-125 ${
                    isDarkMode ? "bg-green-500" : "bg-green-600"
                  }`}
                />
                <span
                  className={`group-hover:text-green-500 transition-colors duration-200 font-medium`}
                >
                  Réussite Garanti
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default CompanyLogo;
