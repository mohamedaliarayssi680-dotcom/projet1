import React, { useState, useEffect } from "react";
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
  const [isMounted, setIsMounted] = useState(false);
  const { isDarkMode } = useTheme();

  useEffect(() => setIsMounted(true), []);

  const partners = [
    { name: "Soutien Scolaire", icon: BookOpen, color: "#0A2E5A" },
    { name: "Santé & Secours", icon: Heart, color: "#D4AF37" },
    { name: "Compétences Numériques", icon: Laptop, color: "#0A2E5A" },
    { name: "Inclusion & Autonomie", icon: Users, color: "#D4AF37" },
    { name: "Accompagnement", icon: Target, color: "#0A2E5A" },
    { name: "Réussite", icon: Sparkles, color: "#D4AF37" },
  ];

  // Helper pour l'effet de brillance au hover
  const ShineEffect = ({ isActive, color }) => (
    <div
      className={`absolute inset-0 rounded-xl overflow-hidden pointer-events-none transition-opacity duration-300 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className="absolute inset-0 animate-shine"
        style={{
          background: `linear-gradient(
            105deg,
            transparent 0%,
            ${color}15 20%,
            ${color}40 40%,
            ${color}15 60%,
            transparent 100%
          )`,
          transform: "translateX(-100%)",
        }}
      />
    </div>
  );

  return (
    <section
      className={`w-full py-12 lg:py-16 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900/70" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
          {/* === LEFT CONTENT SECTION === */}
          <div className="lg:w-80 xl:w-96 flex-shrink-0">
            <div className="relative group">
              {/* Animated background glow */}
              <div
                className={`absolute -inset-4 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 ${
                  isDarkMode
                    ? "bg-gradient-to-r from-[#0A2E5A]/40 to-[#D4AF37]/30"
                    : "bg-gradient-to-r from-[#0A2E5A]/20 to-[#D4AF37]/15"
                }`}
              />

              {/* Main card with glass effect */}
              <div
                className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-500 
                  hover:shadow-2xl border backdrop-blur-sm
                  ${
                    isDarkMode
                      ? "bg-gray-800/80 border-gray-700/60 shadow-[#0A2E5A]/30"
                      : "bg-white/90 border-gray-200/60 shadow-[#0A2E5A]/15"
                  }
                `}
              >
                <div
                  className={`border-l-4 pl-6 transition-colors duration-300 ${
                    isDarkMode ? "border-[#D4AF37]" : "border-[#0A2E5A]"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-500 ${
                        isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"
                      } animate-pulse`}
                    />
                    <span
                      className={`text-sm font-semibold uppercase tracking-wider transition-colors duration-300 ${
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
                    className={`text-lg lg:text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r ${
                      isDarkMode
                        ? "from-[#D4AF37] to-[#D4AF37]/70"
                        : "from-[#0A2E5A] to-[#0A2E5A]/70"
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

          {/* === RIGHT MARQUEE SECTION === */}
          <div className="flex-1 min-w-0">
            <div className="relative">
              {/* Gradient fades */}
              <div
                className={`absolute left-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-r to-transparent z-20 pointer-events-none transition-colors duration-300 ${
                  isDarkMode ? "from-gray-900/90" : "from-gray-50/90"
                }`}
              />
              <div
                className={`absolute right-0 top-0 bottom-0 w-12 lg:w-20 bg-gradient-to-l to-transparent z-20 pointer-events-none transition-colors duration-300 ${
                  isDarkMode ? "from-gray-900/90" : "from-white/90"
                }`}
              />

              {/* Marquee */}
              <div className="overflow-hidden py-2">
                <div
                  className="flex items-center"
                  style={{
                    animation: isMounted
                      ? "marquee 35s linear infinite"
                      : "none",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.animationPlayState = "paused")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.animationPlayState = "running")
                  }
                >
                  {[...partners, ...partners].map((partner, index) => {
                    const isDuplicate = index >= partners.length;
                    const key = isDuplicate ? `dup-${index}` : index;
                    const partnerIndex = isDuplicate
                      ? index - partners.length
                      : index;
                    const isHovered = hoveredLogo === partnerIndex;

                    return (
                      <div
                        key={key}
                        className="flex-shrink-0 mx-4 lg:mx-6 group cursor-pointer"
                        onMouseEnter={() => setHoveredLogo(partnerIndex)}
                        onMouseLeave={() => setHoveredLogo(null)}
                      >
                        {/* Animated Card Container */}
                        <div
                          className={`relative rounded-2xl p-4 lg:p-5 transition-all duration-500 ease-out
                            ${isHovered ? "scale-110 z-10" : "scale-100"}
                            ${
                              isDarkMode
                                ? "bg-gray-800/60 hover:bg-gray-800/90"
                                : "bg-white/80 hover:bg-white"
                            }
                            border backdrop-blur-sm
                            ${
                              isDarkMode
                                ? "border-gray-700/50 hover:border-transparent"
                                : "border-gray-200/50 hover:border-transparent"
                            }
                          `}
                          style={{
                            boxShadow: isHovered
                              ? `0 20px 40px -10px ${partner.color}50`
                              : isDarkMode
                                ? "0 4px 20px rgba(0,0,0,0.3)"
                                : "0 4px 20px rgba(10,46,90,0.08)",
                          }}
                        >
                          {/* Animated border gradient */}
                          <div
                            className={`absolute inset-0 rounded-2xl p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                              isHovered ? "opacity-100" : ""
                            }`}
                            style={{
                              background: `linear-gradient(135deg, ${partner.color}, ${partner.color}80, transparent)`,
                              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                              maskComposite: "xor",
                              WebkitMaskComposite: "xor",
                            }}
                          />

                          <ShineEffect
                            isActive={isHovered}
                            color={partner.color}
                          />

                          <div className="relative flex flex-col items-center gap-3">
                            {/* 3D Floating Icon */}
                            <div
                              className={`w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center 
                                transition-all duration-500 ease-out
                                ${isHovered ? "animate-float" : ""}
                              `}
                              style={{
                                background: `linear-gradient(135deg, ${partner.color}25, ${partner.color}10)`,
                                border: `1px solid ${partner.color}40`,
                                boxShadow: isHovered
                                  ? `0 0 30px ${partner.color}60, inset 0 1px 1px ${partner.color}30`
                                  : `0 4px 15px ${partner.color}20`,
                                transform: isHovered
                                  ? "translateY(-4px) rotate(2deg)"
                                  : "translateY(0)",
                              }}
                            >
                              <div
                                className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                                style={{
                                  background: `radial-gradient(circle at 30% 30%, ${partner.color}30, transparent 60%)`,
                                }}
                              />
                              <partner.icon
                                size={30}
                                className="transition-all duration-300 drop-shadow-sm"
                                style={{
                                  color: partner.color,
                                  filter: isHovered
                                    ? `drop-shadow(0 0 8px ${partner.color}80)`
                                    : "none",
                                  transform: isHovered
                                    ? "scale(1.1)"
                                    : "scale(1)",
                                }}
                              />
                            </div>

                            {/* Partner Name with gradient */}
                            <span
                              className={`text-xs lg:text-sm font-semibold text-center transition-all duration-300
                                ${isDarkMode ? "text-gray-300" : "text-gray-700"}
                                ${isHovered ? "tracking-wide" : ""}
                              `}
                              style={{
                                background: isHovered
                                  ? `linear-gradient(135deg, ${partner.color}, ${partner.color}cc)`
                                  : "none",
                                WebkitBackgroundClip: isHovered
                                  ? "text"
                                  : "unset",
                                WebkitTextFillColor: isHovered
                                  ? "transparent"
                                  : "unset",
                              }}
                            >
                              {partner.name}
                            </span>

                            {/* Subtle pulse indicator */}
                            <div
                              className={`absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full border-2 transition-all duration-300 ${
                                isDarkMode ? "border-gray-800" : "border-white"
                              } ${isHovered ? "scale-100 opacity-100" : "scale-75 opacity-60"}`}
                              style={{ backgroundColor: partner.color }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* === STATISTICS === */}
            <div
              className={`flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-6 mt-8 text-sm transition-colors duration-300 ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              {[
                {
                  text: "4 Domaines de Formation",
                  color: isDarkMode ? "#D4AF37" : "#0A2E5A",
                  altColor: isDarkMode ? "#0A2E5A" : "#D4AF37",
                },
                {
                  text: "Accompagnement Sur Mesure",
                  color: isDarkMode ? "#0A2E5A" : "#D4AF37",
                  altColor: isDarkMode ? "#D4AF37" : "#0A2E5A",
                },
                {
                  text: "Réussite Garantie",
                  color: "#22c55e",
                  altColor: "#22c55e",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="flex items-center group cursor-pointer"
                >
                  <div
                    className={`w-2.5 h-2.5 rounded-full mr-2.5 transition-all duration-300 group-hover:scale-125 ring-2 ring-transparent group-hover:ring-offset-2 ${
                      isDarkMode
                        ? "group-hover:ring-gray-900"
                        : "group-hover:ring-white"
                    }`}
                    style={{ backgroundColor: stat.color }}
                  />
                  <span
                    className="transition-all duration-200 font-medium group-hover:font-semibold"
                    style={{
                      color: isDarkMode ? "#e5e7eb" : "#374151",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = stat.color)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {stat.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ✅ CORRECTION : style sans l'attribut "jsx" */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-6px) rotate(1deg); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-shine {
          animation: shine 1.2s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default CompanyLogo;
