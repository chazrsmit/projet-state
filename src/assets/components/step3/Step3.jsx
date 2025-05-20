import './step3.css'

export default function Step3({ setStepSelected }) {


    return (

        <div className="div-step1">

            <div className="step2-part1 d-flex flex-column gap-4">

                <div className="step-texts">
                    <h3>Pick add-ons</h3>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="addons-choice d-flex flex-column gap-2">

                    <div className="addon d-flex justify-content-between p-2 rounded-2 flex-grow-1 px-3">
                        <div className="d-flex gap-3">
                            <input type="checkbox" id="online" name="online" />
                            <div>
                                <h6>Online services</h6>
                                <p>Access to multiplayer games</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h6>+$10/yr</h6>
                        </div>
                    </div>

                    <div className="addon d-flex justify-content-between p-2 rounded-2 flex-grow-1 px-3">
                        <div className="d-flex gap-3">
                            <input type="checkbox" id="online" name="online" />
                            <div>
                                <h6>Larger storage  </h6>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h6>+$20/yr</h6>
                        </div>
                    </div>

                    <div className="addon d-flex justify-content-between p-2 rounded-2 flex-grow-1 px-3">
                        <div className="d-flex gap-3">
                            <input type="checkbox" id="online" name="online" />
                            <div>
                                <h6>Customizable profile</h6>
                                <p>Custom theme on your profile</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h6>+$20/yr</h6>
                        </div>
                    </div>

                </div>

            </div>

            <div className="step2-part2">
                <div className="div-button border d-flex justify-content-between">
                    <button onClick={() => setStepSelected("step2")}>Previous</button>
                    <button onClick={() => setStepSelected("step4")}>Next step</button>
                </div>
            </div>

        </div>

    )
}