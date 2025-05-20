import './step4.css'

export default function Step4({ setStepSelected, isChecked, plan, frequency }) {

    return (

                <div className="div-step1">

            <div className="step2-part1 d-flex flex-column gap-4">

                <div className="step-texts">
                    <h3>Finishing up</h3>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>

                <div>
                    <div className="summary">
                        <div className="selection">
                            <h6 style={{textTransform: 'capitalize'}}>{plan}({frequency})</h6>
                        </div>
                        {isChecked &&
                            (isChecked === "online" &&
                                (
                                    <p></p>
                                )
                            )
                            (isChecked === "larger" &&
                                (
                                    <p></p>
                                )
                            )
                            (isChecked === "custom" &&
                                (
                                    <p></p>
                                )
                            )
                        }
                    </div>
                    <div>

                    </div>
                </div>

            </div>

            <div className="step2-part2">
                <div className="div-button border d-flex justify-content-between">
                    <button onClick={() => setStepSelected("step3")}>Previous</button>
                    <button onClick={() => setStepSelected("confirm")}>Confirm</button>
                </div>
            </div>

        </div>

    )
}