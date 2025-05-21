import './confirm.css'

export default function Confirm({ nom, plan }) {

    return (

        <div className="div-step1 confirmation justify-content-center align-items-center gap-4">

            <img src="../../../../public/thankyou.svg" alt="" />
            <div className="d-flex flex-column align-items-center justify-content-center">
                <h2>Thank you !</h2>
                <p className="text-center">Thank you {nom} for confirming your subscription to our <span>{plan} plan</span> ! We hope you have fun using our platform. If you ever need support, please feel free to email us at <span>support@email.com</span>.</p>
            </div>

        </div>
    )
}