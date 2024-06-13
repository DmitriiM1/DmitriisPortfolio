/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/
import React from 'react';
import ReactDOM from 'react-dom/client';
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

import { CCarousel } from '@coreui/react'
import { CCarouselItem } from '@coreui/react'
import { CImage } from '@coreui/react'
import '@coreui/coreui/dist/css/coreui.min.css'





const Projects = () => {
    return (
        <div>
            <h2>My projects:</h2>
            <section id="projects">
                <div className='firstEx'>
                    <div>
                        <h3>1. Website from the "Figma" template</h3>
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
                </div>
                <div className='secondEx'>
                    <h3>2. Website for the therapy company</h3>
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
                <div className='thirdEx'>
                    <h3>3. Website from my course</h3>
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
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <Projects />
//     </React.StrictMode>
// );
