import React from 'react'
import styles from "./Header.module.css"
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.logo} src="./img/logo.png" alt="" />
      </div>
      <div className={styles.navlist}>
        <ul>
          <li>
            <NavLink className={styles.navkink} to="/"><p>Home</p></NavLink>
          </li>
          <li>
            <NavLink className={styles.navkink} to="/vision"><p>Vision</p></NavLink>
          </li>
          <li>
            <NavLink className={styles.navkink} to="/SwaasthyaSathi"><p>SwaasthyaSathi</p></NavLink>
          </li>
          <li>
            <NavLink className={styles.navkink} to="/services"><p>Services</p></NavLink>
          </li>
          <li>
            <NavLink className={styles.navkink} to="/"><p>News</p></NavLink>
          </li>
          <li>
            <NavLink className={styles.navkink} to="/"> <p> Our Team</p></NavLink>
          </li>
          <li>
            <NavLink className={styles.navkink} to="/"><p>Get Started</p> </NavLink>
          </li>
          <FaBars className={styles.icon} />
        </ul>

      </div>
    </div>
  )
}

export default Header
