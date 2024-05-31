import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import './main.css'
import './services.css'

import Footer from './components/Footer/Footer'

const Services = () => {
    return (
        <div>
            <Navbar />
            <section id="about">
                <h1>Services</h1>
            </section>
            <Footer />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Services />
    </React.StrictMode>
);
