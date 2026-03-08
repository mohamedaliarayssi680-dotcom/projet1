import React from "react";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Laptop,
  Users,
  MessageCircle,
  Target,
  Star,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import { motion } from "framer-motion";

// ✅ Import des 4 images pour les petites cartes
import sch2 from "../assets/sch2.png"; // Éducation
import sch3 from "../assets/sch3.jpg"; // Numérique (spécifique)
import sch4 from "../assets/sch4.jpg"; // Langues
import sch6 from "../assets/sch6.jpg"; // Inclusion

const PurposeSection = () => {
  const { isDarkMode } = useTheme();

  // ✅ 4 Features avec PHOTOS pour les petites cartes
  const features = [
    {
      icon: BookOpen,
      title: "Soutien Scolaire",
      description: "Accompagnement personnalisé pour élèves de tous niveaux.",
      image: sch2,
      color: "#0A2E5A",
    },
    {
      icon: MessageCircle,
      title: "Remédiation Linguistique",
      description:
        "Soutien en français et langues pour progresser à l'oral et à l'écrit.",
      image: sch4,
      color: "#D4AF37",
    },
    {
      icon: Laptop,
      title: "Compétences Numériques",
      description:
        "Initiation informatique et bureautique pour gagner en autonomie.",
      image: sch3, // ✅ Image spécifique pour le numérique
      color: "#0A2E5A",
    },
    {
      icon: Users,
      title: "Inclusion & Autonomie",
      description:
        "Accompagnement bienveillant vers plus d'autonomie au quotidien.",
      image: sch6,
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
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-8">
          {/* Left Column - Title (UNCHANGED) */}
          <div>
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
              className={`mt-4 text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              Chez F.B.C, nous aidons chaque élève, personne motivée ou en
              situation de fragilité à acquérir les compétences essentielles
              pour un avenir épanoui.
            </p>

            {/* Stats Mini (UNCHANGED) */}
            <div className="flex gap-6 mt-8">
              <div>
                <p
                  className={`text-2xl font-bold ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
                >
                  98%
                </p>
                <p
                  className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Satisfaction
                </p>
              </div>
              <div className="w-px bg-gray-300 dark:bg-gray-700" />
              <div>
                <p
                  className={`text-2xl font-bold ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
                >
                  4
                </p>
                <p
                  className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Domaines
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - 4 PHOTO CARDS (UPDATED) */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className={`group relative rounded-2xl overflow-hidden border transition-all duration-300 ${
                  isDarkMode
                    ? "bg-gray-800/60 border-gray-700 hover:border-[#D4AF37]/40"
                    : "bg-white border-gray-200 hover:border-[#0A2E5A]/30"
                } shadow-sm hover:shadow-xl`}
              >
                {/* ✅ PHOTO CARD - Image en haut de la carte */}
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay gradient pour lisibilité */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Badge icône coloré */}
                  <div
                    className="absolute bottom-3 left-3 w-9 h-9 rounded-lg flex items-center justify-center shadow-md"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}, ${feature.color}cc)`,
                    }}
                  >
                    <feature.icon size={18} className="text-white" />
                  </div>
                </div>

                {/* Content textuel */}
                <div className="p-4">
                  <h3
                    className={`text-base font-bold mb-1.5 ${
                      isDarkMode ? "text-white" : "text-[#0A2E5A]"
                    }`}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {feature.description}
                  </p>

                  {/* Flèche "En savoir plus" au hover */}
                  <div className="mt-2 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span
                      className={`text-xs font-medium ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
                    >
                      Découvrir
                    </span>
                    <ArrowRight
                      size={12}
                      className={
                        isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                      }
                    />
                  </div>
                </div>

                {/* Point décoratif en coin */}
                <div
                  className={`absolute top-3 right-3 w-1.5 h-1.5 rounded-full ${
                    isDarkMode ? "bg-[#D4AF37]/50" : "bg-[#0A2E5A]/30"
                  }`}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PurposeSection;
