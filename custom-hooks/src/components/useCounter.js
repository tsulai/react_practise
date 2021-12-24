import {useState} from 'react';
//no React import required as no jsx render
function useCounter(initialCount = 0, value) {
    // state ပါ ပါတယ်။
    const [count, setCount] = useState(initialCount)

    const increment = () => {
        setCount(prevCount => prevCount + value)
    }
    const decrement = () => {
        setCount(prevCount => prevCount - value)
    }
    const reset = () => {
        setCount(initialCount)
    }
    return [count, increment, decrement, reset]
}

export default useCounter;