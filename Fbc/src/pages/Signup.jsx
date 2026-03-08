import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  UserPlus,
  Mail,
  Lock,
  User,
  Shield,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  GraduationCap,
  CheckCircle,
  Clock,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import sch13 from "../assets/sch13.jpg";

const Signup = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "client",
    acceptTerms: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Nom complet requis";
    if (!formData.email.trim()) newErrors.email = "Email requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email invalide";
    if (!formData.password) newErrors.password = "Mot de passe requis";
    else if (formData.password.length < 8)
      newErrors.password = "Minimum 8 caractères";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
    if (!formData.acceptTerms)
      newErrors.acceptTerms = "Vous devez accepter les conditions";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setTimeout(() => navigate("/login"), 2500);
    } catch (error) {
      setErrors({ submit: "Erreur d'inscription. Veuillez réessayer." });
    } finally {
      setIsLoading(false);
    }
  };

  // Success Screen
  if (isSuccess) {
    return (
      <section
        className={`min-h-screen flex items-center justify-center px-4 ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`w-full max-w-md p-10 rounded-3xl text-center ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-2xl`}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 bg-[#0A2E5A]"
          >
            <CheckCircle2 className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className={`text-2xl font-bold mb-3 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
          >
            Compte créé ! 🎉
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className={`mb-6 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
          >
            Bienvenue chez F.B.C !
          </motion.p>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/login"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl font-semibold text-white bg-[#0A2E5A] hover:bg-[#0A2E5A]/90 transition-all"
            >
              <Sparkles className="w-5 h-5" /> Se connecter
            </Link>
          </motion.div>
        </motion.div>
      </section>
    );
  }

  return (
    <section
      className={`min-h-screen flex items-center justify-center px-4 py-12 relative overflow-hidden ${isDarkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className={`absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-200/50"}`}
        />
        <motion.div
          animate={{ x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className={`absolute -bottom-40 -left-40 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? "bg-gray-800/50" : "bg-gray-200/50"}`}
        />
      </div>

      <div className="w-full max-w-6xl relative z-10">
        <div
          className={`grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"}`}
        >
          {/* Left Side - Image Visible Without Color Overlay (SAME AS LOGIN) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex flex-col relative overflow-hidden"
          >
            {/* Background Image - sch13.jpg - NO COLOR OVERLAY */}
            <div className="absolute inset-0">
              <img
                src={sch13}
                alt="Friends Best Center"
                className="w-full h-full object-cover"
              />
              {/* Very subtle dark overlay just for text readability */}
              <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center p-12">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-16 h-16 rounded-2xl bg-white/90 backdrop-blur-sm flex items-center justify-center mb-6 shadow-lg"
              >
                <GraduationCap className="w-8 h-8 text-[#0A2E5A]" />
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-3xl font-bold text-white mb-3 drop-shadow-lg"
              >
                Rejoignez F.B.C !
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white/90 text-base mb-8 drop-shadow"
              >
                Créez votre compte gratuitement
              </motion.p>

              {/* Features with Icons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="space-y-3"
              >
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <CheckCircle size={14} className="text-white" />
                  </div>
                  <span className="text-sm">Cours certifiés</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Award size={14} className="text-white" />
                  </div>
                  <span className="text-sm">Formateurs experts</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Clock size={14} className="text-white" />
                  </div>
                  <span className="text-sm">Accès 24/7</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 lg:p-12"
          >
            {/* Header */}
            <div className="text-center lg:text-left mb-8">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-4 lg:hidden bg-[#0A2E5A]"
              >
                <UserPlus className="w-7 h-7 text-white" />
              </motion.div>
              <h1
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                Inscription
              </h1>
              <p
                className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Créez votre compte en 2 minutes
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <label
                  className={`flex items-center gap-2 text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  <User
                    size={16}
                    className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                  />{" "}
                  Nom complet
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] ${errors.fullName ? "border-red-500 focus:ring-red-500/20" : isDarkMode ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"}`}
                  placeholder="Votre nom"
                />
                {errors.fullName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.fullName}
                  </motion.p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  className={`flex items-center gap-2 text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  <Mail
                    size={16}
                    className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                  />{" "}
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] ${errors.email ? "border-red-500 focus:ring-red-500/20" : isDarkMode ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"}`}
                  placeholder="votre@email.com"
                />
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.email}
                  </motion.p>
                )}
              </motion.div>

              {/* Password */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  className={`flex items-center gap-2 text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                >
                  <Lock
                    size={16}
                    className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                  />{" "}
                  Mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] pr-12 ${errors.password ? "border-red-500 focus:ring-red-500/20" : isDarkMode ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500" : "bg-white border-gray-200 text-gray-900 placeholder-gray-400"}`}
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className={`absolute right-3 top-1/2 -translate-y-1/2 ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.password}
                  </motion.p>
                )}
              </motion.div>

              {/* Accept Terms */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-0.5 rounded border-gray-300 text-[#0A2E5A] focus:ring-[#0A2E5A]"
                  />
                  <span
                    className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    J'accepte les{" "}
                    <a
                      href="/terms-of-use"
                      className={`font-medium ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"}`}
                    >
                      conditions
                    </a>
                  </span>
                </label>
                {errors.acceptTerms && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-red-500 text-xs mt-1"
                  >
                    {errors.acceptTerms}
                  </motion.p>
                )}
              </motion.div>

              {/* Submit Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.7 }}
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-[#0A2E5A] hover:bg-[#0A2E5A]/90"}`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                    Création...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Créer mon compte{" "}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Login Link */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className={`text-center text-sm mt-6 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Déjà un compte ?{" "}
              <Link
                to="/login"
                className={`font-semibold ${isDarkMode ? "text-gray-300 hover:text-white" : "text-[#0A2E5A] hover:text-[#0A2E5A]/80"} transition-colors inline-flex items-center gap-1`}
              >
                Se connecter <ArrowRight size={14} />
              </Link>
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
