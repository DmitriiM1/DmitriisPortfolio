import React from 'react'
import './Navbar.css'
import logo from '../../assets/DmitriiLogo.svg'


const Navbar = () => {
    return (
        <div className='navbar'>
            <div id='navbar_logo'>
                <img src={logo} alt="" />
            </div>
            <div id='logo_text'>
                <p>Welcome to my portfolio website</p>
            </div>
            <div>
                <ul className="nav_menu">
                    <a href="/index.html"><li>Home</li></a>
                    <a href="/about.html"><li>About Me</li></a>
                    <a href="/projects.html"><li>Projects</li></a>
                    <a href="/services.html"><li>Services</li></a>
                    <a href="/contact.html"><li>Contact Me</li></a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar