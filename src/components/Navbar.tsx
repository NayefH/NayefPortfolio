import React from "react";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  sections: { id: string; title: string }[];
  scrollToSection: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ sections, scrollToSection }) => {
  const { i18n, t } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "de" ? "en" : "de";
    i18n.changeLanguage(newLang);
  };

  return (
    <nav className="fixed top-0 left-0 z-30 w-full bg-black/90 border-b-2 border-cyan-400 px-4 py-3 md:px-10 md:py-4 flex flex-col md:flex-row items-center gap-3 md:gap-6 justify-between">
      <span className="text-cyan-400 font-extrabold text-base md:text-xl tracking-widest uppercase whitespace-nowrap">
        {t("Nayef Hajjaj")}
      </span>

      <ul className="flex flex-wrap md:flex-nowrap items-center gap-2 md:gap-4 justify-center">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollToSection(section.id)}
              className="px-3 py-2 text-white hover:text-cyan-400 font-semibold transition-colors duration-200 text-sm md:text-base uppercase tracking-wide"
              aria-label={section.title}
            >
              {section.title}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={toggleLanguage}
        className="text-cyan-400 font-semibold border border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-200 whitespace-nowrap"
        aria-label={t("languageSwitcherLabel")}
      >
        {i18n.language === "de" ? "EN" : "DE"}
      </button>
    </nav>
  );
};

export default Navbar;
