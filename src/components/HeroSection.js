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
            In the past five years, dozens of surveys and reports indicate an unbalanced doctor-to-population ratio. These reports firmly suggest that the alarming figures need to be improved by increasing the number of healthcare professionals and better utilizing their time.We built an autonomous junior healthcare assistant to help doctors in symptom investigation and diagnosis.
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
