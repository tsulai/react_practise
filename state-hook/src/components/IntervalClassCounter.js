import React, { Component } from 'react';

class IntervalClassCounter extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0
        }
        
    }
    componentDidMount (){
        //react Class component မှာ kind of variable, propertyလို့ ေခါ်, this ထဲကို ထည့်လိုက်တာ 
        // functional component မှာတော့ const test = '', this. မပါ
        this.test = 'this is test property (kind of variable)'
        //console.log(this.test);
        this.interval = setInterval(this.tick, 1000)
    }
    componentWillUnmount(){
        clearInterval(this.interval)
    }
    tick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        );
    }
}

export default IntervalClassCounter;