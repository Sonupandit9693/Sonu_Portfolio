import React from 'react'
import "./style.scss"
import Section from "../intro/shared/section"
import Blog1 from "../../images/blogs/blog-thumb-1.jpg"
import Blog2 from "../../images/blogs/blog-thumb-2.jpg"
import Blog3 from "../../images/blogs/thumb-5.jpg"
import BlogCard from "../blogs/blog-card"

const BLogs = () => {
  return (
    <Section id="blogs" title="Blog & Article" background="dark">
    <div className="blogs-content-wrapper">
        <BlogCard 
            user="Sonu kumar"
            date="7 march 2023"
            image={Blog1}
            title="Web devlopment"
            description="This is blog by guide how to web technologies..."
            message="not completed"
        />
        <BlogCard 
            user="Sonu kumar"
            date="2 December 2022"
            image={Blog2}
            title="programming "
            description="Which programming language you should learn first..."
            message="not completed"
        />
        <BlogCard 
            user="Sonu kumar"
            date="7 march 2023"
            image={Blog3}
            title="Project building"
            description="How to build your project effectively through latest frameworks..."
        />
    </div>
    </Section>
  )
}

export default BLogs
