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
        <Navbar />
        <Routes>
          <Route path='/DmitriisPortfolio/' element={<Home />} />
          <Route path='/DmitriisPortfolio/about' element={<About />} />
          <Route path='/DmitriisPortfolio/projects' element={<Projects />} />
          <Route path='/DmitriisPortfolio/services' element={<Services />} />
          <Route path='/DmitriisPortfolio/contact' element={<Contact />} />
          <Route path='/DmitriisPortfolio/termOfServices' element={<TermServices />} />
          <Route path='/DmitriisPortfolio/policy' element={<Policy />} />
        </Routes>
        <Footer />
    </Router>
  )
}

export default App