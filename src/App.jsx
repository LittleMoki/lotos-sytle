import React from 'react'
import { useTranslation } from 'react-i18next'

function App() {
	const { t, i18n } = useTranslation()

	const changeLanguage = lng => {
		i18n.changeLanguage(lng)
	}

	return (
		<div>
			Hello World
		</div>
	)
}

export default App
