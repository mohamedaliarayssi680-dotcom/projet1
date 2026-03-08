import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  Star,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";

// ✅ Import des 4 images de fond (sch9 supprimé, sch28 + sch29 ajoutés)
import sch7 from "../assets/sch7.jpg";
import sch8 from "../assets/sch8.jpg";
import sch28 from "../assets/sch28.jpeg"; // Nouvelle image
import sch29 from "../assets/sch29.jpeg"; // Nouvelle image

const BackgroundSliderSection = () => {
  const { isDarkMode } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // ✅ 4 slides au total
  const slides = [sch7, sch8, sch28, sch29];

  // Preload images to avoid blank spaces
  useEffect(() => {
    slides.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }));
      };
    });
  }, [slides]);

  // Auto-slide every 2.5 seconds (slightly slower for 4 slides)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Professional icons with educational meaning
  const icons = [
    { Icon: GraduationCap, label: "Excellence", color: "#D4AF37" },
    { Icon: BookOpen, label: "Savoir", color: "#0A2E5A" },
    { Icon: Award, label: "Réussite", color: "#D4AF37" },
    { Icon: Users, label: "Communauté", color: "#0A2E5A" },
    { Icon: Star, label: "Qualité", color: "#D4AF37" },
  ];

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {/* All slides positioned absolutely, only opacity changes */}
        {slides.map((src, index) => (
          <motion.div
            key={index}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{
              opacity: index === currentSlide ? 1 : 0,
              scale: index === currentSlide ? 1 : 1.02,
            }}
            transition={{
              duration: 1.2,
              ease: "easeInOut",
              opacity: { duration: 0.8 },
            }}
            style={{ zIndex: index === currentSlide ? 10 : 1 }}
          >
            {/* Image - Clear & Full Quality */}
            {loadedImages[index] ? (
              <img
                src={src}
                alt={`F.B.C Background ${index + 1}`}
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
              />
            ) : (
              <div
                className={`w-full h-full ${isDarkMode ? "bg-gray-900" : "bg-gray-100"}`}
              />
            )}

            {/* Subtle Gradient Overlay - Lighter for Clear Images */}
            <div
              className={`absolute inset-0 ${
                isDarkMode
                  ? "bg-gradient-to-r from-gray-900/40 via-gray-900/20 to-transparent"
                  : "bg-gradient-to-r from-white/40 via-white/20 to-transparent"
              }`}
            />

            {/* Additional subtle vignette for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
          </motion.div>
        ))}

        {/* Slide Indicators - Updated for 4 slides */}
        <div className="absolute bottom-6 left-6 flex gap-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-[#D4AF37] w-6"
                  : isDarkMode
                    ? "bg-white/50 hover:bg-white/70"
                    : "bg-gray-700/50 hover:bg-gray-700/70"
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Content Overlay - Minimal & Professional */}
      <div className="relative z-20 h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Brand Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 ${
                isDarkMode
                  ? "bg-[#0A2E5A]/70 text-[#D4AF37] border border-[#D4AF37]/30"
                  : "bg-white/70 text-[#0A2E5A] border border-[#0A2E5A]/20"
              } backdrop-blur-md`}
            >
              <Star size={14} className="fill-current" />
              <span className="text-xs font-bold uppercase tracking-wider">
                Friends Best Center
              </span>
            </motion.div>

            {/* Minimal Tagline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-8 ${
                isDarkMode ? "text-white" : "text-[#0A2E5A]"
              }`}
            >
              L'excellence <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
                éducative
              </span>
            </motion.h1>

            {/* Professional Icons Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap items-center gap-4"
            >
              {icons.map((item, index) => (
                <motion.button
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`group flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/50 hover:bg-gray-800/70 border border-gray-700/50"
                      : "bg-white/60 hover:bg-white/80 border border-gray-200/50"
                  } backdrop-blur-md shadow-lg hover:shadow-xl`}
                  aria-label={item.label}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${item.color}25, ${item.color}45)`,
                    }}
                  >
                    <item.Icon
                      size={24}
                      className="transition-transform duration-300 group-hover:scale-110"
                      style={{ color: item.color }}
                    />
                  </div>
                  <span
                    className={`text-xs font-medium ${
                      isDarkMode ? "text-gray-200" : "text-gray-700"
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.button>
              ))}
            </motion.div>

            {/* Minimal CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              className="mt-10"
            >
              <a
                href="#services"
                className={`group inline-flex items-center gap-3 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  isDarkMode
                    ? "bg-[#0A2E5A] hover:bg-[#0A2E5A]/90 text-white border border-[#D4AF37]/30"
                    : "bg-[#0A2E5A] hover:bg-[#0A2E5A]/95 text-white"
                } shadow-lg hover:shadow-2xl`}
              >
                Découvrir nos services
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Decorative Floating Elements - Subtle */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-15">
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-20 right-20 w-24 h-24 rounded-full blur-3xl opacity-20 ${
            isDarkMode ? "bg-[#D4AF37]/30" : "bg-[#D4AF37]/15"
          }`}
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className={`absolute bottom-20 left-20 w-32 h-32 rounded-full blur-3xl opacity-15 ${
            isDarkMode ? "bg-[#0A2E5A]/40" : "bg-[#0A2E5A]/15"
          }`}
        />
      </div>
    </section>
  );
};

export default BackgroundSliderSection;
