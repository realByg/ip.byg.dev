import React, {useContext} from 'react'
import {Button, Descriptions, message} from 'antd'
import {CopyOutlined, EnvironmentOutlined, SearchOutlined} from '@ant-design/icons'
import copy from 'copy-to-clipboard'
import {IpDataContext} from '../providers/ip-data-provider'


export default function IpData() {
    const ipData = useContext(IpDataContext)


    return (
        <Descriptions column={1} bordered>
            <Descriptions.Item label="IP">
                <div className="horizontal-center justify-between">
                    <a href={`https://ip.sb/whois/${ipData.ip}`}
                       rel="noreferrer"
                       target="_blank"
                    >{ipData.ip}</a>

                    <Button type="dashed"
                            shape="circle"
                            icon={<CopyOutlined/>}
                            onClick={() => {
                                copy(ipData.ip)
                                message.success('Copied to Clipboard')
                            }}
                    />
                </div>
            </Descriptions.Item>

            <Descriptions.Item label="ISP">
                <div className="horizontal-center justify-between">
                    <span>{ipData.isp}</span>
                    <Button type="dashed"
                            shape="circle"
                            icon={<SearchOutlined/>}
                            onClick={() =>
                                window.open(
                                    `https://google.com/search?q=${ipData.isp}`
                                )}
                    />
                </div>
            </Descriptions.Item>

            <Descriptions.Item label="ASN">
                <a href={'https://ip.sb/whois/' + ipData.asn}
                   rel="noreferrer"
                   target="_blank"
                >{ipData.asn}</a>
            </Descriptions.Item>

            <Descriptions.Item label="ASN Org">
                {ipData.asn_organization}
            </Descriptions.Item>

            <Descriptions.Item label="Location">
                <div className="horizontal-center justify-between">
                    <div>
                        <img src={!!ipData.country_code ?
                            'https://cdn.jsdelivr.net/gh/ashhitch/' +
                            'ISO-country-flags-icons@master/src/flags/png/' +
                            `${ipData.country_code.toLowerCase()}.png`
                            : ''}
                             alt=""
                             style={{
                                 marginRight: 5,
                                 width: 28,
                                 borderRadius: 2
                             }}
                        />

                        {!!ipData.city ? ipData.city + ', ' : ''}{ipData.country}
                    </div>

                    <Button type="dashed"
                            shape="circle"
                            icon={<EnvironmentOutlined/>}
                            onClick={() =>
                                window.open(
                                    'https://www.google.com/maps/place/' +
                                    `${ipData.latitude},${ipData.longitude}/`
                                )}
                    />
                </div>
            </Descriptions.Item>
        </Descriptions>
    )
}
