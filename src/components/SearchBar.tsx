import { BiSearchAlt2 } from 'react-icons/bi'
import { useEffect, useState } from 'react'

type SearchBarProps = {
	placeholder?: string
	onSearch: (input: string) => void
}

const SearchBar = ({ placeholder, onSearch }: SearchBarProps) => {
	const [input, setInput] = useState('')
	const [inputInvalid, setInputInvalid] = useState(false)

	useEffect(() => {
		setInputInvalid(false)
	}, [input])

	const _onSearch = () => {
		const _input = input.trim()
		if (_input === '') return

		if (
			!/^((25[0-5]|(2[0-4]|1\d|[1-9]|)\d)(\.(?!$)|$)){4}$/.test(_input) && // ipv4
			!/([a-f0-9:]+:+)+[a-f0-9]+/.test(_input) // ipv6
		) {
			setInputInvalid(true)
			return
		}

		onSearch(_input)
		setInput('')
	}

	return (
		<div className='max-w-[250px] w-full h-8 flex'>
			<div className='flex-1'>
				<input
					className={`${
						inputInvalid ? 'text-red-600 underline' : 'text-black'
					} h-full text-sm focus:outline-none px-3 bg-gray-300 w-full rounded-l-md rounded-r-none`}
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === 'Enter') {
							_onSearch()
						}
					}}
					placeholder={placeholder || 'Search IP'}
				/>
			</div>
			<div
				onClick={_onSearch}
				className='cursor-pointer h-8 w-8 dark:bg-zinc-800 bg-slate-300 flex items-center justify-around rounded-r-md'>
				<BiSearchAlt2 className='text-lg' />
			</div>
		</div>
	)
}
export default SearchBar
