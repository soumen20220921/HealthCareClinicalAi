import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
    return (
        <>
            <footer>
                <div className='footer2nd'>
                    <div className="foot-box1 foot-box">
                        <h3 className='bname'>ClinicalAIAssistance</h3>
                        <p className='bright'>
                            @2023 ClinicalAI. <br />
                            All Rights Reserved
                        </p>
                    </div>
                    <div className="foot-box2 foot-box">
                        <h3 className='bname'>Subscribe to get important <br />updates</h3>

                        <input className='inp' type="email"
                            required
                            autoComplete="off"
                            placeholder="Email" /><br />

                        <button class="button-26"><h2 className='btn-n'>Suscribe</h2></button>
                    </div>
                    <div className="foot-box3 foot-box">
                        <h3 className='bname'>Follows Us</h3>
                        <div className='f-icons'>

                            <div className='icon-div'>
                                <a rel="noreferrer"
                                    href="https://twitter.com/_Clinical_AI_/"
                                    target="_blank">
                                    <FaTwitter className="icons" />
                                </a>
                            </div>
                            <div className='icon-div'>
                                <a rel="noreferrer"
                                    href="https://www.instagram.com/"
                                    target="_blank">
                                    <FaInstagram className="icons" />
                                </a>
                            </div>
                            <div className='icon-div'>
                                <a rel="noreferrer"
                                    href="https://www.linkedin.com/company/clinical-ai-assistance"
                                    target="_blank">
                                    <FaLinkedin className="icons" />
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="foot-box4 foot-box">
                        <h3 className='bname'>Contact Us</h3>
                        <div className="cont-div">
                            <p className='bright'>
                                Foundation For Innovators In Science And Technology (FIIST)
                                Block 9, 5th Floor, R-503/7
                                Indian Institute of Technology, Patna
                                Bihta, Bihar 801106 India<br />
                                Email : healthcareaiassistance @gmail.com<br />
                                Mob: +91 9123979259
                            </p>
                        </div>

                    </div>
                    <div className="foot-box5 foot-box">
                        <h3 className='bname'>Supported By</h3>
                        <div className='microsoft spon'>
                            <img className="img" src=".\img\Microsoft.jpeg" alt="" />
                        </div>
                        <div className="fist spon">
                            <img src=".\img\fist2.png" alt="" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
