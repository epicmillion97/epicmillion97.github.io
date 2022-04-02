import React from 'react'
import { useState } from 'react'
import Button  from '@mui/material/Button'
import { Box } from '@mui/system'
import Header from './components/Header'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header/>
      <Aboutme/>
      <Projects/>
      <Footer/>
    </div>
  );
}

export default App;
