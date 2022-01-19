import { useIPContext } from '../contexts/ip'
import { useState, Fragment } from 'react'
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

const IPInfo = () => {
	const { ip, setIP } = useIPContext()

	return (
		<Fragment>
			<div className='w-full mt-4 md:mt-6 rounded-md p-4 box-border dark:bg-zinc-900/80 bg-slate-200/80'>
				<div className='w-full flex items-center'>
					<span>IPv4</span>
					<AiOutlineCheckCircle className='fill-green-600 ml-3 text-lg' />
				</div>
			</div>
			<div className='w-full mt-4 md:mt-6 rounded-md p-4 dark:bg-zinc-900/80 bg-slate-200/80'>
				<div className='w-full flex items-center'>
					<span>IPv6</span>
					<AiOutlineCloseCircle className='fill-red-600 ml-3 text-lg' />
				</div>
			</div>
		</Fragment>
	)
}
export default IPInfo
