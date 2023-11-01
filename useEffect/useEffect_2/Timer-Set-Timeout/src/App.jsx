import { useState } from 'react'
import Timer from './Components/Timer.jsx'

function App() {
  const [showTimer, setShowTimer] = useState(true)
  return (
    <>
    <h1 style={{backgroundColor:"lightblue", textAlign:"center"}}>TIMER - II - SETTIMEOUT</h1>
    <div style={{marginLeft:"50px"}}>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide":"Show"} Timer
      </button>
      {showTimer && <Timer />}
    </div>
      
    </>
  )
}

export default App