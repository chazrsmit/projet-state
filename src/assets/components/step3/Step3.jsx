import './step3.css'

export default function Step3({ setStepSelected, isChecked, setIsChecked }) {

    // const handleCheck = (e) => {
    //     setIsChecked(e.target.checked)

    // }

    return (

        <div className="div-step1">

            <div className="step2-part1 d-flex flex-column gap-4">

                <div className="step-texts">
                    <h3>Pick add-ons</h3>
                    <p>Add-ons help enhance your gaming experience.</p>
                </div>
                <div className="addons-choice d-flex flex-column gap-2">

                    <div className={`addon d-flex justify-content-between p-2 rounded-2 flex-grow-1 px-3 ${isChecked.includes("online") ? "selected" : ""}`}>
                        <div className="d-flex gap-3">
                            <input type="checkbox" id="online" name="online"
                            // ne pas oublier d'updater l'attribuer "checked" (on vérifie que son id se trouve bien dans l'array contenant les addons):
                            checked={isChecked.includes("online")}
                            onChange={(e) => {
                            // On sélectionne les attributs 'id' et 'checked' du e.target 
                                const id = e.target.id;
                                const checked = e.target.checked;
                                if (checked) {
                            // Si l'élément est checked, alors on va ajouter son id à la liste déjà existante isChecked (...isChecked crée une copie de la liste existante) 
                                setIsChecked([...isChecked, id]);
                                } else {
                            // Si l'élement est unchecked, on va utiliser la méthode filter (qui ne marche qu'avec des array) pour retirer tout item qui a le même id que l'élément unchecked (= on ne veut dans la lste que des items qui ont un id différent de l'élément unchecked)
                                setIsChecked(isChecked.filter(item => item !== id));
                                }
                                }}
                            />
                            <div>
                                <h6>Online services</h6>
                                <p>Access to multiplayer games</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h6 className="addon-price">+$1/yr</h6>
                        </div>
                    </div>

                    <div className={`addon d-flex justify-content-between p-2 rounded-2 flex-grow-1 px-3 ${isChecked.includes("larger") ? "selected" : ""}`}>
                        <div className="d-flex gap-3">
                            <input type="checkbox" id="larger" name="larger"
                            checked={isChecked.includes("larger")}
                            onChange={(e) => {
                            // Manière plus clean d'écrire la sélection de l'id et du checked 
                            const { id, checked } = e.target;
                            if (checked) {
                            setIsChecked([...isChecked, id]);
                            } else {
                            setIsChecked(isChecked.filter(item => item !== id));
                            }
                            }}
                            />
                            <div>
                                <h6>Larger storage  </h6>
                                <p>Extra 1TB of cloud save</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h6 className="addon-price">+$2/yr</h6>
                        </div>
                    </div>

                    <div className={`addon d-flex justify-content-between p-2 rounded-2 flex-grow-1 px-3 ${isChecked.includes("custom") ? "selected" : ""}`}>
                        <div className="d-flex gap-3">
                            <input type="checkbox" id="custom" name="custom"
                            checked={isChecked.includes("custom")}
                            onChange={(e) => {
                            const { id, checked } = e.target;
                            if (checked) {
                            setIsChecked([...isChecked, id]);
                            } else {
                            setIsChecked(isChecked.filter(item => item !== id));
                            }
                            }}
                            />
                            <div>
                                <h6>Customizable profile</h6>
                                <p>Custom theme on your profile</p>
                            </div>
                        </div>
                        <div className='d-flex align-items-center'>
                            <h6 className="addon-price">+$2/yr</h6>
                        </div>
                    </div>

                </div>

            </div>

            <div className="step2-part2">
                <div className="div-button d-flex justify-content-between">
                    <button className="btn-prev" onClick={() => setStepSelected("step2")}>Previous</button>
                    <button className="btn-bleu" onClick={() => setStepSelected("step4")}>Next step</button>
                </div>
            </div>

        </div>

    )
}