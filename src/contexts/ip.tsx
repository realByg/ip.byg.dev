import { createContext, useState, useContext } from 'react'

const IPContext = createContext({
	searchIP: '',
	setSearchIP: (ip: string) => {},
})

export const useIPContext = () => useContext(IPContext)

export const IPContextProvider = ({ children }: { children: JSX.Element }) => {
	const [searchIP, setSearchIP] = useState('')

	return <IPContext.Provider value={{ searchIP, setSearchIP }}>{children}</IPContext.Provider>
}
