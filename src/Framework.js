import React from 'react'
import styles from "./Framework.module.css"
const data = [
    {
        name: "Medical Entity Recognition",
        des: "Medical entity recognition (MEN), also known as clinical entity recognition or biomedical entity recognition, is a natural language processing (NLP) task that ",
        img: "./img/Medical entity recognition.jpg",
        link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
    {
        name: "Medical Document Summarization",
        des: "We are excited to introduce our AI-driven Medical Document Summarization service, designed to swiftly and accurately condense ",
        img: "./img/Medical Document Summarization.jpg",
        link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
    {
        name: "Medical Question Answering",
        des: "QueSemSpan MedQA is a large-scale semantic information annotated medical multi-span question answering corpus, which contains intent and ",
        img: "./img/Medical Question Answering.png",
        link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
    {
        name: "On Demand",
        des: "RD-Dialogue is a conversational corpus having conversations between patient and doctor. Each utterance is annotated with intent and",
        img: "./img/OD.png",
        link: "https://forms.gle/xwFEBrKCbDFvFJXh8"
    },
]
const Framework = () => {
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

export default Framework
