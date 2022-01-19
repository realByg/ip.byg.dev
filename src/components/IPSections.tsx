import { useIPContext } from '../contexts/ip'
import { useState, useEffect } from 'react'
import { AiOutlineCopy, AiOutlineInfoCircle } from 'react-icons/ai'
import { BiSearchAlt2, BiMapPin } from 'react-icons/bi'

type IPData = {
	organization?: string
	longitude?: number
	timezone?: string
	isp?: string
	offset?: number
	asn?: number
	asn_organization?: string
	ip: string
	latitude?: number
	continent_code: string
	country_code?: string
	region_code?: string
	city?: string
	country?: string
	region?: string
}

const LoadingBar = () => (
	<div className='animate-pulse w-2/3 h-full dark:bg-zinc-800 bg-zinc-400 rounded-md'></div>
)

const IPSections = () => {
	const { searchIP, setSearchIP } = useIPContext()
	const [loading, setLoading] = useState(false)
	const [ipData, setIPData] = useState<IPData>()
	const [ipv4, setIPv4] = useState('')
	const [ipv6, setIPv6] = useState('')

	const getClientIPData = () => {
		setLoading(true)
		setIPData(undefined)
		setIPv4('')
		setIPv6('')
		setSearchIP('')

		fetch(`https://api-ipv4.ip.sb/geoip`)
			.then((response) => response.json())
			.then((data: IPData) => {
				setIPData(data)
				setIPv4(data.ip)
				setSearchIP(data.ip)
			})
			.catch((e) => {
				console.log(e)
			})
			.finally(() => {
				setLoading(false)
			})

		fetch(`https://api-ipv6.ip.sb/geoip`)
			.then((response) => response.json())
			.then((data: IPData) => {
				setIPv6(data.ip)
			})
			.catch((e) => {
				console.log(e)
			})
	}

	const getSearchIPData = () => {
		setLoading(true)
		setIPData(undefined)
		setIPv4('-')
		setIPv6('-')

		if (searchIP.includes('.')) {
			setIPv4(searchIP)
		} else if (searchIP.includes(':')) {
			setIPv6(searchIP)
		}

		fetch(`https://api.ip.sb/geoip/${searchIP}`)
			.then((response) => response.json())
			.then((data: IPData) => {
				setIPData(data)
			})
			.catch((e) => {
				console.log(e)
			})
			.finally(() => {
				setLoading(false)
			})
	}

	useEffect(() => {
		if (searchIP === '') {
			getClientIPData()
			return
		}

		if (searchIP !== ipv4 && searchIP !== ipv6) {
			getSearchIPData()
			return
		}
	}, [searchIP])

	return (
		<div className='w-full mt-4 md:mt-6 rounded-md p-4 box-border dark:bg-zinc-900/80 bg-slate-200/80'>
			<div className='w-full grid grid-cols-3 gap-x-2 gap-y-4 capitalize md:text-base text-sm [word-break:break-all]'>
				<div className='col-span-1 text-green-600 font-bold'>IPv4</div>
				<div className='col-span-2 font-bold'>
					{ipv4 ? (
						<div className='w-full flex items-center'>
							<div className='flex-1'>{ipv4}</div>
							<AiOutlineCopy className='text-lg ml-4' />
						</div>
					) : loading ? (
						<LoadingBar />
					) : (
						<div>-</div>
					)}
				</div>

				<div className='col-span-1 text-green-600 font-bold'>IPv6</div>
				<div className='col-span-2 font-bold'>
					{ipv6 ? (
						<div className='w-full flex items-center'>
							<div className='flex-1'>{ipv6}</div>
							<AiOutlineCopy className='text-lg ml-4' />
						</div>
					) : loading ? (
						<LoadingBar />
					) : (
						<div>-</div>
					)}
				</div>

				<div className='col-span-1 text-green-600'>Location</div>
				<div className='col-span-2 font-bold'>
					{loading ? (
						<LoadingBar />
					) : (
						<div className='w-full'>
							{ipData?.country_code && (
								<img
									src={`https://cdn.jsdelivr.net/gh/ashhitch/ISO-country-flags-icons@master/src/flags/png/${ipData?.country_code?.toLowerCase()}.png`}
									className='inline-block h-[1rem] mr-2 rounded-sm'
								/>
							)}
							{ipData?.city && `${ipData?.city}, `}
							{ipData?.region && `${ipData?.region}, `}
							{ipData?.country}
						</div>
					)}
				</div>

				<div className='col-span-1 text-green-600'>Organization</div>
				<div className='col-span-2 font-bold'>
					{loading ? (
						<LoadingBar />
					) : (
						<div className='w-full flex items-center'>
							<div className='flex-1'>{ipData?.asn_organization || '-'}</div>
							<BiSearchAlt2 className='text-lg ml-4' />
						</div>
					)}
				</div>

				<div className='col-span-1 text-green-600'>ISP</div>
				<div className='col-span-2 font-bold'>
					{loading ? <LoadingBar /> : <div className='w-full'>{ipData?.isp || '-'}</div>}
				</div>

				<div className='col-span-1 text-green-600'>ASN</div>
				<div className='col-span-2 font-bold'>
					{loading ? (
						<LoadingBar />
					) : (
						<div className='w-full flex items-center'>
							<div className='flex-1'>{ipData?.asn || '-'}</div>
							<AiOutlineInfoCircle className='text-lg ml-4' />
						</div>
					)}
				</div>

				<div className='col-span-1 text-green-600'>Coordinates</div>
				<div className='col-span-2 font-bold'>
					{loading ? (
						<LoadingBar />
					) : (
						<div className='w-full flex items-center'>
							<div className='flex-1'>
								{`${ipData?.latitude || '-'}, ${ipData?.longitude || '-'}`}
							</div>
							<BiMapPin className='text-lg ml-4' />
						</div>
					)}
				</div>
			</div>
		</div>
	)
}
export default IPSections
