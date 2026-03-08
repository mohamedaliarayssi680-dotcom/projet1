import React from "react";
import { motion } from "framer-motion";
import {
  Star,
  Award,
  Heart,
  Laptop,
  Users,
  Sparkles,
  Play,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";

//  Import de la vidéo
import videoBg from "../videos/video.mp4";

const Hero = () => {
  const { isDarkMode } = useTheme();

  //  Animations simples et fluides
  const textAnimations = {
    container: {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.15 },
      },
    },
    item: {
      hidden: { opacity: 0, y: 12 },
      show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.45, ease: "easeOut" },
      },
    },
    highlight: {
      hidden: { opacity: 0, scale: 0.98 },
      show: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: "easeOut" },
      },
    },
  };

  return (
    <section
      id="home"
      className={`relative flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-28 pb-20 min-h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      {/*  VIDEO BACKGROUND - CLAIRE ET NETTE */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          //  object-cover sans blur, vidéo nette
          className="w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src={videoBg} type="video/mp4" />
          <img
            src="https://placehold.co/1920x1080/0A2E5A/FFFFFF?text=F.B.C&font=roboto"
            alt="F.B.C Background Fallback"
            className="w-full h-full object-cover"
          />
        </video>

        {/*  Overlay TRÈS LÉGER pour garder la vidéo bien visible */}
        <div
          className={`absolute inset-0 ${
            isDarkMode
              ? "bg-gradient-to-br from-gray-900/40 via-gray-900/30 to-[#0A2E5A]/35"
              : "bg-gradient-to-br from-white/40 via-white/30 to-[#0A2E5A]/30"
          }`}
        />
      </div>

      {/* Decorative Blobs - Très subtils */}
      <div
        className="absolute top-40 left-10 w-64 h-64 rounded-full blur-3xl z-5 pointer-events-none opacity-25"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(212, 175, 55, 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-72 h-72 rounded-full blur-3xl z-5 pointer-events-none opacity-25"
        style={{
          background: isDarkMode
            ? "radial-gradient(circle, rgba(10, 46, 90, 0.15) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(10, 46, 90, 0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left Content - Text CLEAR & NET */}
          <motion.div
            variants={textAnimations.container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-5 pt-4"
          >
            {/* Badge */}
            <motion.div
              variants={textAnimations.item}
              className={`inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full border backdrop-blur-sm ${
                isDarkMode
                  ? "bg-[#0A2E5A]/30 border-[#D4AF37]/35"
                  : "bg-white/30 border-[#0A2E5A]/25"
              }`}
            >
              <div
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"}`}
              />
              <span
                className={`font-bold text-[11px] uppercase tracking-wide flex items-center gap-1.5 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                <Star
                  size={13}
                  className={
                    isDarkMode
                      ? "text-[#D4AF37] fill-[#D4AF37]"
                      : "text-[#0A2E5A] fill-[#0A2E5A]"
                  }
                />
                Friends Best Center
              </span>
              <div
                className={`w-1.5 h-1.5 rounded-full animate-pulse ${isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"}`}
              />
            </motion.div>

            {/* Titre principal - NET ET LISIBLE */}
            <motion.h1
              variants={textAnimations.container}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-sm ${
                isDarkMode ? "text-white" : "text-[#0A2E5A]"
              }`}
              style={{
                textShadow: isDarkMode
                  ? "0 2px 8px rgba(0,0,0,0.4)"
                  : "0 2px 8px rgba(10,46,90,0.15)",
              }}
            >
              <motion.span variants={textAnimations.item} className="block">
                Former, Accompagner,
              </motion.span>
              <motion.span
                variants={textAnimations.highlight}
                className="block text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]"
              >
                Autonomiser ✨
              </motion.span>
            </motion.h1>

            {/* Description - CLAIRE ET LISIBLE */}
            <motion.p
              variants={textAnimations.item}
              className={`text-base md:text-lg max-w-xl leading-relaxed font-medium ${
                isDarkMode ? "text-white/95" : "text-[#0A2E5A]/95"
              }`}
              style={{
                textShadow: isDarkMode
                  ? "0 1px 4px rgba(0,0,0,0.3)"
                  : "0 1px 4px rgba(10,46,90,0.1)",
              }}
            >
              Centre de formation polyvalent : éducation, santé, numérique et
              inclusion. Nous aidons chaque{" "}
              <span
                className={`font-bold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                élève, personne motivée ou en situation de fragilité
              </span>{" "}
              à gagner en autonomie.
            </motion.p>

            {/* 4 Domaines - Icônes NETTES */}
            <motion.div
              variants={textAnimations.container}
              className="flex flex-wrap gap-2.5 sm:gap-3"
            >
              {[
                {
                  icon: Star,
                  label: "Éducation",
                  color: isDarkMode ? "#D4AF37" : "#0A2E5A",
                },
                { icon: Heart, label: "Santé & Secours", color: "#D4AF37" },
                {
                  icon: Laptop,
                  label: "Numérique",
                  color: isDarkMode ? "#60a5fa" : "#0A2E5A",
                },
                { icon: Users, label: "Inclusion", color: "#D4AF37" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={textAnimations.item}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-lg backdrop-blur-sm border ${
                    isDarkMode
                      ? "bg-gray-800/50 border-gray-600/40"
                      : "bg-white/50 border-gray-300/40"
                  }`}
                >
                  <item.icon
                    size={14}
                    className="flex-shrink-0"
                    style={{ color: item.color }}
                  />
                  <span
                    className={`text-[13px] font-semibold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Boutons CTA - NETS ET VISIBLES */}
            <motion.div
              variants={textAnimations.item}
              className="flex flex-wrap gap-3 pt-1"
            >
              <motion.a
                href="#formations"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                className="inline-flex items-center gap-2 px-5.5 py-3 rounded-xl font-bold text-white transition-all shadow-md hover:shadow-lg"
                style={{
                  background:
                    "linear-gradient(135deg, #0A2E5A 0%, #1a4a7a 100%)",
                  border: "1px solid rgba(212, 175, 55, 0.4)",
                }}
              >
                <Play size={17} className="fill-white" />
                Découvrir nos formations
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Cards NETTES */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
            className="relative z-20 pt-8 pb-6 hidden lg:flex flex-col items-end justify-center gap-5"
          >
            {/* Stats Card - CLAIRE */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`w-full max-w-xs rounded-2xl px-5.5 py-4.5 backdrop-blur-md shadow-xl border ${
                isDarkMode
                  ? "bg-gray-800/60 border-[#D4AF37]/35"
                  : "bg-white/60 border-[#0A2E5A]/25"
              }`}
            >
              <div className="flex items-center justify-around">
                <div className="text-center">
                  <div className="flex items-center gap-1.5 justify-center mb-0.5">
                    <Sparkles
                      size={17}
                      className={
                        isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                      }
                    />
                    <p
                      className={`text-2xl font-extrabold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                    >
                      4
                    </p>
                  </div>
                  <p
                    className={`text-[11px] font-bold uppercase ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Domaines
                  </p>
                </div>
                <div
                  className={`w-px h-9 ${isDarkMode ? "bg-gray-600" : "bg-gray-300"}`}
                />
                <div className="text-center">
                  <div className="flex items-center gap-1.5 justify-center mb-0.5">
                    <Award
                      size={17}
                      className={
                        isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                      }
                    />
                    <p
                      className={`text-2xl font-extrabold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                    >
                      98%
                    </p>
                  </div>
                  <p
                    className={`text-[11px] font-bold uppercase ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Satisfaction
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Quality Badge - NET */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className={`w-full max-w-xs rounded-xl px-4.5 py-3.5 backdrop-blur-md shadow-lg border ${
                isDarkMode
                  ? "bg-gray-900/70 border-[#D4AF37]/35"
                  : "bg-white/70 border-[#0A2E5A]/25"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className={`p-1.5 rounded-lg ${isDarkMode ? "bg-[#D4AF37]/25" : "bg-[#0A2E5A]/20"}`}
                >
                  <Award
                    size={17}
                    className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
                  />
                </div>
                <div>
                  <p
                    className={`text-[11px] font-bold ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Approche
                  </p>
                  <p
                    className={`text-sm font-extrabold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                  >
                    100% Personnalisée
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Subtil */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className={`w-5.5 h-9.5 rounded-full border-2 flex items-start justify-center pt-1.5 ${
            isDarkMode ? "border-[#D4AF37]/60" : "border-[#0A2E5A]/50"
          }`}
        >
          <div
            className={`w-1.5 h-1.5 rounded-full ${isDarkMode ? "bg-[#D4AF37]" : "bg-[#0A2E5A]"}`}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
