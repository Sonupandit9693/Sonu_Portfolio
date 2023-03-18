import React from 'react'
import "./style.scss"
import Arrow from "../../intro/shared/arrow"


const Showcase = ({data, transition}) => {
  return (
  <div className="projects-showcase">
    {data.map((project)=>(
        <div key={project.name} className={`showcase-item ${transition === "zoomout" ? "zoomOut" : transition === "zoomin" ? "zoomIn" : ""}`}>
        <div className="meta-content" >
            <h3>{project.name}</h3>
            <h4>{project.message}</h4>
            <div className="go-to-cta"
            onClick={()=>{
            window.open(project.url, "_blank");
              }}
            >
                <span className="text">Projects Details</span>
                <Arrow />
            </div>
        </div>
            <img src={project.media.thumbnail} alt="" />
       
        </div>
    ))}
  </div>
  )
}

export default Showcase
