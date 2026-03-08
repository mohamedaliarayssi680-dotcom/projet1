import { useTheme } from "../context/ThemeContext";
import { Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const { isDarkMode } = useTheme();

  return (
    <footer
      className={`relative py-12 border-t transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 border-gray-800" : "bg-white border-gray-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Content - 3 Columns Simple */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #0A2E5A, #1a4a7a)",
                }}
              >
                <span className="text-white font-bold text-sm">F.B.C</span>
              </div>
              <span
                className={`font-bold text-lg ${isDarkMode ? "text-white" : "text-[#0A2E5A]"}`}
              >
                Friends Best Center
              </span>
            </div>

            <p
              className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              Former, Accompagner, Autonomiser. Éducation, Santé, Numérique et
              Inclusion pour tous.
            </p>
          </div>

          {/* Contact - UPDATED */}
          <div className="space-y-4">
            <h4
              className={`text-sm font-bold uppercase tracking-wider ${
                isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
              }`}
            >
              Nous trouver
            </h4>

            <div className="space-y-3">
              {/* Phone - UPDATED with both numbers */}
              <a
                href="tel:+21656835036"
                className={`flex items-center gap-3 text-sm group ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-[#0A2E5A]"
                } transition-colors`}
              >
                <Phone
                  size={16}
                  className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
                />
                <span>+216 56 835 036 / +216 56 835 038</span>
              </a>

              {/* Email - UPDATED */}
              <a
                href="mailto:Friends.best.center@gmail.com"
                className={`flex items-center gap-3 text-sm group ${
                  isDarkMode
                    ? "text-gray-400 hover:text-white"
                    : "text-gray-600 hover:text-[#0A2E5A]"
                } transition-colors`}
              >
                <Mail
                  size={16}
                  className={isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"}
                />
                <span>Friends.best.center@gmail.com</span>
              </a>

              {/* Address - UPDATED */}
              <div
                className={`flex items-start gap-3 text-sm ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
              >
                <MapPin
                  size={16}
                  className={`mt-0.5 flex-shrink-0 ${
                    isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
                  }`}
                />
                <span>Lafayette, Immeuble Galaxie, Tunis</span>
              </div>
            </div>
          </div>

          {/* Social + Legal - LinkedIn REMOVED */}
          <div className="space-y-4">
            <h4
              className={`text-sm font-bold uppercase tracking-wider ${
                isDarkMode ? "text-[#D4AF37]" : "text-[#0A2E5A]"
              }`}
            >
              Suivez-nous
            </h4>

            {/* Social Icons - Facebook + Instagram ONLY */}
            <div className="flex gap-3">
              {[
                {
                  href: "https://facebook.com/friendsbestcenter",
                  icon: Facebook,
                  label: "Facebook",
                },
                {
                  href: "https://instagram.com/friendsbestcenter",
                  icon: Instagram,
                  label: "Instagram",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    isDarkMode
                      ? "bg-gray-800 text-gray-400 hover:text-[#D4AF37] hover:bg-gray-700"
                      : "bg-gray-100 text-gray-600 hover:text-[#0A2E5A] hover:bg-gray-200"
                  }`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div
              className={`flex gap-4 text-xs pt-2 border-t ${
                isDarkMode ? "border-gray-800" : "border-gray-200"
              }`}
            >
              <a
                href="/privacy-policy"
                className={`${
                  isDarkMode
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                } transition-colors`}
              >
                Confidentialité
              </a>
              <a
                href="/terms-of-use"
                className={`${
                  isDarkMode
                    ? "text-gray-500 hover:text-gray-300"
                    : "text-gray-400 hover:text-gray-600"
                } transition-colors`}
              >
                Conditions
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar - Ultra Minimal */}
        <div
          className={`mt-10 pt-6 border-t text-center ${
            isDarkMode ? "border-gray-800" : "border-gray-200"
          }`}
        >
          <p
            className={`text-xs ${isDarkMode ? "text-gray-500" : "text-gray-400"}`}
          >
            © {new Date().getFullYear()} Friends Best Center. Tous droits
            réservés. 🇹🇳
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
