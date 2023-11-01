import { useState } from 'react'
import Timer from './components/Timer.jsx'

function App() {
  const [showTimer, setShowTimer] = useState(true)
  return (
    <>
      <p>Main App Component</p>
      <button onClick={() => setShowTimer(!showTimer)}>
        {showTimer ? "Hide":"Show"} Timer
      </button>
      {showTimer && <Timer />}
    </>
  )
}

export default App