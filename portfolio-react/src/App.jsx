/*
    Name: Dmitrii Mitin
    Id: 301255191
    Date: May 30, 2024
*/ 
import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'


const App = () => {
  return (
    <div>
      <Navbar />
      <div id="main_text">
        <div>
          <div className='first_block'>
            <h2>Hello everyone, I'm</h2>
            <h2>Dmitrii Mitin</h2>
          </div>
          <div className='second_block'>
            <h3>I'm a Developer</h3>
            <h3>Based in Toronto, Ontario.</h3>
          </div>
        </div>
      </div>
      <Footer />

    </div>
  )
}

export default App