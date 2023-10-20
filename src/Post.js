import React from 'react'
import "./Post.css"
import { FaLinkedin, FaTwitter, FaChrome } from "react-icons/fa";

const data = [
  {
    name: "Abhisek Tiwari",
    img: "./images/Abhisek Tiwari.jpg",
    id: "https://abhisektiwari.github.io/",
    lkin: "https://www.linkedin.com/in/abhisekti/",
    twit: "https://twitter.com/abhisekti"
  },

  {
    name: "Sarbajeet Tiwari",
    img: "./images/Sarbajeet Tiwari.jpeg",
    id: "https://www.linkedin.com/in/sarbjeet-tiwari-b42977268/",
    lkin: "https://www.linkedin.com/in/sarbjeet-tiwari-b42977268/",
    twit: "https://twitter.com",
  },

]

const data1 = [
  {
    name: "Sriparna Saha",
    img: "./images/sriparna saha.jpg",
    id: "https://scholar.google.co.in/citations?user=Fj7jA_AAAAAJ&hl=en",
    lkin: "https://www.linkedin.com/in/sriparna-saha-1a1338161/?originalSubdomain=in",
    twit: "https://twitter.com/sriparnasaha_20?lang=en"
  },

  {
    name: "Pushpak Bhattacharyya",
    img: "./images/Pushpak Bhattacharyya.jpeg",
    id: "https://en.wikipedia.org/wiki/Pushpak_Bhattacharyya",
    lkin: "https://in.linkedin.com/in/pushpakbh",
    twit: "https://twitter.com/bpushpak",
  },
  {
    name: "Minakshi Dhar",
    img: "./images/Minakshi-Dhar.jpg",
    id: "https://www.researchgate.net/profile/Minakshi-Dhar",
    lkin: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
    twit: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
  },
]

const data2 = [
  {
    name: "Minakshi Dhar",
    img: "./images/Minakshi-Dhar.jpg",
    id: "https://www.researchgate.net/profile/Minakshi-Dhar",
    lkin: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
    twit: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
  },

  {
    name: "Dr Pankaj",
    img: "./images/Dr Pankaj.jpeg",
    id: "https://www.apollospectra.com/patna/agam-kuan/doctors/dr-pankaj-kumar",
    lkin: "https://www.apollospectra.com/patna/agam-kuan/doctors/dr-pankaj-kumar",
    twit: "https://www.apollospectra.com/patna/agam-kuan/doctors/dr-pankaj-kumar",
  },

]
const data4 = [
  {
    name: "Abhisek Tiwari",
    img: "./images/Abhisek Tiwari.jpg",
    id: "https://abhisektiwari.github.io/",
    lkin: "https://www.linkedin.com/in/abhisekti/",
    twit: "https://twitter.com/abhisekti"
  },


  {
    name: "Aryan Sahoo",
    img: "./images/Aryan Sahoo.jpeg",
    id: "https://www.linkedin.com/in/aryan-darkrunner/?originalSubdomain=in",
    lkin: "https://www.linkedin.com/in/aryan-darkrunner/?originalSubdomain=in",
    twit: "https://twitter.com",
  },
  {
    name: "Soumen Singh",
    img: "./images/Soumen Singh.jpeg",
    id: "https://www.linkedin.com/in/soumen-singh-891844208/?originalSubdomain=in",
    lkin: "https://www.linkedin.com/in/soumen-singh-891844208/?originalSubdomain=in",
    twit: "https://www.linkedin.com/in/soumen-singh-891844208/?originalSubdomain=in",
  },
]

const data3 = [
  {
    name: "Dr. Swarnim",
    img: "./images/Sawarnin.jpeg",
    id: "https://www.researchgate.net/profile/Minakshi-Dhar",
    lkin: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
    twit: "https://www.linkedin.com/in/minakshi-dhar-64134319b/?originalSubdomain=in",
  },

  {
    name: "Dr. Mrinmoy",
    img: "./images/Dr Pankaj.jpeg",
    id: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
    lkin: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
    twit: "https://aiimspatna.edu.in/doctor/dr.swarnin11439@aiimspatna.org",
  },

]

