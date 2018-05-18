import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <a href="#" className="image avatar"><img src={avatar} alt="" /></a>
                    <h1><strong>We are Breezey</strong>, <br />
                    a light weight <br />
                    collaborative design studio<br />
                    based on the Sunshine Coast, QLD.</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
