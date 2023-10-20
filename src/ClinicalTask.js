import React from 'react'
// import "./DataSet.css"
import { useState } from 'react';
// import Model from "./Model"
import { Button } from "./styles/Button";

const data =
    [
        {
            img: "./images/MER.png",
            Standard: " Medical Entity Recognition",
            about: "Medical entity recognition (MEN), also known as clinical entity recognition or biomedical entity recognition, is a natural language processing (NLP) task that involves identifying and extracting specific medical or clinical entities from text, such as electronic health records, medical literature, clinical notes, or other healthcare-related documents.",
            link: "https://forms.gle/yKLF5w9B57CLbNks6"
        },
        {
            img: "./images/MDS.png",
            Standard: "Medical Document Summarization",
            about: "We are excited to introduce our AI-driven Medical Document Summarization service, designed to swiftly and accurately condense extensive medical documents into clear and concise summaries. "
        },

    ]

const data2 =
    [

        {
            img: "./images/Med QA (2).png",
            Standard: "Medical Question Answering",
            about: "QueSemSpan MedQA is a large-scale semantic information annotated medical multi-span question answering corpus, which contains intent and "
        },
        {
            img: "./images/OD.png",
            Standard: "On Demand",
            about: "RD-Dialogue is a conversational corpus having conversations between patient and doctor. Each utterance is annotated with intent and       "
        },
    ]







const ClinicalTask = () => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <>
            <div className="pop-up">
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <div className="p">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolore corporis similique autem voluptatem facilis ullam eligendi dignissimos saepe quis facere ratione aliquam delectus, esse aspernatur neque architecto officia earum.
                            </div>
                            <button className="close-modal" onClick={toggleModal}>
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className='content'>

                {data.map((eml) => (
                    <div className="pos">
                        <div className="box no1">

                            <div className='innerbox2'>
                                <h2>{eml.Standard}</h2>
                                <h3>{eml.catagory}</h3>

                                <h4> {eml.about}
                                    <button onClick={toggleModal} className="btn-modal">
                                        more
                                    </button>
                                </h4>


                            </div>
                            <div className="innerbox1">
                                <img src={eml.img} alt="anc" />
                            </div>
                            <div className='innerbox3'>
                                <Button className="btn hireme-btn">
                                    <a href={eml.link} target="blank">get access</a>
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}


                {/* <div className="box no2"></div>
            <div className="box no3"></div> */}
            </div>



            {/* elm2 started */}
            <div className="pop-up">
                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            <h2>Hello Modal</h2>
                            <div className="p">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dolore corporis similique autem voluptatem facilis ullam eligendi dignissimos saepe quis facere ratione aliquam delectus, esse aspernatur neque architecto officia earum.
                            </div>
                            <button className="close-modal" onClick={toggleModal}>
                                X
                            </button>
                        </div>
                    </div>
                )}
            </div>

            <div className='content'>

                {data2.map((eml) => (
                    <div className="box no1">

                        <div className='innerbox2'>
                            <h2>{eml.Standard}</h2>
                            <h3>{eml.catagory}</h3>
                            {/* <h1>{eml.price}</h1> */}
                            <h4> {eml.about}
                                <button onClick={toggleModal} className="btn-modal">
                                    more
                                </button>
                            </h4>


                        </div>
                        <div className="innerbox1">
                            <img src={eml.img} alt="anc" />
                        </div>
                        <div className='innerbox3'>
                            <Button className="btn hireme-btn">
                                <a href={eml.link} target="blank">get access</a>
                            </Button>
                        </div>
                    </div>
                ))}


                {/* <div className="box no2"></div>
            <div className="box no3"></div> */}
            </div>
        </>
    )
}

export default ClinicalTask
