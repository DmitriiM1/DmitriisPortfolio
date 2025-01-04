/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/
import React from 'react';
// import ReactDOM from 'react-dom/client';
import '../../main.css'
import './projects.css'
import pict1 from '../../assets/portfolio/rem1.jpg'
import pict2 from '../../assets/portfolio/rem2.jpg'
import pict3 from '../../assets/portfolio/rem3.jpg'

import pict4 from '../../assets/portfolio/website1.jpg'
import pict5 from '../../assets/portfolio/website1.1.jpg'
import pict6 from '../../assets/portfolio/website1.2.jpg'

import pict7 from '../../assets/portfolio/website2.jpg'
import pict8 from '../../assets/portfolio/website2.2.jpg'
import pict9 from '../../assets/portfolio/website2.3.jpg'
 
import property1 from '../../assets/portfolio/property1.jpg'
import property2 from '../../assets/portfolio/property2.jpg'
import property3 from '../../assets/portfolio/property3.jpg'
import property4 from '../../assets/portfolio/property4.jpg'
import property5 from '../../assets/portfolio/property5.jpg'
import property6 from '../../assets/portfolio/property6.jpg'

import airlines1 from '../../assets/portfolio/airlines1.jpeg'
import airlines2 from '../../assets/portfolio/airlines2.jpeg'
import airlines3 from '../../assets/portfolio/airlines3.jpg'
import airlines4 from '../../assets/portfolio/airlines4.jpg'
import airlines5 from '../../assets/portfolio/airlines5.jpg'
import airlines6 from '../../assets/portfolio/airlines6.jpg'

import mir1 from '../../assets/portfolio/mir1.jpeg'
import mir2 from '../../assets/portfolio/mir2.jpg'
import mir3 from '../../assets/portfolio/mir3.jpg'
import mir4 from '../../assets/portfolio/mir4.jpg'
import mir5 from '../../assets/portfolio/mir5.jpg'
import mir6 from '../../assets/portfolio/mir6.jpg'
import mir7 from '../../assets/portfolio/mir7.jpg'
import mir8 from '../../assets/portfolio/mir8.jpg'

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'





const Projects = () => {
    return (
        <div className='projectContainer'>
            <p>My projects:</p>
            <section id="projects">
                <div className='webContainer'>
                    <h3>1. Freelance project - a website for speech therapist</h3>
                    <p>Used React, CSS, frameworks, CSS media</p>
                    <h4>Website Link: <a href="https://mirrech.ru/" target='_blank'>https://mirrech.ru/</a></h4>
                    <CCarousel controls>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir1} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir2} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir3} alt="slide 3" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir4} alt="slide 4" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir5} alt="slide 5" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir6} alt="slide 6" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir7} alt="slide 7" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={mir8} alt="slide 8" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className='webContainer'>
                    <h3>2. Group project in college - a web app for homeowners where they can see liens and taxes</h3>
                    <p>Used Dbeaver database, React, CSS, frameworks, AWS deploying</p>
                    <h4>Website Link: <a href="http://3.133.148.169/" target='_blank'>http://3.133.148.169/</a> email: <span style={{color:"brown"}}>test@test.com</span> | password: <span style={{color:"brown"}}>12345</span></h4>
                    <CCarousel controls>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={property1} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={property2} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={property3} alt="slide 3" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={property4} alt="slide 4" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={property5} alt="slide 5" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={property6} alt="slide 6" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className='webContainer'>
                    <h3>3. Group project in college - a web app to search for flight tickets</h3>
                    <p>Used MongoDb, Express, React, NodeJs, frameworks and CSS</p>
                    <h4>Website Link: <a href="https://comp229-mern-skeleton.onrender.com/">https://comp229-mern-skeleton.onrender.com/</a></h4>
                    <CCarousel controls>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={airlines1} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={airlines2} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={airlines3} alt="slide 3" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={airlines4} alt="slide 4" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={airlines5} alt="slide 5" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={airlines6} alt="slide 6" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className='webContainer'>
                    <h3>4. Website from the "Figma" template</h3>
                    <p>Used only HTML and CSS</p>
                    <CCarousel controls>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict1} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict2} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict3} alt="slide 3" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className='webContainer'>
                    <h3>5. Website for the therapy company</h3>
                    <p>Used only HTML and CSS</p>
                    <CCarousel controls>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict4} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict5} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict6} alt="slide 3" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
                <div className='webContainer'>
                    <h3>6. Website from my course</h3>
                    <p>Used HTML, CSS, JavaScript</p>
                    <CCarousel controls>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict7} alt="slide 1" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict8} alt="slide 2" />
                        </CCarouselItem>
                        <CCarouselItem>
                            <CImage className="d-block w-100" src={pict9} alt="slide 3" />
                        </CCarouselItem>
                    </CCarousel>
                </div>
            </section>
        </div>
    );
};

export default Projects;