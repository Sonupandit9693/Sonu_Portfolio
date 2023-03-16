import React from 'react'
import Intro from './components/intro'
import "./app.scss"
import Skills from './components/Skills'
import Portfolio from './components/portfolio'
import BLogs from './components/blogs'
import Contact from "./components/contact"
import Footer from './components/footer'
const App = () => {
  return (
    <div>
      <Intro/>
      <Skills/>
      <Portfolio/>
      <BLogs/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App

