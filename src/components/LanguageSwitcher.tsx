import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "de" ? "en" : "de";
    i18n.changeLanguage(newLang);
  };

  return (
    <div className="flex justify-end pr-8 pt-4 z-40 relative">
      <button
        onClick={toggleLanguage}
        className="text-cyan-400 font-semibold border border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-400 hover:text-black transition-colors duration-200"
      >
        {i18n.language === "de" ? "EN" : "DE"}
      </button>
    </div>
  );
};

export default LanguageSwitcher;
