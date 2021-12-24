import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state ={
            count: 0
        }
    }
    incrementCount = () => {
        this.setState( prevState => ({
            count: prevState.count + 1
        }))
    }    
    render() {
        //Counter element said - 
        //take the state count value and incrementCount method & render whatever you want to
        return (
            <div>
                {this.props.children(this.state.count, this.incrementCount)}
            </div>
        );
    }
}

export default Counter;