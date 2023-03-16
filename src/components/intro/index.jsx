import React from 'react'
import Navigation from "./navigation-bar"
import "./style.scss"
import cloud from "../../images/cloud.png"
import cloudSoft from "../../images/cloud-soft.png"
import IntroContent from "./intro-content"

const Intro = () => {
  return (
    <div className='Intro-section'>
      <div className="vector-bg" id='parallax'>

      </div>
      <img className='cloud' src={cloud} alt="" />
      <img className='cloud-soft' src={cloudSoft} alt="" />
      <div className="content">
        <Navigation/>
        <IntroContent/>
      </div>
    </div>
  )
}

export default Intro
