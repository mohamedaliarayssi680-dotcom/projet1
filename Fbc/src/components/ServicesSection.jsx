import React from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Heart,
  Laptop,
  Users,
  MessageCircle,
  Target,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const ServicesSection = () => {
  const { isDarkMode } = useTheme();

  const services = [
    {
      icon: BookOpen,
      title: "Soutien Scolaire",
      tag: "Tous niveaux",
      color: "#0A2E5A",
      delay: 0,
      phrase:
        "Des méthodes adaptées transforment chaque difficulté en opportunité de progression, avec un accompagnement qui valorise le potentiel unique de chacun.",
    },
    {
      icon: Heart,
      title: "Santé & Secours",
      tag: "Gestes d'urgence",
      color: "#D4AF37",
      delay: 0.1,
      phrase:
        "Apprendre les gestes qui sauvent, c'est gagner en confiance pour protéger ses proches et intervenir avec calme et efficacité en situation critique.",
    },
    {
      icon: Laptop,
      title: "Compétences Numériques",
      tag: "Bureautique • Internet",
      color: "#0A2E5A",
      delay: 0.2,
      phrase:
        "Maîtriser les outils digitaux ouvre des portes : autonomie dans les démarches, efficacité professionnelle et connexion avec les opportunités de demain.",
    },
    {
      icon: Users,
      title: "Inclusion & Autonomie",
      tag: "Accompagnement personnalisé",
      color: "#D4AF37",
      delay: 0.3,
      phrase:
        "Chaque parcours est construit ensemble, dans un environnement bienveillant où l'on ose avancer à son rythme vers des objectifs concrets et épanouissants.",
    },
    {
      icon: MessageCircle,
      title: "Remédiation Linguistique",
      tag: "Français • Langues",
      color: "#0A2E5A",
      delay: 0.4,
      phrase:
        "Retrouver l'aisance à l'oral et à l'écrit, c'est reprendre confiance en sa capacité à s'exprimer, à partager ses idées et à s'ouvrir au monde.",
    },
    {
      icon: Target,
      title: "Orientation & Projet Pro",
      tag: "Conseil personnalisé",
      color: "#D4AF37",
      delay: 0.5,
      phrase:
        "Clarifier ses aspirations et définir un plan d'action concret permet de transformer ses rêves en étapes réalistes vers une carrière épanouissante.",
    },
  ];

  return (
    <section
      id="formations"
      className={`relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-white"}`}
    >
      {/*  Full-width rectangular frame for header */}
      <div
        className={`w-full py-12 lg:py-16 ${
          isDarkMode
            ? "bg-gradient-to-r from-[#0A2E5A]/30 via-[#0A2E5A]/20 to-[#D4AF37]/20 border-y border-[#D4AF37]/20"
            : "bg-gradient-to-r from-[#0A2E5A]/10 via-[#0A2E5A]/5 to-[#D4AF37]/10 border-y border-[#0A2E5A]/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 justify-center mb-4"
          >
            <Sparkles
              size={16}
              className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
            />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
            >
              Nos Domaines
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`text-4xl md:text-5xl font-black mb-3 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
          >
            Nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              formations
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`text-base max-w-2xl mx-auto ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Simples. Efficaces. Personnalisées.
          </motion.p>
        </div>
      </div>

      {/* Decorative background blobs */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div
          className={`absolute top-20 left-1/4 w-80 h-80 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#0A2E5A]/20" : "bg-[#0A2E5A]/5"
          }`}
        />
        <div
          className={`absolute bottom-20 right-1/4 w-72 h-72 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/5"
          }`}
        />
      </div>

      {/* Cards Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative"
            >
              <div
                className={`relative rounded-2xl p-6 h-auto min-h-[290px] flex flex-col transition-all duration-400 cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-800/50 border border-gray-700/50 hover:border-[#D4AF37]/50"
                    : "bg-gray-50/50 border border-gray-200/50 hover:border-[#0A2E5A]/40"
                } backdrop-blur-sm shadow-md hover:shadow-xl`}
              >
                {/*  Icon - FIXED POSITION (same for all cards) */}
                <div className="relative mb-5">
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-400 group-hover:scale-105"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}20, ${service.color}35)`,
                      boxShadow: `0 12px 35px ${service.color}25`,
                      border: `2px solid ${service.color}45`,
                    }}
                  >
                    <service.icon
                      size={30}
                      className="transition-transform duration-400"
                      style={{
                        color: service.color,
                        filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.25))",
                      }}
                    />
                  </div>
                  <motion.div
                    animate={{
                      scale: [1, 1.15, 1],
                      opacity: [0.5, 0.9, 0.5],
                    }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                    className={`absolute -top-1.5 -right-1.5 w-3.5 h-3.5 rounded-full ${
                      isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"
                    } opacity-55`}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div>
                    <h3
                      className={`text-lg font-bold mb-1.5 ${
                        isDarkMode ? "text-white" : "text-[#0A2E5A]"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-lg ${
                        isDarkMode
                          ? "bg-[#0A2E5A]/20 text-[#D4AF37]"
                          : "bg-[#0A2E5A]/10 text-[#0A2E5A]"
                      }`}
                    >
                      {service.tag}
                    </span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed ${
                      isDarkMode ? "text-gray-300" : "text-gray-600"
                    }`}
                  >
                    {service.phrase}
                  </p>
                </div>

                {/* Arrow Indicator */}
                <div
                  className={`self-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                  }`}
                >
                  <ArrowUpRight
                    size={20}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </div>

                {/* Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 25% 25%, ${service.color}15 0%, transparent 65%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-14"
        >
          <a
            href="/contact"
            className={`inline-flex items-center gap-2.5 px-5.5 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isDarkMode
                ? "text-[#D4AF37] hover:text-[#F2D06B] border border-[#D4AF37]/35 hover:border-[#D4AF37]/60"
                : "text-[#0A2E5A] hover:text-[#D4AF37] border border-[#0A2E5A]/25 hover:border-[#0A2E5A]/45"
            }`}
          >
            <span>Découvrir nos formations</span>
            <ArrowUpRight
              size={17}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
