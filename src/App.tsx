import { useState } from 'react'
import './App.css'
import { Navbar } from './components/Navbar'
import { MainContent } from './components/MainContent'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className='min-h-screen '>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
