import React from 'react'
import styles from "./SwaasthyaSathi.module.css"
const SwaasthyaSathi = () => {
    return (
        <div className={styles.outerss}>
            <div className={styles.space}>
            </div>
            <div className={styles.headingss}>
                <div className={styles.h1}>AI based Clinical Assistant</div>
            </div>
            <div className={styles.about}>
                <p>Our AI assistant significantly reduces consultation time, allowing clinicians to see more patients in less time. This means shorter waiting times for patients and higher efficiency for clinicians.</p>
            </div>
            <img className={styles.cabimg} src=".\img\CAB.svg" alt="" />
            <div className={styles.space}>
            </div>
        </div>
    )
}

export default SwaasthyaSathi
