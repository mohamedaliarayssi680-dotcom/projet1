import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  LogIn,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Sparkles,
  ArrowRight,
  GraduationCap,
  CheckCircle,
  Shield,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import sch13 from "../assets/sch13.jpg";

const Login = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    remember: false,
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

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
    if (!formData.email.trim()) newErrors.email = "Email requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email invalide";
    if (!formData.password) newErrors.password = "Mot de passe requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (formData.email.toLowerCase() === "admin@fbc.tn") {
        if (formData.password === "admin123") {
          localStorage.setItem("adminSession", "true");
          navigate("/admin/dashboard");
          return;
        } else {
          setErrors({ submit: "Mot de passe admin incorrect" });
          setIsLoading(false);
          return;
        }
      }

      navigate("/");
    } catch (error) {
      setErrors({ submit: "Erreur de connexion. Veuillez réessayer." });
    } finally {
      setIsLoading(false);
    }
  };

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
          {/* Left Side - Image Visible Without Color Overlay */}
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
                Bon retour !
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-white/90 text-base mb-8 drop-shadow"
              >
                Connectez-vous pour accéder à votre espace
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
                  <span className="text-sm">Suivi de progression</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Shield size={14} className="text-white" />
                  </div>
                  <span className="text-sm">Accès sécurisé</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Clock size={14} className="text-white" />
                  </div>
                  <span className="text-sm">Disponible 24/7</span>
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
                <LogIn className="w-7 h-7 text-white" />
              </motion.div>
              <h1
                className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                Connexion
              </h1>
              <p
                className={`mt-2 ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
              >
                Heureux de vous revoir !
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
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
                transition={{ delay: 0.4 }}
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

              {/* Remember & Forgot */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between"
              >
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    name="remember"
                    checked={formData.remember}
                    onChange={handleInputChange}
                    className="w-4 h-4 rounded border-gray-300 text-[#0A2E5A] focus:ring-[#0A2E5A]"
                  />
                  <span
                    className={`text-sm ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                  >
                    Se souvenir
                  </span>
                </label>
                <a
                  href="/contact"
                  className={`text-sm font-medium ${isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700"} transition-colors`}
                >
                  Mot de passe ?
                </a>
              </motion.div>

              {/* Submit Error */}
              {errors.submit && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-500 text-sm text-center bg-red-500/10 py-2 px-4 rounded-lg"
                >
                  {errors.submit}
                </motion.p>
              )}

              {/* Submit Button */}
              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                type="submit"
                disabled={isLoading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${isLoading ? "bg-gray-500 cursor-not-allowed" : "bg-[#0A2E5A] hover:bg-[#0A2E5A]/90"}`}
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />{" "}
                    Connexion...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5" /> Se connecter{" "}
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </motion.button>
            </form>

            {/* Admin Access Info - Visible hint for development */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700"
            >
              <p
                className={`text-xs text-center ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
              >
                👉 Admin : admin@fbc.tn / admin123
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Login;
