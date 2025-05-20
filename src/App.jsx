import { use, useState } from 'react'
import './App.css'
import Sidebar from './assets/components/sidebar/Sidebar'
import Step1 from './assets/components/step1/Step1'
import Step2 from './assets/components/step2/Step2'
import Step3 from './assets/components/step3/Step3'
import Step4 from './assets/components/step4/Step4'

function App() {

  const [stepSelected, setStepSelected] = useState("step1")
  const [nom, setNom] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [frequency, setFrequency] = useState("monthly")
  const [plan, setPlan] = useState("arcade")
  const [isChecked, setIsChecked] = useState([])
  const [montant, setMontant] = useState(0)

  // Comme je n'ai pas créé un json ou d'objets pur chaque type de plan, il faut entrer manuellement les différents totaux possibles en fonction du choix de l'user.
  // Plan choisi
  const totalPlan = () => {
  if (frequency === "monthly") {
    switch (plan) {
      case "arcade": return 9;
      case "advanced": return 12;
      case "pro": return 15;
      default: return 0;
      }
    }
  if (frequency === "yearly") {
    switch (plan) {
      case "arcade": return 90;
      case "advanced": return 120;
      case "pro": return 150;
      default: return 0;
      }
    }
  }

  // Maintenant il faut calculer les add-ons.
  const totalAddons = () => {

    let addonsTotal = 0;

    isChecked.forEach(addon => {
        if (frequency === "monthly") {
          if (addon === "online") addonsTotal += 1;
          if (addon === "larger") addonsTotal += 2;
          if (addon === "custom") addonsTotal += 2;
        }
      })
    return addonsTotal;
  }

  // Et le total avec les 2 :

  const fullTotal = () => {
    const a = totalPlan()
    const b = totalAddons()
    return a + b
  }




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
              <Step2 setStepSelected={setStepSelected} frequency={frequency} setFrequency={setFrequency} plan={plan} setPlan={setPlan} />
            }

            {stepSelected === "step3" && 
              <Step3 setStepSelected={setStepSelected} isChecked={isChecked} setIsChecked={setIsChecked} />
            }

            {stepSelected === "step4" && 
              <Step4 setStepSelected={setStepSelected} isChecked={isChecked} plan={plan} frequency={frequency} fullTotal={fullTotal} />
            }
          </div>

        </div>

  )
}

export default App
