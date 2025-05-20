import './step2.css'


export default function Step2() {

    return(

        <div className="div-step1">

            <div className="step2-part1 d-flex flex-column gap-3">

                <div className="step-texts">
                    <h3>Select your plan</h3>
                    <p>You have the option of monthly or yearly billing.</p>
                </div>

                <div className="step2-cards d-flex gap-2">

                    <div className="stp-card d-flex flex-column justify-content-between">
                        <div className="img-card">
                            <img src="../../../../public/arcade.svg" alt="" />
                        </div>
                        <div className="infos-plan">
                            <h6 className="p-0 m-0">Arcade</h6>
                            <p>$9/mo</p>
                        </div>
                    </div>

                    <div className="stp-card d-flex flex-column justify-content-between">
                        <div className="img-card">
                            <img src="../../../../public/advenced.svg" alt="" />
                        </div>
                        <div className="infos-plan">
                            <h6 className="p-0 m-0">Advanced</h6>
                            <p>$9/mo</p>
                        </div>
                    </div>

                    <div className="stp-card d-flex flex-column justify-content-between">
                        <div className="img-card">
                            <img src="../../../../public/pro.svg" alt="" />
                        </div>
                        <div className="infos-plan">
                            <h6 className="p-0 m-0">Pro</h6>
                            <p>$9/mo</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className="step2-part2">

                <div className="div-button border d-flex justify-content-end">
                    <button onClick={() => setStepSelected("step3")}>Next step</button>
                </div>
            </div>


        </div>
        
    )
}