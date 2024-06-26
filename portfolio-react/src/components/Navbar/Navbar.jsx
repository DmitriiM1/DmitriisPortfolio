/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/ 
import React from 'react';
import './Navbar.css';
import logo from '../../assets/DmitriiLogo.svg';
import {Link} from "react-router-dom";


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
                <ul className='nav_menu'>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About me</li></Link>
                <Link to="/projects"><li>Projects</li></Link>
                <Link to="/services"><li>Services</li></Link>
                <Link to="/contact"><li>Contact me</li></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar