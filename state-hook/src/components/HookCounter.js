import React,{useState} from 'react';

function HookCounter(props) {
    //useState - method capable of state properties
    //One useState accept initial value of the variable, return a pair of values
    //array destructring
    const [count, setCount] = useState(0)

    const clickHandler = () => {
        //this.setState({
           // count: this.state.count + 1
        //})
        setCount(count + 1)
    }

    return (
        <div>
            <button onClick={clickHandler}>Count {count}</button>
        </div>
    );
}

export default HookCounter;