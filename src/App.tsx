import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import FooterBar from './components/FooterBar'
import {Layout} from 'antd'
import {IpDataProvider} from './providers/ip-data-provider'

export default function App() {
    return (
        <Layout>
            <IpDataProvider>
                <div style={{height: '90vh'}}>
                    <Layout.Header
                        style={{padding: 0}}
                        className="background-white"
                    >
                        <Navbar/>
                    </Layout.Header>

                    <Layout.Content>
                        <Content/>
                    </Layout.Content>
                </div>
            </IpDataProvider>

            <Layout.Footer style={{height: '10vh'}}>
                <FooterBar/>
            </Layout.Footer>
        </Layout>
    )
}
