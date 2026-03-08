import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Plus,
  Minus,
  BookOpen,
  Heart,
  Laptop,
  Users,
  Shield,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

const faqs = [
  {
    icon: BookOpen,
    q: "Comment s'inscrire aux formations F.B.C ?",
    a: "L'inscription est simple et personnalisée : 1) Contactez-nous via le formulaire ou par téléphone, 2) Un conseiller vous propose un entretien gratuit pour comprendre vos besoins, 3) Nous construisons ensemble un parcours adapté à vos objectifs (éducation, santé, numérique ou inclusion). L'inscription est validée après cet échange bienveillant. Paiement flexible possible en plusieurs fois.",
  },
  {
    icon: Heart,
    q: "Proposez-vous des formations aux gestes d'urgence et premiers secours ?",
    a: "Oui ! Notre pôle Santé & Secours propose : • Formation aux gestes qui sauvent (PLS, massage cardiaque, étouffement) • Prévention des accidents domestiques et professionnels • Ateliers bien-être et gestion du stress • Certificats de compétences délivrés à l'issue. Nos formateurs sont certifiés et nos sessions adaptées à tous les niveaux, sans prérequis médicaux.",
  },
  {
    icon: Laptop,
    q: "Quelles compétences numériques peut-on acquérir chez F.B.C ?",
    a: "Notre pôle Numérique accompagne tous les niveaux : • Initiation à l'ordinateur et à internet • Bureautique (Word, Excel, PowerPoint, emails) • Navigation sécurisée et protection des données • Outils du quotidien (vidéoconférence, démarches en ligne). Nos ateliers sont pratiques, progressifs et adaptés aux personnes peu familières avec le digital. Accès à une plateforme en ligne pour réviser à son rythme.",
  },
  {
    icon: Users,
    q: "Comment accompagnez-vous les personnes en situation de fragilité ?",
    a: "Notre approche est avant tout humaine et bienveillante : • Évaluation personnalisée des besoins et potentiels • Accompagnement individuel ou en petits groupes homogènes • Adaptation des supports et du rythme d'apprentissage • Collaboration avec les familles et les professionnels de santé si nécessaire. Nous croyons que chaque personne, quel que soit son parcours, peut progresser dans un environnement sécurisant et encourageant.",
  },
  {
    icon: Shield,
    q: "Les formations débouchent-elles sur des attestations ou certifications ?",
    a: "Oui, selon le domaine choisi : • Attestations de compétences F.B.C détaillant les acquis • Certifications reconnues pour les formations santé (secourisme) • Badges numériques pour les compétences digitales • Bilans de progression personnalisés. Tous nos documents sont vérifiables en ligne et valorisables dans un parcours professionnel ou personnel.",
  },
  {
    icon: CheckCircle,
    q: "Comment assurez-vous le suivi et la progression de chaque personne ?",
    a: "Chaque participant bénéficie d'un accompagnement sur-mesure : • Entretien initial pour définir des objectifs clairs • Points réguliers avec le formateur référent • Espace personnel pour accéder aux ressources et exercices • Retours constructifs et encouragement à chaque étape • Possibilité d'ajuster le parcours en fonction des progrès. Notre priorité : que chacun avance en confiance, à son rythme.",
  },
];

// Decorative bulbs - F.B.C colors
const bulbs = [
  { size: 60, x: "10%", y: "15%", color: "#0A2E5A" },
  { size: 40, x: "70%", y: "10%", color: "#D4AF37" },
  { size: 50, x: "30%", y: "70%", color: "#0A2E5A" },
  { size: 35, x: "80%", y: "60%", color: "#D4AF37" },
  { size: 45, x: "50%", y: "30%", color: "#0A2E5A" },
];

