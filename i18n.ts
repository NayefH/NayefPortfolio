/* eslint-disable @typescript-eslint/no-require-imports */
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
    .use(initReactI18next)
    .init({
        lng: "de",
        fallbackLng: "de",
        supportedLngs: ["de", "en"],
        interpolation: { escapeValue: false },
        resources: {
            de: {
                translation: require("../public/locales/de/translation.json")
            },
            en: {
                translation: require("../public/locales/en/translation.json")
            }
        }
    });

export default i18n;
