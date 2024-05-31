import React from 'react'
import './Navbar.css'
import logo from '../../assets/DmitriiLogo.svg'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div id='navbar_logo'>
                <img src={logo} alt="" />
            </div>
            <div></div>
            <div>
                <ul className="nav_menu">
                    <li>Home</li>
                    <li>About Me</li>
                    <li>Portfolio</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar