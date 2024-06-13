/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../main.css'
import './services.css'



import img1 from '../../assets/services/websiteCard.png'
import img2 from '../../assets/services/server.jpg'
import img3 from '../../assets/services/jCode.png'
import img4 from '../../assets/services/cCode.jpg'
import img5 from '../../assets/services/code.jpg'





const Services = () => {
    return (
        <div>
                <h1>Services:</h1>
            <section id="services">
                <div className='section'>
                    <div className='img'>
                        <img src={img1} alt="" />
                    </div>
                    <div className='desc'>
                        <h3>Developing Business Card Website </h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img2} alt="" />
                    </div>
                    <div className='desc'>
                        <h3>Developing Server</h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img3} alt="" />
                    </div>
                    <div className='desc'>
                        <h3>Developing app in Java</h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img4} alt="" />
                    </div>
                    <div className='desc'>
                        <h3>Developing app in C#</h3>
                    </div>
                </div>
                <div className='section'>
                    <div className='img'>
                        <img src={img5} alt="" />
                    </div>
                    <div className='desc'>
                        <h3>General Programming</h3>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <Services />
//     </React.StrictMode>
// );
