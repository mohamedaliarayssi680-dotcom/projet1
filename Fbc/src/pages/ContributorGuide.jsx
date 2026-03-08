"use client";

import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Target,
  BookOpen,
  Clock,
  HeartHandshake,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const SuccessGuideSection = () => {
  const { isDarkMode } = useTheme();

  // 5 étapes simples et visuelles
  const steps = [
    {
      step: 1,
      icon: Target,
      title: "Définir",
      text: "Votre objectif clair",
      tip: "Ex: 'Monter à 14/20 en Maths'",
    },
    {
      step: 2,
      icon: BookOpen,
      title: "Apprendre",
      text: "Avec méthode",
      tip: "Fiches, exercices, répétition",
    },
    {
      step: 3,
      icon: Clock,
      title: "Organiser",
      text: "Votre temps",
      tip: "Planning réaliste et flexible",
    },
    {
      step: 4,
      icon: HeartHandshake,
      title: "Persévérer",
      text: "Avec soutien",
      tip: "On est là à chaque étape",
    },
    {
      step: 5,
      icon: GraduationCap,
      title: "Réussir",
      text: "Et célébrer",
      tip: "Chaque progrès compte ✨",
    },
  ];

  // Conseils rapides
  const quickTips = [
    { icon: Sparkles, text: "15 min par jour > 3h une fois par semaine" },
    {
      icon: CheckCircle2,
      text: "Faites des pauses : 25 min travail / 5 min repos",
    },
    {
      icon: HeartHandshake,
      text: "Parlez de vos difficultés : on avance ensemble",
    },
  ];

  return (
    <section
      className={`relative py-20 lg:py-28 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background subtil */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${isDarkMode ? "#D4AF37" : "#0A2E5A"} 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mx-auto ${
              isDarkMode
                ? "bg-[#0A2E5A]/30 text-[#D4AF37] border border-[#D4AF37]/30"
                : "bg-[#0A2E5A]/10 text-[#0A2E5A] border border-[#0A2E5A]/20"
            }`}
          >
            <Sparkles size={14} className="fill-current" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Guide Express
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-black ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Votre réussite, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              étape par étape
            </span>
          </h2>
        </motion.div>

        {/* Steps Timeline - Visual & Simple */}
        <div className="relative mb-20">
          {/* Progress Line */}
          <div
            className={`absolute top-8 left-8 right-8 h-0.5 -z-10 hidden md:block ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#0A2E5A] to-[#D4AF37]"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${index % 2 === 0 ? "#0A2E5A" : "#D4AF37"}25, ${index % 2 === 0 ? "#0A2E5A" : "#D4AF37"}40)`,
                    border: `2px solid ${index % 2 === 0 ? "#0A2E5A" : "#D4AF37"}50`,
                  }}
                >
                  <item.icon
                    size={28}
                    className={
                      index % 2 === 0 ? "text-[#0A2E5A]" : "text-[#D4AF37]"
                    }
                  />
                </div>

                {/* Step Number */}
                <div
                  className={`absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold ${
                    isDarkMode
                      ? "bg-gray-800 text-[#D4AF37]"
                      : "bg-white text-[#0A2E5A]"
                  } shadow-md border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
                >
                  {item.step}
                </div>

                {/* Content */}
                <h3
                  className={`font-bold text-lg mb-1 ${
                    isDarkMode ? "text-white" : "text-[#0A2E5A]"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm mb-2 ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {item.text}
                </p>
                <p
                  className={`text-xs italic ${
                    isDarkMode ? "text-gray-500" : "text-gray-400"
                  }`}
                >
                  "{item.tip}"
                </p>

                {/* Arrow connector for mobile */}
                {index < steps.length - 1 && (
                  <ArrowRight
                    className={`md:hidden w-5 h-5 mx-auto my-2 ${
                      isDarkMode ? "text-gray-700" : "text-gray-300"
                    }`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quick Tips - Minimal Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16"
        >
          {quickTips.map((tip, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className={`flex items-center gap-3 p-4 rounded-xl ${
                isDarkMode
                  ? "bg-gray-800/40 border border-gray-700/40"
                  : "bg-gray-50/40 border border-gray-200/40"
              }`}
            >
              <tip.icon
                size={20}
                className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
              />
              <span
                className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
              >
                {tip.text}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p
            className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Besoin d'un guide personnalisé ?
          </p>
          <p
            className={`mt-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Parlons de votre parcours lors d'un entretien gratuit.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessGuideSection;
