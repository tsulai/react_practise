import React,{useEffect, useRef} from 'react';

function FocusInput(props) {
// 1. import useRef
// 2. create ref variable by calling useRef and passing  initial value
const inputRef = useRef(null)

useEffect(() =>{
//4. focus the input element
inputRef.current.focus()
},[])

    return (
        <div>
           {/* 3. attach to input element */}
           <input ref={inputRef} type="text" /> 
        </div>
    );
}

export default FocusInput;