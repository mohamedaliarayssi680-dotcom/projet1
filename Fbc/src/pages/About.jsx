"use client";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { useTheme } from "../context/ThemeContext";
import {
  BookOpen,
  MessageCircle,
  GraduationCap,
  Target,
  HeartHandshake,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Clock,
  Users,
  Heart,
  Activity,
  Bone,
  Stethoscope,
} from "lucide-react";

// Import des images
import sch11 from "../assets/sch11.jpg";
import sch12 from "../assets/sch12.jpg";
import sch40 from "../assets/sch40.jpeg"; // Santé & Secours
import sch41 from "../assets/sch41.jpeg"; // Sciences & Corps humain

const StudentSupportSection = () => {
  const { isDarkMode } = useTheme();

  // Contenu 1: Soutien Académique
  const academicSupport = {
    title: "Soutien Académique & Préparation aux Examens",
    description:
      "Nos formateurs experts accompagnent votre enfant dans toutes les matières principales : Mathématiques, Physique-Chimie, Français, Langues, Sciences. Nous identifions les lacunes, renforçons les acquis et développons l'autonomie grâce à des méthodes pédagogiques adaptées.",
    benefits: [
      "Évaluation diagnostique personnalisée pour cibler les besoins",
      "Fiches de révision et exercices corrigés en temps réel",
      "Simulations d'examens en conditions réelles (Bac, Brevet, concours)",
      "Suivi mensuel des progrès avec rapports aux parents",
      "Accès 24/7 à notre plateforme de ressources en ligne",
    ],
    image: sch11,
    imageAlt: "Séance de soutien scolaire personnalisé avec un formateur F.B.C",
    icon: BookOpen,
    color: "#0A2E5A",
  };

  // Contenu 2: Communication & Langues
  const communicationSupport = {
    title: "Communication, Langues & Confiance en Soi",
    description:
      "Les difficultés en expression orale ou en langues ne sont pas une fatalité. Nos ateliers interactifs et nos cours de langues immersifs aident votre enfant à gagner en aisance, en confiance et en compétences linguistiques pour réussir à l'école et dans la vie professionnelle.",
    benefits: [
      "Ateliers d'expression orale en petits groupes (max 6 élèves)",
      "Cours de langues : Anglais, Français, Espagnol, Arabe (niveaux A1 à C2)",
      "Mises en situation réelles : présentations, entretiens, débats",
      "Préparation aux certifications : TOEIC, TOEFL, DELF/DALF",
      "Coaching individuel pour surmonter le stress et la timidité",
    ],
    image: sch12,
    imageAlt: "Atelier de communication et pratique linguistique chez F.B.C",
    icon: MessageCircle,
    color: "#D4AF37",
  };

  // ✅ Nouveau Contenu 3: Santé & Secours (sch40.jpeg)
  const healthSupport = {
    title: "Formation aux Gestes d'Urgence & Secourisme",
    description:
      "Apprenez les gestes qui sauvent ! Nos formations pratiques et certifiantes préparent aux situations d'urgence du quotidien : accidents domestiques, malaises, brûlures, étouffement. Une compétence essentielle pour protéger vos proches et intervenir avec confiance.",
    benefits: [
      "Formation PSC1 (Prévention et Secours Civiques de niveau 1) certifiante",
      "Mises en situation réalistes avec mannequins et matériel professionnel",
      "Gestion du stress et communication en situation d'urgence",
      "Ateliers prévention : accidents domestiques, sportifs, routiers",
      "Certificat reconnu valable 2 ans, renouvelable en continu",
    ],
    image: sch40,
    imageAlt: "Formation aux premiers secours avec matériel médical chez F.B.C",
    icon: Heart,
    color: "#D4AF37",
  };

  // ✅ Nouveau Contenu 4: Sciences & Corps Humain (sch41.jpeg)
  const scienceSupport = {
    title: "Découverte du Corps Humain & Sciences de la Vie",
    description:
      "Éveillez la curiosité scientifique ! À travers des ateliers ludiques et un squelette pédagogique, explorez le fonctionnement du corps humain, les organes vitaux et les bases de la biologie. Idéal pour les élèves curieux et les futurs professionnels de santé.",
    benefits: [
      "Manipulation d'un squelette pédagogique grandeur nature",
      "Ateliers interactifs : cœur, poumons, système digestif, cerveau",
      "Expériences simples pour comprendre la physiologie humaine",
      "Préparation aux filières santé : infirmier, kiné, médecin",
      "Supports visuels et fiches mémo à emporter",
    ],
    image: sch41,
    imageAlt:
      "Découverte du squelette et des organes humains - Atelier sciences F.B.C",
    icon: Bone,
    color: "#0A2E5A",
  };

  // Process Steps (unchanged)
  const processSteps = [
    {
      icon: Target,
      title: "1. Évaluation",
      desc: "Entretien gratuit pour identifier les besoins",
    },
    {
      icon: Users,
      title: "2. Planning",
      desc: "Création d'un emploi du temps personnalisé",
    },
    {
      icon: Clock,
      title: "3. Suivi",
      desc: "Points réguliers avec l'étudiant et les parents",
    },
    {
      icon: GraduationCap,
      title: "4. Réussite",
      desc: "Célébration des progrès et des objectifs atteints",
    },
  ];

  return (
    <section
      id="soutien"
      className={`relative py-20 lg:py-28 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/* Background Pattern subtil */}
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
              Nos Formations
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-black ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Des compétences pour <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              la vie de demain
            </span>
          </h2>

          <p
            className={`mt-4 text-lg max-w-3xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Chez Friends Best Center, nous formons aux savoirs essentiels :
            éducation, langues, santé et sciences. Chaque formation est conçue
            pour développer l'autonomie et la confiance.
          </p>
        </motion.div>

        {/* Section 1: Academic Support - Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28"
        >
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <img
              src={academicSupport.image}
              alt={academicSupport.imageAlt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div
              className={`absolute inset-0 rounded-2xl pointer-events-none ${
                isDarkMode
                  ? "bg-gradient-to-tr from-[#0A2E5A]/10 to-transparent"
                  : "bg-gradient-to-tr from-[#0A2E5A]/5 to-transparent"
              }`}
            />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${academicSupport.color}25, ${academicSupport.color}40)`,
                  border: `2px solid ${academicSupport.color}50`,
                }}
              >
                <academicSupport.icon
                  size={28}
                  style={{ color: academicSupport.color }}
                />
              </div>
              <h3
                className={`text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-[#0A2E5A]"
                }`}
              >
                {academicSupport.title}
              </h3>
            </div>

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {academicSupport.description}
            </p>

            <div className="space-y-3">
              {academicSupport.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className={`mt-1 flex-shrink-0 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                    }`}
                  />
                  <span
                    className={`text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 2: Communication Support - Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${communicationSupport.color}25, ${communicationSupport.color}40)`,
                  border: `2px solid ${communicationSupport.color}50`,
                }}
              >
                <communicationSupport.icon
                  size={28}
                  style={{ color: communicationSupport.color }}
                />
              </div>
              <h3
                className={`text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-[#0A2E5A]"
                }`}
              >
                {communicationSupport.title}
              </h3>
            </div>

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {communicationSupport.description}
            </p>

            <div className="space-y-3">
              {communicationSupport.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className={`mt-1 flex-shrink-0 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                    }`}
                  />
                  <span
                    className={`text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src={communicationSupport.image}
              alt={communicationSupport.imageAlt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div
              className={`absolute inset-0 rounded-2xl pointer-events-none ${
                isDarkMode
                  ? "bg-gradient-to-tl from-[#D4AF37]/10 to-transparent"
                  : "bg-gradient-to-tl from-[#D4AF37]/5 to-transparent"
              }`}
            />
          </div>
        </motion.div>

        {/* ✅ NEW Section 3: Health & Emergency Training - Image Left, Text Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28"
        >
          {/* Image - sch40.jpeg */}
          <div className="relative order-2 lg:order-1">
            <img
              src={healthSupport.image}
              alt={healthSupport.imageAlt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div
              className={`absolute inset-0 rounded-2xl pointer-events-none ${
                isDarkMode
                  ? "bg-gradient-to-tr from-[#D4AF37]/10 to-transparent"
                  : "bg-gradient-to-tr from-[#D4AF37]/5 to-transparent"
              }`}
            />
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${healthSupport.color}25, ${healthSupport.color}40)`,
                  border: `2px solid ${healthSupport.color}50`,
                }}
              >
                <healthSupport.icon
                  size={28}
                  style={{ color: healthSupport.color }}
                />
              </div>
              <h3
                className={`text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-[#0A2E5A]"
                }`}
              >
                {healthSupport.title}
              </h3>
            </div>

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {healthSupport.description}
            </p>

            <div className="space-y-3">
              {healthSupport.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className={`mt-1 flex-shrink-0 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                    }`}
                  />
                  <span
                    className={`text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ✅ NEW Section 4: Science & Human Body - Text Left, Image Right */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-20 lg:mb-28"
        >
          {/* Text Content */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${scienceSupport.color}25, ${scienceSupport.color}40)`,
                  border: `2px solid ${scienceSupport.color}50`,
                }}
              >
                <scienceSupport.icon
                  size={28}
                  style={{ color: scienceSupport.color }}
                />
              </div>
              <h3
                className={`text-2xl lg:text-3xl font-bold ${
                  isDarkMode ? "text-white" : "text-[#0A2E5A]"
                }`}
              >
                {scienceSupport.title}
              </h3>
            </div>

            <p
              className={`text-lg leading-relaxed ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {scienceSupport.description}
            </p>

            <div className="space-y-3">
              {scienceSupport.benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className={`mt-1 flex-shrink-0 ${
                      isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                    }`}
                  />
                  <span
                    className={`text-base ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Image - sch41.jpeg */}
          <div className="relative">
            <img
              src={scienceSupport.image}
              alt={scienceSupport.imageAlt}
              className="w-full rounded-2xl shadow-2xl"
            />
            <div
              className={`absolute inset-0 rounded-2xl pointer-events-none ${
                isDarkMode
                  ? "bg-gradient-to-tl from-[#0A2E5A]/10 to-transparent"
                  : "bg-gradient-to-tl from-[#0A2E5A]/5 to-transparent"
              }`}
            />
          </div>
        </motion.div>

        {/* Process Steps - Horizontal Timeline (unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`p-8 lg:p-10 rounded-3xl mb-16 ${
            isDarkMode
              ? "bg-gradient-to-br from-[#0A2E5A]/20 to-[#D4AF37]/10 border border-[#D4AF37]/30"
              : "bg-gradient-to-br from-[#0A2E5A]/5 to-[#D4AF37]/5 border border-[#0A2E5A]/20"
          }`}
        >
          <h3
            className={`text-xl lg:text-2xl font-bold text-center mb-8 ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Notre démarche en 4 étapes
          </h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{
                    background: `linear-gradient(135deg, ${step.icon === Target || step.icon === GraduationCap ? "#0A2E5A" : "#D4AF37"}25, ${step.icon === Target || step.icon === GraduationCap ? "#0A2E5A" : "#D4AF37"}40)`,
                    border: `2px solid ${step.icon === Target || step.icon === GraduationCap ? "#0A2E5A" : "#D4AF37"}50`,
                  }}
                >
                  <step.icon
                    size={28}
                    style={{
                      color:
                        step.icon === Target || step.icon === GraduationCap
                          ? "#0A2E5A"
                          : "#D4AF37",
                    }}
                  />
                </div>
                <h4
                  className={`font-bold mb-1 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                >
                  {step.title}
                </h4>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
                >
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Single CTA - Only Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <a
            href="/contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #0A2E5A 0%, #1a4a7a 100%)",
              border: "1px solid rgba(212, 175, 55, 0.4)",
            }}
          >
            <HeartHandshake size={20} />
            <span>Demander un accompagnement personnalisé</span>
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>

          <p
            className={`mt-4 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
          >
            Premier entretien gratuit • Réponse sous 24h • Sans engagement
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentSupportSection;
