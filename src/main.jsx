import '@/i18n/i18n'
import '@/index.css'
import { HomePage } from '@/pages/homePage'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
	<NextUIProvider>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<HomePage />} />
				</Routes>
			</BrowserRouter>
		</QueryClientProvider>
	</NextUIProvider>
)
