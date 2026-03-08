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
} from "lucide-react";
import { useRef } from "react";

// Import de la nouvelle image
import sch30 from "../assets/sch30.jpeg";
import tunisiaFlag from "../assets/sch10.jpg";

const TunisiaSuccessSection = () => {
  const { isDarkMode } = useTheme();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // ✅ Nouvelles valeurs F.B.C (pas de stats, que de l'engagement)
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

  // ✅ Timeline tournée vers l'avenir (pas le passé)
  const vision = [
    { year: "2025", label: "Lancement F.B.C", icon: Calendar },
    { year: "2026", label: "Déploiement Régional", icon: MapPin },
    { year: "2027", label: "Innovation Pédagogique", icon: Lightbulb },
    { year: "2028", label: "Impact National", icon: Target },
    { year: "2029", label: "Excellence Reconnue", icon: Sparkles },
  ];

  // ✅ Icônes décoratives pour les espaces vides
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
      className={`relative py-20 lg:py-28 overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* Tunisia Flag */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl border-4 ${isDarkMode ? "border-[#D4AF37]/40" : "border-[#0A2E5A]/20"}`}
            >
              <img
                src={tunisiaFlag}
                alt="Drapeau de la Tunisie"
                className="w-24 h-16 sm:w-32 sm:h-20 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />
            </div>
          </motion.div>

          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${isDarkMode ? "bg-[#0A2E5A]/30 text-[#D4AF37] border border-[#D4AF37]/30" : "bg-[#0A2E5A]/10 text-[#0A2E5A] border border-[#0A2E5A]/20"}`}
          >
            <Sparkles size={14} className="fill-current" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Notre Engagement
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-black ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
          >
            Une école qui <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              vous ressemble
            </span>
          </h2>

          <p
            className={`mt-4 text-lg max-w-2xl mx-auto ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Chez F.B.C, nous croyons que chaque personne mérite une chance de
            progresser. Notre force ? L'humain avant tout.
          </p>
        </motion.div>

        {/* ✅ IMAGE sch30.jpeg - NETTE + ICÔNES DÉCORATIVES (CORRIGÉ: PAS DE DUPLICATE TRANSITION) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Decorative Frame - BLUR SEULEMENT SUR LE CADRE */}
            <div
              className={`absolute -inset-4 rounded-3xl ${isDarkMode ? "bg-gradient-to-r from-[#0A2E5A]/30 to-[#D4AF37]/20" : "bg-gradient-to-r from-[#0A2E5A]/10 to-[#D4AF37]/10"} blur-xl`}
            />

            {/* Image Frame - BORDER NETTE */}
            <div
              className={`relative rounded-2xl overflow-hidden shadow-2xl border-2 ${isDarkMode ? "border-[#D4AF37]/30" : "border-[#0A2E5A]/20"} bg-white`}
            >
              {/* ✅ ICÔNES DÉCORATIVES - TRANSITION UNIQUE (CORRIGÉ) */}
              {decorativeIcons.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{
                    y: [0, -6, 0],
                    rotate: [0, item.position.includes("left") ? 5 : -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: item.delay,
                  }}
                  className={`absolute ${item.position} pointer-events-none z-10 hidden sm:flex`}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${isDarkMode ? "bg-gray-900/60" : "bg-white/60"} backdrop-blur-sm border ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
                    style={{ boxShadow: `0 4px 20px ${item.color}20` }}
                  >
                    <item.Icon
                      size={20}
                      style={{ color: item.color }}
                      className="opacity-80"
                    />
                  </div>
                </motion.div>
              ))}

              {/* ✅ IMAGE NETTE : object-contain pour préserver les proportions */}
              <img
                src={sch30}
                alt="L'équipe F.B.C à vos côtés"
                className="w-full h-auto max-h-96 object-contain bg-white p-4 lg:p-8"
                style={{ imageRendering: "auto" }}
              />

              {/* Overlay léger UNIQUEMENT en bas pour la lisibilité du texte */}
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Caption - Positionnée en bas sans cacher l'image */}
              <div className="absolute bottom-4 left-6 right-6 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37] flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-semibold text-sm truncate">
                    Une équipe à votre écoute
                  </p>
                  <p className="text-white/80 text-xs truncate">
                    Formateurs engagés • Accompagnement personnalisé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ✅ Nouvelles cartes d'engagement (pas de stats) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-16">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative p-6 rounded-2xl ${isDarkMode ? "bg-gray-800/40 border border-gray-700/40" : "bg-gray-50/40 border border-gray-200/40"} backdrop-blur-sm`}
            >
              {/* Icon 3D */}
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

              {/* Content */}
              <h3
                className={`text-lg font-bold mb-2 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                {item.title}
              </h3>
              <p
                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                {item.desc}
              </p>

              {/* Hover Glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${item.color}15 0%, transparent 70%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Two Columns: Photo Caption + Vision Timeline */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Why Choose F.B.C */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`p-6 lg:p-8 rounded-3xl ${isDarkMode ? "bg-gradient-to-br from-[#0A2E5A]/30 to-[#D4AF37]/20 border border-[#D4AF37]/30" : "bg-gradient-to-br from-[#0A2E5A]/10 to-[#D4AF37]/10 border border-[#0A2E5A]/20"} backdrop-blur-sm`}
          >
            <h3
              className={`text-lg font-bold mb-6 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
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
                <div key={index} className="flex items-center gap-3">
                  <item.icon
                    size={20}
                    className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
                  />
                  <span
                    className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Vision Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className={`p-6 lg:p-8 rounded-3xl ${isDarkMode ? "bg-gray-800/40 border border-gray-700/40" : "bg-gray-50/40 border border-gray-200/40"} backdrop-blur-sm`}
          >
            <h3
              className={`text-lg font-bold mb-6 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
            >
              Notre Vision
            </h3>
            <div className="relative">
              {/* Vertical Line */}
              <div
                className={`absolute left-6 top-4 bottom-4 w-0.5 ${isDarkMode ? "bg-gray-700" : "bg-gray-300"}`}
              />

              {/* Timeline Items */}
              <div className="space-y-6">
                {vision.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="relative flex items-center gap-4"
                  >
                    {/* Dot */}
                    <div
                      className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center ${isDarkMode ? "bg-gray-900 border border-gray-600" : "bg-white border border-gray-200"} shadow-md`}
                    >
                      <item.icon size={20} className="text-[#D4AF37]" />
                    </div>
                    {/* Content */}
                    <div>
                      <div
                        className={`text-sm font-bold ${isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}`}
                      >
                        {item.year}
                      </div>
                      <div
                        className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {item.label}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner - Tunisia Commitment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className={`relative overflow-hidden rounded-3xl p-6 lg:p-8 ${isDarkMode ? "bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a] border border-[#D4AF37]/30" : "bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a]"}`}
        >
          {/* Background Pattern */}
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
            {/* Left: Flag + Text */}
            <div className="flex items-center gap-4">
              <img
                src={tunisiaFlag}
                alt="Tunisie"
                className="w-16 h-10 rounded-lg shadow-lg border border-white/20"
              />
              <div>
                <h4 className="text-white font-bold text-lg">
                  Fierté Tunisienne
                </h4>
                <p className="text-white/80 text-sm">
                  Une école conçue pour nos réalités
                </p>
              </div>
            </div>

            {/* Right: Values Row */}
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-2xl font-black text-[#D4AF37]">100%</div>
                <div className="text-white/70 text-xs">Engagement</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-black text-[#D4AF37]">Humain</div>
                <div className="text-white/70 text-xs">Au cœur</div>
              </div>
              <div className="w-px h-10 bg-white/20" />
              <div className="text-center">
                <div className="text-2xl font-black text-[#D4AF37]">
                  Proximité
                </div>
                <div className="text-white/70 text-xs">Garantie</div>
              </div>
            </div>
          </div>
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
            <span>Rejoignez l'aventure F.B.C</span>
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

export default TunisiaSuccessSection;
