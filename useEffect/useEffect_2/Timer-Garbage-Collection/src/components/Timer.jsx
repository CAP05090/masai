import {useEffect, useState} from "react"

function Timer(){ 
  const [count, setCount] = useState(10);


  useEffect(()=>{
    const intervalId = setInterval(() => {
      setCount(prevCount => {
        console.log("interval is called")
        if (prevCount === 1){
            cleanup()
            return 0
        } else{
            return (prevCount -1 )
        }
      })
    }, 1000)
    const cleanup = () => {
      console.log("Interval Stoped")
      clearInterval(intervalId)
    }
    return cleanup
  }, [])
  return(
    <h1> Count: {count}</h1>
  )
}

export default Timer;
