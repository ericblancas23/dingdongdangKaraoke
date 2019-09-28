import React from 'react'

import logo from '../assets/images/logo.svg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={require('../assets/images/3.jpg')} alt="" style={{'height':'250px', 'width':'250px', 'borderRadius':'50%'}}/></span>
        <h1>Ding Dong Dang Karaoke</h1>
        <p>A Karaoke Experience Unlike Any Other<br />
        </p>
    </header>
)

export default Header
