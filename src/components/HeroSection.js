import React from 'react';

import { NavLink } from "react-router-dom";

import "./HeroSection.css"

const HeroSection = () => {
  return (
    <>
      <div className='outer'>
        <div className='text'>

          <p className='heading' style={{ color: 'black' }}>CLINICAL<span style={{ color: "#EE7F1A" }}> AI</span>  ASSISTANCE</p>
          <p className="hero-para" style={{ color: 'black' }}>
            In the past five years, dozens of surveys and reports indicate an unbalanced doctor-to-population ratio. With the motivation of assisting doctors, we built an autonomous junior healthcare assistant to help doctors in symptom investigation and diagnosis. The assistant serves as the initial point of contact for patients, essentially functioning as a healthcare receptionist. It conducts an initial assessment and compiles a concise report for the physician.
          </p>

          <button className='btn'>
            <NavLink to="/services" className="a">More</NavLink>
          </button>
        </div>
        <div className='img'>
          <img className='img2' src=".\images\hero2-removebg-preview.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default HeroSection
