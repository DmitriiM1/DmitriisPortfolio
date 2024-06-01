/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'
import './main.css'
import './services.css'



import img1 from './assets/DmitriiLogo.svg'





const Services = () => {
    return (
        <div>
            <Navbar />
                <h1>Services</h1>
            <section id="services">
                <div className='section'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='desc'>
                        <h3></h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='desc'>
                        <h3></h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='desc'>
                        <h3></h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='desc'>
                        <h3></h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='desc'>
                        <h3></h3>
                    </div>
                </div>
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
