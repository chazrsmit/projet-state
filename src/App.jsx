import { useState } from 'react'
import './App.css'
import Sidebar from './assets/components/sidebar/Sidebar'

function App() {

  const [stepClicked, setStepClicked] = useState("Step 1")

  return (



        <div className="div-all">

          <div className="div-sidebar">
            <Sidebar />
          </div>

          <div className="div-content">

          </div>

        </div>



  )
}

export default App
