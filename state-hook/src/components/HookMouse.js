import React, {useState, useEffect} from 'react';

function HookMouse(props) {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePostion = (e) =>{
        console.log('Mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    //useEffect ကို သုံးပြီးလုပ်တဲ့ functionက return ပြန်လာတဲ့ func ဟာ component unmount မှာ လုပ်မယ့်အရာတွေ
    //whatever you return, its basically clean up function
    //can do clean up like timer, event listener ...
    useEffect(()=>{
        console.log('useEffect called')
        window.addEventListener('mousemove', logMousePostion)

        return () =>{
            console.log('Component Unmounting code');
            window.removeEventListener('mousemove', logMousePostion)
        }
    },[])
    //[] means this effect does not depend on any props or states
    //no reson to call on re-render
    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    );
}

export default HookMouse;