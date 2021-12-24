import React, {useReducer} from 'react';

const initialState = {
    firstCounter : 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type){
        case 'increment': //merge with the state object to get new object set
            return {...state, firstCounter: state.firstCounter + action.value}
        case 'decrement': 
            return {...state,firstCounter: state.firstCounter - action.value}
        case 'increment2': 
            return {...state,secondCounter: state.secondCounter + action.value}
        case 'decrement2': 
            return {...state,secondCounter: state.secondCounter - action.value}
        case 'reset':
            return initialState
        default:
            return state
    } 
    //return newState
}

function CounterTwo(props) {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>First Counter - {count.firstCounter}</div>
            <div>Second Counter - {count.secondCounter}</div>
            <button onClick={()=> dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'increment', value: 5})}>Increment 5</button>
            <button onClick={()=> dispatch({type: 'decrement', value: 5})}>Decrement 5</button>
            <div>
                <button onClick={()=> dispatch({type: 'increment2', value: 1})}>Second Counter Increment</button>
                <button onClick={()=> dispatch({type: 'decrement2', value: 1})}>Second Counter Decrement</button>
            </div>
            <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
        </div>
    );
}

export default CounterTwo;