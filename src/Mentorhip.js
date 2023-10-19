import React from 'react';
import { Button } from "./styles/Button";
const data = [
    {
        name: "Abhisek Tiwari",
        department: "",
        hospital: "Sat 4pm to 6pm",
        img: "./images/Abhisek.jpg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"
    },

    {
        name: "Sriparna Saha",
        department: "",
        hospital: "Sat 4pm to 6pm",
        img: "./images/sriparna saha.jpg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"

    },

    {
        name: "Mukul Kumar",
        department: "Hackpthon and Product Building ",
        hospital: "Sat 4pm to 6pm",
        img: "./images/Mukul.jpeg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"

    },

]
const data1 = [
    {
        name: " Anisha Saha",
        department: "Data Scientist, Mtech CMI, Data Science / Research  ",
        hospital: "Sat 4pm to 6pm",
        img: "./images/Anisha Saha.jpeg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"

    },
]
const data2 = [


    {
        name: "Dr. Minakshi, MBBS, MD",
        department: "Medicine",
        hospital: "Sat 4pm to 6pm",
        img: "./images/Minakshi-Dhar.jpg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"
    },
    {
        name: " Shivangi",
        department: "Medicine",
        hospital: "Sat 4pm to 6pm",
        img: "",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"
    },

]
const data3 = [


    {
        name: "Aryan Sahoo",
        department: "",
        hospital: "Sat 4pm to 6pm",
        img: "./images/Aryan Sahoo.jpeg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"
    },
    {
        name: "Satyam Sahoo",
        department: " GDSC IIT Patna IOT Team Lead",
        hospital: "Sat 4pm to 6pm",
        img: "./images/satyam sahoo.jpeg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"
    },
    {
        name: "Varad Paswar",
        department: "",
        hospital: "Sat 4pm to 6pm",
        img: "./images/varad Paswar.jpeg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"
    },

]
const data4 = [
    {
        name: "Muhammed Sinan C K",
        department: " SDE and clinical text processing",
        hospital: "Sat 4pm to 6pm",
        img: "./images/Muhammed Sinan C K.jpeg",
        link: "https://forms.gle/sFUtMCziMQrXkuBBA"
    },
]

const mentorhip = () => {
    return (
        <div>
            <header>
                <h1>Research Mentorship</h1>
            </header>
            <div className="body">
                {data.map((elm) => (

                    <div className='Doctor'>
                        <img src={elm.img} alt="" />
                        <div className='details'>
                            <h1>{elm.name}</h1>
                            <h4>{elm.department}</h4>
                            <h3>{elm.hospital}</h3>
                        </div>
                        <div className='drbook'>
                            <Button className="btn hireme-btn">
                                <a href={elm.link} target="blank">Book</a>
                            </Button>
                        </div>
                    </div>



                )
                )}
            </div>
            {/* 1.1 */}
            <div className="body">
                {data1.map((elm) => (

                    <div className='Doctor'>
                        <img src={elm.img} alt="" />
                        <div className='details'>
                            <h1>{elm.name}</h1>
                            <h4>{elm.department}</h4>
                            <h3>{elm.hospital}</h3>
                        </div>
                        <div className='drbook'>
                            <Button className="btn hireme-btn">
                                <a href={elm.link} target="blank">Book</a>
                            </Button>
                        </div>
                    </div>
                    // 


                )
                )}
            </div>
            {/* second rpw */}
            <header>
                <h1>Clinical Mentorship</h1>
            </header>
            <div className="body">
                {data2.map((elm) => (

                    <div className='Doctor'>
                        <img src={elm.img} alt="" />
                        <div className='details'>
                            <h1>{elm.name}</h1>
                            <h4>{elm.department}</h4>
                            <h3>{elm.hospital}</h3>
                        </div>
                        <div className='drbook'>
                            <Button className="btn hireme-btn">
                                <a href={elm.link} target="blank">Book</a>
                            </Button>
                        </div>
                    </div>
                )
                )}
            </div>
            {/* 3rd row */}
            <header>
                <h1>Development Mentorship</h1>
            </header>
            <div className="body">
                {data3.map((elm) => (

                    <div className='Doctor'>
                        <img src={elm.img} alt="" />
                        <div className='details'>
                            <h1>{elm.name}</h1>
                            <h4>{elm.department}</h4>
                            <h3>{elm.hospital}</h3>
                        </div>
                        <div className='drbook'>
                            <Button className="btn hireme-btn">
                                <a href={elm.link} target="blank">Book</a>
                            </Button>
                        </div>
                    </div>
                )
                )}
            </div>
            {/* 3.1 */}
            <div className="body">
                {data4.map((elm) => (

                    <div className='Doctor'>
                        <img src={elm.img} alt="" />
                        <div className='details'>
                            <h1>{elm.name}</h1>
                            <h4>{elm.department}</h4>
                            <h3>{elm.hospital}</h3>
                        </div>
                        <div className='drbook'>
                            <Button className="btn hireme-btn">
                                <a href={elm.link} target="blank">Book</a>
                            </Button>
                        </div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default mentorhip
