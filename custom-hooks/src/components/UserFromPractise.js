import React, {useState} from 'react';
import useInputPractise from './useInputPractise';

function UserFromPractise(props) {
    const [firstname, bindFirstName, resetFirstName] = useInputPractise('')
    const [lastname, bindLastName, resetLastName] = useInputPractise('')
    
    const handlerSubmit = (e) =>{
        e.preventDefault()
        alert(`Hello ${firstname} ${lastname}`)
        resetLastName()
        resetFirstName()
    } 
    return (
        <div>
            <form onSubmit={handlerSubmit}>
                <div>
                    <label>First Name : </label>
                    <input type="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name : </label>
                    <input type="text" {...bindLastName} />
                </div>
                <button type='submit'>Submit</button>
            </form>
            
        </div>
    );
}

export default UserFromPractise;