import './confirm.css'

export default function Confirm({ nom, plan, lightMode }) {

    return (

        <div className="div-step1 confirmation justify-content-center align-items-center gap-4">

            <img src="../../../../public/thankyou.svg" alt="" />
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h2 className={` ${lightMode ? "light" : ""}`}>Thank you !</h2>
                <p className={`text-center ${lightMode ? "light" : ""}`}>Thank you {nom} for confirming your subscription to our <span className={`${lightMode ? "light" : ""}`}>{plan} plan</span> ! We hope you have fun using our platform. If you ever need support, please feel free to email us at <span className={`${lightMode ? "light" : ""}`}>support@email.com</span>.</p>
            </div>

        </div>
    )
}