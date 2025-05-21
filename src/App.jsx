import { use, useState } from 'react'
import './App.css'
import Sidebar from './assets/components/sidebar/Sidebar'
import Step1 from './assets/components/step1/Step1'
import Step2 from './assets/components/step2/Step2'
import Step3 from './assets/components/step3/Step3'
import Step4 from './assets/components/step4/Step4'
import Confirm from './assets/components/confirm/Confirm'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

function App() {

  const [stepSelected, setStepSelected] = useState("step1")
  const [nom, setNom] = useState()
  const [email, setEmail] = useState()
  const [phone, setPhone] = useState()
  const [frequency, setFrequency] = useState("monthly")
  const [plan, setPlan] = useState("arcade")
  // Array contenant les addons (attention à bien créer un array, car plusieurs addons peuvent être sélectionnés simultanément) :
  const [isChecked, setIsChecked] = useState([])
  const [lightMode, setLightMode] = useState(false)


  // // CALCUL DU TOTAL // //

  // Comme je n'ai pas créé un json ou d'objets pur chaque type de plan, il faut entrer manuellement les différents totaux possibles en fonction du choix de l'user.

  // Plan choisi :
  const totalPlan = () => {

  // On va calculer en fonction de la fréquence : "monthly" / "yearly" :
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

  // Maintenant il faut calculer les add-ons :
  const totalAddons = () => {

    let addonsTotal = 0;

    isChecked.forEach(addon => {
      // On met + ou - car le montant est retiré si le addon n'est plus dans la liste.
      if (addon === "online") addonsTotal += 1;
      if (addon === "larger") addonsTotal += 2;
      if (addon === "custom") addonsTotal += 2;
    })
    // Attention à ne pas oublier le return, sinon le montant ne s'enregistre pas !
    return addonsTotal;
  }

  // Et le total avec les 2 :

  const fullTotal = () => {
    const a = totalPlan()
    const b = totalAddons()
    return a + b
  }

  //// Pour calculer le montant total, j'ai donc créé trois fonctions const : la première pour enregistrer le plan choisi (en fonction des variables frequency et plan, en entrant manuellement les montants avec un switch case) ; la deuxième pour calculer les addons > un peu plus technique : comme les addons choisis sont contenus dans une liste/array, il faut utiliser des méthodes associées à des array. J'ai utilisé un forEach qui pour chaque addons se trouvant dans le array, va stocker son montant dans une variable let. Ensuite, on peut return le montant total des addons. 

  const handleLight = () => {
    if (!lightMode) {
      setLightMode(true)
      document.body.style.backgroundColor = "#3f35fe"
      console.log("light mode on")
    }

    if (lightMode) {
      setLightMode(false)
      document.body.style.backgroundColor = "hsl(217, 100%, 97%)"
      console.log("light mode off")
    }
  }

  return (
<>
        <div className="d-flex toggle-icon mb-2" onClick={handleLight}>
          {!lightMode &&
            <FontAwesomeIcon icon={faMoon} />
          }
          {lightMode &&
          <FontAwesomeIcon icon={faSun} className="faSun" />}
        </div>

        <div className={`div-all ${lightMode ? "light" : ""}`}>

          <div className="div-sidebar">
            <Sidebar stepSelected={stepSelected} lightMode={lightMode} setLightMode={setLightMode} />
          </div>

          <div className="div-content">
            {stepSelected === "step1" && 
              <Step1 setStepSelected={setStepSelected} nom={nom} setNom={setNom} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} lightMode={lightMode} />
            }
            {stepSelected === "step2" && 
              <Step2 setStepSelected={setStepSelected} frequency={frequency} setFrequency={setFrequency} plan={plan} setPlan={setPlan} lightMode={lightMode} />
            }

            {stepSelected === "step3" && 
              <Step3 setStepSelected={setStepSelected} isChecked={isChecked} setIsChecked={setIsChecked} lightMode={lightMode} />
            }

            {stepSelected === "step4" && 
              <Step4 setStepSelected={setStepSelected} isChecked={isChecked} plan={plan} frequency={frequency} fullTotal={fullTotal} lightMode={lightMode} nom={nom} />
            }

            {stepSelected === "confirm" && 
              <Confirm nom={nom} plan={plan} lightMode={lightMode} />
            }
          </div>

        </div>
</>
  )
}

export default App
