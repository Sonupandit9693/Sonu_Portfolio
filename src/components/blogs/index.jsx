import React from 'react'
import "./style.scss"
import Section from "../intro/shared/section"
import Blog1 from "../../images/blogs/blog-thumb-1.jpg"
import Blog2 from "../../images/blogs/blog-thumb-2.jpg"
import Blog3 from "../../images/blogs/blog-thumb-3.jpg"
import BlogCard from "../blogs/blog-card"

const BLogs = () => {
  return (
    <Section id="blogs" title="Blog & Article" background="dark">
    <div className="blogs-content-wrapper">
        <BlogCard 
            user="Sonu kumar"
            date="7 march 2023"
            image={Blog1}
            title="Thesis all about web devlopment"
            description="This is blog by guide how to learn programming."
        />
        <BlogCard 
            user="Sonu kumar"
            date="7 march 2023"
            image={Blog2}
            title="Thesis all about web devlopment"
            description="This is blog by guide how to learn programming."
        />
        <BlogCard 
            user="Sonu kumar"
            date="7 march 2023"
            image={Blog3}
            title="Thesis all about web devlopment"
            description="This is blog by guide how to learn programming."
        />
    </div>
    </Section>
  )
}

export default BLogs
