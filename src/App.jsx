import { use, useState } from 'react'
import './App.css'
import Sidebar from './assets/components/sidebar/Sidebar'
import Step1 from './assets/components/step1/Step1'
import Step2 from './assets/components/step2/Step2'

function App() {

  const [stepSelected, setStepSelected] = useState("step1")
  const [nom, setNom] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [frequency, setFrequency] = useState("monthly")

  return (

        <div className="div-all">

          <div className="div-sidebar">
            <Sidebar stepSelected={stepSelected} />
          </div>

          <div className="div-content">

            {stepSelected === "step1" && 
              <Step1 setStepSelected={setStepSelected} nom={nom} setNom={setNom} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
            }
            {stepSelected === "step2" && 
              <Step2 setStepSelected={setStepSelected} nom={nom} setNom={setNom} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} frequency={frequency} setFrequency={setFrequency} />
            }

          </div>

        </div>

  )
}

export default App
