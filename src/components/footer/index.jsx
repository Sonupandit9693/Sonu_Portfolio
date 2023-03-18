import React from "react";
import {SiGeeksforgeeks, SiLeetcode,SiCodingninjas} from "react-icons/si"

import {
    FaLinkedinIn,
    FaGithub,
    FaStackOverflow,

} from "react-icons/fa";

import Section from "../intro/shared/section";
// import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

import "./style.scss";
const Footer = () => {
    return (
        <Section
            background="light"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                  Sonu kumar
                    {/* <img
                        src={Logo}
                        alt="sonu kumar"
                    /> */}
                    
                </div>
              
                    <ul className="footer-menu-items">
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("portfolio")}
                        >
                            Portfolio
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("blogs")}
                        >
                            Blog & Airticle
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact me
                        </li>
                    </ul>
                    <div className="social-icons">
                        <SocialIcon
                            link="https://auth.geeksforgeeks.org/user/sonupandi9lc1/"
                            color="#078307"
                            icon={<SiGeeksforgeeks/>}
                        />
                        <SocialIcon
                            link="https://github.com/Sonupandit9693"
                            color="#0D2636"
                            icon={<FaGithub />}
                        />
                        <SocialIcon
                            link="https://www.linkedin.com/in/sonu-kumar-20128622b/"
                            color="#0A66C2"
                            icon={<FaLinkedinIn />}
                        />
                        <SocialIcon
                            link="https://www.codingninjas.com/codestudio/profile/sonu_kumar"
                            color="#df8a1b"
                            icon={<SiCodingninjas/>}
                        />
                        <SocialIcon
                            link="https://leetcode.com/sonupandit/"
                            color="#ffaf03"
                            icon={<SiLeetcode/>}
                        />
                        <SocialIcon
                            link="https://stackoverflow.com/users/21094503/sonu-kumar"
                            color="#f2740d"
                            icon={<FaStackOverflow />}
                        />

                        
                    </div>
                    <div className="bottom-bar">
                        <div className="copyright-text">
                            Copyright 2023 sonu kumar❤️✌️🧑‍💻
                        </div>
                    </div>
                </div>
            
        </Section>
    );
};

export default Footer;
