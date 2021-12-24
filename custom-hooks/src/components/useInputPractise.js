import {useState} from 'react';

function useInputPractise(initialValue) {
    const [name, setName] = useState(initialValue)
    const reset = () =>{
        setName(initialValue)
    }

    const bind = {
        value: name,
        onChange: e => setName(e.target.value)
    }

    return [name, bind, reset]
    
}

export default useInputPractise;