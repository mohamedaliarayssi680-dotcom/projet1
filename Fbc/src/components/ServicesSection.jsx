import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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
  const { scrollY } = useScroll();

  // Parallax effect for icons
  const y1 = useTransform(scrollY, [0, 500], [0, -30]);
  const y2 = useTransform(scrollY, [0, 500], [0, 30]);
  const y3 = useTransform(scrollY, [0, 500], [0, -20]);

  // ✅ Services adaptés aux 4 domaines F.B.C + soutien linguistique & orientation
  const services = [
    {
      icon: BookOpen,
      title: "Soutien Scolaire",
      tag: "Tous niveaux",
      color: "#0A2E5A",
      delay: 0,
    },
    {
      icon: Heart,
      title: "Santé & Secours",
      tag: "Gestes d'urgence",
      color: "#D4AF37",
      delay: 0.1,
    },
    {
      icon: Laptop,
      title: "Compétences Numériques",
      tag: "Bureautique • Internet",
      color: "#0A2E5A",
      delay: 0.2,
    },
    {
      icon: Users,
      title: "Inclusion & Autonomie",
      tag: "Accompagnement personnalisé",
      color: "#D4AF37",
      delay: 0.3,
    },
    {
      icon: MessageCircle,
      title: "Remédiation Linguistique",
      tag: "Français • Langues",
      color: "#0A2E5A",
      delay: 0.4,
    },
    {
      icon: Target,
      title: "Orientation & Projet Pro",
      tag: "Conseil personnalisé",
      color: "#D4AF37",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="formations"
      className={`relative py-24 lg:py-32 overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Minimal Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#0A2E5A]/20" : "bg-[#0A2E5A]/5"
          }`}
        />
        <div
          className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full blur-3xl ${
            isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#D4AF37]/5"
          }`}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - Ultra Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 justify-center mb-4">
            <Sparkles
              size={16}
              className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
            />
            <span
              className={`text-xs font-bold uppercase tracking-wider ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
            >
              Nos Domaines
            </span>
          </div>

          <h2
            className={`text-4xl md:text-6xl font-black mb-3 ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              formations
            </span>
          </h2>
          <p
            className={`text-lg ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Simples. Efficaces. Personnalisées.
          </p>
        </motion.div>

        {/* 3D Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: service.delay, duration: 0.5 }}
              whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
              className="group relative"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Card */}
              <div
                className={`relative rounded-3xl p-8 h-64 flex flex-col justify-between transition-all duration-500 cursor-pointer ${
                  isDarkMode
                    ? "bg-gray-800/40 border border-gray-700/40 hover:border-[#D4AF37]/40"
                    : "bg-gray-50/40 border border-gray-200/40 hover:border-[#0A2E5A]/30"
                } backdrop-blur-sm shadow-lg hover:shadow-2xl`}
              >
                {/* 3D Icon - Floating */}
                <motion.div
                  style={{
                    y: index % 2 === 0 ? y1 : index % 3 === 0 ? y2 : y3,
                  }}
                  className="relative"
                >
                  <div
                    className="w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                    style={{
                      background: `linear-gradient(145deg, ${service.color}25, ${service.color}40)`,
                      boxShadow: `
                        0 20px 50px ${service.color}35,
                        inset 0 2px 4px rgba(255,255,255,0.4),
                        inset 0 -2px 4px rgba(0,0,0,0.15)
                      `,
                      border: `2px solid ${service.color}50`,
                    }}
                  >
                    <service.icon
                      size={36}
                      className="transition-transform duration-500 group-hover:rotate-6"
                      style={{
                        color: service.color,
                        filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3))",
                      }}
                    />
                  </div>

                  {/* Floating particles */}
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`absolute -top-2 -right-2 w-4 h-4 rounded-full ${
                      isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"
                    } opacity-60`}
                  />
                </motion.div>

                {/* Content - Minimal */}
                <div>
                  <h3
                    className={`text-xl font-bold mb-1 ${
                      isDarkMode ? "text-white" : "text-[#0A2E5A]"
                    }`}
                  >
                    {service.title}
                  </h3>
                  <span
                    className={`text-sm font-medium ${
                      isDarkMode ? "text-gray-400" : "text-gray-500"
                    }`}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Arrow Indicator */}
                <div
                  className={`self-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                  }`}
                >
                  <ArrowUpRight
                    size={24}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </div>

                {/* Glow on Hover */}
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${service.color}20 0%, transparent 60%)`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Minimal CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-20"
        >
          <a
            href="/contact"
            className={`inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              isDarkMode
                ? "text-[#D4AF37] hover:text-[#F2D06B] border border-[#D4AF37]/30 hover:border-[#D4AF37]/60"
                : "text-[#0A2E5A] hover:text-[#D4AF37] border border-[#0A2E5A]/20 hover:border-[#0A2E5A]/40"
            }`}
          >
            <span>Découvrir nos formations</span>
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
