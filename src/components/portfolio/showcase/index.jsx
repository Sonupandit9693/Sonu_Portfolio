import React from 'react'
import "./style.scss"
import Arrow from "../../intro/shared/arrow"


const Showcase = ({data, transition}) => {
  return (
  <div className="projects-showcase">
    {data.map((project)=>(
        <div key={project.name} className={`showcase-item ${transition === "zoomout" ? "zoomOut" : transition === "zoomin" ? "zoomIn" : ""}`}>
        <a href={project.url}>
        <div className="meta-content">
            <h3>{project.name}</h3>
            <div className="go-to-cta">
                <span className="text">Projects Details</span>
                <Arrow />
            </div>
        </div>
        </a>
            <img src={project.media.thumbnail} alt="" />
       
        </div>
    ))}
  </div>
  )
}

export default Showcase
