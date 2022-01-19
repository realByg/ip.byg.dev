import IPIcon from './components/IPIcon'
import { FaMoon, FaSun } from 'react-icons/fa'
import { useThemeContext } from './contexts/theme'
import SearchBar from './components/SearchBar'
import { Fragment } from 'react'
import { useIPContext } from './contexts/ip'
import IPInfo from './components/IPInfo'

const App = () => {
	const { themeDark, setThemeDark } = useThemeContext()
	const { ip, setIP } = useIPContext()

	return (
		<Fragment>
			<div className='w-full h-16 dark:bg-zinc-900/80 bg-slate-200/80 shadow-sm sticky top-0 left-0 z-10 backdrop-blur-sm'>
				<div className='mx-auto max-w-4xl px-4 h-full flex items-center'>
					<div className='flex items-center'>
						<IPIcon className='h-7 w-7 block fill-green-600' />
						<div className='md:text-lg  md:font-bold text-green-600'>.BYG.DEV</div>
					</div>
					<div className='flex-1' />
					<SearchBar placeholder={ip} onSearch={setIP} />
					<div
						className='h-8 w-8 rounded-md cursor-pointer dark:bg-zinc-800 bg-slate-300 flex items-center justify-around'
						onClick={() => setThemeDark(!themeDark)}>
						{themeDark ? (
							<FaSun className='active:rotate-[360deg] transition-all duration-200' />
						) : (
							<FaMoon className='active:rotate-[360deg] transition-all duration-200' />
						)}
					</div>
				</div>
			</div>

			<div className='min-h-[80vh]'>
				<div className='mx-auto max-w-4xl px-4'>
					<IPInfo />
				</div>
			</div>

			<div className='w-full text-center text-xs text-gray-400 my-4'>
				<span>ip.byg.dev uses </span>
				<a href='https://ip.sb/' target='_blank' rel='noreferrer'>
					ip.sb
				</a>
			</div>
		</Fragment>
	)
}
export default App
