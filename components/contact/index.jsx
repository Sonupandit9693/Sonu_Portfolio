import React from 'react'
import "./style.scss"
import Section from "../intro/shared/section"
import ContactInfo from "./contact-info"
import Form from './form'
const Contact = () => {
  return (
    <Section 
    id="contact"
    title="Any Question ? Fell Free to contact"
    background="light"
    >
    <div className="contact-content-wrapper">
        <ContactInfo/>
        <Form/>
    </div>
    </Section>
  )
}
export default Contact