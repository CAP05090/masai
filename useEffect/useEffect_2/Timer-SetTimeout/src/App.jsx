import { useState } from 'react'
import Timer from './components/Timer.jsx'

function App() {
  const [showTimer, setShowTimer] = useState(true)
  return (
    <>
      <h1 style={{textAlign:"center", backgroundColor:"lightblue"}}>TIMER - II - SETTIMEOUT</h1>
      <div style={{ width:"60%", margin:"auto" }}>
        <button onClick={() => setShowTimer(!showTimer)}>
          {showTimer ? "Hide":"Show"} Timer
        </button>
        {showTimer && <Timer />}
      </div>
    </>
  )
}

export default App
