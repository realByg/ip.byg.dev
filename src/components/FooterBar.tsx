import React from 'react'


export default function FooterBar() {
    const iconStyle = {
        width: 16,
        marginLeft: 5,
        marginRight: 5,
    }

    return (
        <div style={{textAlign: 'center'}}>
            Made w/
            <img src="https://reactjs.org/favicon.ico"
                 style={iconStyle}
                 alt=""
            />
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                React
            </a>
            <span> &</span>
            <img src="https://ip.sb/favicon.ico"
                 style={iconStyle}
                 alt=""
            />
            <a href="https://ip.sb/" target="_blank" rel="noreferrer">
                IP.SB
            </a>
        </div>
    )
}
