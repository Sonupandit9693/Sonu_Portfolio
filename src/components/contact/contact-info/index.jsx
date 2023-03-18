import React from 'react'
import "./style.scss"
import {FaPhoneAlt} from "react-icons/fa"
import {MdEmail} from "react-icons/md"

const ContactInfo = () => {
  return (
    <div className="contact-info-box">
        <h4>I would be happy to answer any question you may have about services or freelance.</h4>
        <div className="contact-option">
            <FaPhoneAlt/>
            <span className="text">+91 9693711130</span>
        </div>
        <div className="contact-option">
        <MdEmail/>
            <span className="text">sonupandit969371@gmail.com</span>
        </div>
    </div>
  )
}

export default ContactInfo
