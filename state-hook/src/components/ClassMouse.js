import React, { Component } from 'react';

class ClassMouse extends Component {
    constructor(props) {
        super(props);
        this.state={
            x: 0,
            y:0
        
        }
    }
    logMousePosition = (e) =>{
        this.setState({x: e.clientX, y: e.clientY})
    }
    //comp mount လုပ်ချိန်မှာ event ထည့်မယ်
    componentDidMount (){
        window.addEventListener('mousemove', this.logMousePosition)
    }
    //comp un mount လုပ်ချိန်မှာ event ဖြုတ်မယ်။ UI မှာ comp ဖြုတ်လိုက်ရုံနဲ့ event listener က မပြုတ် ဒါကြောင့် unmount မှာ ပြန်ဖြုတ်ပေးရတယ်
    componentWillUnmount(){
        window.removeEventListener('mousemove',this.logMousePosition)
    }
    
    render() {
        return (
            <div>
                X - {this.state.x} Y - {this.state.y}
            </div>
        );
    }
}

export default ClassMouse;