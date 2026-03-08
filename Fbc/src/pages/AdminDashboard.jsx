import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  Users,
  Plus,
  Edit,
  Trash2,
  Eye,
  LogOut,
  Search,
  X,
  Phone,
  Mail,
  User,
  ArrowLeft,
  Shield,
  GraduationCap,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AdminDashboard = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMode, setModalMode] = useState("view");
  const [currentContact, setCurrentContact] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    telephone: "",
    email: "",
    subject: "",
  });
  const [errors, setErrors] = useState({});

  // Charger les contacts depuis localStorage (compatible avec Contact.jsx)
  useEffect(() => {
    const stored = localStorage.getItem("fbcContacts");
    if (stored) {
      const parsed = JSON.parse(stored);
      const normalized = parsed.map((c) => ({
        ...c,
        nom: c.nom || c.name || "",
        telephone: c.telephone || c.phone || "",
        subject: c.subject || "",
      }));
      setContacts(normalized);
    }
  }, []);

  // Sauvegarder
  const saveContacts = (newContacts) => {
    localStorage.setItem("fbcContacts", JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  // Filtrer (inclut le champ subject)
  const filteredContacts = contacts.filter(
    (c) =>
      c.nom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.prenom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.telephone?.includes(searchTerm) ||
      c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subject?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Ouvrir modal
  const openModal = (mode, contact = null) => {
    setModalMode(mode);
    setErrors({});
    if (contact) {
      setCurrentContact(contact);
      setFormData({
        nom: contact.nom || "",
        prenom: contact.prenom || "",
        telephone: contact.telephone || "",
        email: contact.email || "",
        subject: contact.subject || "",
      });
    } else {
      setFormData({
        nom: "",
        prenom: "",
        telephone: "",
        email: "",
        subject: "",
      });
    }
    setShowModal(true);
  };

  // Validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.nom.trim()) newErrors.nom = "Nom requis";
    if (modalMode === "create" && !formData.email.trim()) {
      newErrors.email = "Email requis";
    } else if (
      formData.email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Email invalide";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Créer
  const handleCreate = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newContact = {
      id: Date.now(),
      ...formData,
      createdAt: new Date().toLocaleString("fr-FR"),
    };
    saveContacts([newContact, ...contacts]);
    setShowModal(false);
    setFormData({ nom: "", prenom: "", telephone: "", email: "", subject: "" });
  };

  // Modifier
  const handleUpdate = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const updated = contacts.map((c) =>
      c.id === currentContact.id ? { ...c, ...formData } : c,
    );
    saveContacts(updated);
    setShowModal(false);
  };

  // Supprimer
  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce contact ?")) {
      saveContacts(contacts.filter((c) => c.id !== id));
    }
  };

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("adminSession");
    navigate("/");
  };

  return (
    <section
      className={`min-h-screen py-8 px-4 pt-24 ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header - Fixed & Professional */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`sticky top-20 z-30 mb-8 p-5 rounded-2xl shadow-xl ${isDarkMode ? "bg-gray-800/95 border border-gray-700" : "bg-white/95 border border-gray-200"} backdrop-blur-md`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => navigate("/")}
                className={`p-3 rounded-xl transition-all ${isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
                title="Retour à l'accueil"
              >
                <ArrowLeft size={20} />
              </button>

              <div className="flex items-center gap-3">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-lg ${isDarkMode ? "bg-gradient-to-br from-[#0A2E5A] to-[#1a4a7a]" : "bg-gradient-to-br from-[#0A2E5A] to-[#1a4a7a]"}`}
                >
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h1
                    className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                  >
                    Admin Dashboard
                  </h1>
                  <p
                    className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                  >
                    {contacts.length} contact{contacts.length > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <LogOut size={18} />
              <span className="hidden sm:inline">Déconnexion</span>
            </button>
          </div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
        >
          <div
            className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A2E5A] to-[#1a4a7a] flex items-center justify-center shadow-lg">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Total
                </p>
                <p
                  className={`text-3xl font-bold ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                >
                  {contacts.length}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <div>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Avec email
                </p>
                <p className="text-3xl font-bold text-green-500">
                  {contacts.filter((c) => c.email).length}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg hover:shadow-xl transition-shadow`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#F2D06B] flex items-center justify-center shadow-lg">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <div>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Avec téléphone
                </p>
                <p className="text-3xl font-bold text-[#D4AF37]">
                  {contacts.filter((c) => c.telephone).length}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search & Add Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mb-8 p-5 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg`}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search
                className={`absolute left-4 top-1/2 -translate-y-1/2 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                size={20}
              />
              <input
                type="text"
                placeholder="Rechercher par nom, email, téléphone ou sujet..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className={`w-full pl-12 pr-12 py-3.5 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 focus:border-[#0A2E5A] ${isDarkMode ? "bg-gray-900/50 border-gray-700 text-white placeholder-gray-500" : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"}`}
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors"
                >
                  <X
                    size={18}
                    className={isDarkMode ? "text-gray-400" : "text-gray-500"}
                  />
                </button>
              )}
            </div>
            <button
              onClick={() => openModal("create")}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#0A2E5A] to-[#1a4a7a] text-white hover:from-[#0A2E5A]/90 hover:to-[#1a4a7a]/90 flex items-center justify-center gap-2 font-semibold transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <Plus size={20} /> Ajouter un contact
            </button>
          </div>
        </motion.div>

        {/* Contacts Table - Responsive avec sujet */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`rounded-2xl overflow-hidden ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg`}
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px]">
              <thead className={isDarkMode ? "bg-gray-900/50" : "bg-gray-50"}>
                <tr>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Contact
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Email
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Téléphone
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Sujet
                  </th>
                  <th
                    className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Date
                  </th>
                  <th
                    className={`px-6 py-4 text-right text-sm font-semibold ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {filteredContacts.length === 0 ? (
                  <tr>
                    <td
                      colSpan="6"
                      className={`px-6 py-16 text-center ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                    >
                      <div className="flex flex-col items-center">
                        <div
                          className={`w-20 h-20 rounded-full flex items-center justify-center mb-4 ${isDarkMode ? "bg-gray-700" : "bg-gray-100"}`}
                        >
                          <Users className="w-10 h-10 opacity-50" />
                        </div>
                        <p className="text-lg font-medium">
                          Aucun contact trouvé
                        </p>
                        <p className="text-sm mt-1">
                          Ajoutez votre premier contact pour commencer
                        </p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  filteredContacts.map((contact, index) => (
                    <motion.tr
                      key={contact.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`group ${isDarkMode ? "hover:bg-gray-700/50" : "hover:bg-gray-50"} transition-colors`}
                    >
                      <td
                        className={`px-6 py-4 ${isDarkMode ? "text-white" : "text-gray-900"}`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${isDarkMode ? "bg-gray-700" : "bg-gradient-to-br from-[#0A2E5A] to-[#1a4a7a]"}`}
                          >
                            <User size={20} className="text-white" />
                          </div>
                          <div>
                            <p className="font-semibold">{contact.nom}</p>
                            {contact.prenom && (
                              <p
                                className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                              >
                                {contact.prenom}
                              </p>
                            )}
                          </div>
                        </div>
                      </td>
                      <td
                        className={`px-6 py-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {contact.email ? (
                          <a
                            href={`mailto:${contact.email}`}
                            className="hover:text-[#0A2E5A] hover:underline transition-colors"
                          >
                            {contact.email}
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td
                        className={`px-6 py-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {contact.telephone || (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td
                        className={`px-6 py-4 ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}
                      >
                        {contact.subject ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-lg text-xs font-medium bg-[#0A2E5A]/10 text-[#0A2E5A] dark:bg-[#D4AF37]/10 dark:text-[#D4AF37]">
                            <MessageSquare size={12} />
                            {contact.subject.length > 25
                              ? contact.subject.substring(0, 25) + "..."
                              : contact.subject}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td
                        className={`px-6 py-4 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {contact.createdAt}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openModal("view", contact)}
                            className={`p-2.5 rounded-lg transition-all ${isDarkMode ? "hover:bg-gray-600 text-gray-400 hover:text-white" : "hover:bg-gray-100 text-gray-500 hover:text-[#0A2E5A]"}`}
                            title="Voir"
                          >
                            <Eye size={18} />
                          </button>
                          <button
                            onClick={() => openModal("edit", contact)}
                            className={`p-2.5 rounded-lg transition-all ${isDarkMode ? "hover:bg-blue-900/30 text-blue-400" : "hover:bg-blue-50 text-blue-600"}`}
                            title="Modifier"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(contact.id)}
                            className={`p-2.5 rounded-lg transition-all ${isDarkMode ? "hover:bg-red-900/30 text-red-400" : "hover:bg-red-50 text-red-600"}`}
                            title="Supprimer"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* ✅ MODAL FIXÉ - z-index élevé + positionnement correct */}
        <AnimatePresence>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              // ✅ z-[100000] pour être AU-DESSUS de la navbar (z-[9999])
              className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
                // ✅ max-h-[90vh] + overflow-y-auto pour éviter le débordement
                className={`w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-2xl`}
              >
                {/* Modal Header */}
                <div
                  className={`sticky top-0 z-10 flex items-center justify-between p-6 border-b ${isDarkMode ? "border-gray-700 bg-gray-800" : "border-gray-200 bg-white"}`}
                >
                  <h3
                    className={`text-xl font-bold flex items-center gap-3 ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
                  >
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${modalMode === "create" ? "bg-green-500" : modalMode === "edit" ? "bg-blue-500" : "bg-purple-500"}`}
                    >
                      {modalMode === "create" ? (
                        <Plus className="w-5 h-5 text-white" />
                      ) : modalMode === "edit" ? (
                        <Edit className="w-5 h-5 text-white" />
                      ) : (
                        <Eye className="w-5 h-5 text-white" />
                      )}
                    </div>
                    {modalMode === "create" && "Nouveau contact"}
                    {modalMode === "edit" && "Modifier le contact"}
                    {modalMode === "view" && "Détails du contact"}
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-700 text-gray-400" : "hover:bg-gray-200 text-gray-500"}`}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body - Scrollable si contenu long */}
                <div className="p-6">
                  {modalMode === "view" ? (
                    <div className="space-y-4">
                      {[
                        {
                          label: "Nom",
                          value: currentContact?.nom,
                          icon: User,
                        },
                        {
                          label: "Prénom",
                          value: currentContact?.prenom || "-",
                          icon: User,
                        },
                        {
                          label: "Email",
                          value: currentContact?.email || "-",
                          icon: Mail,
                        },
                        {
                          label: "Téléphone",
                          value: currentContact?.telephone || "-",
                          icon: Phone,
                        },
                        {
                          label: "Sujet",
                          value: currentContact?.subject || "-",
                          icon: MessageSquare,
                        },
                        {
                          label: "Date d'ajout",
                          value: currentContact?.createdAt,
                          icon: CheckCircle,
                        },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-4 p-4 rounded-xl ${isDarkMode ? "bg-gray-900/50" : "bg-gray-50"}`}
                        >
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}
                          >
                            <item.icon
                              size={18}
                              className={
                                isDarkMode ? "text-gray-400" : "text-gray-500"
                              }
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p
                              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                            >
                              {item.label}
                            </p>
                            <p
                              className={`text-base font-semibold truncate ${isDarkMode ? "text-white" : "text-gray-900"}`}
                            >
                              {item.value}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <form
                      onSubmit={
                        modalMode === "create" ? handleCreate : handleUpdate
                      }
                      className="space-y-4"
                    >
                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Nom <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.nom}
                          onChange={(e) =>
                            setFormData({ ...formData, nom: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 ${errors.nom ? "border-red-500 focus:ring-red-500/20" : isDarkMode ? "bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]/20" : "bg-white border-gray-200 text-gray-900 focus:border-[#0A2E5A] focus:ring-[#0A2E5A]/20"}`}
                          placeholder="Nom du contact"
                          required
                        />
                        {errors.nom && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.nom}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Prénom
                        </label>
                        <input
                          type="text"
                          value={formData.prenom}
                          onChange={(e) =>
                            setFormData({ ...formData, prenom: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]/20" : "bg-white border-gray-200 text-gray-900 focus:border-[#0A2E5A] focus:ring-[#0A2E5A]/20"}`}
                          placeholder="Prénom du contact"
                        />
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Email{" "}
                          {modalMode === "create" && (
                            <span className="text-red-500">*</span>
                          )}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 ${errors.email ? "border-red-500 focus:ring-red-500/20" : isDarkMode ? "bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]/20" : "bg-white border-gray-200 text-gray-900 focus:border-[#0A2E5A] focus:ring-[#0A2E5A]/20"}`}
                          placeholder="email@exemple.com"
                          required={modalMode === "create"}
                        />
                        {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                            {errors.email}
                          </p>
                        )}
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Téléphone
                        </label>
                        <input
                          type="tel"
                          value={formData.telephone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              telephone: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]/20" : "bg-white border-gray-200 text-gray-900 focus:border-[#0A2E5A] focus:ring-[#0A2E5A]/20"}`}
                          placeholder="+216 XX XXX XXX"
                        />
                      </div>

                      <div>
                        <label
                          className={`block text-sm font-medium mb-2 ${isDarkMode ? "text-gray-300" : "text-gray-700"}`}
                        >
                          Sujet (optionnel)
                        </label>
                        <input
                          type="text"
                          value={formData.subject}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              subject: e.target.value,
                            })
                          }
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all focus:outline-none focus:ring-2 ${isDarkMode ? "bg-gray-900/50 border-gray-700 text-white focus:border-[#D4AF37] focus:ring-[#D4AF37]/20" : "bg-white border-gray-200 text-gray-900 focus:border-[#0A2E5A] focus:ring-[#0A2E5A]/20"}`}
                          placeholder="Ex: Inscription, Renseignements..."
                        />
                      </div>

                      <div className="flex gap-3 pt-4">
                        <button
                          type="button"
                          onClick={() => setShowModal(false)}
                          className={`flex-1 py-3.5 rounded-xl font-semibold transition-all ${isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
                        >
                          Annuler
                        </button>
                        <button
                          type="submit"
                          className={`flex-1 py-3.5 rounded-xl font-semibold text-white transition-all shadow-lg hover:shadow-xl ${modalMode === "create" ? "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700" : "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700"}`}
                        >
                          {modalMode === "create"
                            ? "Créer le contact"
                            : "Modifier le contact"}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AdminDashboard;
