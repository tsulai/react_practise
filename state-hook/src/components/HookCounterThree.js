import React,{useState} from 'react';

function HookCounterThree(props) {
    const [name, setName] = useState({firstName: '', lastName: ''})
    return (
        <form>
            {/* useState does not automatically merged and update the Object */}
            <input type="text" 
            value={name.firstName}
            onChange={(e)=>setName({...name, firstName : e.target.value})}
            />
            <input type="text" 
            value={name.lastName}
            onChange={(e)=>setName({...name,lastName: e.target.value})}
            />

            <h2>Your first name is {name.firstName}</h2>
            <h2>Your last name is {name.lastName}</h2>
            <h2>{JSON.stringify(name)}</h2>
        </form>
    );
}

export default HookCounterThree;