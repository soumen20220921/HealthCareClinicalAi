import React from 'react';
import { Button } from "./styles/Button";
import "./OnlineDoctor.css";
// Not Completed
const data = [
  {
    name: "Dr. Minakshi Dhar, MBBS, MD",
    department: "Specialization: General Medicine",
    experience: "Experience: 15 years+",
    hospital: "Avalability: S1: Sat 4.00 pm-4.30 pm, \n S2: 4.30 pm to 5.00 pm",
    img: "./images/Minakshi-Dhar.jpg",
    link: "https://forms.gle/uC6qnGcjyA5UjyT49",
    id: "https://www.researchgate.net/profile/Minakshi-Dhar"
  },

  {
    name: "Dr Pankaj Kumar, MBBS, MD",
    department: "Specialization: Psychiatry",
    experience: "Experience: 15 years+",
    hospital: "Avalability: Sun 10 am to 11 am",
    img: "./images/Dr Pankaj.jpeg"
  },

  {
    name: "Dr Swarnim",
    department: "Specialization: Paediatric",
    experience: "Experience: 5 years+",
    hospital: "Avalability: Sat 6pm-7pm",
    img: "./images/Sawarnin.jpeg",
    id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org"
  }
]
const data2 = [
  {
    name: "Dr Mrinmoy, MBBS, MD",
    department: "Specialization: General Medicine",
    experience: "Experience: 3 years+",
    hospital: "Avalability: Sat 4pm to 6pm",
    img: "./images/mrinmoy.jpeg"
  },

  {
    name: "Dr. Shobha Kant Pandey",
    department: "Specialization: General Medicine",
    experience: "Experience: 3 years+",
    hospital: "Avalability: Sun 4pm to 6pm",
    img: "./images/DrPandey.jpg",
    id: "https://sites.google.com/view/health-center-iit-patna/doctors#h.24n2z2koyslj"
  },
  {
    name: "Dr. Diwakar SIngh, MBBS, MD",
    department: "Specialization: General Medicine",
    experience: "Experience: 3 years+",
    hospital: "Avalability: Sun 4pm to 6pm",
    img: "./images/Dr. Diwakar SIngh, MBBS, MD.jpeg",
    id: "https://www.medindia.net/patients/doctor_search/dr-diwakar-singh-indian-medicine-general-practitioner-family-physician-lakhisarai-bihar-81357-1.htm",
  },


]
const data3 = [
  {
    name: "Dr Chandni Prakash, MBBS, MD",
    department: "Specialization:General Physician ,IGIMS, Patna",
    experience: "Experience: 3 years+",
    hospital: "Avalability: Sat 4pm to 6pm",
    // img: "./images/mrinmoy.jpeg"
  },




]


const OnlineDoctor = () => {

  return (
    <div>
      <header>
        <h1>Doctor List</h1>
      </header>
      <div className="body">
        {data.map((elm) => (

          <div className='Doctor'>
            <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
            <div className='details'>
              <h1>{elm.name}</h1>
              <h4>{elm.department}</h4>
              <h3>{elm.experience}</h3>
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
      {/* second rpw */}
      <div className="body">
        {data2.map((elm) => (

          <div className='Doctor'>
            <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
            <div className='details'>
              <h1>{elm.name}</h1>
              <h4>{elm.department}</h4>
              <h3>{elm.experience}</h3>
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
      {/* 3RD ROW */}
      <div className="body">
        {data3.map((elm) => (

          <div className='Doctor'>
            <img src={elm.img} alt="" />
            <div className='details'>
              <h1>{elm.name}</h1>
              <h4>{elm.department}</h4>
              <h3>{elm.experience}</h3>
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

export default OnlineDoctor