export default function FAQ() {
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  // Glass background - F.B.C compatible
  const bgGlass = isDarkMode
    ? "bg-gray-900/60 backdrop-blur-lg text-white border border-gray-700/50 shadow-xl"
    : "bg-white/60 backdrop-blur-lg text-[#0A2E5A] border border-gray-200/50 shadow-lg";

  return (
    <section
      id="faq"
      className={`relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900/30" : "bg-gray-50/30"
      }`}
    >
      {/* Frosted Bulb Background - F.B.C Colors */}
      {bulbs.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full z-0"
          style={{
            width: b.size * 1.5,
            height: b.size * 1.5,
            top: b.y,
            left: b.x,
            background: b.color,
            filter: "blur(40px)",
            opacity: isDarkMode ? 0.15 : 0.08,
            mixBlendMode: isDarkMode ? "screen" : "multiply",
          }}
        />
      ))}

      <div className="relative z-10 max-w-4xl mx-auto text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mx-auto ${
            isDarkMode
              ? "bg-[#0A2E5A]/30 text-[#D4AF37] border border-[#D4AF37]/30"
              : "bg-[#0A2E5A]/10 text-[#0A2E5A] border border-[#0A2E5A]/20"
          }`}
        >
          <GraduationCap size={14} className="fill-current" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Questions Fréquentes
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className={`text-3xl md:text-5xl font-extrabold mb-4 ${
            isDarkMode ? "text-white" : "text-[#0A2E5A]"
          }`}
        >
          Tout savoir sur{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
            F.B.C
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-lg max-w-2xl mx-auto`}
        >
          Vous avez des questions sur nos formations en éducation, santé,
          numérique ou inclusion ? Nous avons les réponses pour vous accompagner
          sereinement.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto z-10">
        {/* Vertical Line */}
        <div
          className={`absolute left-5 top-0 bottom-0 w-1 ${
            isDarkMode ? "bg-gray-700" : "bg-gray-300"
          } rounded-full hidden md:block`}
        ></div>

        {faqs.map((faq, i) => (
          <motion.div
            key={i}
            className="relative flex items-start mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            {/* Animated Icon Dot */}
            <motion.div
              className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white font-bold z-10 shadow-lg ${
                isDarkMode ? "bg-[#0A2E5A]" : "bg-[#0A2E5A]"
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                backgroundColor:
                  openIndex === i
                    ? "#D4AF37"
                    : isDarkMode
                      ? "#0A2E5A"
                      : "#0A2E5A",
                boxShadow:
                  openIndex === i
                    ? "0 0 25px rgba(212, 175, 55, 0.5)"
                    : "0 0 15px rgba(10, 46, 90, 0.3)",
              }}
              transition={{ duration: 0.3 }}
            >
              <faq.icon
                size={20}
                className="transition-transform duration-300"
              />
            </motion.div>

            {/* Content Container */}
            <div className="ml-6 flex-1">
              {/* Question Card */}
              <motion.div
                onClick={() => toggle(i)}
                className={`p-5 rounded-2xl border transition-all duration-500 ${bgGlass} cursor-pointer group`}
                whileHover={{
                  scale: 1.01,
                  boxShadow: isDarkMode
                    ? "0 20px 40px rgba(0,0,0,0.4)"
                    : "0 20px 40px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.99 }}
                animate={{
                  borderColor:
                    openIndex === i
                      ? "#D4AF37"
                      : isDarkMode
                        ? "rgba(75, 85, 99, 0.5)"
                        : "rgba(229, 231, 235, 0.8)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start gap-4">
                  <h3
                    className={`font-semibold text-lg pr-4 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                  >
                    {faq.q}
                  </h3>

                  {/* Toggle Icon */}
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    animate={{
                      rotate: openIndex === i ? 45 : 0,
                      scale: openIndex === i ? 1.1 : 1,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  >
                    {openIndex === i ? (
                      <Minus size={22} className="text-[#D4AF37]" />
                    ) : (
                      <Plus
                        size={22}
                        className={
                          isDarkMode ? "text-gray-400" : "text-[#0A2E5A]"
                        }
                      />
                    )}
                  </motion.div>
                </div>
              </motion.div>

              {/* Answer Accordion */}
              <AnimatePresence mode="wait">
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -10 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <motion.div
                      className={`mt-4 p-5 rounded-xl ${
                        isDarkMode
                          ? "bg-gray-800/70 backdrop-blur-sm border border-gray-700/40"
                          : "bg-white/90 backdrop-blur-sm border border-gray-200/60"
                      } shadow-lg`}
                      initial={{ x: -15, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -15, opacity: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <p
                        className={`${isDarkMode ? "text-gray-300" : "text-gray-700"} leading-relaxed text-sm md:text-base`}
                      >
                        {faq.a}
                      </p>

                      {/* Bottom Accent */}
                      <motion.div
                        className={`mt-4 h-0.5 rounded-full bg-gradient-to-r from-[#0A2E5A] to-[#D4AF37]`}
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className={`max-w-4xl mx-auto mt-16 p-8 lg:p-10 rounded-3xl flex flex-col sm:flex-row justify-between items-center gap-6 ${bgGlass}`}
      >
        <div className="text-center sm:text-left">
          <h3
            className={`text-xl lg:text-2xl font-bold mb-2 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
          >
            Une question spécifique ?
          </h3>
          <p
            className={`${isDarkMode ? "text-gray-300" : "text-gray-600"} text-sm`}
          >
            Notre équipe pédagogique vous répond sous 24h. Premier conseil
            gratuit.
          </p>
        </div>

        <div className="flex gap-3 flex-col sm:flex-row w-full sm:w-auto">
          <motion.button
            onClick={() => navigate("/contact")}
            className="relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-white transition-all duration-300 group"
            style={{
              background: "linear-gradient(135deg, #0A2E5A 0%, #1a4a7a 100%)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 15px 35px rgba(10, 46, 90, 0.4)",
            }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative flex items-center justify-center gap-2">
              Nous contacter
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
