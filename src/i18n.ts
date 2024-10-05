import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationAR from "./locales/ar/translation.json";

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

// Get the saved language from localStorage or default to "en"
const savedLanguage = localStorage.getItem("language") || "en";

i18n
  .use(initReactI18next) // Passes i18n down to React
  .init({
    resources,
    lng: savedLanguage, // Set the language from localStorage
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
