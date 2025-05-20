import './step1.css'

export default function Step1({ setStepSelected, nom, setNom, email, setEmail, phone, setPhone }) {

    return(

        <div className="div-step1">

                <h3>Personal info</h3>
                <p>Please provide your name, phone number and email adress.</p>

                <form>
                    <label htmlFor="name">Your name is: {nom}</label><br/>
                    {/* on dit que lorsque l'on change la valeur de cet input, on change l'état de notre variable nom (car la valeur de cet input est le nom entré par l'utilisateur). On utilise un e.target pour bien sélectionner cet input. */}
                    <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} placeholder='Vingt-six' /><br/>
                    <label htmlFor="email">Your email is: {email}</label><br/>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="vingt-six@email.com" /><br/>
                    <label htmlFor="phone">Your phone number is: {phone}</label><br/>
                    <input type="tel" id="phone" value={phone} onChangeCapture={(e) => setPhone(e.target.value)} placeholder='e.g. +1 234 567 890' />
                </form>

                <div className="div-button">
                    <button onClick={() => setStepSelected("step2")}>Next step</button>
                </div>

        </div>
    )
}