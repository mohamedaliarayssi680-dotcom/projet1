import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import {
  Users,
  Search,
  X,
  Phone,
  Mail,
  User,
  ArrowLeft,
  Shield,
  CheckCircle,
  MessageSquare,
  Eye,
  Trash2,
  Circle,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AdminDashboard = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [currentContact, setCurrentContact] = useState(null);

  // Charger les contacts depuis localStorage
  useEffect(() => {
    const stored = localStorage.getItem("fbcContacts");
    if (stored) {
      const parsed = JSON.parse(stored);
      const normalized = parsed.map((c) => ({
        ...c,
        nom: c.nom || c.name || "",
        telephone: c.telephone || c.phone || "",
        subject: c.subject || "",
        read: c.read || false,
      }));
      setContacts(normalized);
    }
  }, []);

  // Sauvegarder
  const saveContacts = (newContacts) => {
    localStorage.setItem("fbcContacts", JSON.stringify(newContacts));
    setContacts(newContacts);
  };

  // Filtrer
  const filteredContacts = contacts.filter(
    (c) =>
      c.nom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.prenom?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.telephone?.includes(searchTerm) ||
      c.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.subject?.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Marquer comme LU lorsqu'on ouvre en consultation
  const openViewModal = (contact) => {
    setCurrentContact(contact);
    setShowModal(true);

    if (!contact.read) {
      const updated = contacts.map((c) =>
        c.id === contact.id ? { ...c, read: true } : c,
      );
      saveContacts(updated);
    }
  };

  // Supprimer
  const handleDelete = (id) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer ce contact ?")) {
      saveContacts(contacts.filter((c) => c.id !== id));
    }
  };

  // Stats : compteurs Lus / Non lus
  const totalUnread = contacts.filter((c) => !c.read).length;
  const totalRead = contacts.filter((c) => c.read).length;

  return (
    <section
      className={`min-h-screen py-8 px-4 pt-24 ${isDarkMode ? "bg-gray-900" : "bg-gradient-to-br from-gray-50 to-white"}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className={`sticky top-20 z-30 mb-8 p-5 rounded-2xl shadow-xl ${isDarkMode ? "bg-gray-800/95 border border-gray-700" : "bg-white/95 border border-gray-200"} backdrop-blur-md`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* Bouton Retour */}
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
                    {contacts.length} contact{contacts.length > 1 ? "s" : ""} •{" "}
                    {totalUnread} non lu{totalUnread > 1 ? "s" : ""}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Cards simplifiées : Total / Lus / Non lus */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8"
        >
          {/* Total contacts */}
          <div
            className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg`}
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

          {/*  Contacts LUS */}
          <div
            className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg">
                <CheckCircle className="w-7 h-7 text-white" />
              </div>
              <div>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Lus
                </p>
                <p className="text-3xl font-bold text-green-500">{totalRead}</p>
              </div>
            </div>
          </div>

          {/* Contacts NON LUS */}
          <div
            className={`p-6 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg`}
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center shadow-lg relative">
                <Circle className="w-7 h-7 text-white fill-current" />
                {totalUnread > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-white text-red-600 text-xs flex items-center justify-center font-bold border-2 border-red-500">
                    {totalUnread}
                  </span>
                )}
              </div>
              <div>
                <p
                  className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                >
                  Non lus
                </p>
                <p className="text-3xl font-bold text-red-500">{totalUnread}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={`mb-8 p-5 rounded-2xl ${isDarkMode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg`}
        >
          <div className="relative">
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
        </motion.div>

        {/* Contacts Table */}
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
                    Statut
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
                      colSpan="7"
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
                          Les contacts apparaîtront ici lorsqu'ils seront soumis
                          via le formulaire
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
                      className={`group ${isDarkMode ? "hover:bg-gray-700/50" : "hover:bg-gray-50"} transition-colors ${!contact.read ? (isDarkMode ? "bg-blue-900/10" : "bg-blue-50/50") : ""}`}
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
                            {contact.subject.length > 20
                              ? contact.subject.substring(0, 20) + "..."
                              : contact.subject}
                          </span>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>

                      {/* Colonne Statut LU/NON LU */}
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {contact.read ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-green-500/15 text-green-600 dark:text-green-400">
                              <CheckCircle size={14} />
                              Lu
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium bg-red-500/15 text-red-600 dark:text-red-400">
                              <Circle size={14} className="fill-current" />
                              Non lu
                            </span>
                          )}
                        </div>
                      </td>

                      <td
                        className={`px-6 py-4 text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                      >
                        {contact.createdAt}
                      </td>

                      {/* Actions : Voir et Supprimer */}
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openViewModal(contact)}
                            className={`p-2.5 rounded-lg transition-all flex items-center gap-1.5 ${
                              !contact.read
                                ? isDarkMode
                                  ? "bg-blue-900/30 text-blue-400 hover:bg-blue-900/50"
                                  : "bg-blue-50 text-blue-600 hover:bg-blue-100"
                                : isDarkMode
                                  ? "hover:bg-gray-600 text-gray-400 hover:text-white"
                                  : "hover:bg-gray-100 text-gray-500 hover:text-[#0A2E5A]"
                            }`}
                            title={
                              !contact.read
                                ? "Consulter (marquer comme lu)"
                                : "Consulter"
                            }
                          >
                            <Eye size={18} />
                            <span className="text-xs hidden xl:inline">
                              {!contact.read ? "Lire" : "Voir"}
                            </span>
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

        {/* Modal de consultation */}
        <AnimatePresence>
          {showModal && currentContact && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100000] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-md"
              onClick={() => setShowModal(false)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 10 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 10 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                onClick={(e) => e.stopPropagation()}
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
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${currentContact.read ? "bg-green-500" : "bg-blue-500"}`}
                    >
                      {currentContact.read ? (
                        <CheckCircle className="w-5 h-5 text-white" />
                      ) : (
                        <Eye className="w-5 h-5 text-white" />
                      )}
                    </div>
                    Détails du contact
                    {!currentContact.read && (
                      <span className="ml-2 px-2 py-0.5 rounded-full text-xs font-medium bg-red-500/20 text-red-500">
                        Nouveau
                      </span>
                    )}
                  </h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className={`p-2 rounded-lg transition-colors ${isDarkMode ? "hover:bg-gray-700 text-gray-400" : "hover:bg-gray-200 text-gray-500"}`}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="p-6 space-y-4">
                  {[
                    { label: "Nom", value: currentContact?.nom, icon: User },
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
                      label: "Date de soumission",
                      value: currentContact?.createdAt,
                      icon: CheckCircle,
                    },
                    {
                      label: "Statut",
                      value: currentContact?.read ? "Lu ✓" : "Non lu ●",
                      icon: currentContact?.read ? CheckCircle : Circle,
                      highlight: !currentContact?.read,
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-4 p-4 rounded-xl ${isDarkMode ? "bg-gray-900/50" : "bg-gray-50"} ${item.highlight ? "ring-2 ring-red-500/30" : ""}`}
                    >
                      <div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center ${isDarkMode ? "bg-gray-800" : "bg-white"} shadow-sm`}
                      >
                        <item.icon
                          size={18}
                          className={`${isDarkMode ? "text-gray-400" : "text-gray-500"} ${item.highlight ? "text-red-500" : ""}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}
                        >
                          {item.label}
                        </p>
                        <p
                          className={`text-base font-semibold truncate ${isDarkMode ? "text-white" : "text-gray-900"} ${item.highlight ? "text-red-500" : ""}`}
                        >
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/*  Modal Footer - Bouton Répondre supprimé */}
                <div
                  className={`p-6 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"} flex justify-end`}
                >
                  <button
                    onClick={() => setShowModal(false)}
                    className={`px-5 py-2.5 rounded-xl font-medium transition-all ${isDarkMode ? "bg-gray-700 hover:bg-gray-600 text-white" : "bg-gray-100 hover:bg-gray-200 text-gray-700"}`}
                  >
                    Fermer
                  </button>
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
