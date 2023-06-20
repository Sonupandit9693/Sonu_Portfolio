import React, { useState } from 'react'
import Section from '../intro/shared/section'
import Filters from './filters'
import Showcase from './showcase'
import "./style.scss"

const projectsData = [
    {
        id: 1,
        name: "Youtube clone",
        tags: ["web-app", "mobile-app"],
        url: "https://youtube-clone-by-sonukumar.netlify.app/",
        media: {
            thumbnail: require("../../images/portfolio/1.jpg"),
            
        },
    },
    {
        id: 2,
        name: "Cocktail soft drink",
        tags: ["web-page"],
        url: "https://cock-search-drink.netlify.app/",
        media: {
            thumbnail: require("../../images/portfolio/5.jpg"),
        },
    },
    {
        id: 3,
        name: "Todo App",
        url:"https://646f153fa13e221be397ec63--lucent-vacherin-7acead.netlify.app/",
        tags: ["product", "web-app", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/todo.jpg"),
        },
    },
    {
        id: 4,
        name: "Google search engine",
        tags: ["web-app", "mobile-app"],
        url: "https://google-search-engine-clone02.netlify.app/",
        media: {
            thumbnail: require("../../images/portfolio/3.jpg"),
        },
    },
    
    {
        id: 5,
        name: "Blog app",
        url:"https://github.com/Sonupandit9693/Blogs.coding.tech",
        tags: ["web-app", "mobile-app", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.jpg"),
        },
    },
    {
        id: 6,
        name: "Url shortner ",
        url:"https://github.com/Sonupandit9693/Learning-Node-js-Project/tree/main/Url-Shortner",
        tags: ["product", "web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.jpg"),
        },
    },
    {
        id: 7,
        name: "simple portfolio",
        tags: ["web-app", "web-page"],
        url: "https://sonupandit9693.github.io/my-portfolio/",
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.jpg"),
        },
    },
    {
        id: 8,
        name: "Netflix UI",
        tags: ["web-page"],
        url:"https://sonupandit9693.github.io/Netflix-clone/",
        media: {
            thumbnail: require("../../images/portfolio/6.jpg"),
        },
    },
   
    {
        id: 9,
        name: "Discord bot",
        tags: ["web-page"],
        url: "https://github.com/Sonupandit9693/Learning-Node-js-Project/tree/main/Discord-Bot",
        media: {
            thumbnail: require("../../images/portfolio/Bot.jpg"),
        },
    },
    {
        id: 10,
        name: "Ai chat application",
        tags: ["web-page"],
        url: "https://github.com/Sonupandit9693/Ai-chat-application",
        media: {
            thumbnail: require("../../images/portfolio/4.jpg"),
        },
    },
]


const Portfolio = () => {
    const [projects , setProject] = useState(projectsData);
    const[transition , setTransition] = useState(false);

    const filterProjects = (tag)=>{
        setTransition("zoomout");
        setTimeout(()=>{
            if(tag !== "all"){
                const filteredProjects = projectsData.filter((f)=>{
                    return(f.tags.includes(tag));
                })
                setProject(filteredProjects);
            }else{
                setProject(projectsData);
            }
            setTransition("zoomin");
        },200);
        setTimeout(() => {
            setTransition(false);
        }, 600);

    }
    
  return (
    <Section id="portfolio" title="Check-my-portfolio" background="light">
        <div className="portfolio-content-wrapper">
            <Filters filterProjects={(tag)=>filterProjects(tag)}/>
            <Showcase data={projects} 
            transition={transition}
            />
        </div>
    </Section>
  )
}

export default Portfolio
