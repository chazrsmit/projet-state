import './step2.css'


export default function Step2({ setStepSelected, frequency, setFrequency, plan, setPlan }) {

    return(

        <div className="div-step1">

            <div className="step2-part1 d-flex flex-column gap-3">

                <div className="step-texts">
                    <h3>Select your plan</h3>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>

                <div className="step2-cards d-flex gap-2">
                    <div id="arcade" className={`stp-card d-flex flex-column justify-content-between ${plan === "arcade" ? "selected" : ""} `} onClick={(e) => setPlan(e.currentTarget.id)}>
                        <div id="arcade" className="img-card">
                            <img src="../../../../public/arcade.svg" alt="" />
                        </div>
                        <div id="arcade" className="infos-plan">
                            <h6 className="h6-plan">Arcade</h6>
                            {frequency === "monthly" && 
                                <p>$9/mo</p>
                            }
                            {frequency === "yearly" && 
                                <p>$90/yr</p>
                            }
                        </div>
                    </div>

                    <div id="advanced" className={`stp-card d-flex flex-column justify-content-between ${plan === "advanced" ? "selected" : ""} `} onClick={(e) => setPlan(e.currentTarget.id)}>
                        <div id="advanced" className="img-card">
                            <img src="../../../../public/advenced.svg" alt="" />
                        </div>
                        <div id="advanced" className="infos-plan">
                            <h6 className="h6-plan">Advanced</h6>
                            {frequency === "monthly" && 
                                <p>$12/mo</p>
                            }
                            {frequency === "yearly" && 
                                <p>$120/yr</p>
                            }
                        </div>
                    </div>

                    <div id="pro" className={`stp-card d-flex flex-column justify-content-between ${plan === "pro" ? "selected" : ""} `} onClick={(e) => setPlan(e.currentTarget.id)}>
                        <div id="pro" className="img-card">
                            <img src="../../../../public/pro.svg" alt="" />
                        </div>
                        <div id="pro" className="infos-plan">
                            <h6 className="h6-plan">Pro</h6>
                            {frequency === "monthly" && 
                                <p>$15/mo</p>
                            }
                            {frequency === "yearly" && 
                                <p>$150/yr</p>
                            }
                        </div>
                    </div>
                </div>

                <div className="choice-freq d-flex justify-content-around align-items-center p-2">
                    <h6 className="h6-freq" onClick={() => setFrequency("monthly")}>Monthly</h6>
                    <div className={`choice-btn d-flex align-items-center
                    ${frequency === "monthly" ? 'justify-content-left' : "justify-content-end" }
                    `}>
                        <div className="slide-choice-btn"></div>
                    </div>
                    <h6 className="h6-freq" onClick={() => setFrequency("yearly")}>Yearly</h6>


                </div>

            </div>

            <div className="step2-part2">
                <div className="div-button border d-flex justify-content-between">
                    <button onClick={() => setStepSelected("step1")}>Previous</button>
                    <button onClick={() => setStepSelected("step3")}>Next step</button>
                </div>
            </div>


        </div>
        
    )
}