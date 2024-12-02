import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'
import enTrans from './locales/en/translation.json'
import ruTrans from './locales/ru/translation.json'

const resources = {
	en: {
		translation: enTrans,
	},
	ru: {
		translation: ruTrans,
	},
}

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: 'en',
		detection: {
			order: ['queryString', 'cookie'],
			cache: ['cookie'],
		},
		interpolation: {
			escapeValue: false,
		},
	})

export default i18n
