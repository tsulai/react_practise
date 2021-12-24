import React, { Component } from 'react';
import FRInput from './FRInput';

class FRParentInput extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef()
    }
    //ယူသုံးတဲ့ component က component က foward Ref type မို့ parent က input ရဲ့ current ကို direct access လုပ်ခွင့်ရ 
    // ရိုးရိုး Input.js ဆို ရင် သူ့ component မှာပဲ current ကို access လုပ်နိုင်လို့ ယူသုံးမယ့် compo ခေါ်ဖို့အတွက် focus feature function ထုတ်ထားပေးရတယ်
    // ယူသုံးတဲ့ component က ခေါ်သုံးလို့ရအောင် - focusInput() ဆိုပြီး
    //this.componentRef.current.focusInput()
    clickHandler = () =>{
        this.inputRef.current.focus()
    }
    render() {
        return (
            <div>
                <FRInput ref={this.inputRef}/>
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default FRParentInput;