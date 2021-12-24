import React from 'react';
import useCounter from './useCounter';
// no more useState import
function CounterTwo(props) {
    const [count, increment, decrement, reset] = useCounter(10, 10)
    return (
        <div>
            <h2>Count = {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    );
}

export default CounterTwo;