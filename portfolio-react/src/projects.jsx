import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar';
import './main.css'
import './projects.css'

import Footer from './components/Footer/Footer'

const Projects = () => {
    return (
        <div>
            <Navbar />
            <section id="about">
                <h1>Projects</h1>
            </section>
            <Footer />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Projects />
    </React.StrictMode>
);
