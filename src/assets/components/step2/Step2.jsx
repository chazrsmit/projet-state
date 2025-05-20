import './step2.css'


export default function Step2() {

    return(

        <div className="div-step1">

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
                            <img src="../../../../public/arcade.svg" alt="" />
                        </div>
                        <div className="infos-plan">
                            <h6 className="p-0 m-0">Arcade</h6>
                            <p>$9/mo</p>
                        </div>
                    </div>

                    <div className="stp-card d-flex flex-column justify-content-between">
                        <div className="img-card">
                            <img src="../../../../public/arcade.svg" alt="" />
                        </div>
                        <div className="infos-plan">
                            <h6 className="p-0 m-0">Arcade</h6>
                            <p>$9/mo</p>
                        </div>
                    </div>

                </div>

        </div>
        
    )
}