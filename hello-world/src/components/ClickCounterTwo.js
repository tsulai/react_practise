import React, { Component } from 'react';

class ClickCounterTwo extends Component {      
    render() {
        const {count, incrementCount} = this.props
        return (
            <button onClick={this.incrementCount}>Clicked {count} times</button>
        );
    }
}

export default ClickCounterTwo;