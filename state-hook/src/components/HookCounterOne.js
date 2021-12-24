import React, {useState, useEffect} from 'react';

function HookCounterOne(props) {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    // useEffect act every time component render
    useEffect(()=>{
        console.log('useEffect - updating document title')
        document.title = `You clicked ${count} times`
    },[count])
    //,[count] - is the second parameter, array of value that useEffect depend on
    // if this value don't change between render, the effect simply don't run

    return (
        <div>
            <input type='text'
            value= {name}
            onChange={(e) => setName(e.target.value)}
            />
            <button onClick={()=> setCount(prevCount => prevCount + 1)}>Click {count} times</button>
        </div>
    );
}

export default HookCounterOne;