import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        
        this.state ={
            count: 0
        }
    }
    
    increment(){
        //// === ဒီလို assign လုပ်လို့မရ = this.state.count = this.state.count + 1
        // this.setState ({
        //     count: this.state.count + 1
        // }, () => {
        //     console.log('Call back value ' ,this.state.count)
        // })
        //// == state update မလုပ်ရသေးတဲ့ value ပဲရမှာ = call back ထဲမှာမှ updated value ရတယ်

        //// === Same func:ကိုပဲ ၂ခါ ခေါ်ရင် Function call တွေကြားမှာ အရင် value ကို သယ်မသွားဘူး၊ value က single state က value ပဲဖြစ်နေမယ်၊ 
        //// === update မဖြစ်ဘူးလို့ထင်ရတယ်၊ that’s how react work.
				//// === အရင် func: က processed လုပ်ပြီးသား value လိုချင်ရင် setState ထဲကို state value ကို obj အနေနဲ့ မ pass ပဲနဲ့ func; argument အနေနဲ့ pass

				this.setState((prevState, props)=>({
					count: prevState.count + 1
				}))
        console.log(this.state.count)
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return (
            <div>
                <div>Count - {this.state.count}</div>
                <button onClick={()=> this.incrementFive()}>Increment</button>
            </div>
        );
    }
}

export default Counter;