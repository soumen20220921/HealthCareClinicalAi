import React from 'react'
import styles from "./Herosection.module.css";
import { NavLink } from 'react-router-dom';
const Herosection = () => {
    return (
        <div>
            <main>
                <div className={`${styles.box1} ${styles.box}`}>
                    <div ><h1 className={styles.cname}>CLINICAL <span>AI</span> <br /> ASSISTANCE</h1></div>
                    <div className={styles.cdes}>In the past five years, dozens of surveys and reports indicate an unbalanced doctor-to-population ratio. With the motivation of assisting doctors, we built an autonomous junior healthcare assistant to help doctors in symptom investigation and diagnosis. The assistant serves as the initial point of contact for patients, essentially functioning as a healthcare receptionist. It conducts an initial assessment and compiles a concise report for the physician.</div>
                    <NavLink
                        className="navbar-link"

                        to="/services">
                        <button className={styles.btn} >MORE</button>
                    </NavLink>

                </div>
                <div className={`${styles.box2} ${styles.box}`}>
                    <img src=".\img\hero2-removebg-preview.png" alt="img" />
                </div>

            </main>
        </div>
    )
}

export default Herosection
