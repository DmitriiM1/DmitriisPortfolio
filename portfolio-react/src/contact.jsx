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
            <section id="about">
                <h1>Contact</h1>
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
