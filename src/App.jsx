import React from 'react'
import { useTranslation } from 'react-i18next'

function App() {
	const { t, i18n } = useTranslation()

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	return (
		<div>
			<button onClick={() => changeLanguage('en')}>English</button>
			<button onClick={() => changeLanguage('ru')}>Deutsch</button>
			<h1>{t('title')}</h1>
			<p>{t('description.part1')}</p>
			<p>{t('description.part2')}</p>
		</div>
	)
}

export default App
