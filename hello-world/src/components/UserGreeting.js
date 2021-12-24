import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
          isLoggedIn : true  
        }
        
    }
    
    render() {
        ///// === short circuit operator / for one evaluation
        return this.state.isLoggedIn && <div>Welcome Vishwa</div>
        /// === Ternary conditional Operator
        return (
            this.state.isLoggedIn ?
            <div>Welcome Vishwa</div> :
            <div>Welcome Guest</div>
        )
        // === element variable
        let message        
        if(this.state.isLoggedIn){
            message = <div>Welcome Vishwa</div>
        }else{
            message = <div>Welcome Guest</div>
        }
        return <div>{message}</div>
        /// === if/else
        if(this.state.isLoggedIn){
            return <div>Welcome Vishwa</div>  
        }else{
            return <div>Welcome Guest</div> 
        }
        
    }
}

export default UserGreeting;