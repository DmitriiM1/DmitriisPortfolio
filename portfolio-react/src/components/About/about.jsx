/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/ 
import React from 'react';
import ReactDOM from 'react-dom/client';

import '../../main.css'
import './about.css'

import pict1 from '../../assets/IMG_4549.JPG'
import pict2 from '../../assets/IMG_4570.JPG'
import pdf from '../../assets/Coverletter.pdf'
import Button from '@mui/material/Button'
import SendIcon from '@mui/icons-material/Send'


const About = () => {
    return (
        <div>
            <div className='top_text'>
                <p>About me</p>
            </div>
            <section id="about">
                <div id="photo_block">
                    <img src={pict1} alt="picture 1" />
                    <img src={pict2} alt="picture 2" />
                </div>
                <div id="intro_block">
                    <p>I am student at Centennial College. During my studies, I learned how to create programs in different languages, create websites using React and use different frameworks, connect a database, perform various queries and much more.</p>
                    <p>Moreover, in college there were group projects in which I really enjoyed participating. I participated in the creation of an application similar to "TO DO" ​​written in C#, the creation of a server in Linux for transferring files, as well as the design of 2 large-scale projects related to the chat room at home and a web application for searching all the plays in theaters.</p>
                    <p style={{ paddingLeft: "40px" }}>My skills:</p>
                    <div className='about_skills'>
                        <div className="about_skill"><p>HTML & CSS</p><hr style={{ width: "100%" }} /></div>
                        <div className="about_skill"><p>JS</p><hr style={{ width: "45%" }} /></div>
                        <div className="about_skill"><p>React, Express, MongoDB, NodeJS</p><hr style={{ width: "55%" }} /></div>
                        <div className="about_skill"><p>C#</p><hr style={{ width: "50%" }} /></div>
                        <div className="about_skill"><p>Java</p><hr style={{ width: "60%" }} /></div>
                    </div>
                    <div className="link">
                        <p>Here you can find my resume:</p>
                        <Button variant="contained" endIcon={<SendIcon />}>
                            <a href={pdf} download style={{textDecoration:"none", color:"black"}}>Download Resume</a>
                        </Button>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <About />
//     </React.StrictMode>
// );
