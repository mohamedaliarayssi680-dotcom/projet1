"use client";

import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  Users,
  Target,
  HeartHandshake,
  GraduationCap,
  Lightbulb,
  Clock,
  Award,
  MessageCircle,
  TrendingUp,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const TeachingTeamSection = () => {
  const { isDarkMode } = useTheme();

  // Compétences clés de nos formateurs
  const expertise = [
    {
      icon: BookOpen,
      title: "Expertise Pédagogique",
      description:
        "Nos formateurs sont sélectionnés pour leur maîtrise des programmes officiels et leur capacité à adapter leur enseignement à chaque profil d'étudiant.",
      points: [
        "Connaissance approfondie des programmes",
        "Méthodes d'enseignement variées",
        "Adaptation au rythme de chacun",
      ],
      color: "#0A2E5A",
    },
    {
      icon: HeartHandshake,
      title: "Accompagnement Bienveillant",
      description:
        "Au-delà des cours, nos enseignants créent un climat de confiance où chaque étudiant se sent écouté, compris et encouragé dans sa progression.",
      points: [
        "Écoute active et empathie",
        "Encouragement personnalisé",
        "Suivi émotionnel et motivation",
      ],
      color: "#D4AF37",
    },
    {
      icon: Target,
      title: "Objectifs Clairs & Mesurables",
      description:
        "Chaque parcours commence par une évaluation précise pour définir des objectifs concrets, suivis régulièrement pour garantir la progression.",
      points: [
        "Diagnostic initial personnalisé",
        "Objectifs SMART définis ensemble",
        "Bilans de progression mensuels",
      ],
      color: "#0A2E5A",
    },
    {
      icon: Lightbulb,
      title: "Méthodes Innovantes",
      description:
        "Nous combinons pédagogie traditionnelle et outils numériques interactifs pour rendre l'apprentissage engageant, efficace et mémorable.",
      points: [
        "Supports multimédias interactifs",
        "Exercices gamifiés",
        "Plateforme en ligne 24/7",
      ],
      color: "#D4AF37",
    },
  ];

  // Processus d'accompagnement A→Z
  const processSteps = [
    {
      step: "A",
      icon: MessageCircle,
      title: "Accueil & Écoute",
      description:
        "Premier contact pour comprendre vos besoins, vos difficultés et vos aspirations.",
    },
    {
      step: "B",
      icon: Target,
      title: "Bilan Personnalisé",
      description:
        "Évaluation diagnostique pour identifier les points forts et les axes d'amélioration.",
    },
    {
      step: "C",
      icon: BookOpen,
      title: "Construction du Parcours",
      description:
        "Élaboration d'un planning sur-mesure adapté à vos objectifs et contraintes.",
    },
    {
      step: "D",
      icon: Users,
      title: "Début de l'Accompagnement",
      description:
        "Lancement des séances avec un formateur dédié et des ressources personnalisées.",
    },
    {
      step: "E",
      icon: TrendingUp,
      title: "Évolution & Suivi",
      description:
        "Points réguliers pour ajuster le parcours et célébrer les progrès accomplis.",
    },
    {
      step: "Z",
      icon: GraduationCap,
      title: "Zénith : Réussite",
      description:
        "Atteinte des objectifs, consolidation des acquis et préparation des prochaines étapes.",
    },
  ];

  // Valeurs de l'équipe pédagogique
  const values = [
    {
      icon: Award,
      label: "Excellence",
      desc: "Exigence et qualité dans chaque séance",
    },
    {
      icon: Clock,
      label: "Disponibilité",
      desc: "Réactivité et flexibilité horaires",
    },
    {
      icon: Users,
      label: "Proximité",
      desc: "Relation de confiance avec chaque étudiant",
    },
    {
      icon: Sparkles,
      label: "Innovation",
      desc: "Méthodes pédagogiques modernes et efficaces",
    },
  ];

  return (
    <section
      id="equipe"
      className={`relative py-20 lg:py-28 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background subtil */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${isDarkMode ? "#D4AF37" : "#0A2E5A"} 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16 lg:mb-20"
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
              Notre Équipe
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-black ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Des formateurs engagés <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              pour votre réussite
            </span>
          </h2>

          <p
            className={`mt-4 text-lg max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Chez Friends Best Center, chaque formateur est choisi pour son
            expertise, sa pédagogie et son engagement à accompagner chaque
            étudiant vers l'excellence.
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group p-6 lg:p-8 rounded-2xl transition-all duration-300 ${
                isDarkMode
                  ? "bg-gray-800/40 border border-gray-700/40 hover:border-[#D4AF37]/40"
                  : "bg-gray-50/40 border border-gray-200/40 hover:border-[#0A2E5A]/30"
              }`}
            >
              {/* 3D Icon */}
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                style={{
                  background: `linear-gradient(135deg, ${item.color}20, ${item.color}35)`,
                  boxShadow: `0 10px 30px ${item.color}25`,
                  border: `2px solid ${item.color}40`,
                }}
              >
                <item.icon size={28} style={{ color: item.color }} />
              </div>

              <h3
                className={`text-xl font-bold mb-3 ${
                  isDarkMode ? "text-white" : "text-[#0A2E5A]"
                }`}
              >
                {item.title}
              </h3>

              <p
                className={`text-base leading-relaxed mb-4 ${
                  isDarkMode ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.description}
              </p>

              <ul className="space-y-2">
                {item.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2
                      size={14}
                      className={`mt-1 flex-shrink-0 ${
                        isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Process A→Z Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`p-8 lg:p-10 rounded-3xl mb-20 ${
            isDarkMode
              ? "bg-gradient-to-br from-[#0A2E5A]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30"
              : "bg-gradient-to-br from-[#0A2E5A]/5 to-[#D4AF37]/5 border border-[#0A2E5A]/20"
          }`}
        >
          <h3
            className={`text-2xl lg:text-3xl font-bold text-center mb-10 ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Notre accompagnement : de A à Z
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group"
              >
                {/* Step Badge */}
                <div
                  className="w-14 h-14 mx-auto rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.icon === GraduationCap ? "#D4AF37" : "#0A2E5A"}25, ${step.icon === GraduationCap ? "#D4AF37" : "#0A2E5A"}40)`,
                    border: `2px solid ${step.icon === GraduationCap ? "#D4AF37" : "#0A2E5A"}50`,
                  }}
                >
                  <span
                    className={`text-lg font-black ${
                      isDarkMode ? "text-white" : "text-white"
                    }`}
                  >
                    {step.step}
                  </span>
                </div>

                {/* Icon */}
                <step.icon
                  size={20}
                  className={`mx-auto mb-2 ${
                    isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                  }`}
                />

                {/* Title */}
                <h4
                  className={`font-bold text-sm mb-1 ${
                    isDarkMode ? "text-white" : "text-[#0A2E5A]"
                  }`}
                >
                  {step.title}
                </h4>

                {/* Description */}
                <p
                  className={`text-xs ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Values Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-5 rounded-xl text-center ${
                isDarkMode
                  ? "bg-gray-800/40 border border-gray-700/40"
                  : "bg-gray-50/40 border border-gray-200/40"
              }`}
            >
              <value.icon
                size={24}
                className={`mx-auto mb-3 ${
                  isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                }`}
              />
              <h4
                className={`font-bold text-sm mb-1 ${
                  isDarkMode ? "text-white" : "text-[#0A2E5A]"
                }`}
              >
                {value.label}
              </h4>
              <p
                className={`text-xs ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {value.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA - Minimal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p
            className={`text-base ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Vous souhaitez en savoir plus sur notre approche pédagogique ?
          </p>
          <p
            className={`mt-2 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Contactez-nous pour un entretien personnalisé et sans engagement.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeachingTeamSection;
