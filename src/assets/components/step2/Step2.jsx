import './step2.css'
import img1 from "../../../../public/arcade.svg";
import img2 from "../../../../public/advenced.svg";
import img3 from "../../../../public/pro.svg";



export default function Step2({ setStepSelected, frequency, setFrequency, plan, setPlan, lightMode }) {


    const CardWrapper = styled(motion.div)`
    border-radius: 20px;
    backdrop-filter: blur(3px) brightness(120%);
    `;

    return(

        <div className="div-step1">

            <div className="step2-part1 d-flex flex-column gap-3">

                <div className="step-texts">
                    <h3 className={` ${lightMode ? "light" : ""}`}>Select your plan</h3>
                    <p className={`${lightMode ? "light" : ""}`}>You have the option of monthly or yearly billing.</p>
                </div>

                <div className="step2-cards d-flex gap-2">
          
                    <div id="arcade" className={`stp-card d-flex flex-column justify-content-between ${plan === "arcade" ? "selected" : ""}
                    ${lightMode ? "light" : ""}`} onClick={(e) => setPlan(e.currentTarget.id)}>
                        <div id="arcade" className="img-card">
                            <img src={img1} alt="" />
                        </div>
                        <div id="arcade" className="infos-plan">
                            <h6 className={`h6-plan ${lightMode ? "light" : ""} ${plan === "arcade" ? "selected" : ""}`}>Arcade</h6>
                            {frequency === "monthly" && 
                                <p className={`${lightMode ? "light" : ""} ${plan === "arcade" ? "selected" : ""}`}>$9/mo</p>
                            }
                            {frequency === "yearly" && 
                                <p className={`${lightMode ? "light" : ""} ${plan === "arcade" ? "selected" : ""}`}>$90/yr</p>
                            }
                        </div>
                    </div>


                    <div id="advanced" className={`stp-card d-flex flex-column justify-content-between ${plan === "advanced" ? "selected" : ""}
                     ${lightMode ? "light" : ""}`} onClick={(e) => setPlan(e.currentTarget.id)}>
                        <div id="advanced" className="img-card">
                            <img src={img2} alt="" />
                        </div>
                        <div id="advanced" className="infos-plan">
                            <h6 className={`h6-plan ${lightMode ? "light" : ""} ${plan === "advanced" ? "selected" : ""}`}>Advanced</h6>
                            {frequency === "monthly" && 
                                <p className={`${lightMode ? "light" : ""} ${plan === "advanced" ? "selected" : ""}`}>$12/mo</p>
                            }
                            {frequency === "yearly" && 
                                <p className={`${lightMode ? "light" : ""} ${plan === "advanced" ? "selected" : ""}`}>$120/yr</p>
                            }
                        </div>
                    </div>

                    <div id="pro" className={`stp-card d-flex flex-column justify-content-between ${plan === "pro" ? "selected" : ""} 
                    ${lightMode ? "light" : ""}`} onClick={(e) => setPlan(e.currentTarget.id)}>
                        <div id="pro" className="img-card">
                            <img src={img3} alt="" />
                        </div>
                        <div id="pro" className="infos-plan">
                            <h6 className={`h6-plan ${lightMode ? "light" : ""} ${plan === "pro" ? "selected" : ""}`}>Pro</h6>
                            {frequency === "monthly" && 
                                <p className={`${lightMode ? "light" : ""} ${plan === "pro" ? "selected" : ""}`}>$15/mo</p>
                            }
                            {frequency === "yearly" && 
                                <p className={`${lightMode ? "light" : ""} ${plan === "pro" ? "selected" : ""}`}>$150/yr</p>
                            }
                        </div>
                    </div>
                </div>

                <div className={`choice-freq d-flex justify-content-around align-items-center p-2 ${lightMode ? "light" : ""}`}>
                    <h6 className={`h6-freq ${frequency === "monthly" ? "select" : ""}`} onClick={() => setFrequency("monthly")}>Monthly</h6>
                    <div className={`choice-btn d-flex align-items-center
                    ${frequency === "monthly" ? 'justify-content-left' : "justify-content-end" }
                    `}>

                    <div className={`choice-btn d-flex align-items-center ${frequency === "yearly" ? "yearly" : ""}`}>
                        <div className="slide-choice-btn"></div>
                        </div>
                    </div>

                    <h6 className={`h6-freq ${frequency === "monthly" ? "" : "select"}`} onClick={() => setFrequency("yearly")}>Yearly</h6>
                </div>

            </div>

            <div className="step2-part2">
                <div className="div-button d-flex justify-content-between">
                    <button className={`btn-prev ${lightMode ? "light" : ""}`} onClick={() => setStepSelected("step1")}>Go back</button>
                    <button className={`btn-bleu ${lightMode ? "light" : ""}`} onClick={() => setStepSelected("step3")}>Next step</button>
                </div>
            </div>


        </div>
        
    )
}