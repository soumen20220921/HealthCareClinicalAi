import React from 'react'
import styles from "./Services.module.css"
import { NavLink } from 'react-router-dom'
const data2 = [
    {
        name: "Online Doctor Consultant",
        img: "./img/online Dr. consultant.webp",
        btn1: "Details",
        btn2: "Access",
        service: "/onlinedr",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49"
    },
    {
        name: "Clinical Datasets",
        img: "./img/dataset.png",
        btn1: "Explore",
        btn2: "Access",
        service: "/dataset",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrZZzakKMeY6ir55rGDLlA3JEbixJRC9Y67SfHA-3nb48COA/viewformm"
    },
    {
        name: "Clinical Frameworks",
        img: "./img/clinik2.jpg",
        btn1: "Explore",
        btn2: "Access",
        service: "/framework",
        link: "https://docs.google.com/forms/d/e/1FAIpQLScrZZzakKMeY6ir55rGDLlA3JEbixJRC9Y67SfHA-3nb48COA/viewform"
    },
    {
        name: "Mentorship",
        img: "./img/mentorship.jpg",
        btn1: "Explore",
        btn2: "Access",
        service: "/mentorship",
        link: "https://forms.gle/1ups9i5GN1CMYvCs6"
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

                            <NavLink className={styles.navkink} to={elm.service}><p><button className={styles.sbtn}><h2 className={styles.btnn}>{elm.btn1}</h2></button></p> </NavLink>

                            <a href={elm.link} target='blank'><button className={styles.sbtn}><h2 className={styles.btnn}>{elm.btn2}</h2></button></a>

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
