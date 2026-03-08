import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Heart,
  Laptop,
  Users,
  ArrowRight,
  Sparkles,
  Shield,
  Award,
} from "lucide-react";
import { useState, useEffect } from "react";

const JourneySection = () => {
  const { isDarkMode } = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  //  Steps adaptés aux 4 domaines F.B.C + accompagnement
  const steps = [
    {
      icon: BookOpen,
      title: "Éducation",
      description: "Soutien scolaire personnalisé",
      color: "#0A2E5A",
    },
    {
      icon: Heart,
      title: "Santé & Secours",
      description: "Gestes d'urgence et prévention",
      color: "#D4AF37",
    },
    {
      icon: Laptop,
      title: "Numérique",
      description: "Compétences digitales essentielles",
      color: "#0A2E5A",
    },
    {
      icon: Users,
      title: "Inclusion",
      description: "Accompagnement vers l'autonomie",
      color: "#D4AF37",
    },
  ];

  //  Stats pertinentes pour F.B.C (remplacement de 10K+ Étudiants / 500+ Cours)
  const stats = [
    { value: "4", label: "Domaines de Formation" },
    { value: "98%", label: "Taux de Satisfaction" },
    { value: "500+", label: "Personnes Formées/an" },
    { value: "24/7", label: "Disponibilité Urgences" },
  ];

  // Auto-rotate steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section
      className={`relative overflow-hidden py-20 lg:py-28 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, ${isDarkMode ? "#fff" : "#0A2E5A"} 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${
              isDarkMode
                ? "bg-[#D4AF37]/20 text-[#D4AF37]"
                : "bg-[#0A2E5A]/10 text-[#0A2E5A]"
            }`}
          >
            <Sparkles size={14} />
            <span className="text-xs font-bold uppercase">Notre Approche</span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-bold ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Former, Accompagner, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              Autonomiser
            </span>
          </h2>

          <p
            className={`mt-4 text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Chez F.B.C, chaque personne trouve sa voie grâce à un accompagnement
            adapté à ses besoins et objectifs.
          </p>
        </motion.div>

        {/* Interactive Timeline */}
        <div className="relative mb-20">
          {/* Progress Line */}
          <div
            className={`absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 hidden md:block ${
              isDarkMode ? "bg-gray-800" : "bg-gray-200"
            }`}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#0A2E5A] to-[#D4AF37]"
              initial={{ width: "0%" }}
              whileInView={{
                width: `${((activeStep + 1) / steps.length) * 100}%`,
              }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Steps */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer group`}
              >
                {/* 3D Icon Circle */}
                <div
                  className={`w-20 h-20 lg:w-24 lg:h-24 mx-auto rounded-full flex items-center justify-center mb-4 transition-all duration-500 ${
                    activeStep === index ? "scale-110" : "scale-100"
                  }`}
                  style={{
                    background:
                      activeStep === index
                        ? `linear-gradient(135deg, ${step.color}, ${step.color}cc)`
                        : isDarkMode
                          ? "linear-gradient(135deg, #1f2937, #374151)"
                          : "linear-gradient(135deg, #f3f4f6, #e5e7eb)",
                    boxShadow:
                      activeStep === index
                        ? `0 12px 40px ${step.color}50, inset 0 2px 4px rgba(255,255,255,0.3)`
                        : isDarkMode
                          ? "0 4px 20px rgba(0,0,0,0.3)"
                          : "0 4px 15px rgba(0,0,0,0.1)",
                    border:
                      activeStep === index
                        ? `2px solid ${step.color}`
                        : isDarkMode
                          ? "2px solid #374151"
                          : "2px solid #e5e7eb",
                  }}
                >
                  <step.icon
                    size={36}
                    className={`transition-all duration-500 ${
                      activeStep === index
                        ? "text-white scale-110"
                        : isDarkMode
                          ? "text-gray-500"
                          : "text-gray-400"
                    }`}
                  />

                  {/* Step Number */}
                  <div
                    className={`absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                      activeStep === index
                        ? "bg-white text-[#0A2E5A]"
                        : isDarkMode
                          ? "bg-gray-700 text-gray-400"
                          : "bg-gray-200 text-gray-500"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Text */}
                <div className="text-center">
                  <h3
                    className={`font-bold text-lg mb-1 transition-colors ${
                      activeStep === index
                        ? isDarkMode
                          ? "text-white"
                          : "text-[#0A2E5A]"
                        : isDarkMode
                          ? "text-gray-500"
                          : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-sm transition-colors ${
                      activeStep === index
                        ? isDarkMode
                          ? "text-gray-300"
                          : "text-gray-600"
                        : isDarkMode
                          ? "text-gray-600"
                          : "text-gray-400"
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

                {/* Active Indicator */}
                {activeStep === index && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className={`absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full ${
                      isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"
                    }`}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Row - UPDATED */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 p-8 rounded-3xl ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50"
              : "bg-gradient-to-br from-gray-50 to-white border border-gray-200/50"
          } backdrop-blur-sm`}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div
                className={`text-3xl lg:text-4xl font-black mb-2 bg-gradient-to-r from-[#0A2E5A] to-[#D4AF37] bg-clip-text text-transparent group-hover:scale-110 transition-transform`}
              >
                {stat.value}
              </div>
              <div
                className={`text-sm font-medium ${
                  isDarkMode ? "text-gray-400" : "text-gray-500"
                }`}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0A2E5A 0%, #1a4a7a 100%)",
            }}
          >
            <span>Démarrer votre parcours</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
