/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import About from './components/About/about';
import Projects from './components/Projects/projects';
import Services from './components/Services/services';
import Contact from './components/Contact/contact';
import TermServices from './components/TermOfServices/termServices';
import Policy from './components/Policy/policy';

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";




const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/termOfServices' element={<TermServices />} />
          <Route path='/policy' element={<Policy />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App