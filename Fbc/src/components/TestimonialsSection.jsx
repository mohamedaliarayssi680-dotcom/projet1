import { motion, useInView } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  HeartHandshake,
  Lightbulb,
  Target,
  Sparkles,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  Users,
  Shield,
  BookOpen,
  Heart,
  GraduationCap,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { useRef } from "react";

import sch30 from "../assets/sch30.jpeg";
import tunisiaFlag from "../assets/sch10.jpg";

const TunisiaSuccessSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const commitments = [
    {
      icon: HeartHandshake,
      title: "Écoute Active",
      desc: "Chaque personne est unique, nous adaptons notre approche.",
      color: "#D4AF37",
    },
    {
      icon: Lightbulb,
      title: "Méthodes Innovantes",
      desc: "Pédagogie moderne, outils interactifs, apprentissage vivant.",
      color: "#0A2E5A",
    },
    {
      icon: Target,
      title: "Objectifs Clairs",
      desc: "Des étapes concrètes pour avancer en confiance.",
      color: "#D4AF37",
    },
    {
      icon: Shield,
      title: "Bienveillance",
      desc: "Un environnement sécurisant pour oser progresser.",
      color: "#0A2E5A",
    },
  ];

  const vision = [
    { year: "2025", label: "Lancement F.B.C", icon: Calendar },
    { year: "2026", label: "Déploiement Régional", icon: MapPin },
    { year: "2027", label: "Innovation Pédagogique", icon: Lightbulb },
    { year: "2028", label: "Impact National", icon: Target },
    { year: "2029", label: "Excellence Reconnue", icon: Sparkles },
  ];

  const decorativeIcons = [
    { Icon: BookOpen, color: "#0A2E5A", delay: 0, position: "left-4 top-8" },
    { Icon: Heart, color: "#D4AF37", delay: 0.2, position: "right-4 top-12" },
    {
      Icon: GraduationCap,
      color: "#0A2E5A",
      delay: 0.4,
      position: "left-6 bottom-20",
    },
    {
      Icon: MessageCircle,
      color: "#D4AF37",
      delay: 0.6,
      position: "right-6 bottom-16",
    },
    {
      Icon: Users,
      color: "#0A2E5A",
      delay: 0.3,
      position: "left-8 top-1/2 -translate-y-1/2",
    },
    {
      Icon: Sparkles,
      color: "#D4AF37",
      delay: 0.5,
      position: "right-8 top-1/2 -translate-y-1/2",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className={`relative py-16 lg:py-24 overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-b from-gray-50 to-white"}`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${isDarkMode ? "#D4AF37" : "#0A2E5A"} 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/*  HEADER EXPANDÉ - Flag + Titre plein écran */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="w-full mb-14 lg:mb-20"
        >
          {/* Full-width banner with flag */}
          <div
            className={`w-full rounded-3xl p-6 lg:p-10 ${
              isDarkMode
                ? "bg-gradient-to-r from-[#0A2E5A]/40 via-[#0A2E5A]/30 to-[#D4AF37]/30 border border-[#D4AF37]/30"
                : "bg-gradient-to-r from-[#0A2E5A]/15 via-[#0A2E5A]/10 to-[#D4AF37]/15 border border-[#0A2E5A]/20"
            } backdrop-blur-sm`}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-10">
              {/* Flag + Text - Left side */}
              <div className="flex items-center gap-5">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
                >
                  <div
                    className={`rounded-2xl overflow-hidden shadow-xl border-4 ${
                      isDarkMode ? "border-[#D4AF37]/40" : "border-[#0A2E5A]/20"
                    }`}
                  >
                    <img
                      src={tunisiaFlag}
                      alt="Drapeau de la Tunisie"
                      className="w-20 h-14 sm:w-28 sm:h-20 object-cover"
                    />
                  </div>
                  {/* Animated glow around flag */}
                  <motion.div
                    animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className={`absolute inset-0 rounded-2xl blur-xl ${
                      isDarkMode ? "bg-[#D4AF37]/30" : "bg-[#0A2E5A]/20"
                    }`}
                  />
                </motion.div>

                <div className="text-left">
                  <div
                    className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-2 ${
                      isDarkMode
                        ? "bg-[#0A2E5A]/40 text-[#D4AF37] border border-[#D4AF37]/30"
                        : "bg-[#0A2E5A]/15 text-[#0A2E5A] border border-[#0A2E5A]/20"
                    }`}
                  >
                    <Sparkles size={13} className="fill-current" />
                    <span className="text-xs font-bold uppercase tracking-wider">
                      Notre Engagement
                    </span>
                  </div>
                  <h2
                    className={`text-2xl lg:text-3xl font-black ${
                      isDarkMode ? "text-white" : "text-[#0A2E5A]"
                    }`}
                  >
                    Une école qui{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
                      vous ressemble
                    </span>
                  </h2>
                </div>
              </div>

              {/* Description + Stats - Right side */}
              <div className="text-center lg:text-right">
                <p
                  className={`text-base lg:text-lg max-w-md mb-4 ${
                    isDarkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  Chez F.B.C, nous croyons que chaque personne mérite une chance
                  de progresser. Notre force ? L'humain avant tout.
                </p>
                <div className="flex justify-center lg:justify-end gap-6">
                  <div className="text-center">
                    <p
                      className={`text-2xl font-black ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
                    >
                      98%
                    </p>
                    <p
                      className={`text-xs ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      Satisfaction
                    </p>
                  </div>
                  <div className={`w-px bg-gray-300 dark:bg-gray-700`} />
                  <div className="text-center">
                    <p
                      className={`text-2xl font-black ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
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
            </div>
          </div>
        </motion.div>

        {/*  IMAGE sch30.jpeg - PRÉSENTATION MODERNE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-14 lg:mb-20"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Main Image Card - Modern split layout */}
            <div
              className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                isDarkMode
                  ? "bg-gray-800/60 border border-gray-700/50"
                  : "bg-white border border-gray-200/50"
              } backdrop-blur-sm`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                {/* Image side - Left */}
                <div className="relative h-72 lg:h-auto lg:min-h-[400px]">
                  <img
                    src={sch30}
                    alt="L'équipe F.B.C à vos côtés"
                    className="w-full h-full object-cover"
                  />
                  {/* Gradient overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent lg:bg-gradient-to-r" />

                  {/* Floating badge on image */}
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-5 left-5 flex items-center gap-3"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center shadow-lg">
                      <Users className="w-7 h-7 text-white" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-white font-bold text-lg">
                        Notre Équipe
                      </p>
                      <p className="text-white/85 text-sm">
                        Engagée • Bienveillante • Expert
                      </p>
                    </div>
                  </motion.div>

                  {/* Decorative floating icons on image */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(3)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0.4, 0.8, 0.4],
                        }}
                        transition={{
                          duration: 4 + i,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: i * 0.5,
                        }}
                        className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? "bg-[#D4AF37]/60" : "bg-[#0A2E5A]/60"}`}
                        style={{
                          top: `${30 + i * 20}%`,
                          left: `${20 + i * 15}%`,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content side - Right */}
                <div className="p-6 lg:p-8 flex flex-col justify-center">
                  <div className="space-y-5">
                    <div>
                      <h3
                        className={`text-2xl lg:text-3xl font-bold mb-3 ${
                          isDarkMode ? "text-white" : "text-[#0A2E5A]"
                        }`}
                      >
                        Une équipe à votre écoute
                      </h3>
                      <p
                        className={`text-base leading-relaxed ${
                          isDarkMode ? "text-gray-300" : "text-gray-600"
                        }`}
                      >
                        Nos formateurs certifiés et bienveillants vous
                        accompagnent pas à pas, avec des méthodes adaptées à
                        votre rythme et vos objectifs.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          icon: CheckCircle2,
                          text: "Accompagnement sur-mesure",
                        },
                        { icon: CheckCircle2, text: "Suivi régulier" },
                        { icon: CheckCircle2, text: "Méthodes adaptées" },
                        {
                          icon: CheckCircle2,
                          text: "Environnement bienveillant",
                        },
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4 + idx * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <item.icon
                            size={16}
                            className={
                              isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                            }
                          />
                          <span
                            className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                          >
                            {item.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    <motion.a
                      href="contact"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg"
                      style={{
                        background:
                          "linear-gradient(135deg, #0A2E5A 0%, #1a4a7a 100%)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                      }}
                    >
                      Nous contacter <ArrowUpRight size={16} />
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative icons around image */}
            {decorativeIcons.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: 1 }}
                animate={{
                  y: [0, -8, 0],
                  rotate: [0, item.position.includes("left") ? 8 : -8, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: item.delay,
                }}
                className={`absolute ${item.position} pointer-events-none z-10 hidden lg:flex`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? "bg-gray-800/70" : "bg-white/70"} backdrop-blur-sm border ${isDarkMode ? "border-gray-700" : "border-gray-200"} shadow-lg`}
                  style={{ boxShadow: `0 6px 24px ${item.color}25` }}
                >
                  <item.Icon
                    size={22}
                    style={{ color: item.color }}
                    className="opacity-90"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/*  Commitments Cards - Grid 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-14 lg:mb-20">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-5 lg:p-6 rounded-2xl ${
                isDarkMode
                  ? "bg-gray-800/50 border border-gray-700/50 hover:border-[#D4AF37]/50"
                  : "bg-white/60 border border-gray-200/50 hover:border-[#0A2E5A]/40"
              } backdrop-blur-sm shadow-md hover:shadow-lg transition-all`}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}35)`,
                  boxShadow: `0 10px 30px ${item.color}25`,
                  border: `2px solid ${item.color}40`,
                }}
              >
                <item.icon size={28} style={{ color: item.color }} />
              </div>
              <h3
                className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                {item.desc}
              </p>
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${item.color}15 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/*  Two Columns: Why Choose + Vision Timeline */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 mb-14 lg:mb-20">
          {/* Left: Why Choose F.B.C */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`p-6 lg:p-8 rounded-3xl ${
              isDarkMode
                ? "bg-gradient-to-br from-[#0A2E5A]/30 to-[#D4AF37]/20 border border-[#D4AF37]/30"
                : "bg-gradient-to-br from-[#0A2E5A]/10 to-[#D4AF37]/10 border border-[#0A2E5A]/20"
            } backdrop-blur-sm`}
          >
            <h3
              className={`text-xl lg:text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
            >
              Pourquoi nous choisir ?
            </h3>
            <div className="space-y-4">
              {[
                { icon: CheckCircle2, text: "Accompagnement sur-mesure" },
                {
                  icon: CheckCircle2,
                  text: "Formateurs certifiés et bienveillants",
                },
                { icon: CheckCircle2, text: "Méthodes adaptées à chacun" },
                { icon: CheckCircle2, text: "Suivi régulier et transparent" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon
                    size={20}
                    className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
                  />
                  <span
                    className={`text-sm font-medium ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                  >
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Vision Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`p-6 lg:p-8 rounded-3xl ${
              isDarkMode
                ? "bg-gray-800/50 border border-gray-700/50"
                : "bg-white/60 border border-gray-200/50"
            } backdrop-blur-sm`}
          >
            <h3
              className={`text-xl lg:text-2xl font-bold mb-6 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
            >
              Notre Vision
            </h3>
            <div className="relative">
              <div
                className={`absolute left-6 top-4 bottom-4 w-0.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
              />
              <div className="space-y-5">
                {vision.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center gap-4"
                  >
                    <div
                      className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center ${
                        isDarkMode
                          ? "bg-gray-900 border border-gray-600"
                          : "bg-white border border-gray-200"
                      } shadow-md`}
                    >
                      <item.icon size={20} className="text-[#D4AF37]" />
                    </div>
                    <div>
                      <p
                        className={`text-sm font-bold ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
                      >
                        {item.year}
                      </p>
                      <p
                        className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {item.label}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/*  Bottom Banner - Full width, modern */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-3xl p-6 lg:p-10 ${
            isDarkMode
              ? "bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a] border border-[#D4AF37]/30"
              : "bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a]"
          }`}
        >
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src={tunisiaFlag}
                alt="Tunisie"
                className="w-18 h-12 rounded-lg shadow-lg border border-white/25"
              />
              <div>
                <h4 className="text-white font-bold text-lg lg:text-xl">
                  Fierté Tunisienne
                </h4>
                <p className="text-white/85 text-sm">
                  Une école conçue pour nos réalités
                </p>
              </div>
            </div>

            <div className="flex items-center gap-5 lg:gap-8">
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-black text-[#D4AF37]">
                  100%
                </p>
                <p className="text-white/75 text-xs">Engagement</p>
              </div>
              <div className="w-px h-12 bg-white/25" />
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-black text-[#D4AF37]">
                  Humain
                </p>
                <p className="text-white/75 text-xs">Au cœur</p>
              </div>
              <div className="w-px h-12 bg-white/25" />
              <div className="text-center">
                <p className="text-2xl lg:text-3xl font-black text-[#D4AF37]">
                  Proximité
                </p>
                <p className="text-white/75 text-xs">Garantie</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA - Centered, prominent */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mt-12 lg:mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-white transition-all shadow-xl hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0A2E5A 0%, #1a4a7a 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <Sparkles size={18} className="fill-white" />
            <span>Rejoignez l'aventure F.B.C</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </motion.a>
          <p
            className={`mt-4 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Premier entretien gratuit • Réponse sous 24h • Sans engagement
          </p>
        </motion.div>
      </div>

      {/* Floating decorative particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              x: [0, i % 2 === 0 ? 20 : -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 12 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0
                ? isDarkMode
                  ? "bg-[#D4AF37]/35"
                  : "bg-[#D4AF37]/20"
                : isDarkMode
                  ? "bg-[#0A2E5A]/35"
                  : "bg-[#0A2E5A]/20"
            }`}
            style={{
              top: `${10 + i * 9}%`,
              left: `${5 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default TunisiaSuccessSection;
