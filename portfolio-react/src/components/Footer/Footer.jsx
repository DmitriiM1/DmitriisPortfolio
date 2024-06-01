/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/ 
import React from "react";
import './Footer.css'

const Footer = () => {
    return (
        <div className="footerBlock">
            <hr />
            <div id="block">
                <div id="footer_text">
                    <p> &copy; 2024 Dmitrii Mitin. All rights reserved.</p>
                </div>
                <div id="footer_copy">
                    <p>Pictures <a href="https://pixabay.com/ru/users/yurchin-326159/?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=819383">Yuri</a> from the website <a href="https://pixabay.com/ru//?utm_source=link-attribution&utm_medium=referral&utm_campaign=image&utm_content=819383">Pixabay</a></p>
                </div>
                <div id="footer_links">
                    <ul>
                        <a href=""><li>Term of Services</li></a>
                        <a href=""><li>Privacy Policy</li></a>
                        <a href=""><li>Connect with me</li></a>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Footer