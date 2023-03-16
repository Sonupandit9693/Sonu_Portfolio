import React from "react";

import {
    FaYoutube,
    FaLinkedinIn,
    FaGithub,
    FaStackOverflow,
    FaInstagram,
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
                            color="#FF0000"
                            icon={<FaYoutube />}
                        />
                        <SocialIcon
                            color="#0D2636"
                            icon={<FaGithub to="https://github.com/Sonupandit9693" />}
                        />
                        <SocialIcon
                            color="#0A66C2"
                            icon={<FaLinkedinIn />}
                        />
                        <SocialIcon
                            color="#f2740d"
                            icon={<FaStackOverflow />}
                        />
                        <SocialIcon
                            
                            color="#E84C88"
                            icon={<FaInstagram />}
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
