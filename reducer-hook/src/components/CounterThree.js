import React, {useReducer} from 'react';
//Reducer func:  တစ်ခုတည်းကိုပဲ useReducer ၂ခုခွဲပြီး separate portion အနေနဲ့ခေါ်တာ
const initialState = 0
const reducer = (state, action) => {//action is instruction to the reducer function - based on the reducer func: perform necessary state transition
    switch(action){
        case 'increment': 
            return state + 1
        case 'decrement': 
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
    //return newState
}

function CounterThree(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={()=> dispatch('decrement')}>Decrement</button>
            <button onClick={()=> dispatch('reset')}>Reset</button>
            <div>
                <div>Count Two - {countTwo}</div>
                <button onClick={()=> dispatchTwo('increment')}>Increment</button>
                <button onClick={()=> dispatchTwo('decrement')}>Decrement</button>
                <button onClick={()=> dispatchTwo('reset')}>Reset</button>
            </div>
        </div>
    );
}

export default CounterThree;