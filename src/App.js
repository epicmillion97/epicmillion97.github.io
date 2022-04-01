import React from 'react'
import { useState } from 'react'
import Button  from '@mui/material/Button'
import { Box } from '@mui/system'
import Header from './components/Header'
import Projects from './components/Projects'
import Aboutme from './components/Aboutme'

function App() {
  return (
    <div className="App">
      <Header/>
      <Aboutme/>
      <Projects/>
    </div>
  );
}

export default App;
