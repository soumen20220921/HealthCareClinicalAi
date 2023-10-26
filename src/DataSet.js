import React from 'react'
import styles from "./Dataset.module.css"

const data = [
    {
        name: "PlanConSent",
        des: "PlaCaConSet, a multi-modal, multi-turn plant care conversational dataset, which consists of around 1K conversations spanning over",
        img: "./img/fig3.png",
        link: ""
    },
    {
        name: "ES-MDD",
        des: "ES-MDD is an empathy and severity-aware multi-modal medical dialogue (ES-MMD) corpus in English, where each utterance is annotated with its",
        img: "./img/ESimage6_1 (1).png",
        link: ""
    },
    {
        name: "QueSemSpan",
        des: "QueSemSpan MedQA is a large-scale semantic information annotated medical multi-span question answering corpus, which contains intent and",
        img: "./img/Med QA (2).png",
        link: ""
    },
    {
        name: "RD-Dialogue",
        des: "RD-Dialogue is a conversational corpus having conversations between patient and doctor. Each utterance is annotated with intent and",
        img: "./img/RD-Dialogue.jpg",
        link: ""
    },
]

const Dataset = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>Clinical Framework</h1>
            </div>
            <div className={styles.dsouter}>
                {data.map((elm) => (

                    <div className={styles.dsbox}>
                        <h1 className={styles.dsname} >{elm.name}</h1>
                        <p className={styles.dsdes}>{elm.des}<button className={styles.btn1}>more</button></p>
                        <img className={styles.img} src={elm.img} alt="" />

                        <a href={elm.link} target='blank'> <button className={styles.btndiv} >GET ACCESS</button></a>

                    </div>

                )
                )}
            </div>
        </>
    )
}

export default Dataset
