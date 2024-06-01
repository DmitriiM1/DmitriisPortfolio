/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/ 
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import './main.css'
import './contact.css'

import Footer from './components/Footer/Footer'

const Contact = () => {
    return (
        <div>
            <Navbar />
                <h1>Contact</h1>
            <section id="about">
                <div>
                    <a href="mailto:dmitin@my.centennialcollege.ca"><h3>My email: dmitin@my.centennialcollege.ca</h3></a>
                    <a href="tel:437-438-23-09"><h3>My Phone number: +1437-438-23-09</h3></a>
                </div>
                <div className='wrapper2'>
                    <form action="">
                        <div className="logo">
                            <img src="" alt="" />
                        </div>
                        <img src="" alt="" />
                        <div className="form">
                            <h1>Write to me:</h1>
                            <input type="text" placeholder='full name'/>
                            <input type="email" placeholder='email'/>
                            <input type="tel" placeholder='phone'/>
                            <textarea name="text" cols="59" rows="7" placeholder='your message'></textarea>
                            <button className='btn3'>Submit a request</button>
                        </div>
                    </form>
                </div>
            </section>
            <Footer />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Contact />
    </React.StrictMode>
);
