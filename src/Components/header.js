import Header1 from '../Images/Header1.png'
import Header2 from '../Images/Header2.png'
import React from 'react'

const Header = () => {
    return (
        <>
            <div style={{ padding: 20 }}>
                <img src={Header1} alt="Header1" align="left"/>
                <img src={Header2} alt="Header2" className="rounded float-end" />
                <p>.</p>
            </div>
        </>
    )
}

export default Header