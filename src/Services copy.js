import React from 'react'
import styles from "./Services.module.css"

const data2 = [
    {
        name: "Online Doctor Consultant",
        img: "./img/online Dr. consultant.webp",
        btn1: "Details",
        btn2: "Access",
    },
    {
        name: "Clinical Datasets",
        img: "./img/dataset.png",
        btn1: "Explore",
        btn2: "Access",
    },
    {
        name: "Clinical Frameworks",
        img: "./img/clinik2.jpg",
        btn1: "Explore",
        btn2: "Access",
    },
    {
        name: "Mentorship",
        img: "./img/mentorship.jpg",
        btn1: "Explore",
        btn2: "Access",
    },
]
const Services = () => {
    return (
        <>
            <div className={styles.outer}>
                {data2.map((elm) => (

                    <div className={`${styles.servox1} ${styles.servox}`}>
                        <div className={styles.snamediv}>
                            <h1 className={styles.sname}>{elm.name}</h1>
                        </div>
                        <div className={styles.simgdiv}>
                            <img className={styles.simg} src={elm.img} alt="" />
                        </div>

                        <div className={styles.sbtndiv}>

                            <button className={styles.sbtn}><h2 className={styles.btnn}>{elm.btn1}</h2></button>

                            <button className={styles.sbtn}><h2 className={styles.btnn}>{elm.btn2}</h2></button>

                        </div>

                    </div>)
                )}
                {/* <div className={`${styles.servox2} ${styles.servox}`}></div>
                <div className={`${styles.servox3} ${styles.servox}`}></div>
                <div className={`${styles.servox4} ${styles.servox}`}></div> */}
            </div>

        </>
    )
}

export default Services