const data5 = [
  {
    name: "Varad Paswar",
    img: "./images/varad Paswar.jpeg",
    id: "https://www.researchgate.net/",
    lkin: "https://www.linkedin.com/",
    twit: "https://www.linkedin.com/",
  },

  {
    name: "Karan Ravi Das",
    img: "./images/karan.jpeg",
    id: "https://www.linkedin.com/in/karan-ravi-das-126336227/",
    lkin: "https://www.linkedin.com/in/karan-ravi-das-126336227/",
    twit: "https://www.linkedin.com/in/karan-ravi-das-126336227/",
  },

]
const Post = () => {
  return (
    <div>
      <div>
        <div className='header'>
          <h1>Founders</h1>
        </div>
        <div className="body">
          {data.map((elm) => (

            <div className='Doctor frame' style={{ height: "40rem" }}>
              <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
              <div className='details' style={{ bottom: "5rem" }}>
                <h1>{elm.name}</h1>

              </div>
              <div className='social'>
                <div className="footer-social--icons social-icons2">
                  <div className='social-icons2'>
                    <a rel="noreferrer"
                      href={elm.id}
                      target="_blank">
                      <FaChrome className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.twit}
                      target="_blank">
                      <FaTwitter className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.lkin}
                      target="_blank">
                      <FaLinkedin className="icons icons2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* second rpw */}
        <div className='header'>
          <h1>Mentors</h1>
        </div>
        <div className="body">
          {data1.map((elm) => (

            <div className='Doctor frame' style={{ height: "40rem" }}>
              <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
              <div className='details' style={{ bottom: "5rem" }}>
                <h1>{elm.name}</h1>

              </div>
              <div className='social'>
                <div className="footer-social--icons social-icons2">
                  <div className='social-icons2'>
                    <a rel="noreferrer"
                      href={elm.id}
                      target="_blank">
                      <FaChrome className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.twit}
                      target="_blank">
                      <FaTwitter className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.lkin}
                      target="_blank">
                      <FaLinkedin className="icons icons2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* 3RD ROW */}
        <div className='header'>
          <h1>Research Team</h1>
        </div>
        <div className="body">
          {data.map((elm) => (

            <div className='Doctor frame' style={{ height: "40rem" }}>
              <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
              <div className='details' style={{ bottom: "5rem" }}>
                <h1>{elm.name}</h1>

              </div>
              <div className='social'>
                <div className="footer-social--icons social-icons2">
                  <div className='social-icons2'>
                    <a rel="noreferrer"
                      href={elm.id}
                      target="_blank">
                      <FaChrome className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.twit}
                      target="_blank">
                      <FaTwitter className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.lkin}
                      target="_blank">
                      <FaLinkedin className="icons icons2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* 4th Row */}
        <div className='header'>
          <h1>Medical Team</h1>
        </div>
        <div className="body">
          {data2.map((elm) => (

            <div className='Doctor frame' style={{ height: "40rem" }}>
              <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
              <div className='details' style={{ bottom: "5rem" }}>
                <h1>{elm.name}</h1>

              </div>
              <div className='social'>
                <div className="footer-social--icons social-icons2">
                  <div className='social-icons2'>
                    <a rel="noreferrer"
                      href={elm.id}
                      target="_blank">
                      <FaChrome className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.twit}
                      target="_blank">
                      <FaTwitter className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.lkin}
                      target="_blank">
                      <FaLinkedin className="icons icons2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* 5th row */}

        <div className="body">
          {data3.map((elm) => (

            <div className='Doctor frame' style={{ height: "40rem" }}>
              <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
              <div className='details' style={{ bottom: "5rem" }}>
                <h1>{elm.name}</h1>

              </div>
              <div className='social'>
                <div className="footer-social--icons social-icons2">
                  <div className='social-icons2'>
                    <a rel="noreferrer"
                      href={elm.id}
                      target="_blank">
                      <FaChrome className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.twit}
                      target="_blank">
                      <FaTwitter className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.lkin}
                      target="_blank">
                      <FaLinkedin className="icons icons2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* 6th row */}
        <div className='header'>
          <h1>Technical Team</h1>
        </div>
        <div className="body">
          {data4.map((elm) => (

            <div className='Doctor frame' style={{ height: "40rem" }}>
              <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
              <div className='details' style={{ bottom: "5rem" }}>
                <h1>{elm.name}</h1>

              </div>
              <div className='social'>
                <div className="footer-social--icons social-icons2">
                  <div className='social-icons2'>
                    <a rel="noreferrer"
                      href={elm.id}
                      target="_blank">
                      <FaChrome className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.twit}
                      target="_blank">
                      <FaTwitter className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.lkin}
                      target="_blank">
                      <FaLinkedin className="icons icons2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* 7th row */}

        <div className="body">
          {data5.map((elm) => (

            <div className='Doctor frame' style={{ height: "40rem" }}>
              <a href={elm.id} target="_blank" rel="noopener noreferrer"><img src={elm.img} alt="" /></a>
              <div className='details' style={{ bottom: "5rem" }}>
                <h1>{elm.name}</h1>

              </div>
              <div className='social'>
                <div className="footer-social--icons social-icons2">
                  <div className='social-icons2'>
                    <a rel="noreferrer"
                      href={elm.id}
                      target="_blank">
                      <FaChrome className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.twit}
                      target="_blank">
                      <FaTwitter className="icons icons2" />
                    </a>
                  </div>
                  <div>
                    <a rel="noreferrer"
                      href={elm.lkin}
                      target="_blank">
                      <FaLinkedin className="icons icons2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )
          )}
        </div>
        {/* 8th row */}
      </div>
    </div>
  )
}

export default Post
