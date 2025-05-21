import './sidebar.css';


export default function Sidebar({ stepSelected, lightMode, setLightMode }) {


    return(

        <>

            <div className="d-flex gap-3">
                <div className="div-number">
                    <div className={`wrap-number ${stepSelected === "step1" ? "selected" : ""}`}>
                        <p className="pa-1">1</p>
                    </div>
                </div>
                <div className="div-name-step d-flex flex-column">
                    <p className="pa-2 m-0 p-0">STEP 1</p>
                    <p className="pa-3 m-0 p-0 ">YOUR INFO</p>
                </div>
            </div>

            <div className="div-step d-flex gap-3">
                <div className="div-number">
                    <div className={`wrap-number ${stepSelected === "step2" ? "selected" : ""}`}>
                        <p className="pa-1">2</p>
                    </div>
                </div>
                <div className="div-name-step d-flex flex-column">
                    <p className="pa-2 m-0 p-0">STEP 2</p>
                    <p className="pa-3 m-0 p-0 ">SELECT PLAN</p>
                </div>
            </div>

            <div className="div-step d-flex gap-3">
                <div className="div-number">
                    <div className={`wrap-number ${stepSelected === "step3" ? "selected" : ""}`}>
                        <p className="pa-1">3</p>
                    </div>
                </div>
                <div className="div-name-step d-flex flex-column">
                    <p className="pa-2 m-0 p-0">STEP 3</p>
                    <p className="pa-3 m-0 p-0 ">ADD-ONS</p>
                </div>
            </div>

            <div className="div-step d-flex gap-3">
                <div className="div-number">
                    <div className={`wrap-number ${stepSelected === "step4" ? "selected" : ""}`}>
                        <p className="pa-1">4</p>
                    </div>
                </div>
                <div className="div-name-step d-flex flex-column">
                    <p className="pa-2 m-0 p-0">STEP 4</p>
                    <p className="pa-3 m-0 p-0 ">SUMMARY</p>
                </div>
            </div>

        </>
    )
}