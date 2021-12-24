import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        //// === Approach 1 - React.createRef
        this.inputRef = React.createRef()
        ///// === Approach 2 - Callback Ref
        ///// 1. create ref
        this.cbRef = null
        //// 2. method that assign the dom element to the Ref
        //// - this is method to call from DOM node like handler
        this.setCbRef = (element) => {
            this.cbRef = element
        } 
    }
    componentDidMount(){
        //// === Approach 1 - React.createRef - use current to access the element
        //this.inputRef.current.focus()
        ///// === Approach 2 - Callback Ref - no need current - direact access to element
        if (this.cbRef){
            this.cbRef.focus()
        }
        console.log(this.cbRef)
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} /> 
                <input type="text" ref={this.setCbRef} /> 
                <button onClick={this.clickHandler}>Click</button> 
            </div>
        );
    }
}

export default RefsDemo;