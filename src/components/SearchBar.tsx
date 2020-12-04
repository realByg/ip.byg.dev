import React, {useContext} from 'react'
import {Input} from 'antd'
import {IpContext, LoadingContext} from '../providers/ip-data-provider'


export default function SearchBar() {
    const setIp = useContext(IpContext)
    const loading = useContext(LoadingContext)


    return (
        <Input.Search
            placeholder="Search IP"
            enterButton
            loading={loading}
            style={{width: 'auto'}}
            onSearch={(value: string) => {
                setIp(value)
            }}
        />
    )
}
