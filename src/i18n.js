import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            welcome: "Empowering Digital Literacy!",
        },
    },
    hi: {
        translation: {
            welcome: "डिजिटल साक्षरता को सशक्त बनाना!",
        },
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
