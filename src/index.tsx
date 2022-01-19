import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { ThemeContextProvider } from './contexts/theme'
import { IPContextProvider } from './contexts/ip'
import './styles/index.css'

ReactDOM.render(
	<React.StrictMode>
		<ThemeContextProvider>
			<IPContextProvider>
				<App />
			</IPContextProvider>
		</ThemeContextProvider>
	</React.StrictMode>,
	document.getElementById('root')
)
