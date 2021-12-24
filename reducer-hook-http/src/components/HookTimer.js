import React,{useState, useEffect, useRef} from 'react';
//=== See How ClassTimer.js work
function HookTimer(props) {
    const [timer,setTimer] = useState(0)
    //1. import useRef
    //2. const varible as useRef() assign
    const intervalRef = useRef()
    useEffect(()=>{
        //3. use useRef value - with .current
        intervalRef.current = setInterval(()=>{
            setTimer(prevTimer => prevTimer + 1)
        },1000)
        return () => {
             //3. use useRef value - with .current
            clearInterval(intervalRef.current)
        }
    },[])
    return (
        <div>
            Hook Timer - {timer}
            {/* //3. use useRef value - with .current */}
            <button onClick={()=> clearInterval(intervalRef.current)}>Clear Hook Timer</button>
        </div>
    );
}

export default HookTimer;