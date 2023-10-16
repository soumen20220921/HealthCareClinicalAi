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
    link: "https://forms.gle/uC6qnGcjyA5UjyT49"
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
    img: "./images/Sawarnin.jpeg"
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
    img: "./images/DrPandey.jpg"
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
      {/* second rpw */}
      <div className="body">
        {data2.map((elm) => (

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
