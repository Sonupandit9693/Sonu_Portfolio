import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import "./style.scss";
// import girl from "../../../images/girl.png";
import sonu from "../../../images/sonu.png"
import hand from "../../../images/hand.png";
import CallToAction from "../shared/callToAction";
import {scrollToSection} from "../../utils/helpers"

const IntroCOntent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt=""
                                />
                            </span>
                            <span className="text">, I Am </span>
                        </span>
                        <span className="big-text">Sonu Kumar</span>
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Amet minima delectus assumenda explicabo, fugiat ipsa
                        autem consequatur eveniet illo earum facilis doloribus,
                        eaque nostrum minus.
                    </p>
                    <CallToAction text="Contact me" action={() => scrollToSection("contact")} />
                </div>
                <div className="right-col">
                    <img
                        src={sonu}
                        alt=""
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Amazing projects here below 👇</div>
                    </div>
                    <div className="highlights verticle">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>Web</span>
                            Devloper
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroCOntent;
