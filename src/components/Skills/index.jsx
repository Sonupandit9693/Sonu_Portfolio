import React from "react";
import "./style.scss";
import TechIcond from "../../images/tech-icons.png";
import CallToAction from "../intro/shared/callToAction";

import { AiOutlineCloudDownload } from "react-icons/ai";

import Section from "../intro/shared/section";
const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcond}
                        alt="HTML CSS JAVASCRIPT REACT "
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        I possess a diverse range of web development skills that
                        includes HTML, CSS, JavaScript, React.js, and Node.js.
                        With these skills, I can build and maintain complex web
                        applications that meet client needs. HTML and CSS are
                        essential for creating visually appealing and responsive
                        websites, while JavaScript is used for creating
                        interactive features. React.js and Node.js, on the other
                        hand, provide efficient tools for building
                        high-performance web applications. These skills allow me
                        to deliver cutting-edge web development solutions to my
                        clients.
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
