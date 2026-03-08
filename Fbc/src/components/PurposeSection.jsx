import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import ajouté
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Laptop,
  Users,
  MessageCircle,
  Star,
  Sparkles,
  HeartHandshake,
  Target,
  Award,
  Lightbulb,
  GraduationCap,
  Clock,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import sch2 from "../assets/sch2.png";
import sch3 from "../assets/sch3.jpg";
import sch4 from "../assets/sch4.jpg";
import sch6 from "../assets/sch6.jpg";

const PurposeSection = () => {
  const { isDarkMode } = useTheme();
  const { scrollYProgress } = useScroll();
  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const navigate = useNavigate(); // ✅ Hook de navigation

  const features = [
    {
      icon: BookOpen,
      title: "Soutien Scolaire",
      description: "Accompagnement personnalisé pour élèves de tous niveaux.",
      image: sch2,
      color: "#0A2E5A",
      accent: "#D4AF37",
      details: [
        "Nos formateurs adaptent leurs méthodes pédagogiques au rythme et aux besoins spécifiques de chaque élève pour garantir une progression constante.",
        "Un suivi régulier et personnalisé permet d'identifier rapidement les difficultés et de célébrer chaque réussite, renforçant ainsi la motivation.",
        "Des évaluations formatives et des bilans périodiques mesurent les progrès concrets, offrant une visibilité claire sur l'évolution des compétences.",
      ],
    },
    {
      icon: MessageCircle,
      title: "Remédiation Linguistique",
      description:
        "Soutien en français et langues pour progresser à l'oral et à l'écrit.",
      image: sch4,
      color: "#D4AF37",
      accent: "#0A2E5A",
      details: [
        "Des ateliers d'expression orale en petits groupes permettent de pratiquer dans un environnement bienveillant, sans jugement, pour gagner en aisance.",
        "La grammaire et la conjugaison sont abordées de manière pratique et contextualisée, à travers des exercices concrets et des mises en situation réelles.",
        "Chaque participant développe progressivement sa confiance en lui, transformant l'apprentissage des langues en une expérience enrichissante et motivante.",
      ],
    },
    {
      icon: Laptop,
      title: "Compétences Numériques",
      description:
        "Initiation informatique et bureautique pour gagner en autonomie.",
      image: sch3,
      color: "#0A2E5A",
      accent: "#D4AF37",
      details: [
        "Maîtrisez les outils essentiels de bureautique comme Word, Excel et PowerPoint pour être efficace dans vos études, votre vie professionnelle et vos démarches administratives.",
        "Apprenez à naviguer sur internet en toute sécurité, à protéger vos données personnelles et à identifier les informations fiables dans un monde numérique en constante évolution.",
        "Découvrez les outils du quotidien : vidéoconférence, cloud, démarches en ligne... pour gagner en autonomie et rester connecté avec vos proches et vos opportunités.",
      ],
    },
    {
      icon: Users,
      title: "Inclusion & Autonomie",
      description:
        "Accompagnement bienveillant vers plus d'autonomie au quotidien.",
      image: sch6,
      color: "#D4AF37",
      accent: "#0A2E5A",
      details: [
        "Chaque parcours est conçu sur-mesure, en tenant compte des forces, des défis et des aspirations uniques de chaque personne, pour un accompagnement véritablement personnalisé.",
        "Nous créons un environnement sécurisant et encourageant où chacun peut oser, expérimenter et progresser à son rythme, sans pression ni comparaison.",
        "Des objectifs concrets et atteignables sont définis ensemble, transformant chaque petite victoire en un pas de plus vers une autonomie durable et épanouissante.",
      ],
    },
  ];

  const titleIcons = [
    {
      Icon: GraduationCap,
      color: "#0A2E5A",
      delay: 0,
      position: "left-0 top-0",
    },
    {
      Icon: HeartHandshake,
      color: "#D4AF37",
      delay: 0.2,
      position: "left-4 top-8",
    },
    {
      Icon: Lightbulb,
      color: "#0A2E5A",
      delay: 0.4,
      position: "right-4 top-4",
    },
    { Icon: Target, color: "#D4AF37", delay: 0.3, position: "right-0 top-12" },
    { Icon: Award, color: "#0A2E5A", delay: 0.5, position: "left-8 bottom-4" },
    { Icon: Clock, color: "#D4AF37", delay: 0.6, position: "right-8 bottom-8" },
    {
      Icon: Star,
      color: "#D4AF37",
      delay: 0.1,
      position: "left-12 top-1/2 -translate-y-1/2",
    },
    {
      Icon: Sparkles,
      color: "#0A2E5A",
      delay: 0.7,
      position: "right-12 top-1/2 -translate-y-1/2",
    },
  ];

  // ✅ Fonction de navigation fiable vers /contact
  const handleContactClick = (e) => {
    e.preventDefault(); // Empêche le comportement par défaut du lien
    navigate("/contact"); // Navigation programmatique fiable
  };

  // ✅ Fonction pour les ancres internes (#formations, etc.)
  const handleAnchorClick = (e, target) => {
    e.preventDefault();
    if (target.startsWith("#")) {
      // Navigation interne sur la page d'accueil
      if (window.location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(target);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  return (
    <section
      id="about"
      className={`relative w-full py-10 lg:py-20 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-b from-gray-50 to-white"
      }`}
    >
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className={`absolute top-0 left-0 w-full h-80 ${isDarkMode ? "bg-gradient-to-b from-[#0A2E5A]/10 to-transparent" : "bg-gradient-to-b from-[#0A2E5A]/5 to-transparent"}`}
        />
        <div
          className={`absolute bottom-0 right-0 w-full h-80 ${isDarkMode ? "bg-gradient-to-t from-[#D4AF37]/10 to-transparent" : "bg-gradient-to-t from-[#D4AF37]/5 to-transparent"}`}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 lg:mb-16 relative"
        >
          {titleIcons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{
                y: [0, -8, 0],
                rotate: [0, item.position.includes("left") ? 10 : -10, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: item.delay,
              }}
              className={`absolute hidden lg:flex ${item.position} pointer-events-none z-10`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center ${isDarkMode ? "bg-gray-800/60" : "bg-white/60"} backdrop-blur-sm border ${isDarkMode ? "border-gray-700" : "border-gray-200"} shadow-lg`}
                style={{ boxShadow: `0 6px 24px ${item.color}30` }}
              >
                <item.Icon
                  size={24}
                  style={{ color: item.color }}
                  className="opacity-95"
                />
              </div>
            </motion.div>
          ))}

          <div
            className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-6 mx-auto ${isDarkMode ? "bg-[#0A2E5A]/30 text-[#D4AF37] border border-[#D4AF37]/30" : "bg-[#0A2E5A]/10 text-[#0A2E5A] border border-[#0A2E5A]/20"}`}
          >
            <Sparkles size={15} className="fill-current" />
            <span className="text-xs font-bold uppercase tracking-wider">
              NOTRE MISSION
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
          >
            Former, Accompagner, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              Autonomiser
            </span>
          </h2>

          <p
            className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Chez F.B.C, nous aidons chaque élève, personne motivée ou en
            situation de fragilité à acquérir les compétences essentielles pour
            un avenir épanoui.
          </p>

          <div className="flex justify-center gap-6 lg:gap-10 mt-8">
            <div className="text-center">
              <p
                className={`text-3xl lg:text-4xl font-black ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
              >
                98%
              </p>
              <p
                className={`text-xs font-medium uppercase tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Satisfaction
              </p>
            </div>
            <div className={`w-px bg-gray-300 dark:bg-gray-700`} />
            <div className="text-center">
              <p
                className={`text-3xl lg:text-4xl font-black ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
              >
                4
              </p>
              <p
                className={`text-xs font-medium uppercase tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Domaines
              </p>
            </div>
            <div className={`w-px bg-gray-300 dark:bg-gray-700`} />
            <div className="text-center">
              <p
                className={`text-3xl lg:text-4xl font-black ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
              >
                100%
              </p>
              <p
                className={`text-xs font-medium uppercase tracking-wide ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
              >
                Engagement
              </p>
            </div>
          </div>
        </motion.div>

        <div className="space-y-10 lg:space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center"
            >
              <div className="relative">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  className={`relative rounded-3xl overflow-hidden shadow-2xl ${isDarkMode ? "shadow-[#0A2E5A]/20" : "shadow-[#0A2E5A]/10"}`}
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-64 lg:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="absolute bottom-5 left-5 flex items-center gap-3"
                  >
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${feature.color}, ${feature.accent})`,
                      }}
                    >
                      <feature.icon size={26} className="text-white" />
                    </div>
                    <div className="hidden sm:block">
                      <p className="text-white font-bold text-lg">
                        {feature.title}
                      </p>
                      <p className="text-white/80 text-sm">
                        {feature.details[0].substring(0, 40)}...
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </div>

              <div className="order-2 lg:order-none space-y-5">
                <div className="flex items-start gap-4">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${feature.color}25, ${feature.color}40)`,
                      border: `2px solid ${feature.color}50`,
                    }}
                  >
                    <feature.icon size={30} style={{ color: feature.color }} />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl lg:text-3xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className={`text-base lg:text-lg leading-relaxed ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  {feature.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isDarkMode ? "bg-[#D4AF37]/20" : "bg-[#0A2E5A]/20"}`}
                      >
                        <Star
                          size={14}
                          className={
                            isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                          }
                        />
                      </div>
                      <p
                        className={`text-sm leading-relaxed ${isDarkMode ? "text-gray-200" : "text-gray-700"}`}
                      >
                        {detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {index < features.length - 1 && (
                <div className="hidden lg:block absolute left-1/2 top-full -translate-x-1/2 w-px h-12 bg-gradient-to-b from-[#0A2E5A]/20 to-transparent" />
              )}
            </motion.div>
          ))}
        </div>

        {/* ✅ CTA Section - Navigation corrigée */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`mt-14 lg:mt-20 p-6 lg:p-10 rounded-3xl ${isDarkMode ? "bg-gradient-to-r from-[#0A2E5A]/30 to-[#D4AF37]/20 border border-[#D4AF37]/30" : "bg-gradient-to-r from-[#0A2E5A]/10 to-[#D4AF37]/10 border border-[#0A2E5A]/20"} backdrop-blur-sm`}
        >
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3
                className={`text-xl lg:text-2xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                Prêt à commencer votre parcours ?
              </h3>
              <p
                className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
              >
                Nos équipes sont là pour vous accompagner. Premier entretien
                gratuit et sans engagement.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              {/* ✅ Bouton Contacter - Navigation fiable */}
              <motion.button
                onClick={handleContactClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white transition-all shadow-md hover:shadow-lg cursor-pointer"
                style={{
                  background:
                    "linear-gradient(135deg, #0A2E5A 0%, #1a4a7a 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                }}
              >
                <Sparkles size={17} className="fill-white" /> Nous contacter
              </motion.button>

              {/* ✅ Bouton Voir les formations - Ancre interne */}
              <motion.button
                onClick={(e) => handleAnchorClick(e, "#formations")}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold transition-all border cursor-pointer ${isDarkMode ? "border-[#D4AF37]/40 text-[#D4AF37] hover:bg-[#D4AF37]/10" : "border-[#0A2E5A]/40 text-[#0A2E5A] hover:bg-[#0A2E5A]/10"}`}
              >
                Voir les formations{" "}
                <Star
                  size={16}
                  className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
                />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              x: [0, i % 2 === 0 ? 15 : -15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
            className={`absolute w-2 h-2 rounded-full ${i % 2 === 0 ? (isDarkMode ? "bg-[#D4AF37]/30" : "bg-[#D4AF37]/15") : isDarkMode ? "bg-[#0A2E5A]/30" : "bg-[#0A2E5A]/15"}`}
            style={{ top: `${15 + i * 10}%`, left: `${5 + i * 12}%` }}
          />
        ))}
      </div>
    </section>
  );
};

export default PurposeSection;
