import { useEffect, useRef, useState } from "react";

type TimerArgs = {
    miliseconds:number
}

export const Timer = ({miliseconds}:TimerArgs) => {

    const [seconds, setSeconds] = useState(0)

    //console.log(miliseconds);
    const ref = useRef<NodeJS.Timeout>();
    
    useEffect(() =>{
        ref.current && clearInterval(ref.current)
        ref.current = setInterval(()=> setSeconds(s=> s + 1), miliseconds);
    },[miliseconds])
        

    return (
        <>
             <button 
            onClick={() => setSeconds(0)}
            className="btn btn-outline-danger mt-m2">
                Reset
            </button>

            <h4>Timer: <small>{seconds}</small></h4>
        </>
    )
}
