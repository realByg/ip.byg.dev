import React from 'react'


export default function FooterBar() {
    const iconStyle = {
        width: 16,
        marginLeft: 5,
        marginRight: 5,
    }

    return (
        <div style={{textAlign: 'center'}}>
            <a href="https://github.com/zayabighead/react-ip-lookup"
               target="_blank"
               rel="noreferrer"
            >
                react-ip-lookup
            </a>
            <span> is made with</span>
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
