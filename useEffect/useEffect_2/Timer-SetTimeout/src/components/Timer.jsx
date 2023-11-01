import {useEffect, useState} from "react"

function Timer(){ 
    const [count, setCount] = useState(4);

    useEffect(()=>{
        const intervalId = setTimeout(() => {
        setCount(prevCount => {
            console.log("Call Interval")
            if (prevCount === 0){
                cleanup()
                return 0
            } else{
                return (prevCount -1 )
            }
        })
        }, 1000)
        const cleanup = () => {
        console.log("Stop Interval")
        clearInterval(intervalId)
        }
        return cleanup
    }, [count])
    return(
        <h1> Count: {count}</h1>
    )
}

export default Timer;
