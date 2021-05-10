import React, {useEffect, useState, createContext} from 'react'
import {message} from 'antd'

export const IpContext = createContext((ip: string) => {})
const ipDataInitialState = {
    organization: '',
    longitude: 0,
    timezone: '',
    isp: '',
    offset: 0,
    asn: 0,
    asn_organization: '',
    country: '',
    ip: '',
    latitude: 0,
    continent_code: '',
    country_code: '',
    city: '',
}
export const IpDataContext = createContext(ipDataInitialState)
export const LoadingContext = createContext(true)

export function IpDataProvider({children}: { children: JSX.Element }) {
    const [ip, setIp] = useState('')
    const [ipData, setIpData] = useState(ipDataInitialState)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)
        fetch(`https://api.ip.sb/geoip/${ip}`)
            .then(r => r.json()
                .then(data => {
                    setIpData(data)
                    if (Object.keys(data).length < 2)
                        message.error('NO INFO')
                })
            )
            .catch(e => message.error(e.message))
            .finally(() => setLoading(false))
    }, [ip])

    return (
        <IpContext.Provider value={setIp}>
            <IpDataContext.Provider value={ipData}>
                <LoadingContext.Provider value={loading}>
                    {children}
                </LoadingContext.Provider>
            </IpDataContext.Provider>
        </IpContext.Provider>
    )
}
