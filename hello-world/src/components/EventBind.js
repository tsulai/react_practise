import React, { Component } from 'react';

class EventBind extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: "Hello"
        }
         //// === 3. binded once in constructor   
        // this.clickHandler= this.clickHandler.bind(this)
        
    }
    //// === 1. for random function call
    //// === 2. for random function call, good for passing parameters
    // clickHandler(){
    //     this.setState({
    //         message : "Goodbye"
    //     })
    //     console.log(this)
    // }    

    //// === 4. Arrow function as class property 
    clickHandler = () => {
        this.setState({
            message : "Goodbye"
        }) 
    }

    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                {/* <button onClick={this.clickHandler.bind(this)}>Click for No.1 approach</button> 
                <button onClick={()=> this.clickHandler()}>Click for No.2 approach</button>*/}
                
                <button onClick={this.clickHandler}>Click for No.3 & 4</button>
            </div>
        );
    }
}

export default EventBind;