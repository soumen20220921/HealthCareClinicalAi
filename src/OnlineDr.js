import React from 'react'
import styles from "./OnlineDr.module.css"

const data = [
    {
        name: "Dr. Minakshi Dhar, MBBS, MD",
        department: "Specialization: General Medicine",
        experience: "Experience: 15 years+",
        hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n S2: 4.30 pm to 5.00 pm",
        img: "./img/Minakshi-Dhar.jpg",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49",
        id: "https://www.researchgate.net/profile/Minakshi-Dhar"
    },

    {
        name: "Dr Pankaj Kumar, MBBS, MD",
        department: "Specialization: Psychiatry",
        experience: "Experience: 15 years+",
        hospital: "Avalability: Sun 10 am to 11 am",
        img: "./img/Dr Pankaj.jpeg",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },

    {
        name: "Dr Swarnim",
        department: "Specialization: Paediatric",
        experience: "Experience: 5 years+",
        hospital: "Avalability: Sat 6pm-7pm",
        img: "./img/Sawarnin.jpeg",
        id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr Mrinmoy, MBBS, MD",
        department: "Specialization: General Medicine",
        experience: "Experience: 3 years+",
        hospital: "Avalability: Sat 4pm to 6pm",
        img: "./img/mrinmoy.jpeg",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Shobha Kant Pandey",
        department: "Specialization: General Medicine",
        experience: "Experience: 3 years+",
        hospital: "Avalability: Sun 4pm to 6pm",
        img: "./img/DrPandey.jpg",
        id: "https://sites.google.com/view/health-center-iit-patna/doctors#h.24n2z2koyslj",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr. Diwakar SIngh, MBBS, MD",
        department: "Specialization: General Medicine",
        experience: "Experience: 3 years+",
        hospital: "Avalability: Sun 4pm to 6pm",
        img: "./img/Dr. Diwakar SIngh, MBBS, MD.jpeg",
        id: "https://www.medindia.net/patients/doctor_search/dr-diwakar-singh-indian-medicine-general-practitioner-family-physician-lakhisarai-bihar-81357-1.htm",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    },
    {
        name: "Dr Chandni Prakash, MBBS, MD",
        department: "Specialization:General Physician ,IGIMS, Patna",
        experience: "Experience: 3 years+",
        hospital: "Avalability: Sat 4pm to 6pm",
        link: "https://forms.gle/uC6qnGcjyA5UjyT49",
        // img: "./images/mrinmoy.jpeg"
    },
]






const OnlineDr = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>Online Doctor</h1>
            </div>
            <div className={styles.outerDr}>

                {data.map((elm) => (

                    <div className={styles.Drbox}>
                        <div className={styles.Drimg}>
                            <img className={styles.img} src={elm.img} alt="" />
                        </div>
                        <h1>
                            {elm.name}
                        </h1>
                        <div className={styles.Drdes}>
                            <p>
                                {elm.department}
                            </p>
                            <p>
                                {elm.experience}
                            </p>
                            <p>
                                {elm.hospital}
                            </p>
                        </div>
                        {/* <div className={styles.btndiv}> */}
                        <a className={styles.drbtn} href={elm.link} target='blank'><button className={styles.btn}><h2 className={styles.drbtnn}>BOOK</h2></button></a>
                        {/* </div> */}
                    </div>

                )
                )}
            </div>
        </>
    )
}

export default OnlineDr
