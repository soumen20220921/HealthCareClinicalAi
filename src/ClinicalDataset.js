import React from 'react'
import "./ClinicalDataset.css"
import { Button } from "./styles/Button";

const data =
    [
        {
            img: "./images/fig3.png",
            Standard: "PlanConSent",
            catagory: "For the basics",
            about: "PlaCaConSet, a multi-modal, multi-turn plant care conversational dataset, which consists of around 1K conversations spanning over ",
            link: "https://forms.gle/yKLF5w9B57CLbNks6"
        },
        {
            img: "./images/ESimage6_1 (1).png",
            Standard: "ES-MDD",
            catagory: "For the professional",
            about: "ES-MDD is an empathy and severity-aware multi-modal medical dialogue (ES-MMD) corpus in English, where each utterance is annotated with its"
        },

    ]

const ClinicalDataset = () => {
    return (
        <>
            <div className="bahardiv">
                {data.map((eml) => (
                    <div className='andandiv'>
                        <div className="tcontent">
                            <h2 className='center'>{eml.Standard}</h2>
                            <h3 className='center'>{eml.catagory}</h3>
                            <h4 className='center '>
                                <p>
                                    {eml.about}<button className="btn-modal">
                                        more
                                    </button>
                                </p>
                            </h4>
                        </div>
                        <div className="imgdiv">
                            <img src="" alt="" />
                        </div>
                        <div className='innerbox3'>
                            <Button className="btn hireme-btn but">
                                <a href="link" target="blank">get access</a>
                            </Button>
                        </div>
                    </div>
                ))}


            </div>

        </>
    )
}

export default ClinicalDataset
