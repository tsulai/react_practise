import React, {useState} from 'react';

function HookCounterTwo(props) {
    const initialCount = 0 
    //useState = [0, function(){}]
    const [count, setCount] = useState(initialCount)
    // button တစ်ခါနှိပ်ရင် loop ၅ခါ ပတ်
    const incrementFive = () =>{
        //// === this doesn't work - need to use preState
        //for(let i =0; i<5; i++){
            //setCount(count + 1)
        //}
        for(let i =0; i<5; i++){
            setCount(prevCount => prevCount + 1)
        }
    }
    return (
        <div>
            Count : {count}
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
            
        </div>
    );
}

export default HookCounterTwo;