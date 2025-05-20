import { use, useState } from 'react'
import './App.css'
import Sidebar from './assets/components/sidebar/Sidebar'
import Step1 from './assets/components/step1/Step1'


function App() {

  const [stepSelected, setStepSelected] = useState("step1")
  const [nom, setNom] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()

  return (



        <div className="div-all">

          <div className="div-sidebar">
            <Sidebar stepSelected={stepSelected} />
          </div>

          <div className="div-content">
            <Step1 setStepSelected={setStepSelected} nom={nom} setNom={setNom} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} />
          </div>

        </div>



  )
}

export default App
