"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Clock,
  CheckCircle2,
  GraduationCap,
  Sparkles,
  Heart,
  Laptop,
  Users,
} from "lucide-react";

const Contact = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Nom requis";
    if (!formData.email.trim()) {
      newErrors.email = "Email requis";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email invalide";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Téléphone requis";
    } else if (
      !/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
        formData.phone,
      )
    ) {
      newErrors.phone = "Numéro invalide";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      // ✅ Sauvegarder dans localStorage pour Admin Dashboard
      const contactData = {
        id: Date.now(),
        nom: formData.name,
        prenom: "",
        telephone: formData.phone,
        email: formData.email,
        subject: formData.subject,
        message: "",
        createdAt: new Date().toLocaleString("fr-FR"),
      };
      const existing = JSON.parse(localStorage.getItem("fbcContacts") || "[]");
      localStorage.setItem(
        "fbcContacts",
        JSON.stringify([contactData, ...existing]),
      );

      // Simulation d'envoi
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", subject: "" });
      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(""), 5000);
    }
  };

  // Contact info - F.B.C Tunisia
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "Friends.best.center@gmail.com",
      link: "mailto:Friends.best.center@gmail.com",
      description: "Réponse sous 24h",
      color: "#0A2E5A",
    },
    {
      icon: Phone,
      title: "Téléphone",
      details: "+216 56 835 036 / +216 56 835 038",
      link: "tel:+21656835036",
      description: "Dim-Jeu : 9h-18h",
      color: "#D4AF37",
    },
    {
      icon: MapPin,
      title: "Adresse",
      details: "Lafayette, Immeuble Galaxie, Tunis",
      link: "https://maps.google.com/?q=Lafayette+Immeuble+Galaxie+Tunis",
      description: "Nous rendre visite",
      color: "#0A2E5A",
    },
  ];

  // Domaines F.B.C pour inspiration
  const domains = [
    { icon: GraduationCap, label: "Éducation", color: "#0A2E5A" },
    { icon: Heart, label: "Santé & Secours", color: "#D4AF37" },
    { icon: Laptop, label: "Numérique", color: "#0A2E5A" },
    { icon: Users, label: "Inclusion", color: "#D4AF37" },
  ];

  return (
    <section
      id="contact"
      className={`relative min-h-screen py-20 overflow-hidden transition-colors duration-500 ${
        isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-white"
      }`}
    >
      {/* Background subtil */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${isDarkMode ? "#D4AF37" : "#0A2E5A"} 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
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
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 mx-auto ${
              isDarkMode
                ? "bg-[#0A2E5A]/30 text-[#D4AF37] border border-[#D4AF37]/30"
                : "bg-[#0A2E5A]/10 text-[#0A2E5A] border border-[#0A2E5A]/20"
            }`}
          >
            <Sparkles size={14} className="fill-current" />
            <span className="text-xs font-bold uppercase tracking-wider">
              Contactez-nous
            </span>
          </div>

          <h2
            className={`text-3xl md:text-5xl font-black ${
              isDarkMode ? "text-white" : "text-[#0A2E5A]"
            }`}
          >
            Une question ? <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F2D06B]">
              Nous sommes là pour vous
            </span>
          </h2>

          <p
            className={`mt-4 text-lg max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-300" : "text-gray-600"
            }`}
          >
            Remplissez ce formulaire rapide et notre équipe vous recontacte sous
            24h. Premier conseil gratuit, sans engagement.
          </p>
        </motion.div>

        {/* Main Content: Form + Info */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Formulaire - 3/5 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-3"
          >
            <div
              className={`p-6 lg:p-8 rounded-3xl ${
                isDarkMode
                  ? "bg-gray-800/60 border border-gray-700/40"
                  : "bg-white border border-gray-200/40"
              } backdrop-blur-sm shadow-xl`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #0A2E5A, #1a4a7a)",
                  }}
                >
                  <Send size={22} className="text-white" />
                </div>
                <h3
                  className={`text-2xl font-bold ${
                    isDarkMode ? "text-white" : "text-[#0A2E5A]"
                  }`}
                >
                  Formulaire rapide
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Phone Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label
                      className={`flex items-center gap-2 text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <User size={14} />
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] ${
                        errors.name
                          ? "border-red-500 focus:ring-red-500/20"
                          : isDarkMode
                            ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                            : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      className={`flex items-center gap-2 text-sm font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      <Phone size={14} />
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] ${
                        errors.phone
                          ? "border-red-500 focus:ring-red-500/20"
                          : isDarkMode
                            ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                            : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                      }`}
                      placeholder="+216 XX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="text-red-500 text-xs">{errors.phone}</p>
                    )}
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    className={`flex items-center gap-2 text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <Mail size={14} />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] ${
                      errors.email
                        ? "border-red-500 focus:ring-red-500/20"
                        : isDarkMode
                          ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                    }`}
                    placeholder="votre@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">{errors.email}</p>
                  )}
                </div>

                {/* Subject */}
                <div className="space-y-2">
                  <label
                    className={`flex items-center gap-2 text-sm font-medium ${
                      isDarkMode ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    <MessageSquare size={14} />
                    Sujet (optionnel)
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] ${
                      isDarkMode
                        ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                    }`}
                    placeholder="Ex: Inscription, Renseignements..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl ${
                    isSubmitting
                      ? "bg-gray-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a] hover:from-[#0A2E5A]/90 hover:to-[#1a4a7a]/90"
                  }`}
                  style={{ border: "1px solid rgba(212, 175, 55, 0.3)" }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Envoi en cours...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Envoyer ma demande
                    </>
                  )}
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      isDarkMode
                        ? "bg-green-900/30 border border-green-700/50"
                        : "bg-green-50 border border-green-200"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <div>
                      <p
                        className={`font-medium ${isDarkMode ? "text-green-300" : "text-green-800"}`}
                      >
                        Demande envoyée !
                      </p>
                      <p
                        className={`text-sm ${isDarkMode ? "text-green-400" : "text-green-600"}`}
                      >
                        Nous vous recontactons sous 24h.
                      </p>
                    </div>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center gap-3 ${
                      isDarkMode
                        ? "bg-red-900/30 border border-red-700/50"
                        : "bg-red-50 border border-red-200"
                    }`}
                  >
                    <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0 rotate-45" />
                    <div>
                      <p
                        className={`font-medium ${isDarkMode ? "text-red-300" : "text-red-800"}`}
                      >
                        Erreur d'envoi
                      </p>
                      <p
                        className={`text-sm ${isDarkMode ? "text-red-400" : "text-red-600"}`}
                      >
                        Veuillez réessayer ou nous appeler directement.
                      </p>
                    </div>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>

          {/* Sidebar Info - 2/5 */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Contact Cards */}
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <motion.a
                  key={index}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`group block p-5 rounded-2xl transition-all duration-300 ${
                    isDarkMode
                      ? "bg-gray-800/40 border border-gray-700/40 hover:border-[#D4AF37]/40"
                      : "bg-white border border-gray-200/40 hover:border-[#0A2E5A]/30"
                  } backdrop-blur-sm shadow-lg hover:shadow-xl`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-110"
                      style={{
                        background: `linear-gradient(135deg, ${info.color}20, ${info.color}35)`,
                        border: `2px solid ${info.color}40`,
                      }}
                    >
                      <IconComponent size={22} style={{ color: info.color }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-bold mb-1 ${
                          isDarkMode ? "text-white" : "text-[#0A2E5A]"
                        }`}
                      >
                        {info.title}
                      </h3>
                      <p
                        className={`font-medium text-sm mb-1 ${
                          isDarkMode ? "text-gray-200" : "text-gray-800"
                        }`}
                      >
                        {info.details}
                      </p>
                      <p
                        className={`text-xs ${
                          isDarkMode ? "text-gray-400" : "text-gray-500"
                        }`}
                      >
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}

            {/* Domaines F.B.C */}
            <div
              className={`p-5 rounded-2xl ${
                isDarkMode
                  ? "bg-gray-800/40 border border-gray-700/40"
                  : "bg-white border border-gray-200/40"
              } backdrop-blur-sm shadow-lg`}
            >
              <h4
                className={`font-bold mb-4 ${
                  isDarkMode ? "text-white" : "text-[#0A2E5A]"
                }`}
              >
                Nos domaines
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {domains.map((domain, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 p-3 rounded-xl ${
                      isDarkMode ? "bg-gray-900/50" : "bg-gray-50"
                    }`}
                  >
                    <domain.icon
                      size={16}
                      style={{ color: domain.color }}
                      className="flex-shrink-0"
                    />
                    <span
                      className={`text-xs font-medium ${
                        isDarkMode ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      {domain.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div
              className={`p-5 rounded-2xl ${
                isDarkMode
                  ? "bg-gray-800/40 border border-gray-700/40"
                  : "bg-white border border-gray-200/40"
              } backdrop-blur-sm shadow-lg`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #0A2E5A, #1a4a7a)",
                  }}
                >
                  <Clock size={18} className="text-white" />
                </div>
                <h4
                  className={`font-bold ${
                    isDarkMode ? "text-white" : "text-[#0A2E5A]"
                  }`}
                >
                  Horaires
                </h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    Dimanche - Jeudi
                  </span>
                  <span
                    className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                  >
                    9h00 - 18h00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    Vendredi
                  </span>
                  <span
                    className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                  >
                    9h00 - 12h00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span
                    className={isDarkMode ? "text-gray-400" : "text-gray-600"}
                  >
                    Samedi
                  </span>
                  <span
                    className={`font-medium ${isDarkMode ? "text-gray-200" : "text-gray-800"}`}
                  >
                    Fermé
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-12 text-center"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
              />
              <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Premier conseil gratuit
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
              />
              <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Réponse sous 24h
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2
                size={16}
                className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
              />
              <span className={isDarkMode ? "text-gray-400" : "text-gray-600"}>
                Sans engagement
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
