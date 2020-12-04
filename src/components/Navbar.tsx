import React from 'react'
import {Row, Col} from 'antd'
import SearchBar from './SearchBar'


export default function Navbar() {
    return (
        <Row style={{height: '100%'}}>
            <Col lg={{span: 14, offset: 5}}
                 xs={{span: 22, offset: 1}}
            >
                <div style={{
                    height: '100%',
                    alignItems: 'center'
                }}
                     className="horizontal-center justify-between">
                    <img style={{width: 28, height: 28}}
                         src="https://i.loli.net/2020/12/04/Ty8JGKgloe5i4d2.png"
                         alt=""/>
                    <SearchBar/>
                </div>
            </Col>
        </Row>
    )
}