import { BiSearchAlt2 } from 'react-icons/bi'
import { useState } from 'react'

type SearchBarProps = {
	placeholder?: string
	onSearch: (input: string) => void
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
	const [input, setInput] = useState('')

	return (
		<div className='md:w-52 w-28 mr-4 relative h-8 rounded-md overflow-hidden'>
			<input
				className='placeholder:text-sm h-full text-sm active:border-none text-black px-3 mr-4 border-none bg-white w-full tracking-widest'
				type='number'
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === 'Enter') {
						onSearch(input)
					}
				}}
				placeholder={placeholder || 'Search IP'}
			/>
			<div
				onClick={() => onSearch(input)}
				className='cursor-pointer absolute h-8 w-8 dark:bg-zinc-800 bg-slate-300 right-0 top-0 flex items-center justify-around'>
				<BiSearchAlt2 className='text-lg' />
			</div>
		</div>
	)
}
export default SearchBar
