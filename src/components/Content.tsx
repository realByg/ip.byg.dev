import React, {useContext} from 'react'
import {Col, Row, Spin} from 'antd'
import {LoadingContext} from '../providers/ip-data-provider'
import IpData from './IpData'

export default function Content() {
    const loading = useContext(LoadingContext)

    return (
        <Row>
            <Col
                lg={{span: 14, offset: 5}}
                xs={{span: 24}}
                className="background-white"
                style={{margin: '48px auto'}}
            >
                <Spin spinning={loading}>
                    <IpData/>
                </Spin>
            </Col>
        </Row>
    )
}
