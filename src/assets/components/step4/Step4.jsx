import './step4.css'

export default function Step4({ setStepSelected, isChecked, plan, frequency, fullTotal }) {

    return (

                <div className="div-step1">

            <div className="step2-part1 d-flex flex-column gap-4">

                <div className="step-texts">
                    <h3>Finishing up</h3>
                    <p>Double-check everything looks OK before confirming.</p>
                </div>

                <div>
                    <div className="summary">
                    {/* Sélection de base */}
                        <div className="selection d-flex justify-content-between">
                            <div>
                                <h6 style={{textTransform: 'capitalize'}}>{plan}({frequency})</h6>
                                <p onClick={() => setStepSelected("step2")}>Change</p>
                            </div>
                            <div>
                                {/* Pour que ce soit plus dynamique c'aurait été mieux de créer un data json ou créer des objets afin d'associer à chaque type de plan une fréquence et un prix, mais ici je vais faire ça manuellement. */}
                                {plan === "arcade" &&
                                    (frequency === "monthly" ?
                                        <h6>$9</h6> : <h6>$90</h6>)
                                }
                                {plan === "advanced" &&
                                    (frequency === "monthly" ?
                                        <h6>$12</h6> : <h6>$120</h6>)
                                }
                                {plan === "pro" &&
                                    (frequency === "monthly" ?
                                        <h6>$15</h6> : <h6>$150</h6>)
                                }
                            </div>
                        </div>

                    {/* Add-ons */}
                        <div className="supp d-flex justify-content-between">
                            <div>
                                { isChecked.includes("online") &&
                                    <p>Online storage</p>
                                }
                                { isChecked.includes("larger") &&
                                    <p>Larger storage</p>
                                }
                                { isChecked.includes("custom") &&
                                    <p>Customizable profile</p>
                                }
                            </div>
                            <div>
                                { isChecked.includes("online") &&
                                    <p>$1</p>
                                }
                                { isChecked.includes("larger") &&
                                    <p>$2</p>
                                }
                                { isChecked.includes("custom") &&
                                    <p>$2</p>
                                }
                            </div>
                        </div>
                    </div>

                    {/* Montant total */}
                    <div className="total d-flex justify-content-between">
                        <p>Total per month</p>
                    {/* Faire attention à ne pas oublier les parenthèses pour déclencher la fonction qui va effectuer le calcul.  */}
                        <h5>{fullTotal()}</h5>
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