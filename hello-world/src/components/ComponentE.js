import React, { Component } from 'react';
import ComponentF from './ComponentF';
import User from './User';
import UserContext from './userContext';

class ComponentE extends Component {
    // static က class ရဲ့ method ပဲ - 
    //ဒီ classအတွင်း ဒီmethodကို ခေါ်သုံးလို့ရတယ်၊ but classရဲ့  instance တွေကတော့ static ကိုခေါ်သုံးလို့မရဘူး
    static contextType = UserContext
    render() {
        return (
            <div>
                Component E context {this.context}
                <ComponentF />
            </div>
        );
    }
}

//ComponentE.contextType = UserContext

export default ComponentE;