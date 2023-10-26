import React from 'react'
import styles from "./Vision.module.css"
const Vision = () => {
    return (
        <>
            <div className={styles.outervs}>
                <div className={styles.vsimg}>
                    <img className={styles.vsimg} src=".\img\wtwy.webp" alt="" />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.q}>
                        Why a Healthcare AI Assistant would be helpful?
                    </h1>
                    <p className={styles.ans}>
                        In the past five years, dozens of surveys and reports indicate an unbalanced doctor-to-population ratio. These reports firmly suggest that the alarming figures need to be improved by increasing the number of healthcare professionals and better utilizing their time. With the motivation to assist doctors and ease early diagnosis, the proposed automatic disease diagnosis assistant conducts a thorough symptom investigation and prepares a diagnosis report for doctors in the real world.
                    </p>
                    <div className={styles.space}></div>
                    <h1 className={styles.q}>
                        About the AI assistant:
                    </h1>
                    <p className={styles.ans}>
                        The assistant is the first point of conduct of patients which acts as a healthcare receptionist. It performs an initial investigation and prepares a summary report for the doctor. They inform the relevant doctor cabin, and when the patient finally reaches the doctor, they have the patient's context. It helps them to perform further investigation and diagnosis. It saves a fraction of doctors' time, which could be utilized more efficiently. It can chat and talk across multiple languages. Also, it can observe visual symptoms reported by the patient /investigated by the assistant.
                    </p>
                    <div className={styles.space}></div>
                </div>
            </div>
        </>
    )
}

export default Vision
