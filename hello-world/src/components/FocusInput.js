import React, { Component } from 'react';
import Input from './Input';

class FocusInput extends Component {
    constructor(props) {
        super(props);
        //// 2. this. ရဲ့ ref variable ထဲကို React ရဲ့ assign လုပ် go to 3.
        this.componentRef = React.createRef()
    }
    clickHandler = () =>{
        //// 3. ဒီ page ရဲ့  input obj က this.componentRef ဖြစ်သွားတော့
        //// ယူသုံးတဲ့ <Input> component ကရှိတဲ့ focusInput() ကို ခေါ်ထားတာ
        this.componentRef.current.focusInput()
    }
    
    render() {
        return (
            <div>
                {/* 1. ref ထဲကို this ref variable ထည့် go to 2. */}
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>

            </div>
        );
    }
}

export default FocusInput;