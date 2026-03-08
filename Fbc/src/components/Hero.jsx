import React from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import sch25 from "../assets/sch25.png";
import { Star, Award, Heart, Laptop, Users, Sparkles } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const Hero = () => {
  const { isDarkMode } = useTheme();

  // Couleurs centralisées pour cohérence
  const colors = {
    blue: isDarkMode ? "#60a5fa" : "#0A2E5A",
    blueDark: isDarkMode ? "#1e3a8a" : "#0A2E5A",
    gold: isDarkMode ? "#fbbf24" : "#D4AF37",
    goldLight: isDarkMode ? "#fcd34d" : "#F2D06B",
    text: isDarkMode ? "#ffffff" : "#0A2E5A",
    textSecondary: isDarkMode ? "#d1d5db" : "#4b5563",
    textMuted: isDarkMode ? "#9ca3af" : "#6b7280",
    bg: isDarkMode ? "#111827" : "#ffffff",
    bgCard: isDarkMode ? "#1f2937" : "#ffffff",
    border: isDarkMode ? "#374151" : "#e5e7eb",
    blobBlue: isDarkMode ? "rgba(10, 46, 90, 0.15)" : "rgba(10, 46, 90, 0.08)",
    blobGold: isDarkMode
      ? "rgba(212, 175, 55, 0.15)"
      : "rgba(212, 175, 55, 0.08)",
  };

  return (
    <section
      id="home"
      className={`relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background Gradient - Smooth Transition */}
      <div
        className={`absolute inset-0 transition-colors duration-500 -z-10 ${
          isDarkMode
            ? "bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"
            : "bg-gradient-to-br from-white via-[#F8FAFC] to-[#F0F4F8]"
        }`}
      />

      {/* Decorative Blobs - Theme Adapted */}
      <div
        className="absolute top-40 left-10 w-64 h-64 rounded-full blur-3xl transition-all duration-500 -z-10"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl transition-all duration-500 -z-10"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(10, 46, 90, 0.20) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(10, 46, 90, 0.10) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="space-y-8 relative z-10 pt-8"
          >
            {/* Premium Badge */}
            <motion.div
              variants={fadeIn("up", 0.3)}
              className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full border transition-all duration-500 ${
                isDarkMode
                  ? "bg-blue-900/40 border-amber-500/40"
                  : "bg-blue-50 border-amber-600/30"
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-500 ${
                  isDarkMode ? "bg-amber-400" : "bg-amber-600"
                }`}
              />
              <span
                className={`font-bold text-xs uppercase tracking-widest flex items-center gap-2 transition-colors duration-500 ${
                  isDarkMode ? "text-white" : "text-blue-900"
                }`}
              >
                <Star
                  size={14}
                  className={
                    isDarkMode
                      ? "text-amber-400 fill-amber-400"
                      : "text-amber-600 fill-amber-600"
                  }
                />
                Friends Best Center
              </span>
              <div
                className={`w-2 h-2 rounded-full animate-pulse transition-colors duration-500 ${
                  isDarkMode ? "bg-amber-400" : "bg-amber-600"
                }`}
              />
            </motion.div>

            {/* Main Headline - NEW: Multi-domaines */}
            <motion.h1
              variants={textVariant(0.4)}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-colors duration-500 ${
                isDarkMode ? "text-white" : "text-blue-900"
              }`}
            >
              Former, Accompagner, <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 drop-shadow-sm"
                style={{
                  backgroundImage: isDarkMode
                    ? "linear-gradient(135deg, #fbbf24 0%, #fcd34d 100%)"
                    : "linear-gradient(135deg, #D4AF37 0%, #F2D06B 100%)",
                }}
              >
                Autonomiser
              </span>{" "}
              ✨
            </motion.h1>

            {/* Description - Courte et claire */}
            <motion.p
              variants={fadeIn("up", 0.5)}
              className={`text-lg md:text-xl max-w-xl leading-relaxed transition-colors duration-500 ${
                isDarkMode ? "text-gray-200" : "text-gray-700"
              }`}
            >
              Centre de formation polyvalent : éducation, santé, numérique et
              inclusion. Nous aidons chaque{" "}
              <span
                className={`font-semibold border-b-2 transition-all duration-500 ${
                  isDarkMode
                    ? "text-white border-amber-500/50"
                    : "text-blue-900 border-amber-600/40"
                }`}
              >
                élève, personne motivée ou en situation de fragilité
              </span>{" "}
              à gagner en autonomie.
            </motion.p>

            {/* Key Features - 4 domaines F.B.C */}
            <motion.div
              variants={fadeIn("up", 0.6)}
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              {[
                { icon: Star, label: "Éducation", color: "amber" },
                { icon: Heart, label: "Santé & Secours", color: "red" },
                { icon: Laptop, label: "Numérique", color: "blue" },
                { icon: Users, label: "Inclusion", color: "purple" },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all duration-500 ${
                    isDarkMode
                      ? "bg-gray-800 border border-gray-700 shadow-gray-900/30 hover:border-amber-500/50 hover:shadow-amber-500/10"
                      : "bg-white border border-gray-200 shadow-gray-200/50 hover:border-amber-600/40 hover:shadow-amber-600/10"
                  } shadow-sm hover:shadow-md`}
                >
                  <item.icon
                    size={16}
                    className={`flex-shrink-0 transition-colors duration-500 ${
                      item.color === "amber"
                        ? isDarkMode
                          ? "text-amber-400"
                          : "text-amber-600"
                        : item.color === "red"
                          ? isDarkMode
                            ? "text-red-400"
                            : "text-red-600"
                          : item.color === "blue"
                            ? isDarkMode
                              ? "text-blue-400"
                              : "text-blue-600"
                            : isDarkMode
                              ? "text-purple-400"
                              : "text-purple-600"
                    }`}
                  />
                  <span
                    className={`text-sm font-medium transition-colors duration-500 ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Content - Image Section */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative z-10 pt-12 pb-8"
          >
            <div className="relative max-w-lg mx-auto w-full">
              {/* Background Shape - Theme Adapted */}
              <div
                className="absolute inset-0 rounded-3xl transform rotate-3 scale-105 blur-sm -z-10 transition-all duration-500"
                style={{
                  background: isDarkMode
                    ? "linear-gradient(135deg, rgba(212, 175, 55, 0.10) 0%, rgba(10, 46, 90, 0.15) 100%)"
                    : "linear-gradient(135deg, rgba(212, 175, 55, 0.15) 0%, rgba(10, 46, 90, 0.10) 100%)",
                }}
              />

              {/* Main Image Card */}
              <div
                className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gray-800 border-amber-500/30 shadow-2xl shadow-gray-900/50"
                    : "bg-white border-amber-600/20 shadow-2xl shadow-gray-200/50"
                }`}
              >
                <img
                  src={sch25}
                  alt="Formations F.B.C - Éducation, Santé, Numérique, Inclusion"
                  className="w-full h-auto object-cover transition-opacity duration-500"
                />
                <div
                  className="absolute inset-0 transition-opacity duration-500"
                  style={{
                    background: isDarkMode
                      ? "linear-gradient(to top, rgba(10, 46, 90, 0.30) 0%, transparent 60%)"
                      : "linear-gradient(to top, rgba(10, 46, 90, 0.15) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Stats Card - UPDATED: Generic & Inclusive */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className={`absolute -bottom-6 left-1/2 transform -translate-x-1/2 rounded-2xl px-5 sm:px-6 py-4 z-20 min-w-[240px] sm:min-w-[260px] transition-all duration-500 ${
                  isDarkMode
                    ? "bg-gray-800 border border-amber-500/40 shadow-2xl shadow-gray-900/50"
                    : "bg-white border border-amber-600/30 shadow-2xl shadow-gray-200/50"
                }`}
              >
                <div className="flex items-center justify-around">
                  <div className="text-center">
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <Sparkles
                        size={18}
                        className={
                          isDarkMode ? "text-amber-400" : "text-amber-600"
                        }
                      />
                      <p
                        className={`text-2xl font-bold transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-blue-900"
                        }`}
                      >
                        4
                      </p>
                    </div>
                    <p
                      className={`text-xs font-medium uppercase tracking-wider transition-colors duration-500 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Domaines
                    </p>
                  </div>
                  <div
                    className={`w-px h-10 transition-colors duration-500 ${
                      isDarkMode ? "bg-gray-700" : "bg-gray-200"
                    }`}
                  />
                  <div className="text-center">
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <Award
                        size={18}
                        className={
                          isDarkMode ? "text-amber-400" : "text-amber-600"
                        }
                      />
                      <p
                        className={`text-2xl font-bold transition-colors duration-500 ${
                          isDarkMode ? "text-white" : "text-blue-900"
                        }`}
                      >
                        98%
                      </p>
                    </div>
                    <p
                      className={`text-xs font-medium uppercase tracking-wider transition-colors duration-500 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Satisfaction
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Quality Badge - Updated text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className={`absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 rounded-xl px-4 py-3 z-20 transition-all duration-500 backdrop-blur-sm ${
                  isDarkMode
                    ? "bg-gray-900/95 border border-amber-500/40 shadow-lg shadow-gray-900/40"
                    : "bg-white/95 border border-amber-600/30 shadow-lg shadow-gray-200/40"
                }`}
              >
                <div className="flex items-center gap-2">
                  <div
                    className={`p-1.5 rounded-lg transition-colors duration-500 ${
                      isDarkMode ? "bg-amber-500/20" : "bg-amber-600/20"
                    }`}
                  >
                    <Award
                      size={16}
                      className={
                        isDarkMode ? "text-amber-400" : "text-amber-600"
                      }
                    />
                  </div>
                  <div>
                    <p
                      className={`text-xs font-semibold transition-colors duration-500 ${
                        isDarkMode ? "text-gray-400" : "text-gray-500"
                      }`}
                    >
                      Approche
                    </p>
                    <p
                      className={`text-sm font-bold transition-colors duration-500 ${
                        isDarkMode ? "text-white" : "text-blue-900"
                      }`}
                    >
                      Personnalisée
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-4 -right-4 w-16 h-16 rounded-full blur-xl transition-all duration-500"
                style={{
                  background: isDarkMode
                    ? "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(212, 175, 55, 0.08) 0%, transparent 70%)",
                }}
              />
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -bottom-4 -left-4 w-12 h-12 rounded-full blur-xl transition-all duration-500"
                style={{
                  background: isDarkMode
                    ? "radial-gradient(circle, rgba(10, 46, 90, 0.20) 0%, transparent 70%)"
                    : "radial-gradient(circle, rgba(10, 46, 90, 0.10) 0%, transparent 70%)",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
