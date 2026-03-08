import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Heart,
  Laptop,
  Users,
  Target,
  Star,
  Sparkles,
  Shield,
  Activity,
  Monitor,
  ArrowRight,
  Plus,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// ✅ Import des images depuis assets
import sch26 from "../assets/sch26.jpeg"; // Formation Santé
import sch27 from "../assets/sch27.jpeg"; // Formation Numérique

const PurposeSection = () => {
  const { isDarkMode } = useTheme();

  // Features adaptées aux domaines F.B.C
  const features = [
    {
      icon: BookOpen,
      title: "Soutien & Éducation",
      description:
        "Accompagnement scolaire personnalisé pour élèves et apprenants de tous niveaux, avec des méthodes adaptées à chacun.",
      color: "#0A2E5A",
    },
    {
      icon: Heart,
      title: "Santé & Prévention",
      description:
        "Formations aux gestes d'urgence, premiers secours et prévention des accidents pour plus de sécurité au quotidien.",
      color: "#D4AF37",
    },
    {
      icon: Laptop,
      title: "Compétences Numériques",
      description:
        "Initiation à l'informatique, bureautique et outils numériques pour gagner en autonomie dans un monde connecté.",
      color: "#0A2E5A",
    },
    {
      icon: Users,
      title: "Inclusion & Autonomie",
      description:
        "Accompagnement bienveillant des personnes en situation de fragilité vers plus d'autonomie et d'épanouissement.",
      color: "#D4AF37",
    },
  ];

  return (
    <section
      id="about"
      className={`relative w-full py-16 lg:py-20 px-4 md:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900/50" : "bg-gray-50/50"
      }`}
    >
      {/* Decorative Background Elements - F.B.C Colors */}
      {!isDarkMode && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-12 -right-12 h-64 w-64 rounded-full blur-3xl opacity-30"
          style={{
            background:
              "radial-gradient(closest-side, rgba(10, 46, 90, 0.25), rgba(212, 175, 55, 0.15), transparent 70%)",
          }}
        />
      )}
      {isDarkMode && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-12 -left-12 h-64 w-64 rounded-full blur-3xl opacity-20"
          style={{
            background:
              "radial-gradient(closest-side, rgba(212, 175, 55, 0.20), rgba(10, 46, 90, 0.10), transparent 70%)",
          }}
        />
      )}

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <div
            className={`inline-flex items-center gap-2 text-sm font-semibold mb-4 px-4 py-2 rounded-full ${
              isDarkMode
                ? "bg-[#0A2E5A]/30 text-[#D4AF37] border border-[#D4AF37]/30"
                : "bg-[#0A2E5A]/10 text-[#0A2E5A] border border-[#0A2E5A]/20"
            }`}
          >
            <Star size={14} className="fill-current" />
            NOTRE MISSION
          </div>

          <h2
            className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Former, Accompagner, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              Autonomiser
            </span>
          </h2>

          <p
            className={`mt-4 text-lg leading-relaxed max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Chez F.B.C, nous aidons chaque élève, personne motivée ou en
            situation de fragilité à acquérir les compétences essentielles pour
            un avenir épanoui.
          </p>
        </div>

        {/* Images Showcase - Enhanced with Attractive Elements */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
          {/* Health Training Image - sch26.jpeg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer border-2 border-transparent hover:border-red-500/50 transition-all duration-500"
            whileHover={{ y: -8 }}
          >
            {/* Main Image - VISIBLE */}
            <img
              src={sch26}
              alt="Formation Santé et Secours - Matériel médical et premiers secours"
              className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Animated Floating Badge - Heart Icon */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-5 right-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-xl shadow-red-500/40 border-2 border-white/30"
            >
              <Heart className="w-8 h-8 text-white drop-shadow-lg" />
            </motion.div>

            {/* Secondary Icon - Activity */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/30"
            >
              <Activity className="w-6 h-6 text-white" />
            </motion.div>

            {/* Decorative Sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="absolute w-1.5 h-1.5 bg-red-300/70 rounded-full"
                  style={{
                    top: `${25 + i * 18}%`,
                    left: `${15 + i * 12}%`,
                  }}
                />
              ))}
            </div>

            {/* Content Badge - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center shadow-lg shadow-red-500/30 border border-white/20">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    Santé & Secours
                  </h3>
                  <p className="text-white/85 text-sm line-clamp-2">
                    Gestes d'urgence • Prévention • Premiers secours
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.15, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-red-500/15 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Digital Training Image - sch27.jpeg */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative group overflow-hidden rounded-2xl shadow-2xl cursor-pointer border-2 border-transparent hover:border-blue-500/50 transition-all duration-500"
            whileHover={{ y: -8 }}
          >
            {/* Main Image - VISIBLE */}
            <img
              src={sch27}
              alt="Formation Numérique - Informatique et bureautique"
              className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

            {/* Animated Floating Badge - Laptop Icon */}
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, -8, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-5 right-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/40 border-2 border-white/30"
            >
              <Laptop className="w-8 h-8 text-white drop-shadow-lg" />
            </motion.div>

            {/* Secondary Icon - Monitor */}
            <motion.div
              animate={{ scale: [1, 1.15, 1], opacity: [0.8, 1, 0.8] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-white/25 backdrop-blur-sm flex items-center justify-center border border-white/30"
            >
              <Monitor className="w-6 h-6 text-white" />
            </motion.div>

            {/* Decorative Sparkles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -25, 0],
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1.3, 0.8],
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.4,
                  }}
                  className="absolute w-1.5 h-1.5 bg-blue-300/70 rounded-full"
                  style={{
                    top: `${25 + i * 18}%`,
                    left: `${15 + i * 12}%`,
                  }}
                />
              ))}
            </div>

            {/* Content Badge - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-5 lg:p-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30 border border-white/20">
                  <Laptop className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">
                    Compétences Numériques
                  </h3>
                  <p className="text-white/85 text-sm line-clamp-2">
                    Bureautique • Internet • Outils digitaux
                  </p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.15, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors"
                >
                  <ArrowRight className="w-5 h-5 text-white" />
                </motion.div>
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
              <div className="absolute inset-0 bg-gradient-to-t from-blue-500/15 via-transparent to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid - 4 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`relative flex flex-col items-start p-6 rounded-2xl border
                          transition-all duration-300 ease-out
                          ${
                            isDarkMode
                              ? "bg-gray-800/60 border-gray-700 hover:border-[#D4AF37]/40"
                              : "bg-white border-gray-200 hover:border-[#0A2E5A]/30"
                          }
                          shadow-sm hover:shadow-xl`}
            >
              {/* Icon with 3D effect */}
              <div
                className={`w-14 h-14 flex items-center justify-center rounded-xl mb-4 transition-all duration-300 hover:scale-110`}
                style={{
                  background: isDarkMode
                    ? `linear-gradient(135deg, ${feature.color}25, ${feature.color}40)`
                    : `linear-gradient(135deg, ${feature.color}15, ${feature.color}25)`,
                  boxShadow: isDarkMode
                    ? `0 4px 20px ${feature.color}30`
                    : `0 4px 15px ${feature.color}20`,
                }}
              >
                <feature.icon
                  size={26}
                  className="transition-transform duration-300"
                  style={{ color: feature.color }}
                />
              </div>

              {/* Content */}
              <div className="w-full">
                <h3
                  className={`text-lg font-bold mb-2.5 transition-colors duration-300 ${
                    isDarkMode ? "text-white" : "text-[#0A2E5A]"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed transition-colors duration-300 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner Dot */}
              <div
                className={`absolute top-4 right-4 w-2 h-2 rounded-full transition-all duration-300 ${
                  isDarkMode ? "bg-[#D4AF37]/50" : "bg-[#0A2E5A]/30"
                }`}
              />
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4", label: "Domaines de Formation", color: "#0A2E5A" },
            { value: "98%", label: "Taux de Satisfaction", color: "#D4AF37" },
            { value: "500+", label: "Personnes Formées/an", color: "#0A2E5A" },
            {
              value: "24/7",
              label: "Disponibilité Urgences",
              color: "#D4AF37",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className={`text-center p-6 rounded-2xl ${isDarkMode ? "bg-gray-800/40" : "bg-white"} border ${isDarkMode ? "border-gray-700" : "border-gray-200"} shadow-lg hover:shadow-xl transition-all`}
            >
              <p
                className={`text-3xl font-bold mb-2`}
                style={{ color: stat.color }}
              >
                {stat.value}
              </p>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
