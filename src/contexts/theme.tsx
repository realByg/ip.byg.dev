import { createContext, useState, useEffect, useContext } from 'react'

const ThemeContext = createContext({
	themeDark: true,
	setThemeDark: (themeDark: boolean) => {},
})

export const useThemeContext = () => useContext(ThemeContext)

export const ThemeContextProvider = ({ children }: { children: JSX.Element }) => {
	const [themeDark, setThemeDark] = useState(true)

	useEffect(() => {
		setThemeDark(localStorage.getItem('dark') !== '0')
	}, [])

	useEffect(() => {
		document.querySelector('html')?.classList[themeDark ? 'add' : 'remove']('dark')
		localStorage.setItem('dark', themeDark ? '1' : '0')
	}, [themeDark])

	return (
		<ThemeContext.Provider value={{ themeDark, setThemeDark }}>{children}</ThemeContext.Provider>
	)
}
