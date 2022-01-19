import { createContext, useState, useContext } from 'react'

const IPContext = createContext({
	ip: '',
	setIP: (ip: string) => {},
})

export const useIPContext = () => useContext(IPContext)

export const IPContextProvider = ({ children }: { children: JSX.Element }) => {
	const [ip, setIP] = useState('')

	return <IPContext.Provider value={{ ip, setIP }}>{children}</IPContext.Provider>
}
