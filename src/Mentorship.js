import React from 'react';
import styles from "./Mentorship.module.css";

const data = [
    {
        name: "Abhisek Tiwari",
        department: "Researcher & Innovator ,AI for Social Good, NLP, IIT Patna & Co-founder, Clinical AI Assistance Pvt. Ltd.",
        experience: "",
        hospital: "Avalability:Sat 4pm to 6pm",
        img: "./img/Abhisek Tiwari.jpg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.researchgate.net/profile/Minakshi-Dhar"
    },

    {
        name: "Sriparna Saha",
        department: "Researcher,Associate Professor at Department of Computer Science and Engineering, Indian Institute of Technology",
        experience: "",
        hospital: "Avalability:Sat 4pm to 6pm",
        img: "./img/sriparna saha.jpg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },

    {
        name: "Mukul Kumar",
        department: "Hackpthon and Product Building ,PMRF || Winner SIH-2022 || Climate Modelling || CTM (WRF) || Data Assimilation || Aerosol",
        experience: "",
        hospital: "Avalability: Sat 4pm to 6pm",
        img: "./img/Mukul.jpeg",
        id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },
    {
        name: "Anisha Saha",
        department: "Specialization: General Medicine,Data Scientist at Micron Technology | CMI Data Science '22| Summer Intern at Legato Health Technologies",
        experience: "",
        hospital: "Avalability: Sat 4pm to 6pm",
        img: "./img/Anisha Saha.jpeg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },

]

const data1 = [
    {
        name: "Dr. Minakshi Dhar, MBBS, MD",
        department: "Specialization: General Medicine Experience: 15 years+",
        experience: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n S2: 4.30 pm to 5.00 pm",
        hospital: "",
        img: "./img/Minakshi-Dhar.jpg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.researchgate.net/profile/Minakshi-Dhar"
    },

    {
        name: "Shivangi",
        department: "Specialization: General Medicine",
        experience: "Experience: 15 years+",
        hospital: "Avalability:Sat 4pm to 6pm",
        // img: "./img/sriparna saha.jpg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },


]

const data3 = [
    {
        name: "Aryan Sahoo",
        department: "Research Intern @IIT Gandhinagar,Artificial Intelligence and Data Science undergrad at Indian Institute of Technology, Patna",
        experience: "",
        hospital: "Sat 4pm to 6pm",
        img: "./img/Aryan Sahoo.jpeg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
        id: "https://www.researchgate.net/profile/Minakshi-Dhar"
    },

    {
        name: "Satyam Sahoo",
        department: "Technical Team Lead IEEE ,Vice-captain Team Phoenix(Robocon) || GDSC IIT Patna IOT Team Lead || Computer Vision ,ML, Robotics",
        experience: "",
        hospital: "Avalability:Sat 4pm to 6pm",
        img: "./img/satyam sahoo.jpeg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },

    {
        name: "Varad Paswar",
        department: "PGET (John Deere) | Indian Institute of Technology Patna | M. Tech. (2021-2023) | Mechatronics | Data Science",
        experience: "",
        hospital: "Avalability: Sat 4pm to 6pm",
        img: "./img/varad Paswar.jpeg",
        id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },
    {
        name: "Muhammed Sinan C K",
        department: "IIT Patna CSE '23 ,Software Engineer InternSoftware Engineer Intern SMS DATATECH CORPORATION",
        experience: " ",
        hospital: "Avalability: Sat 4pm to 6pm",
        img: "./img/Muhammed Sinan C K.jpeg",
        link: "https://forms.gle/gT6yJjKcCEwdonSi8",
    },

]

const Mentorship = () => {
    return (
        <>
            <div className={styles.Drheader}>
                <h1>Research Mentorship</h1>
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
                            {/* <p>
                                {elm.experience}
                            </p> */}
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

            {/* Clinical Mentorship */}

            <div className={styles.Drheader}>
                <h1>Clinical Mentorship</h1>
            </div>
            <div className={styles.outerDr}>

                {data1.map((elm) => (

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

            <div className={styles.Drheader}>
                <h1>Development Mentorship</h1>
            </div>
            <div className={styles.outerDr}>

                {data3.map((elm) => (

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
                            {/* <p>
                                {elm.experience}
                            </p> */}
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

export default Mentorship
