import React, {useState, useEffect} from 'react';

function IntervalHookCounter(props) {
    const [count, setCount] = useState(0)
    const tick = () => {
        setCount(prevCount => prevCount + 1)
    }
    useEffect(()=>{
        const interval = setInterval(tick,1000)
        return () => {
            clearInterval(interval)
        }
    },[])
    //[] means ignore watching for changes in count variable, totally no dependency at all
    // changes in state(count) variable come with differnt re render cycle
    //Here, yes it is true that interval execute only once in render, though, processing included in state value 
    //which is + 1 to count cannot do once, so it need to put in dependency list [count], watch the changes
    return (
        <div>
           {count}
        </div>
    );
}

export default IntervalHookCounter;