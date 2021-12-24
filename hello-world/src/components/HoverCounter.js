import React, { Component } from 'react';
import withCounter from './withCounter'
// hoc ခေါ်သုံး
class HoverCounter extends Component {  
     
    render() {
        // 2. ပါလာတဲ့ props တွေကို ပြန်bind
        const {count , incrementCount} = this.props 
        return (
            <div>
                <h2 onMouseOver={incrementCount}> Hovered {count} times</h2>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 5);
// 1. Updatedcomponent ခေါ်လိုက်တော့ ဟိုဘက်က props တွေပါလာရော